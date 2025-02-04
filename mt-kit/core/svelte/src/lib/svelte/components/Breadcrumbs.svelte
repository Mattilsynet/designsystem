<script lang="ts">
  import { onMount } from 'svelte'
  import type { Breadcrumbs, Link } from '$lib/ts/types'
  import { styles } from '@mattilsynet/design'

  const BUTTON_ELLIPSIS = Symbol()

  interface Props {
    breadcrumbs?: Breadcrumbs
    loadJs?: boolean
    class?: string
  }

  let { breadcrumbs = { items: [] }, loadJs = false, class: classNames = '' }: Props = $props()

  const LIMIT_BEFORE_PARTIAL = 3

  const ariaLabel = breadcrumbs.ariaLabel ?? 'brødsmulesti'
  const showAllBreadCrumbsLabel = breadcrumbs.showAllAriaLabel ?? 'vis mer'
  const homeLabel = breadcrumbs.homeLabel ?? 'Hjem'

  let isFull = $state(true)
  let breadcrumbsItems: Array<Link | symbol> = $state(breadcrumbs.items)

  $effect(() => {
    breadcrumbsItems = breadcrumbs.items
  })

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

<nav class="{styles.breadcrumbs} {classNames}" aria-label={ariaLabel}>
  <ol>
    {#each breadcrumbsItems as item, index}
      <li>
        {#if index === 0}
          <a href={item.url} class={styles.link} rel="external">{homeLabel}</a>
        {:else if item === BUTTON_ELLIPSIS}
          <button
            type="button"
            aria-expanded="false"
            aria-label={showAllBreadCrumbsLabel}
            class="mt-button mt-button--link"
            onclick={() => handleShowFull()}>
            ...
          </button>
        {:else if index + 1 < breadcrumbsItems.length}
          <a href={item.url} class={styles.link} rel="external">{@html item.text}</a>
        {:else}
          <a href={item.url} class={styles.link} rel="external" aria-current="page">
            {item.text}
          </a>
        {/if}
      </li>
    {/each}
  </ol>
</nav>
