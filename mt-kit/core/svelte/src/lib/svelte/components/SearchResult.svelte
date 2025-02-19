<script lang="ts">
  import type { SearchResult } from '$lib/ts'
  import { mapRelExternal } from '$lib/ts'
  import HeadingLevel from '../components/HeadingLevel.svelte'
  import { styles } from '@mattilsynet/design'

  interface Props {
    searchResult?: Array<SearchResult>
    headingClass?: string
    headerTag?: 'h2' | 'h3'
    breadCrumbAriaLabel?: string
  }

  let {
    searchResult = [],
    headingClass = 'mt-h3',
    headerTag = 'h2',
    breadCrumbAriaLabel = 'Sidens plassering'
  }: Props = $props()
</script>

{#each searchResult as result}
  <a
    href={result.url}
    rel={mapRelExternal(result.url)}
    class="mt-link col-1-span-12 layout-flex layout-flex-col border-radius search-result">
    <HeadingLevel class="heading {headingClass}" headingLevel={+headerTag.charAt(1) as 2 | 3}>
      {@html result.title}
    </HeadingLevel>
    {#if result.text}
      <div class="text">
        {@html result.text}
      </div>
    {/if}
    {#if result.breadcrumbs?.length}
      <div aria-label={breadCrumbAriaLabel} data-size="sm" class={styles.breadcrumbs}>
        <ol>
          {#each result.breadcrumbs as breadcrumb}
            <li>
              {@html breadcrumb}
            </li>
          {/each}
        </ol>
      </div>
    {/if}
  </a>
{/each}
