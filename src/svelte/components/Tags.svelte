<script lang="ts">
  export let tags: Array<{text: string; ariaLabel: string; color: string; size: string}> = []
  export let isClosable = false

  function handleClick(index: number) {
    tags = tags.filter((tag, tagIndex) => {
      return tagIndex !== index
    })
  }
</script>

<ul class="list-unstyled tags">
  {#each tags as tag, i}
    <li
      class={`${tag.size} ${tag.color} ${isClosable ? 'tag-list-item' : 'tag-list-item tag-text'}`}>
      {#if isClosable}
        <button
          class="button button--secondary button--small closable m-r-0 m-t-0"
          on:click={() => {
            handleClick(i)
          }}
          aria-label={tag.ariaLabel}>
          {tag.text}
        </button>
      {:else}
        {tag.text}
      {/if}
    </li>
  {/each}
</ul>

<style>
  .lightblue {
    background-color: var(--color-mt-rationale-blue);
    border: 1px solid var(--color-mt-blue-medium);
  }

  .yellowgreen {
    background-color: var(--color-mt-yellowgreen-lighter);
    border: 1px solid var(--color-mt-yellowgreen);
  }
  .beige {
    background-color: var(--color-mt-light-beige);
    border: 1px solid var(--color-mt-beige);
  }

  .medium {
    padding: 4px 12px;
  }
</style>
