<script lang="ts">
  interface Props {
    tags?: Array<{ text: string; ariaLabel: string; color: TagColors }>
    isClosable?: boolean
  }

  let { tags = $bindable([]), isClosable = false }: Props = $props()
  type TagColors = 'info' | 'success' | 'warning' | 'error' | 'neutral'

  function handleClick(index: number) {
    tags = tags.filter((_, tagIndex) => {
      return tagIndex !== index
    })
  }
</script>

<ul class="mt-ul m-t-xxs list-unstyled tags">
  {#each tags as tag, i}
    <li
      class={`${tag.color ? tag.color : ''} ${
        isClosable ? 'tag-list-item' : 'tag-list-item tag-text'
      }`}>
      {#if isClosable}
        <button
          class="mt-button mt-button--secondary mt-button--small closable m-r-0 m-t-0"
          onclick={() => {
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
