<script lang="ts">
  import {createEventDispatcher} from 'svelte'

  export let tags = []
  const dispatch = createEventDispatcher()

  function handleClick(e) {
    dispatch('tagClicked', {
      tag: e.target.innerText
    })
  }
</script>

{#each tags as tag}
  <button class="button button--icon button--small closable" on:click={handleClick}>
    {tag.text}
  </button>
{/each}
