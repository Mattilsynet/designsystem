<script lang="ts">
  import { onDestroy, onMount } from 'svelte'
  import { getMap } from './contexts'
  import { createGeolocationControl } from './geolocation-control'
  import type { MTGeolocationOptions } from '$lib/ts'

  export let geolocationOptions: MTGeolocationOptions | undefined = undefined

  let map = getMap()
  let geolocationControl

  onMount(() => {
    if ($map && geolocationOptions) {
      const control = createGeolocationControl($map, geolocationOptions)
      geolocationControl = control
      $map.addControl(control)
    }
  })

  onDestroy(() => {
    if (geolocationControl) {
      geolocationControl = undefined
    }
  })
</script>
