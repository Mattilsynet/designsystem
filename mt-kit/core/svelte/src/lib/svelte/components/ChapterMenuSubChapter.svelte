<script lang="ts">
  import type { Chapter } from '../../ts/types'
  import { onMount } from 'svelte'
  import { slide } from 'svelte/transition'

  export let showChapterNumbers = false
  export let parentIndex = 0
  export let subChapters: Array<Chapter> = []
  export let ariaLabel = 'toggle'
  export let loadJs = true
  let componentId = ''
  export { componentId as id }

  const SLIDE_DURATION: Readonly<number> = 500

  $: isOpen = true;
  $: onServer = true;

  if (loadJs) {
    onMount(() => {
      onServer = false;
      isOpen = false;
    });
  }
</script>

{#if subChapters.length > 0}
  {#if !onServer}
    <button
      class="mt-button mt-button--on-primary mt-icon-button icon--caret-down-after-on-primary m-r-0"
      aria-label={ariaLabel}
      aria-haspopup="true"
      aria-controls={componentId}
      aria-expanded={isOpen}
      on:click={() => {
        isOpen = !isOpen;
      }} />
  {/if}
  {#if isOpen || onServer}
    <ul
      transition:slide={{ duration: SLIDE_DURATION }}
      id={componentId}
      class="mt-ul list-unstyled m-t-0">
      {#each subChapters || [] as subChapter, subIndex}
        <li class="layout-flex layout-flex--no-wrap">
          <a href={subChapter.url} class="mt-link chapter-menu--subchapter">
            {#if showChapterNumbers}
              {parentIndex}.{subIndex + 1}.
            {/if}
            {subChapter.heading}
          </a>
        </li>
      {/each}
    </ul>
  {/if}
{/if}
