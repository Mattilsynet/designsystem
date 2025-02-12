<script lang="ts">
  import { interpolate } from '$lib/ts'
  import { innerWidth } from 'svelte/reactivity/window'
  import { styles, pagination } from '@mattilsynet/design'

  const PAGINATION_BREAKPOINT = 1024 // $breakpoint-x-large
  const ALLOWED_PAGES_DESKTOP = 7
  const ALLOWED_PAGES_MOBILE = 5

  interface Props {
    nextText?: string
    previousText?: string
    paginationLabel?: string
    toPageTitle?: string
    pages?: Array<{ url: string; index?: number }> // TODO: According to `import type { Page } from '$lib/ts'`, `index` is required, but it is never used?
    currentPageIndex?: number
    class?: string
    onPageChange?: (index: number, event: Event) => void
  }

  let {
    nextText = 'Neste',
    previousText = 'Forrige',
    paginationLabel = 'Paginering',
    toPageTitle = 'Gå til side {0} av {1}',
    pages: pagesRaw = [],
    currentPageIndex = 0,
    class: className = '',
    onPageChange
  }: Props = $props()

  const isMobile = $derived(innerWidth.current ? innerWidth.current < PAGINATION_BREAKPOINT : false)
  const { next, prev, pages } = $derived(pagination({
    current: currentPageIndex + 1,
    total: pagesRaw.length,
    show: isMobile ? ALLOWED_PAGES_MOBILE : ALLOWED_PAGES_DESKTOP
  }));
</script>

{#if pages.length > 1}
  <nav class="{styles.pagination} {className}" aria-label={paginationLabel} data-size="md">
    <ul>
      <li>
        <a
          aria-disabled={!prev}
          aria-label={previousText}
          class={styles.button}
          href={prev ? pagesRaw[prev - 1].url : undefined}
          onclick={event => onPageChange?.(prev - 1, event)}>
        </a>
      </li>
      {#each pages as { page, current }}
        <li>
          {#if page}
            <a
              aria-current={current}
              aria-label={interpolate(toPageTitle, [`${page}`, String(pagesRaw.length)])}
              class={styles.button}
              href={pagesRaw[page - 1].url}
              onclick={event => onPageChange?.(page - 1, event)}>
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
          onclick={event => onPageChange?.(next - 1, event)}>
        </a>
      </li>
    </ul>
  </nav>
{/if}
