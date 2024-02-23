<script lang="ts">
  import { getContext, onMount, setContext } from 'svelte'
  import { defaults as controlDefaults } from 'ol/control'
  import { DEFAULT_CONTROLS, MAP_CONTEXT } from './contexts'

  let { getMap } = getContext(MAP_CONTEXT)
  let map = getMap()

  onMount(() => {
    if (map) {
      controlDefaults().forEach(control => {
        map?.addControl(control)
      })
    }
  })

  setContext(DEFAULT_CONTROLS, {})
</script>

<!--{#if layers}-->
<!--  <slot />-->
<!--{/if}-->
