<script lang="ts">
  export let tags: Array<{text: string; ariaLabel: string}> = []
  export let isClosable = false

  function handleClick(index: number) {
    tags = tags.filter((tag, ind) => {
      return ind !== index
    })
  }
</script>

<ul class="list-unstyled tags">
  {#each tags as tag, i}
    <li class={isClosable ? 'tag-list-item' : 'tag-list-item tag-text'}>
      {#if isClosable}
        <span class="inclusively-hidden">{tag.text}</span>
        <button
          class="button button--icon button--small closable m-r-0 m-t-0"
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
