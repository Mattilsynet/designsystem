<script lang="ts">
  import { getContext, onDestroy, onMount, setContext } from 'svelte'
  import { defaults as controlDefaults } from 'ol/control'
  import { DEFAULT_CONTROLS, MAP_CONTEXT } from './contexts'

  let { getMap } = getContext(MAP_CONTEXT)
  let map = getMap()
  let controls

  onMount(() => {
    if (map) {
      const defaults = controlDefaults()
      defaults.forEach(control => {
        map?.addControl(control)
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
