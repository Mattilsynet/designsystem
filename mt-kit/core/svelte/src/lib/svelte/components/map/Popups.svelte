<script lang="ts">
  import { onDestroy, onMount } from 'svelte'
  import type { MTPopupOptions } from '$lib/ts'
  import { Overlay } from 'ol'
  import { DEFAULT_OVERLAY_OFFSET } from '$lib/ts/mapUtils'
  import { getMap, type MapContext } from './contexts'
  import { addListeners } from './utils'

  interface Props {
    popUpOptions?: Array<MTPopupOptions>
  }

  let { popUpOptions = [] }: Props = $props()

  let map: MapContext = getMap()
  let overlays: Array<Overlay> | undefined = undefined

  onMount(() => {
    if ($map) {
      const popups = popUpOptions.map(opt => {
        const overlay = new Overlay({
          offset: DEFAULT_OVERLAY_OFFSET,
          positioning: opt.positioning,
          element: document.getElementById(opt.elementId) ?? undefined,
          id: opt.id
        })
        $map.addOverlay(overlay)
        return overlay
      })
      overlays = popups
      addListeners($map, popUpOptions)
    }
  })

  onDestroy(() => {
    if (overlays) {
      overlays = undefined
    }
  })
</script>

{#each popUpOptions as option}
  <div id={option.elementId} class="ol-popup mt-map--popup">
    <div id="popup-content-{option.elementId}"></div>
  </div>
{/each}
