<script lang="ts">
  import { getContext, onMount, setContext } from 'svelte'
  import { GEOLOCATION_CONTEXT, MAP_CONTEXT } from './contexts'
  import { createGeolocationControl } from './geolocation-control'
  import type { MTGeolocationOptions } from '$lib/ts'

  export let geolocationOptions: MTGeolocationOptions | undefined = undefined

  let { getMap } = getContext(MAP_CONTEXT)
  let map = getMap()
  let geolocationControl

  onMount(() => {
    if (map && geolocationOptions) {
      const control = createGeolocationControl(map, geolocationOptions)
      geolocationControl = control
      map.addControl(control)
    }
  })

  setContext(GEOLOCATION_CONTEXT, {
    getGeolocationControl: () => geolocationControl
  })
</script>

<!--{#if layers}-->
<!--  <slot />-->
<!--{/if}-->
