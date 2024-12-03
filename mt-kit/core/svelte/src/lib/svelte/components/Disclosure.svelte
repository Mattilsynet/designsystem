<script lang="ts" context="module">
  let counter = 0
</script>

<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import { slide } from 'svelte/transition'
  import HeadingLevel from './HeadingLevel.svelte'

  export let id: string | undefined = undefined
  export let loadJs = false
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

  let isOpen = startOpen ?? false
  $: onServer = !loadJs

  const dispatch = createEventDispatcher()

  function handleClick(): void {
    isOpen = !isOpen
    if (isOpen) {
      dispatch('open')
    } else {
      dispatch('close')
    }
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
      on:click={handleClick}>
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
      transition:slide|local={{ duration: 500 }}>
      <HeadingLevel class="inclusively-hidden" headingLevel={+headerTag.charAt(1)}>
        {@html title}
      </HeadingLevel>
      <slot />
    </div>
  {:else if onServer}
    <div id={bodyId} class="disclosure-panel {panelClass} on-server">
      <slot />
    </div>
  {/if}
</div>
