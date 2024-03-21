<script lang="ts">
  import type { Page, ChapterChangeDetails } from '../../../ts/types'
  import { onMount, createEventDispatcher } from 'svelte'
  import { interpolate } from '../../../ts/utils'

  const PAGINATION_BREAKPOINT = '1024px' // $breakpoint-x-large
  const PAGE_CHANGE_EVENT = 'page-change'
  const ALLOWED_NUMBER_OF_ELEMENTS = 7
  export let nextText = 'Neste'
  export let previousText = 'Forrige'
  export let paginationLabel = 'Paginering'
  export let labelPage = 'Side'
  export let toPageTitle = 'Gå til side {0}'
  export let pages: Array<Page> = []
  export let currentPageIndex: 0 | 1 = 0

  let className = ''
  export { className as class }

  $: nextPageIndex = currentPageIndex + 1
  $: nextPage = pages[nextPageIndex]
  $: previousPageIndex = currentPageIndex - 1
  $: previousPage = pages[previousPageIndex]
  $: isMobile = undefined

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

  function isMoreThanAllowedPages(numberOfPages: number): boolean {
    return ALLOWED_NUMBER_OF_ELEMENTS >= numberOfPages
  }

  function isActivePaginationItem(
    pages: Array<Page>,
    index: number,
    current: number,
    isMobile?: boolean
  ): boolean {
    if (isMobile) {
      return index === current
    } else {
      if (isMoreThanAllowedPages(pages.length)) {
        return true
      } else if (
        showPage1Shortcut(pages, current, isMobile) &&
        showLastPageShortcut(pages, current, isMobile)
      ) {
        return index === current || index === current - 1 || index === current + 1
      }
      return showFirst5(index, current) || showLast5(index, current, pages)
    }
  }

  function showPage1Shortcut(
    pages: Array<Page>,
    currentPageIndex: number,
    isMobile?: boolean
  ): boolean {
    return !isMobile
      ? !isMoreThanAllowedPages(pages.length) && currentPageIndex > 2
      : currentPageIndex > 0
  }

  function showLastPageShortcut(
    pages: Array<Page>,
    currentPageIndex: number,
    isMobile?: boolean
  ): boolean {
    return !isMobile
      ? !isMoreThanAllowedPages(pages.length) && currentPageIndex < pages.length - 3
      : currentPageIndex < pages.length - 1
  }

  function showFirst5(index: number, current: number): boolean {
    if (current === 0) {
      return index <= current + 4
    } else if (current === 1) {
      return index <= current + 3 && index >= current - 2
    }
    return index >= current - 2 && index <= current + 2
  }

  function showLast5(index: number, current: number, pages: Array<Page>): boolean {
    if (current === pages.length - 1) {
      return index >= current - 4
    } else if (current === pages.length - 2) {
      return index <= current + 2 && index >= current - 3
    }
    return index <= current + 2 && index >= current - 2
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
      {#if showPage1Shortcut(pages, currentPageIndex, isMobile)}
        <li class="mt-li">
          <a
            href={pages[0].url}
            class="mt-link"
            title={interpolate(toPageTitle, [1])}
            aria-current={0 === currentPageIndex ? 'page' : undefined}
            on:click|preventDefault={() => handleClick(0)}>
            <span class="inclusively-hidden-initial">{labelPage}</span>
            {1}
          </a>
        </li>
        <li class="mt-li ellipsis" role="presentation">...</li>
      {/if}
      {#each pages as chapter, index}
        {#if isActivePaginationItem(pages, index, currentPageIndex, isMobile)}
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
      {#if showLastPageShortcut(pages, currentPageIndex, isMobile)}
        <li class="mt-li ellipsis">...</li>
        <li class="mt-li">
          <a
            href={pages[pages.length - 1].url}
            class="mt-link"
            title={interpolate(toPageTitle, [pages.length])}
            aria-current={pages.length - 1 === currentPageIndex ? 'page' : undefined}
            on:click|preventDefault={() => handleClick(pages.length - 1)}>
            <span class="inclusively-hidden-initial">{labelPage}</span>
            {pages.length}
          </a>
        </li>
      {/if}
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
