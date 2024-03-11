<script lang="ts">
  import type { Chapter, ChapterChangeDetails } from '../../ts/types'
  import { createEventDispatcher } from 'svelte'
  import { interpolate } from '../../../../.svelte-kit/__package__/ts/utils'
  export let nextText = ''
  export let previousText = ''
  export let paginationLabel = 'Pagination'
  export let labelPage = 'Side'
  export let toPageTitle = 'Gå til side {0}'
  export let chapters: Array<Chapter> = []
  export let currentChapterIndex: 0 | 1 = 0
  export let startIndex = 0
  let className = ''
  export { className as class }
  $: {
    console.log(currentChapterIndex)
  }
  $: nextChapterIndex = currentChapterIndex + 1
  $: nextChapterNumber = nextChapterIndex + startIndex
  $: nextChapter = chapters[nextChapterIndex]
  $: previousChapterIndex = currentChapterIndex - 1
  $: previousChapterNumber = previousChapterIndex + startIndex
  $: previousChapter = chapters[previousChapterIndex]

  function hasNextChapter(currentChapterNumber: number): boolean {
    return currentChapterNumber < chapters.length - 1
  }

  function hasPreviousChapter(currentChapterNumber: number): boolean {
    return currentChapterNumber > 0
  }

  const dispatch = createEventDispatcher<{ chapterChange: ChapterChangeDetails }>()
  function handleClick(index: number): void {
    dispatch('chapterChange', { index: index })
  }
</script>

{#if chapters.length > 1}
  <nav class="chapter-navigation {className}" aria-label={paginationLabel}>
    <ul class="mt-ul list-unstyled">
      <li
        class="mt-li {!hasPreviousChapter(currentChapterIndex)
          ? 'inclusively-hidden-initial'
          : ''}">
        <a
          href={previousChapter ? previousChapter.url : undefined}
          class="mt-link previous-link"
          title={previousText}
          aria-label={previousText}
          on:click|preventDefault={() => handleClick(previousChapterIndex)}
          aria-disabled={!hasPreviousChapter(currentChapterIndex)}>
        </a>
      </li>
      {#each chapters as chapter, index}
        <li class="mt-li">
          <a
            href={chapter.url}
            class="mt-link"
            title={interpolate(toPageTitle, [index + 1])}
            aria-current={index === currentChapterIndex ? 'page' : undefined}
            on:click|preventDefault={() => handleClick(index)}>
            <span class="inclusively-hidden-initial">{labelPage}</span>
            {index + 1}
          </a>
        </li>
      {/each}
      <li class="mt-li {!hasNextChapter(currentChapterIndex) ? 'inclusively-hidden-initial' : ''}">
        <a
          href={nextChapter ? nextChapter.url : undefined}
          on:click|preventDefault={() => handleClick(nextChapterIndex)}
          title={nextText}
          aria-label={nextText}
          class="mt-link next-link"
          aria-disabled={!hasNextChapter(currentChapterIndex)}>
          <span class="next-link"></span>
        </a>
      </li>
    </ul>
  </nav>
{/if}
