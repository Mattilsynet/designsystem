<script lang="ts">
  import { onMount } from 'svelte'
  import { getMap } from './contexts'
  import { createActivateMapControl, type MTActivateMapOptions } from './activate-map-control'
  import { isMobileOrTablet } from '../../../ts/utils'

  export let activateMapOptions: MTActivateMapOptions = {
    label: 'Aktiver kart',
    labelActive: 'Lukk kart',
    labelId: 'activate-map-label',
    className: 'activate-map',
    fullscreenClassName: 'fullscreen'
  }

  let map = getMap()

  onMount(() => {
    if ($map) {
      const is = isMobileOrTablet()
      if (is) {
        $map.addControl(createActivateMapControl($map, activateMapOptions))
      }
    }
  })
</script>
