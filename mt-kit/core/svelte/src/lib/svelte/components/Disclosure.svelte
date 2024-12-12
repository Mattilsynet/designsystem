<script lang="ts" module>
  let counter = $state(0)
</script>

<script lang="ts">
  import { slide } from 'svelte/transition'
  import HeadingLevel from './HeadingLevel.svelte'

  interface Props {
    id?: string | undefined
    loadJs?: boolean
    title: string
    headerTag?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    theme?: 'bordered' | 'no-border'
    icon?: string | undefined
    headerClass?: string
    panelClass?: string
    startOpen?: boolean
    chapter?: string | undefined
    class?: string
    children?: import('svelte').Snippet
    onOpen?: () => void
  }

  let {
    id = undefined,
    loadJs = false,
    title,
    headerTag = 'h3',
    theme = 'bordered',
    icon = undefined,
    headerClass = '',
    panelClass = '',
    startOpen = false,
    onOpen = undefined,
    chapter = undefined,
    class: disclosureClass = '',
    children
  }: Props = $props()

  const bodyId = `ui-disclosure-${counter++}`

  let isOpen = $state(startOpen ?? false)
  let onServer = $derived(!loadJs)

  function handleClick(): void {
    if (onOpen) {
      onOpen()
    }
    isOpen = !isOpen
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
      onclick={handleClick}>
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
      {@render children?.()}
    </div>
  {:else if onServer}
    <div id={bodyId} class="disclosure-panel {panelClass} on-server">
      {@render children?.()}
    </div>
  {/if}
</div>
