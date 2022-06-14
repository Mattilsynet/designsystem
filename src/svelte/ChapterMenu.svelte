<script lang="ts">
  import {createEventDispatcher} from 'svelte'
  import type {Chapter, ChapterChangeDetails} from '../ts/types'

  export let chapters: Array<Chapter>
  export let currentChapterNumber = 0
  export let menuTitle: string
  export let showChapterNumbers = false

  const dispatch = createEventDispatcher<{chapterChange: ChapterChangeDetails}>()
</script>

<nav class="chapter-menu" aria-labelledby="chapter-menu-title">
  <h3 id="chapter-menu-title" class="h4">{menuTitle}</h3>

  <ol class="list-unstyled">
    {#each chapters as chapter, index}
      <li>
        <a
          on:click|preventDefault={dispatch('chapterChange', {index: chapter.index})}
          href={chapter.url}
          aria-current={chapter.index === currentChapterNumber ? 'page' : undefined}>
          {#if showChapterNumbers}
            {index + 1}
          {/if}
          {chapter.heading}
        </a>
      </li>
    {/each}
  </ol>
</nav>
