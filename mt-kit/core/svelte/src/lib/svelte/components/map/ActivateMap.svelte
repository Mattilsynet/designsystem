<script lang="ts">
  import { getContext, onMount, setContext } from 'svelte'
  import { ACTIVATE_MAP_CONTEXT, MAP_CONTEXT } from './contexts'
  import { createActivateMapControl, type MTActivateMapOptions } from './activate-map-control'
  export let activateMapOptions: MTActivateMapOptions = {
    label: 'Aktiver kart',
    labelActive: 'Lukk kart',
    labelId: 'activate-map-label',
    className: 'activate-map',
    fullscreenClassName: 'fullscreen'
  }

  let { getMap } = getContext(MAP_CONTEXT)
  let map = getMap()

  onMount(() => {
    console.log('layers', map)
    if (map) {
      // const is = isMobileOrTablet()
      // if (is) {
      map.addControl(createActivateMapControl(map, activateMapOptions))
      // }
    }
  })

  setContext(ACTIVATE_MAP_CONTEXT, {})
</script>
