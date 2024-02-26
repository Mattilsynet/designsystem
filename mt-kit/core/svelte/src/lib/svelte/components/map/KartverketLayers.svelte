<script lang="ts">
  import { onDestroy, onMount } from 'svelte'
  import type TileLayer from 'ol/layer/Tile'
  import { EUROPA_FORENKLET, NORGES_GRUNNKART } from '../../../ts/mapUtils'
  import { createTileLayer } from './utils'
  import { getMap, type MapContext } from './contexts'

  export let kartverketLayerNames = [EUROPA_FORENKLET, NORGES_GRUNNKART]
  export let attributions: Array<string> = []

  let map: MapContext = getMap()
  let layers: Array<TileLayer> | undefined = undefined

  onMount(() => {
    if ($map) {
      layers = kartverketLayerNames.map(name => {
        const layer = createTileLayer(name, attributions)
        $map.addLayer(layer)
        return layer
      })
    }
  })
  onDestroy(() => {
    if (layers) {
      layers = undefined
    }
  })
</script>
