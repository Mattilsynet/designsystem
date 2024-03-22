<script lang="ts">
  import { mapRelExternal } from '../../ts/utils'
  import HeadingLevel from '../components/HeadingLevel.svelte'

  type SearchResult = {
    title?: string
    url?: string
    text?: string
    breadcrumbs?: string[]
  }

  export let searchResult: Array<SearchResult> = []
  export let headingClass = 'mt-h3'
  export let headerTag: 'h2' | 'h3' = 'h2'
  export let breadCrumbAriaLabel = 'Brødsmulesti'
</script>

{#each searchResult as result, index}
  <a
    href={result.url}
    rel={mapRelExternal(result.url)}
    class="mt-link col-1-span-12 layout-flex layout-flex-col border-radius search-result">
    <HeadingLevel class="heading {headingClass}" headingLevel={+headerTag.charAt(1)}>
      {@html result.title}
    </HeadingLevel>
    {#if result.text}
      <div class="text">
        {@html result.text}
      </div>
    {/if}
    {#if result.breadcrumbs?.length > 0}
      <div aria-label={breadCrumbAriaLabel}>
        {#each result.breadcrumbs as breadcrumb}
          <span class="breadcrumb">
            {@html breadcrumb}
          </span>
        {/each}
      </div>
    {/if}
  </a>
{/each}
