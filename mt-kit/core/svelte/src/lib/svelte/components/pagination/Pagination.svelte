<script lang="ts">
  import { interpolate } from '$lib/ts'
  import { innerWidth } from 'svelte/reactivity/window'
  import { styles, pagination } from '@mattilsynet/design'

  const PAGINATION_BREAKPOINT = 1024 // $breakpoint-x-large
  const ALLOWED_PAGES_DESKTOP = 5
  const ALLOWED_PAGES_MOBILE = 3

  interface Props {
    nextText?: string
    previousText?: string
    paginationLabel?: string
    toPageTitle?: string
    pages?: Array<{ url: string; index?: number }> // TODO: According to "import type { Page } from '$lib/ts'", index is required, but it is never used?
    currentPageIndex?: number
    class?: string
    onPageChange?: (index: number) => void
  }

  let {
    nextText = 'Neste',
    previousText = 'Forrige',
    paginationLabel = 'Paginering',
    toPageTitle = 'Gå til side {0} av {1}',
    pages: pagesRaw = [],
    currentPageIndex = 0,
    class: className = '',
    onPageChange = _ => {}
  }: Props = $props()

  const isMobile = $derived(innerWidth.current ? innerWidth.current < PAGINATION_BREAKPOINT : false)
  const { next, prev, pages } = $derived(pagination({
    current: currentPageIndex + 1,
    total: pagesRaw.length,
    show: isMobile ? ALLOWED_PAGES_MOBILE : ALLOWED_PAGES_DESKTOP
  }));

  function handleClick(event: Event, index: number): void {
    console.log(event);
    event.preventDefault()
    onPageChange(index)
  }
</script>

{console.log({ next, prev, pages })}
{#if pages.length > 1}
  <nav class="{styles.pagination} {className}" aria-label={paginationLabel} data-size="md">
    <ul>
      <li>
        <a
          aria-disabled={!prev}
          aria-label={previousText}
          class={styles.button}
          href={prev ? pagesRaw[prev - 1].url : undefined}
          onclick={event => handleClick(event, prev - 1)}>
        </a>
      </li>
      {#each pages as { page, current }, index}
        <li>
          {#if page}
            <a
              aria-current={current}
              aria-label={interpolate(toPageTitle, [`${page}`, String(pagesRaw.length)])}
              class={styles.button}
              href={pagesRaw[page - 1].url}
              onclick={event => handleClick(event, index)}>
              {page}
            </a>
          {/if}
        </li>
      {/each}
      <li>
        <a
          aria-disabled={!next}
          aria-label={nextText}
          class={styles.button}
          href={next ? pagesRaw[next - 1].url : undefined}
          onclick={event => handleClick(event, next - 1)}>
        </a>
      </li>
    </ul>
  </nav>
{/if}
