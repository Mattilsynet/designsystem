<script lang="ts">
  import { onDestroy, onMount, setContext } from 'svelte'
  import { defaults as controlDefaults } from 'ol/control'
  import { DEFAULT_CONTROLS, getMap } from './contexts'

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

  setContext(DEFAULT_CONTROLS, {
    getControls: () => controls
  })
</script>
