<script lang="ts">
  interface Breadcrumbs {
    items: [{url: string; title: string}];
  }

  export let breadcrumbs: Breadcrumbs;
  export let ariaLabel: string = 'breadcrumbs';
</script>

<nav class="breadcrumbs" aria-label={ariaLabel}>
  <ol>
    {#each breadcrumbs.items as item, index}
      <li>
        {#if index + 1 < breadcrumbs.items.length}
          <a class="forward-arrow" href={item.url}>{item.title}</a>
        {:else}
          <a aria-current="page" href={item.url}>{item.title}</a>
        {/if}
      </li>
    {/each}
  </ol>
</nav>
