<script lang="ts">
  import { onDestroy, onMount } from 'svelte'
  import type { Control } from 'ol/control'
  import { getMap, type MapContext } from './contexts'
  import { createActivateMapControl, type MTActivateMapOptions } from './activate-map-control'
  import { isMobileOrTablet } from '../../../ts/utils'

  export let activateMapOptions: MTActivateMapOptions = {
    label: 'Aktiver kart',
    labelActive: 'Lukk kart',
    labelId: 'activate-map-label',
    className: 'activate-map',
    fullscreenClassName: 'fullscreen'
  }

  let map: MapContext = getMap()
  let activateControl: Control | undefined = undefined

  onMount(() => {
    if ($map) {
      const is = isMobileOrTablet()
      if (is) {
        const control = createActivateMapControl($map, activateMapOptions)
        activateControl = control
        $map.addControl(control)
      }
    }
  })

  onDestroy(() => {
    if (activateControl) {
      activateControl = undefined
    }
  })
</script>
