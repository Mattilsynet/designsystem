<script>import { createEventDispatcher } from "svelte";
export let showChapterNumber = false;
export let nextText = "";
export let previousText = "";
export let chapters = [];
export let currentChapterIndex = 0;
export let startIndex = 0;
let className = "";
export { className as class };
$:
  nextChapterIndex = currentChapterIndex + 1;
$:
  nextChapterNumber = nextChapterIndex + startIndex;
$:
  nextChapter = chapters[nextChapterIndex];
$:
  previousChapterIndex = currentChapterIndex - 1;
$:
  previousChapterNumber = previousChapterIndex + startIndex;
$:
  previousChapter = chapters[previousChapterIndex];
function hasNextChapter(currentChapterNumber) {
  return currentChapterNumber < chapters.length - 1;
}
function hasPreviousChapter(currentChapterNumber) {
  return currentChapterNumber > 0;
}
const dispatch = createEventDispatcher();
</script>

{#if chapters.length > 1}
  <nav class="chapter-navigation {className}">
    <a
      href={nextChapter ? nextChapter.url : undefined}
      on:click|preventDefault={dispatch('chapterChange', { index: nextChapterIndex })}
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
      on:click|preventDefault={dispatch('chapterChange', { index: previousChapterIndex })}
      aria-disabled={!hasPreviousChapter(currentChapterIndex)}>
      <span class="previous-link">{previousText}</span>
      {showChapterNumber ? `${previousChapterNumber}.` : ''}
      {previousChapter ? previousChapter.heading : ''}
    </a>
  </nav>
{/if}
