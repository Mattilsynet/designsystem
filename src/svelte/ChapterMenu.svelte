<script lang="ts">
  import {createEventDispatcher} from 'svelte';
  import {toKebabCase} from '../ts/utils';
  export let chapters: Array<{
    heading: string;
    index: number;
  }>;
  export let currentChapterNumber = 0;
  export let basePath: string;
  export let menuTitle: string;

  const dispatch = createEventDispatcher();
</script>

<nav class="chapter-menu" aria-labelledby="chapter-menu-title">
  <h3 id="chapter-menu-title" class="h4">{menuTitle}</h3>

  <ol class="list-unstyled">
    {#each chapters as chapter}
      <li>
        <a
          on:click|preventDefault={dispatch('chapterChange', {index: chapter.index})}
          href="{basePath}?kapittel={chapter.index}-{toKebabCase(chapter.heading)}"
          aria-current={chapter.index === currentChapterNumber ? 'page' : undefined}
        >
          {chapter.heading}
        </a>
      </li>
    {/each}
  </ol>
</nav>
