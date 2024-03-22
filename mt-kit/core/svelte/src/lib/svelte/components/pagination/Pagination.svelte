<script lang="ts">
  import type { ChapterChangeDetails, Page } from '../../../ts/types'
  import { createEventDispatcher, onMount } from 'svelte'
  import { interpolate } from '../../../ts/utils'

  const PAGINATION_BREAKPOINT = '1024px' // $breakpoint-x-large
  const PAGE_CHANGE_EVENT = 'page-change'
  const ALLOWED_PAGES_DESKTOP = 5
  const ALLOWED_PAGES_MOBILE = 3
  export let nextText = 'Neste'
  export let previousText = 'Forrige'
  export let paginationLabel = 'Paginering'
  export let labelPage = 'Side'
  export let toPageTitle = 'Gå til side {0}'
  export let pages: Array<Page> = []
  export let currentPageIndex: 0 | 1 = 0

  const { floor, min, max } = Math
  const pagination = (
    isMobile: boolean,
    currentPage: number,
    pages: Array<Page>
  ): Array<Page & { hidden?: boolean; ellipsis?: boolean }> => {
    const total = pages.length
    const count = isMobile ? ALLOWED_PAGES_MOBILE : ALLOWED_PAGES_DESKTOP
    const start = max(1, min(currentPage - floor((count - 3) / 2), total - count + 2))
    const end = min(total, max(currentPage + floor((count - 2) / 2), count - 1))
    return pages.map((page, index) => {
      if (start > 2 && index === 1) {
        return { ...page, ellipsis: start !== 3 }
      } else if (start > 1 && index === 0) {
        return page
      }

      if (index >= start - 1 && index < end) {
        return page
      }
      if (end < total - 1 && index === total - 2) {
        return { ...page, ellipsis: end !== total - 2 }
      } else if (end < total && index === pages.length - 1) {
        return page
      }

      if (currentPage <= count - 1 && index === count - 1) {
        return page
      }
      if (currentPage > total - count && index === total - count) {
        return page
      }
      return { ...page, hidden: true }
    })
  }

  let className = ''
  export { className as class }

  $: nextPageIndex = currentPageIndex + 1
  $: nextPage = pages[nextPageIndex]
  $: previousPageIndex = currentPageIndex - 1
  $: previousPage = pages[previousPageIndex]
  $: isMobile = undefined

  $: mappedPages = pagination(isMobile, currentPageIndex + 1, pages)

  const dispatch = createEventDispatcher<{ chapterChange: ChapterChangeDetails }>()

  onMount(() => {
    isMobile = window?.matchMedia(`(max-width: ${PAGINATION_BREAKPOINT})`).matches === true
  })

  function handleClick(index: number): void {
    dispatch(PAGE_CHANGE_EVENT, { index: index })
  }

  function hasNextPage(currentPageNumber: number, pages: Array<Page>): boolean {
    return currentPageNumber < pages.length - 1
  }

  function hasPreviousPage(currentPageNumber: number): boolean {
    return currentPageNumber > 0
  }
</script>

{#if pages.length > 1}
  <nav class="mt-pagination {className}" aria-label={paginationLabel}>
    {#if !isMobile}
      <a
        href={previousPage ? previousPage.url : undefined}
        class="mt-link previous-link {!hasPreviousPage(currentPageIndex)
          ? 'inclusively-hidden--fit-content'
          : ''}"
        title={previousText}
        on:click|preventDefault={() => handleClick(previousPageIndex)}
        aria-disabled={!hasPreviousPage(currentPageIndex)}>
        {previousText}
      </a>
    {/if}
    <ul class="mt-ul list-unstyled">
      {#each mappedPages as chapter, index}
        {#if chapter.ellipsis}
          <li class="mt-li ellipsis" role="presentation">...</li>
        {:else if !chapter.hidden}
          <li
            class="mt-li pagination-item"
            class:pagination-item--current={index === currentPageIndex ? 'page' : undefined}>
            <a
              href={chapter.url}
              class="mt-link"
              title={interpolate(toPageTitle, [index + 1])}
              aria-current={index === currentPageIndex ? 'page' : undefined}
              on:click|preventDefault={() => handleClick(index)}>
              <span class="inclusively-hidden-initial">{labelPage}</span>
              {index + 1}
            </a>
          </li>
        {/if}
      {/each}
    </ul>
    {#if isMobile}
      <a
        href={previousPage ? previousPage.url : undefined}
        class="mt-link previous-link {!hasPreviousPage(currentPageIndex)
          ? 'inclusively-hidden--fit-content'
          : ''}"
        title={previousText}
        on:click|preventDefault={() => handleClick(previousPageIndex)}
        aria-disabled={!hasPreviousPage(currentPageIndex)}>
        {previousText}
      </a>
    {/if}
    <a
      href={nextPage ? nextPage.url : undefined}
      on:click|preventDefault={() => handleClick(nextPageIndex)}
      title={nextText}
      class="mt-link next-link {!hasNextPage(currentPageIndex, pages)
        ? 'inclusively-hidden--fit-content'
        : ''}"
      aria-disabled={!hasNextPage(currentPageIndex, pages)}>
      {nextText}
    </a>
  </nav>
{/if}
