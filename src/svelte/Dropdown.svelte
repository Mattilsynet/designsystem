<script context="module">
  let counter = 0
</script>

<script lang="ts">
  import {assign, createMachine} from 'xstate'
  import {useMachine} from '@xstate/svelte'
  import {onMount} from 'svelte'
  import {slide} from 'svelte/transition'
  import {clickOutside} from '../ts/click-outside'

  export let title = ''
  const bodyId = `ui-dropdown-${counter++}`
  export let loadJs = false
  export let titleId = `${bodyId}-title`
  let className = ''
  export {className as class}

  interface DropdownContext {
    isFirstRenderFinished: boolean
  }

  type DropdownEvent = {type: 'MOUNT'} | {type: 'TOGGLE'}

  type DropdownState =
    | {value: 'serverRendered'; context: DropdownContext}
    | {value: 'open'; context: DropdownContext}
    | {value: 'closed'; context: DropdownContext}

  const DropdownMachine = createMachine<DropdownContext, DropdownEvent, DropdownState>({
    id: 'dropdown',
    initial: 'serverRendered',
    context: {
      isFirstRenderFinished: false
    },
    states: {
      serverRendered: {
        on: {MOUNT: 'closed'}
      },
      closed: {
        exit: assign({isFirstRenderFinished: true}),
        on: {TOGGLE: 'open'}
      },
      open: {
        on: {TOGGLE: 'closed'}
      }
    }
  })

  const {state, send} = useMachine(DropdownMachine)
  $: isOpen = $state.value === 'open'
  $: onServer = $state.value === 'serverRendered'

  if (loadJs) {
    onMount(() => send('MOUNT'))
  }
</script>

<div class="dropdown {className} {onServer ? 'on-server' : ''}" class:visible={isOpen || onServer}>
  {#if onServer}
    <details>
      <summary class="button button--link color-mt-text-dark">
        {@html title}
      </summary>
      <div id={bodyId} class="dropdown-content">
        <slot />
      </div>
    </details>
  {:else}
    <button
      id={titleId}
      class="button button--link"
      aria-haspopup="true"
      aria-expanded={isOpen}
      aria-controls={bodyId}
      on:click={() => send('TOGGLE')}>
      {@html title}
    </button>
    <div
      class="dropdown-content"
      id={bodyId}
      use:clickOutside={titleId}
      on:clickOutside={() => isOpen && send('TOGGLE')}>
      <div in:slide={{duration: 300}}>
        <slot />
      </div>
    </div>
  {/if}
</div>
