<script lang="ts">
  import type { Chapter } from '../../ts/types'
  import { useMachine } from '@xstate/svelte'
  import { onMount } from 'svelte'
  import { slide } from 'svelte/transition'
  import { createToggleMachine } from '../../ts/toggle-machine'
  export let showChapterNumbers = false
  export let parentIndex = 0
  export let subChapters: Array<Chapter> = []
  export let ariaLabel = 'toggle'
  export let loadJs = true
  let componentId = ''
  export { componentId as id }

  const SLIDE_DURATION: Readonly<number> = 500

  const subChapterMachine = createToggleMachine(`ChapterMenuSubSChapterMachine-${parentIndex}`)
  const { state, send } = useMachine(subChapterMachine)

  $: isOpen = $state.context.isOpen
  $: onServer = $state.value === 'serverRendered'

  if (loadJs) {
    onMount(() => send('MOUNTED'))
  }
</script>

{#if subChapters.length > 0}
  {#if !onServer}
    <button
      class="button button--on-primary icon-button icon--caret-down-after-on-primary m-r-0"
      aria-label={ariaLabel}
      aria-haspopup="true"
      aria-controls={componentId}
      aria-expanded={isOpen}
      on:click={() => {
        send('TOGGLE')
      }}
    />
  {/if}
  {#if isOpen || onServer}
    <ul
      transition:slide={{ duration: SLIDE_DURATION }}
      id={componentId}
      class="list-unstyled m-t-0"
    >
      {#each subChapters || [] as subChapter, subIndex}
        <li class="layout-flex layout-flex--no-wrap">
          <a href={subChapter.url} class="chapter-menu--subchapter">
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
