<script lang="ts">
  import { mapRelExternal } from '../../ts/utils'
  import HeadingLevel from '../components/HeadingLevel.svelte'
  import type { SearchResult } from '$lib/ts'

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
    breadCrumbAriaLabel = 'Brødsmulesti'
  }: Props = $props()
</script>

{#each searchResult as result}
  <a
    href={result.url}
    rel={mapRelExternal(result.url)}
    class="mt-link col-1-span-12 layout-flex layout-flex-col border-radius search-result"
  >
    <HeadingLevel class="heading {headingClass}" headingLevel={+headerTag.charAt(1)}>
      {@html result.title}
    </HeadingLevel>
    {#if result.text}
      <div class="text">
        {@html result.text}
      </div>
    {/if}
    {#if result.breadcrumbs?.length > 0}
      <div
        aria-label={breadCrumbAriaLabel}
        style="--gap: var(--fds-spacing-2)"
        class="layout-flex layout-flex--center-vertical"
      >
        {#each result.breadcrumbs as breadcrumb}
          <span class="breadcrumb">
            {@html breadcrumb}
          </span>
        {/each}
      </div>
    {/if}
  </a>
{/each}
