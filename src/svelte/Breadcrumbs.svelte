<script lang="ts">
  import {onMount} from "svelte";

  interface Breadcrumbs {
    items: Array<{url: string; title: string}>
    ariaLabel?: string
    showAllAriaLabel?: string
  }

  export let breadcrumbs: Breadcrumbs = {items: []};
  export let loadJs = false

  let ariaLabel = breadcrumbs.ariaLabel ?? 'breadcrumbs';
  let showAllBreadCrumbs = breadcrumbs.showAllAriaLabel ?? 'show all'
  let spread = true
  $: breadcrumbData = breadcrumbs.items

  function spreadItems(){
    spread = true
    breadcrumbData = breadcrumbs.items
  }

  if(loadJs && breadcrumbs.items.length > 3) {
    onMount(() => {
      spread = false
      breadcrumbData = [
        breadcrumbs.items[0],
        breadcrumbs.items[1], {
          title: '...',
          text: '...',
          active: false,
          url: '#',
          type: 'shorthand',
          collapsed: true
        },
        breadcrumbs.items[breadcrumbs.items.length -1]]
    })
  }
</script>

<nav class="breadcrumbs" aria-label={ariaLabel}>
  <ol class:expanded={spread}>
    {#each breadcrumbData as item, index}
      <li class:ellipsis={!spread && index +1 === breadcrumbData.length}>
        {#if index === 0}
          <a class="forward-arrow" href={item.url}>Hjem</a>
        {:else if item.collapsed}
          <button
            type="button"
            aria-expanded="false"
            aria-label={showAllBreadCrumbs}
            class="button button--link forward-arrow"
            on:click={spreadItems}
          > ... </button>
        {:else if index + 1 < breadcrumbData.length}
          <a class="forward-arrow" href={item.url}>{item.title}</a>
        {:else}
          <a aria-current="page" href={item.url}>{item.title}</a>
        {/if}
      </li>
    {/each}
  </ol>
</nav>
