<script lang="ts" context="module">
  let counter = 0
</script>

<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte'
  import { slide } from 'svelte/transition'
  import { useMachine } from '@xstate/svelte'
  import HeadingLevel from './HeadingLevel.svelte'
  import { createToggleMachine } from '../../ts/toggle-machine'

  export let id: string | undefined = undefined
  export let loadJs = true
  export let title: string
  export let headerTag: 'h2' | 'h3' | 'h4' | 'h5' | 'h6' = 'h3'
  export let theme: 'bordered' | 'no-border' = 'bordered'
  export let icon: string | undefined = undefined
  export let headerClass = ''
  export let panelClass = ''
  export let startOpen = false
  export let chapter: string | undefined = undefined
  let disclosureClass = ''
  export { disclosureClass as class }

  const bodyId = `ui-disclosure-${counter++}`
  const disclosureMachine = createToggleMachine('disclosure')
  const { state, send } = useMachine(disclosureMachine)

  $: isOpen = $state.context.isOpen
  $: onServer = $state.value === 'serverRendered'

  if (loadJs) {
    onMount(() => send('MOUNTED'))
    if (startOpen) {
      onMount(() => send('TOGGLE'))
    }
  }

  const dispatch = createEventDispatcher()
  function dispatchOpen(isOpen: boolean): void {
    isOpen ? dispatch('open') : dispatch('close')
  }
</script>

<div class="disclosure disclosure-{theme} {disclosureClass}">
  {#if onServer}
    <HeadingLevel {id} class="disclosure-header {headerClass}" headingLevel={+headerTag.charAt(1)}>
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
          <span class="responsive-show-inline">
            {chapter}
          </span>
        {/if}
        {@html title}
      </span>
    </HeadingLevel>
  {:else}
    <button
      {id}
      type="button"
      class="mt-button--unstyled disclosure-header mt-{headerTag} {headerClass}"
      aria-expanded={isOpen}
      aria-controls={bodyId}
      on:click={() => {
        dispatchOpen(!isOpen)
        send('TOGGLE')
      }}>
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
          <span class="responsive-show-inline">
            {chapter}
          </span>
        {/if}
        {@html title}
      </span>
    </button>
  {/if}
  {#if isOpen && !onServer}
    <div
      id={bodyId}
      class="disclosure-panel {panelClass}"
      transition:slide|local={{ duration: $state.context.isFirstRenderFinished ? 500 : 0 }}>
      <HeadingLevel class="inclusively-hidden" headingLevel={+headerTag.charAt(1)}>
        {@html title}
      </HeadingLevel>
      <slot />
    </div>
  {:else if isOpen && onServer && !loadJs}
    <div id={bodyId} class="disclosure-panel {panelClass} on-server">
      <slot />
    </div>
  {/if}
</div>
