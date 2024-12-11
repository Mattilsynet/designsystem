<script lang="ts">
  import { run, preventDefault } from 'svelte/legacy'

  import type { Page, ChapterChangeDetails } from '../../../ts/types'
  import { onMount, createEventDispatcher } from 'svelte'
  import { interpolate } from '../../../ts/utils'

  const PAGINATION_BREAKPOINT = '1024px' // $breakpoint-x-large
  const PAGE_CHANGE_EVENT = 'page-change'
  const ALLOWED_PAGES_DESKTOP = 5
  const ALLOWED_PAGES_MOBILE = 3

  interface Props {
    nextText?: string
    previousText?: string
    paginationLabel?: string
    labelPage?: string
    toPageTitle?: string
    pages?: Array<Page>
    currentPageIndex?: number
    class?: string
  }

  let {
    nextText = 'Neste',
    previousText = 'Forrige',
    paginationLabel = 'Paginering',
    labelPage = 'Side',
    toPageTitle = 'Gå til side {0} av {1}',
    pages = [],
    currentPageIndex = 0,
    class: className = ''
  }: Props = $props()

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

  function mapPagination(
    isMobile: boolean,
    currentPage: number,
    pages: Array<Page>
  ): Array<Page & { hidden?: boolean; ellipsis?: boolean }> {
    const { floor, min, max } = Math

    const [page1, page2, page3, page4, secondLastPage, lastPage, totalPages] = [
      0,
      1,
      2,
      3,
      pages.length - 2,
      pages.length - 1,
      pages.length
    ]
    const count = isMobile ? ALLOWED_PAGES_MOBILE : ALLOWED_PAGES_DESKTOP
    const allowedPagesIndex = count - 1
    const maxAllowed = count + 2

    if (totalPages <= maxAllowed) {
      return pages
    }
    const start = max(1, min(currentPage - floor((count - 3) / 2), totalPages - count + 2))
    const end = min(totalPages, max(currentPage + floor((count - 2) / 2), allowedPagesIndex))

    return pages.map((page, index) => {
      if (start > page3 && index === page2) {
        return { ...page, ellipsis: start !== page4 }
      } else if (start > page2 && index === page1) {
        return page
      }

      if (index >= start - 1 && index < end) {
        return page
      }
      if (end < lastPage && index === secondLastPage) {
        return { ...page, ellipsis: end !== secondLastPage }
      } else if (end < totalPages && index === lastPage) {
        return page
      }

      if (currentPage <= allowedPagesIndex && index === allowedPagesIndex) {
        return page
      }
      if (currentPage > totalPages - count && index === totalPages - count) {
        return page
      }
      return { ...page, hidden: true }
    })
  }
  let nextPageIndex = $derived(currentPageIndex + 1)
  let nextPage = $derived(pages[nextPageIndex])
  let previousPageIndex = $derived(currentPageIndex - 1)
  let previousPage = $derived(pages[previousPageIndex])
  let isMobile
  run(() => {
    isMobile = undefined
  })
  let mappedPages = $derived(mapPagination(isMobile, currentPageIndex + 1, pages))
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
        onclick={preventDefault(() => handleClick(previousPageIndex))}
        aria-disabled={!hasPreviousPage(currentPageIndex)}
      >
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
            class:pagination-item--current={index === currentPageIndex ? 'page' : undefined}
          >
            <a
              href={chapter.url}
              class="mt-link"
              title={interpolate(toPageTitle, [index + 1, pages.length])}
              aria-current={index === currentPageIndex ? 'page' : undefined}
              onclick={preventDefault(() => handleClick(index))}
            >
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
        onclick={preventDefault(() => handleClick(previousPageIndex))}
        aria-disabled={!hasPreviousPage(currentPageIndex)}
      >
        {previousText}
      </a>
    {/if}
    <a
      href={nextPage ? nextPage.url : undefined}
      onclick={preventDefault(() => handleClick(nextPageIndex))}
      title={nextText}
      class="mt-link next-link {!hasNextPage(currentPageIndex, pages)
        ? 'inclusively-hidden--fit-content'
        : ''}"
      aria-disabled={!hasNextPage(currentPageIndex, pages)}
    >
      {nextText}
    </a>
  </nav>
{/if}
