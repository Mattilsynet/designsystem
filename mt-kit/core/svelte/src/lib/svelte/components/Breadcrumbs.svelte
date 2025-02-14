<script lang="ts">
  import { onMount } from 'svelte'
  import type { Breadcrumbs, Link } from '$lib/ts/types'
  import { styles } from '@mattilsynet/design'

  interface Props {
    breadcrumbs?: Breadcrumbs
    loadJs?: boolean
    class?: string
  }

  let { breadcrumbs = { items: [] }, loadJs = false, class: classNames = '' }: Props = $props()
  let breadcrumbsItems: Link[] = $state(breadcrumbs.items)

  const ELLIPSIS = { text: '...', url: '' }
  const LIMIT_BEFORE_PARTIAL = 3

  const ariaLabel = breadcrumbs.ariaLabel ?? 'Du er her'
  const showAllBreadCrumbsLabel = breadcrumbs.showAllAriaLabel ?? 'Vis mer'
  const homeLabel = breadcrumbs.homeLabel ?? 'Hjem'

  $effect(() => {
    breadcrumbsItems = breadcrumbs.items
  })

  if (loadJs) {
    onMount(() => {
      if (breadcrumbs.items.length > LIMIT_BEFORE_PARTIAL) {
        breadcrumbsItems = [breadcrumbs.items[0], ELLIPSIS].concat(breadcrumbs.items.slice(-2))
      }
    })
  }

  function handleShowFull(): void {
    breadcrumbsItems = breadcrumbs.items
  }
</script>

<nav class="{styles.breadcrumbs} {classNames}" data-size="sm" aria-label={ariaLabel}>
  <ol>
    {#each breadcrumbsItems as item, index}
      <li>
        {#if item.url}
          <a href={item.url} class={styles.link} aria-current={index === breadcrumbsItems.length - 1 ? 'page' : undefined}>
            {index === 0 ? homeLabel : item.text}
          </a>
        {:else}
          <button
            aria-expanded="false"
            aria-label={showAllBreadCrumbsLabel}
            class={styles.link}
            onclick={handleShowFull}
            type="button">
            {item.text}
          </button>
        {/if}
      </li>
    {/each}
  </ol>
</nav>
