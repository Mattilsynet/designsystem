<script lang="ts">
  import { EUROPA_FORENKLET, NORGES_GRUNNKART } from '../../../ts/mapUtils'
  import { getContext, onMount, setContext } from 'svelte'
  import { createTileLayer } from './utils'
  import type TileLayer from 'ol/layer/Tile'
  import { LAYERS_CONTEXT, MAP_CONTEXT } from './contexts'

  export let kartverketLayerNames = [EUROPA_FORENKLET, NORGES_GRUNNKART]

  let { getMap } = getContext(MAP_CONTEXT)
  let map = getMap()
  let layers: Array<TileLayer> | undefined = undefined

  onMount(() => {
    console.log('layers', map)
    if (map) {
      layers = kartverketLayerNames.map(name => {
        const layer = createTileLayer(name)
        map.addLayer(layer)
        return layer
      })
    }
  })

  setContext(LAYERS_CONTEXT, {
    getLayers: () => layers
  })
</script>

{#if layers}
  <slot />
{/if}
