<script lang="ts">
  import { onMount } from 'svelte'
  import type { Breadcrumbs, Link } from '../../ts/types'

  const BUTTON_ELLIPSIS = Symbol()
  export let breadcrumbs: Breadcrumbs = { items: [] }
  export let loadJs = false
  let classNames = ''
  export { classNames as class }
  const LIMIT_BEFORE_PARTIAL = 3

  let ariaLabel = breadcrumbs.ariaLabel ?? 'brødsmulesti'
  let showAllBreadCrumbsLabel = breadcrumbs.showAllAriaLabel ?? 'vis mer'
  let homeLabel = breadcrumbs.homeLabel ?? 'Hjem'

  let isFull = true
  let breadcrumbsItems: Array<Link | symbol>
  $: breadcrumbsItems = breadcrumbs.items

  if (loadJs) {
    onMount(() => {
      if (breadcrumbs.items.length > LIMIT_BEFORE_PARTIAL) {
        isFull = false
        breadcrumbsItems = [
          breadcrumbs.items[0],
          BUTTON_ELLIPSIS,
          breadcrumbs.items[breadcrumbs.items.length - 2],
          breadcrumbs.items[breadcrumbs.items.length - 1]
        ]
      }
    })
  }

  function handleShowFull(): void {
    isFull = true
    breadcrumbsItems = breadcrumbs.items
  }
</script>

<nav class="breadcrumbs {classNames}" aria-label={ariaLabel}>
  <ol class="mt-ol" class:expanded={isFull}>
    {#each breadcrumbsItems as item, index}
      <li class:ellipsis={!isFull && index + 1 > 2}>
        {#if index === 0}
          <a class="mt-link" href={item.url} rel="external">{homeLabel}</a>
        {:else if item === BUTTON_ELLIPSIS}
          <button
            type="button"
            aria-expanded="false"
            aria-label={showAllBreadCrumbsLabel}
            class="mt-button mt-button--link"
            on:click={() => handleShowFull()}>
            ...
          </button>
        {:else if index + 1 < breadcrumbsItems.length}
          <a class="mt-link" href={item.url} rel="external">{@html item.text}</a>
        {:else}
          <span class="last-breadcrumb">
            {item.text}
          </span>
        {/if}
      </li>
    {/each}
  </ol>
</nav>
