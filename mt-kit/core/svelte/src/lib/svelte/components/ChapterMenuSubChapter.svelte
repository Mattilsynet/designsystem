<script lang="ts">
  import type { Chapter } from '$lib/ts'
  import { onMount } from 'svelte'
  import { slide } from 'svelte/transition'

  interface Props {
    showChapterNumbers?: boolean
    parentIndex?: number
    subChapters?: Array<Chapter>
    ariaLabel?: string
    loadJs?: boolean
    id?: string
  }

  let {
    showChapterNumbers = false,
    parentIndex = 0,
    subChapters = [],
    ariaLabel = 'toggle',
    loadJs = false,
    id: componentId = ''
  }: Props = $props()

  const SLIDE_DURATION: Readonly<number> = 500

  let isOpen = $state(true)
  let onServer = $state(true)

  if (loadJs) {
    onMount(() => {
      onServer = false
      isOpen = false
    })
  }

  function handleButtonClick(): void {
    isOpen = !isOpen
  }
</script>

{#if subChapters.length > 0}
  {#if !onServer}
    <button
      class="mt-button mt-button--on-primary mt-icon-button icon--caret-down-after-on-primary m-r-0"
      aria-label={ariaLabel}
      aria-haspopup="true"
      aria-controls={componentId}
      aria-expanded={isOpen}
      onclick={handleButtonClick}></button>
  {/if}
  {#if isOpen || onServer}
    <ul
      transition:slide={{ duration: SLIDE_DURATION }}
      id={componentId}
      class="mt-ul list-unstyled m-t-0">
      {#each subChapters || [] as subChapter, subIndex}
        <li class="layout-flex layout-flex--no-wrap">
          <a href={subChapter.url} class="mt-link chapter-menu--subchapter">
            {#if showChapterNumbers}
              {parentIndex}.{subIndex + 1}.
            {/if}
            {subChapter.heading}
          </a>
        </li>
      {/each}
    </ul>
  {/if}
{/if}
