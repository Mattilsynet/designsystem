<script lang="ts">
  import { getContext, onDestroy, onMount, setContext } from 'svelte'
  import type { MTPopupOptions } from '$lib/ts'
  import { Overlay } from 'ol'
  import { DEFAULT_OVERLAY_OFFSET } from '../../../ts/mapUtils'
  import { MAP_CONTEXT, POPUP_CONTEXT } from './contexts'
  import { addListeners } from './utils'

  export let popUpOptions: Array<MTPopupOptions> = []

  let { getMap } = getContext(MAP_CONTEXT)
  let map = getMap()
  let overlays

  onMount(() => {
    if (map) {
      const popups = popUpOptions.map(opt => {
        const overlay = new Overlay({
          offset: DEFAULT_OVERLAY_OFFSET,
          positioning: opt.positioning,
          element: document.getElementById(opt.elementId) ?? undefined,
          id: opt.id
        })
        map.addOverlay(overlay)
        return overlay
      })
      overlays = popups
      addListeners(map, popUpOptions)
    }
  })

  onDestroy(() => {
    if (overlays) {
      overlays = undefined
    }
  })

  setContext(POPUP_CONTEXT, {
    getPopups: () => overlays
  })
</script>

{#each popUpOptions as option}
  <div id={option.elementId} class="ol-popup mt-map--popup">
    <div id="popup-content-{option.elementId}"></div>
  </div>
{/each}
