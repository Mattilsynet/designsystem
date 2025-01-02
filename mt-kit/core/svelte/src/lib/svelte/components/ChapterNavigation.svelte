<script lang="ts">
  import type { Chapter } from '$lib/ts'

  interface Props {
    showChapterNumber?: boolean
    nextText?: string
    previousText?: string
    chapters?: Array<Chapter>
    currentChapterIndex?: number
    startIndex?: number
    class?: string
    chapterChange?: (index: number) => void
  }

  let {
    showChapterNumber = false,
    nextText = '',
    previousText = '',
    chapters = [],
    currentChapterIndex = 0,
    startIndex = 0,
    class: className = '',
    chapterChange
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

  const handleChapterChange = (e: MouseEvent, index: number) => {
    e.preventDefault()
    if (chapterChange) {
      chapterChange(index)
    }
  }
</script>

{#if chapters.length > 1}
  <nav class="chapter-navigation {className}">
    <a
      href={nextChapter ? nextChapter.url : undefined}
      onclick={e => handleChapterChange(e, nextChapterIndex)}
      class="multi-line text-align-right {!hasNextChapter(currentChapterIndex)
        ? 'inclusively-hidden-initial'
        : ''}"
      aria-disabled={!hasNextChapter(currentChapterIndex)}>
      <span class="next-link">{nextText}</span>
      {showChapterNumber ? `${nextChapterNumber}.` : ''}
      {nextChapter ? nextChapter.heading : ''}
    </a>
    <a
      href={previousChapter ? previousChapter.url : undefined}
      class="multi-line {!hasPreviousChapter(currentChapterIndex)
        ? 'inclusively-hidden-initial'
        : ''}"
      onclick={e => handleChapterChange(e, previousChapterIndex)}
      aria-disabled={!hasPreviousChapter(currentChapterIndex)}>
      <span class="previous-link">{previousText}</span>
      {showChapterNumber ? `${previousChapterNumber}.` : ''}
      {previousChapter ? previousChapter.heading : ''}
    </a>
  </nav>
{/if}
