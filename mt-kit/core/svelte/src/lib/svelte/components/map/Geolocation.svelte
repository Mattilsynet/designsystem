<script lang="ts">
  import { onDestroy, onMount } from 'svelte'
  import type { Control } from 'ol/control'
  import { getMap, type MapContext } from './contexts'
  import { createGeolocationControl } from './geolocation-control'
  import type { MTGeolocationOptions } from '$lib/ts'

  interface Props {
    geolocationOptions?: MTGeolocationOptions
  }

  let { geolocationOptions }: Props = $props()

  let map: MapContext = getMap()
  let geolocationControl: Control | undefined = undefined

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
