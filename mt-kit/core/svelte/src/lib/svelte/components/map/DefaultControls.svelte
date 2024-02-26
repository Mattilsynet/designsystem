<script lang="ts">
  import { onDestroy, onMount } from 'svelte'
  import { defaults as controlDefaults } from 'ol/control'
  import { getMap } from './contexts'

  let map = getMap()
  let controls

  onMount(() => {
    if ($map) {
      const defaults = controlDefaults()
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
