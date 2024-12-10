<script lang="ts">
  import { preventDefault } from 'svelte/legacy'

  import type { Chapter, ChapterChangeDetails } from '../../ts/types'
  import { createEventDispatcher } from 'svelte'

  interface Props {
    showChapterNumber?: boolean
    nextText?: string
    previousText?: string
    chapters?: Array<Chapter>
    currentChapterIndex?: 0 | 1
    startIndex?: number
    class?: string
  }

  let {
    showChapterNumber = false,
    nextText = '',
    previousText = '',
    chapters = [],
    currentChapterIndex = 0,
    startIndex = 0,
    class: className = ''
  }: Props = $props()

  let nextChapterIndex = $derived(currentChapterIndex + 1)
  let nextChapterNumber = $derived(nextChapterIndex + startIndex)
  let nextChapter = $derived(chapters[nextChapterIndex])
  let previousChapterIndex = $derived(currentChapterIndex - 1)
  let previousChapterNumber = $derived(previousChapterIndex + startIndex)
  let previousChapter = $derived(chapters[previousChapterIndex])

  function hasNextChapter(currentChapterNumber: number): boolean {
    return currentChapterNumber < chapters.length - 1
  }

  function hasPreviousChapter(currentChapterNumber: number): boolean {
    return currentChapterNumber > 0
  }

  const dispatch = createEventDispatcher<{ chapterChange: ChapterChangeDetails }>()
</script>

{#if chapters.length > 1}
  <nav class="chapter-navigation {className}">
    <a
      href={nextChapter ? nextChapter.url : undefined}
      onclick={preventDefault(dispatch('chapterChange', { index: nextChapterIndex }))}
      class="multi-line text-align-right {!hasNextChapter(currentChapterIndex)
        ? 'inclusively-hidden-initial'
        : ''}"
      aria-disabled={!hasNextChapter(currentChapterIndex)}
    >
      <span class="next-link">{nextText}</span>
      {showChapterNumber ? `${nextChapterNumber}.` : ''}
      {nextChapter ? nextChapter.heading : ''}
    </a>
    <a
      href={previousChapter ? previousChapter.url : undefined}
      class="multi-line {!hasPreviousChapter(currentChapterIndex)
        ? 'inclusively-hidden-initial'
        : ''}"
      onclick={preventDefault(dispatch('chapterChange', { index: previousChapterIndex }))}
      aria-disabled={!hasPreviousChapter(currentChapterIndex)}
    >
      <span class="previous-link">{previousText}</span>
      {showChapterNumber ? `${previousChapterNumber}.` : ''}
      {previousChapter ? previousChapter.heading : ''}
    </a>
  </nav>
{/if}
