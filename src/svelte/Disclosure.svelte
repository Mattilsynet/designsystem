<script lang="ts" context="module">
  let counter = 0
</script>

<script lang="ts">
  import {onMount} from 'svelte'
  import {slide} from 'svelte/transition'
  import {useMachine} from '@xstate/svelte'
  import {createMachine, assign} from 'xstate'

  export let loadJs = true
  export let title: string
  export let headerTag: 'h2' | 'h3' | 'h4' = 'h3'
  export let theme: 'bordered' | 'links' | 'light-blue' = 'bordered'
  export let icon: string | undefined = undefined
  export let headerClass = ''
  export let panelClass = ''
  let disclosureClass = ''
  export {disclosureClass as class}

  interface DisclosureContext {
    isOpen: boolean
    isFirstRenderFinished: boolean
  }

  type DisclosureEvent = {type: 'MOUNTED'} | {type: 'TOGGLE'}

  type DisclosureState =
    | {value: 'serverRendered'; context: DisclosureContext}
    | {value: 'closed'; context: DisclosureContext}
    | {value: 'open'; context: DisclosureContext}

  const bodyId = `ui-disclosure-${counter++}`
  const disclosureMachine = createMachine<DisclosureContext, DisclosureEvent, DisclosureState>({
    id: 'disclosure',
    initial: 'serverRendered',
    context: {
      isOpen: true,
      isFirstRenderFinished: false
    },
    states: {
      serverRendered: {
        on: {MOUNTED: 'closed'}
      },
      closed: {
        entry: assign({isOpen: false}),
        exit: assign({isFirstRenderFinished: true}),
        on: {TOGGLE: 'open'}
      },
      open: {
        entry: assign({isOpen: true}),
        on: {TOGGLE: 'closed'}
      }
    }
  })
  const {state, send} = useMachine(disclosureMachine)

  $: isOpen = $state.context.isOpen
  $: onServer = $state.value === 'serverRendered'

  if (loadJs) {
    onMount(() => send('MOUNTED'))
  }
</script>

<div class="disclosure disclosure-{theme} {disclosureClass}">
  {#if onServer && headerTag === 'h2'}
    <h2 class="disclosure-header {headerClass}">{@html title}</h2>
  {:else if onServer}
    <h3 class="disclosure-header {headerClass}">{@html title}</h3>
  {:else}
    <button
      class="button--unstyled disclosure-header {headerTag} {headerClass}"
      aria-expanded={isOpen}
      aria-controls={bodyId}
      on:click={() => send('TOGGLE')}>
      {#if icon}
        {@html icon}
      {/if}
      {@html title}
    </button>
  {/if}

  {#if isOpen}
    <div
      id={bodyId}
      class="disclosure-panel {panelClass}"
      transition:slide|local={{duration: $state.context.isFirstRenderFinished ? 300 : 0}}>
      {#if !onServer && headerTag === 'h2'}
        <h2 class="inclusively-hidden">{title}</h2>
      {:else if !onServer}
        <h3 class="inclusively-hidden">{title}</h3>
      {/if}
      <slot />
    </div>
  {/if}
</div>
