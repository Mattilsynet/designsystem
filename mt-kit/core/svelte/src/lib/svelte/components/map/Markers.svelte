<script lang="ts">
  import { getContext, onDestroy, onMount, setContext } from 'svelte'
  import type { Options } from 'ol/style/Icon'
  import type { MTClusterOptions, MTMarker } from '$lib/ts'
  import { createClusterLayer, createMarkerLayer } from './layer-utils'
  import { MAP_CONTEXT, MARKERS_CONTEXT } from './contexts'

  export let markers: Array<MTMarker> = []
  export let markerOptions: Options | undefined
  export let clusterOptions: MTClusterOptions | undefined

  let { getMap } = getContext(MAP_CONTEXT)
  let map = getMap()

  let marker

  onMount(() => {
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

  onDestroy(() => {
    if (marker) {
      marker = undefined
    }
  })

  setContext(MARKERS_CONTEXT, {
    getMarkers: () => marker
  })
</script>
