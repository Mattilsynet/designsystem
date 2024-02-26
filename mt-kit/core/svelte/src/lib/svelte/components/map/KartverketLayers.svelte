<script lang="ts">
  import { EUROPA_FORENKLET, NORGES_GRUNNKART } from '../../../ts/mapUtils'
  import { onMount } from 'svelte'
  import { createTileLayer } from './utils'
  import type TileLayer from 'ol/layer/Tile'
  import { getMap } from './contexts'

  export let kartverketLayerNames = [EUROPA_FORENKLET, NORGES_GRUNNKART]

  let map = getMap()
  let layers: Array<TileLayer> | undefined = undefined

  onMount(() => {
    if ($map) {
      layers = kartverketLayerNames.map(name => {
        const layer = createTileLayer(name)
        $map.addLayer(layer)
        return layer
      })
    }
  })
</script>
