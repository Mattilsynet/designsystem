<script lang="ts" context="module">
  let counter = 0
</script>

<script lang="ts">
  import {onMount} from 'svelte'
  import {slide} from 'svelte/transition'
  import {useMachine} from '@xstate/svelte'
  import {createMachine, assign} from 'xstate'
  import HeadingLevel from './HeadingLevel.svelte'

  export let loadJs = true
  export let title: string
  export let headerTag: 'h2' | 'h3' | 'h4' | 'h5' | 'h6' = 'h3'
  export let theme: 'bordered' | 'links' | 'no-border' = 'bordered'
  export let icon: string | undefined = undefined
  export let headerClass = ''
  export let panelClass = ''
  export let startOpen = false
  export let chapter: string | undefined = undefined
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
    if (startOpen) {
      onMount(() => send('TOGGLE'))
    }
  }
</script>

<div class="disclosure disclosure-{theme} {disclosureClass}">
  {#if onServer}
    <HeadingLevel class="disclosure-header {headerClass}" headingLevel={+headerTag.charAt(1)}>
      {@html title}
    </HeadingLevel>
  {:else}
    <button
      class="button--unstyled disclosure-header {headerTag} {headerClass}"
      aria-expanded={isOpen}
      aria-controls={bodyId}
      on:click={() => send('TOGGLE')}>
      {#if chapter}
        <span class="chapter-number responsive-hide">
          {chapter}
        </span>
      {/if}

      {#if icon}
        {@html icon}
      {/if}
      <span class="title">
        {#if chapter}
          <span class="responsive-show">
            {chapter}
          </span>
        {/if}
        {@html title}
      </span>
    </button>
  {/if}

  {#if isOpen}
    <div
      id={bodyId}
      class="disclosure-panel {panelClass} {onServer ? 'on-server' : ''}"
      transition:slide|local={{duration: $state.context.isFirstRenderFinished ? 300 : 0}}>
      {#if !onServer}
        <HeadingLevel class="inclusively-hidden" headingLevel={+headerTag.charAt(1)}>
          {@html title}
        </HeadingLevel>
      {/if}
      <slot />
    </div>
  {/if}
</div>
