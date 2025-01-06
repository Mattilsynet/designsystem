<script lang="ts">
  import { onDestroy, onMount } from 'svelte'
  import type VectorLayer from 'ol/layer/Vector'
  import type VectorSource from 'ol/source/Vector'
  import type { Options } from 'ol/style/Icon'
  import type { MTClusterOptions, MTMarker } from '$lib/ts'
  import { createClusterLayer, createMarkerLayer } from './layer-utils'
  import { getMap, type MapContext } from './contexts'

  interface Props {
    markers?: Array<MTMarker>
    markerOptions?: Options
    clusterOptions?: MTClusterOptions
  }

  let { markers = [], markerOptions, clusterOptions }: Props = $props()

  let map: MapContext = getMap()
  let markerLayer: VectorLayer<VectorSource> | undefined = undefined

  onMount(() => {
    if ($map) {
      if (clusterOptions) {
        const layer = createClusterLayer(markers, clusterOptions, markerOptions)
        markerLayer = layer
        $map.addLayer(layer)
      } else {
        const layer = createMarkerLayer(markers, markerOptions)
        markerLayer = layer
        $map.addLayer(layer)
      }
    }
  })

  onDestroy(() => {
    if (markerLayer) {
      markerLayer = undefined
    }
  })
</script>
