<script lang="ts">
  import { preventDefault } from 'svelte/legacy';

  import { createEventDispatcher } from 'svelte'
  import type { Chapter, ChapterChangeDetails } from '../../ts/types'
  import { toKebabCase } from '../../ts/utils'
  import ChapterMenuSubChapter from './ChapterMenuSubChapter.svelte'

  interface Props {
    chapters: Array<Chapter>;
    currentChapterNumber?: number;
    startIndex?: 0 | 1;
    menuTitle: string;
    showChapterNumbers?: boolean;
    subChapterToggleAriaLabel?: string;
    loadJs?: boolean;
  }

  let {
    chapters,
    currentChapterNumber = 0,
    startIndex = 0,
    menuTitle,
    showChapterNumbers = false,
    subChapterToggleAriaLabel = 'toggle',
    loadJs = false
  }: Props = $props();

  const dispatch = createEventDispatcher<{ chapterChange: ChapterChangeDetails }>()
</script>

<nav class="chapter-menu" aria-labelledby="chapter-menu-title">
  <h2 id="chapter-menu-title" class="visually-hidden-focusable">{menuTitle}</h2>

  <ol class="mt-ol m-t-xxs list-unstyled">
    {#each chapters as chapter, index}
      {@const chapterIndex = index + startIndex}
      <li class="mt-li chapter-menu--chapter-wrapper">
        <a
          onclick={preventDefault(dispatch('chapterChange', { index: chapter.index }))}
          href={chapter.url}
          aria-current={chapterIndex === currentChapterNumber ? 'page' : undefined}>
          {#if showChapterNumbers && chapterIndex > 0}
            {index + startIndex}.
          {/if}
          {@html chapter.heading}
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
