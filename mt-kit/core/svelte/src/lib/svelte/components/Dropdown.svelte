<script context="module" lang="ts">
  let counter = 0
</script>

<script lang="ts">
  import { useMachine } from '@xstate/svelte'
  import { onMount } from 'svelte'
  import { slide } from 'svelte/transition'
  import { clickOutside } from '../../ts/click-outside'
  import { focusOutside } from '../../ts/focus-outside'
  import { createToggleMachine } from '../../ts/toggle-machine'

  export let title = ''
  const bodyId = `ui-dropdown-${counter++}`
  export let loadJs = false
  export let titleId = `${bodyId}-title`
  export let icon = ''
  let className = ''
  export { className as class }

  const LINK_TAG: Readonly<string> = 'A'

  const DropdownMachine = createToggleMachine('dropdown')
  const { state, send } = useMachine(DropdownMachine)
  $: isOpen = $state.context.isOpen
  $: onServer = $state.value === 'serverRendered'

  function handleClick(e: PointerEvent) {
    if (isOpen && e.target?.tagName === LINK_TAG) {
      send('TOGGLE')
    }
  }

  if (loadJs) {
    onMount(() => send('MOUNTED'))
  }
</script>

<div class="dropdown {className} {onServer ? 'on-server' : ''}" class:visible={isOpen || onServer}>
  {#if onServer}
    <details class="mt-details">
      <summary class="mt-summary mt-button mt-button--link {icon}">
        {@html title}
      </summary>
      <div id={bodyId} class="dropdown-content">
        <slot loadJs={false} />
      </div>
    </details>
  {:else}
    <button
      id={titleId}
      class="mt-button mt-button--link {icon}"
      aria-haspopup="true"
      aria-expanded={isOpen}
      aria-controls={bodyId}
      on:click={() => send('TOGGLE')}>
      {@html title}
    </button>
    {#if isOpen}
      <div
        use:focusOutside={() => (isOpen = false)}
        class="dropdown-content"
        id={bodyId}
        use:clickOutside={titleId}
        on:click={handleClick}
        on:clickOutside={() => isOpen && send('TOGGLE')}
        in:slide={{ duration: 900 }}
        out:slide={{ duration: 700 }}>
        <slot {isOpen} />
      </div>
    {/if}
  {/if}
</div>
