<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import type { Chapter, ChapterChangeDetails } from '../../ts/types'
  import { toKebabCase } from '../../ts/utils'
  import ChapterMenuSubChapter from './ChapterMenuSubChapter.svelte'

  export let chapters: Array<Chapter>
  export let currentChapterNumber = 0
  export let startIndex: 0 | 1 = 0
  export let menuTitle: string
  export let showChapterNumbers = false
  export let subChapterToggleAriaLabel = 'toggle'
  export let loadJs = true

  const dispatch = createEventDispatcher<{ chapterChange: ChapterChangeDetails }>()
</script>

<nav class="chapter-menu" aria-labelledby="chapter-menu-title">
  <h2 id="chapter-menu-title" class="h4">{menuTitle}</h2>

  <ol class="list-unstyled">
    {#each chapters as chapter, index}
      {@const chapterIndex = index + startIndex}
      <li class="chapter-menu--chapter-wrapper">
        <a
          class="mt-link"
          on:click|preventDefault={dispatch('chapterChange', { index: chapter.index })}
          href={chapter.url}
          aria-current={chapterIndex === currentChapterNumber ? 'page' : undefined}>
          {#if showChapterNumbers && chapterIndex > 0}
            {index + startIndex}.
          {/if}
          {chapter.heading}
        </a>
        <ChapterMenuSubChapter
          id={`${toKebabCase(chapter.heading)}-${index}`}
          {showChapterNumbers}
          {loadJs}
          ariaLabel={subChapterToggleAriaLabel}
          parentIndex={index + startIndex}
          subChapters={chapter.subChapters} />
      </li>
    {/each}
  </ol>
</nav>
