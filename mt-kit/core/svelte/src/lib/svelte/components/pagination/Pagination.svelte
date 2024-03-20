<script lang="ts">
  import type { Page, ChapterChangeDetails } from '../../../ts/types'
  import { onMount, createEventDispatcher } from 'svelte'
  import { interpolate } from '../../../ts/utils'

  const PAGINATION_BREAKPOINT = '1024px' // $breakpoint-x-large
  const PAGE_CHANGE_EVENT = 'page-change'
  export let nextText = ''
  export let previousText = ''
  export let paginationLabel = 'Pagination'
  export let labelPage = 'Side'
  export let toPageTitle = 'Gå til side {0}'
  export let pages: Array<Page> = []
  export let currentPageIndex: 0 | 1 = 0
  export let startIndex = 0
  let className = ''
  export { className as class }

  $: nextPageIndex = currentPageIndex + 1
  $: nextPageNumber = nextPageIndex + startIndex
  $: nextPage = pages[nextPageIndex]
  $: previousPageIndex = currentPageIndex - 1
  $: previousPageNumber = previousPageIndex + startIndex
  $: previousPage = pages[previousPageIndex]
  $: media = undefined

  const dispatch = createEventDispatcher<{ chapterChange: ChapterChangeDetails }>()

  onMount(() => {
    media = window?.matchMedia(`(min-width: ${PAGINATION_BREAKPOINT})`)
  })
  function hasNextPage(currentPageNumber: number): boolean {
    return currentPageNumber < pages.length - 1
  }

  function hasPreviousPage(currentPageNumber: number): boolean {
    return currentPageNumber > 0
  }

  function handleClick(index: number): void {
    dispatch(PAGE_CHANGE_EVENT, { index: index })
  }

  function showPage1Shortcut(current: number, media?: MediaQueryList): boolean {
    return media?.matches ? current > 1 : current > 0
  }

  function showLastPageShortcut(
    chapters: Array<Page>,
    current: number,
    media?: MediaQueryList
  ): boolean {
    return media?.matches ? current < chapters.length - 2 : current < chapters.length - 1
  }

  function isActivePage(
    chapters: Array<Page>,
    index: number,
    current: number,
    media?: MediaQueryList
  ): boolean {
    if (media?.matches === false) {
      return index === current
    } else {
      if (!showPage1Shortcut(current, media)) {
        if (current === 0) {
          return (
            index === current ||
            index === current + 1 ||
            index === current + 2 ||
            index === current + 3 ||
            index === current + 4
          )
        }
        return (
          index === current ||
          index === current - 1 ||
          index === current + 1 ||
          index === current + 2 ||
          index === current + 3
        )
      } else if (!showLastPageShortcut(chapters, current, media)) {
        if (current === chapters.length - 1) {
          return (
            index === current ||
            index === current - 1 ||
            index === current - 2 ||
            index === current - 3 ||
            index === current - 4
          )
        }
        return (
          index === current ||
          index === current - 1 ||
          index === current + 1 ||
          index === current - 2 ||
          index === current - 3
        )
      }
      return index === current || index === current - 1 || index === current + 1
    }
  }
</script>

{#if pages.length > 1}
  <nav class="mt-pagination {className}" aria-label={paginationLabel}>
    {#if !media?.matches}
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
      {#if showPage1Shortcut(currentPageIndex, media)}
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
        {#if isActivePage(pages, index, currentPageIndex, media)}
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
      {#if showLastPageShortcut(pages, currentPageIndex, media)}
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
    {#if media?.matches === true}
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
      class="mt-link next-link {!hasNextPage(currentPageIndex)
        ? 'inclusively-hidden--fit-content'
        : ''}"
      aria-disabled={!hasNextPage(currentPageIndex)}>
      {nextText}
    </a>
  </nav>
{/if}
