<script lang="ts">
  import { type Chapter, toKebabCase } from '$lib/ts'
  import ChapterMenuSubChapter from './ChapterMenuSubChapter.svelte'

  interface Props {
    chapters: Array<Chapter>
    currentChapterNumber?: number
    startIndex?: 0 | 1
    menuTitle: string
    showChapterNumbers?: boolean
    subChapterToggleAriaLabel?: string
    loadJs?: boolean
    onChapterChange?: (index: number) => void
  }

  let {
    chapters,
    currentChapterNumber = 0,
    startIndex = 0,
    menuTitle,
    showChapterNumbers = false,
    subChapterToggleAriaLabel = 'toggle',
    loadJs = false,
    onChapterChange
  }: Props = $props()
</script>

<nav class="chapter-menu" aria-labelledby="chapter-menu-title">
  <h2 id="chapter-menu-title" class="visually-hidden-focusable">{menuTitle}</h2>

  <ol class="mt-ol m-t-xxs list-unstyled">
    {#each chapters as chapter, index}
      {@const chapterIndex = index + startIndex}
      <li class="mt-li chapter-menu--chapter-wrapper">
        <a
          onclick={e => {
            e.preventDefault()
            if (onChapterChange) {
              onChapterChange(chapter.index)
            }
          }}
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
