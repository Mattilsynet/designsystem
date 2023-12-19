<script>import { createEventDispatcher } from "svelte";
import { toKebabCase } from "../../ts/utils";
import ChapterMenuSubChapter from "./ChapterMenuSubChapter.svelte";
export let chapters;
export let currentChapterNumber = 0;
export let startIndex = 0;
export let menuTitle;
export let showChapterNumbers = false;
export let subChapterToggleAriaLabel = "toggle";
export let loadJs = true;
const dispatch = createEventDispatcher();
</script>

<nav class="chapter-menu" aria-labelledby="chapter-menu-title">
  <h2 id="chapter-menu-title" class="inclusively-hidden">{menuTitle}</h2>

  <ol class="mt-ol m-t-xxs list-unstyled">
    {#each chapters as chapter, index}
      {@const chapterIndex = index + startIndex}
      <li class="chapter-menu--chapter-wrapper">
        <a
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
