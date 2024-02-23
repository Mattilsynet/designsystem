<script lang="ts">
  import { getContext, onMount, setContext } from 'svelte'
  import type { Options } from 'ol/style/Icon'
  import type { MTClusterOptions, MTMarker } from '$lib/ts'
  import { createClusterLayer, createMarkerLayer } from './layer-utils'
  import { LAYERS_CONTEXT, MAP_CONTEXT, MARKERS_CONTEXT } from './contexts'

  export let markers: Array<MTMarker> = []
  export let markerOptions: Options | undefined
  export let clusterOptions: MTClusterOptions | undefined

  let { getMap } = getContext(MAP_CONTEXT)
  let map = getMap()
  // let { getLayers } = getContext(LAYERS_CONTEXT)
  // let layers = getLayers()

  let markerElement
  let marker
  $: {
    // console.log('marker layers', layers)
  }

  onMount(() => {
    console.log('marker', map)
    if (map) {
      if (clusterOptions) {
        const layer = createClusterLayer(markers, clusterOptions, markerOptions)
        marker = layer
        map.addLayer(layer)
      } else {
        const markerLayer = createMarkerLayer(markers, markerOptions)
        marker = markerLayer
        map.addLayer(markerLayer)
      }
    }
  })

  setContext(MARKERS_CONTEXT, {
    getMarkers: () => marker
  })
</script>

{#if marker}
  <!--  <div bind:this={markerElement}>-->
  <slot />
  <!--  </div>-->
{/if}
