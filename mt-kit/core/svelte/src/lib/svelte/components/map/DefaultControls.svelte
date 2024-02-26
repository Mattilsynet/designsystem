<script lang="ts">
  import { onDestroy, onMount } from 'svelte'
  import { type Control, defaults as controlDefaults } from 'ol/control'
  import { type Collection } from 'ol'
  import { getMap, type MapContext } from './contexts'

  let map: MapContext = getMap()
  let controls: Collection<Control> | undefined = undefined

  onMount(() => {
    if ($map) {
      const defaults = controlDefaults({ rotate: $map.getView()?.getProperties()?.enableRotation })
      defaults.forEach(control => {
        $map?.addControl(control)
      })
      controls = defaults
    }
  })
  onDestroy(() => {
    if (controls) {
      controls = undefined
    }
  })
</script>
