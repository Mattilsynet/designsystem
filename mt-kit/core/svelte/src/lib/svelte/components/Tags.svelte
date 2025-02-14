<script lang="ts">
  import { styles } from '@mattilsynet/design'

  interface Props {
    tags?: Array<{ text: string; ariaLabel: string; color: TagColors }>
    isClosable?: boolean
  }

  let { tags = $bindable([]), isClosable = false }: Props = $props()
  type TagColors = 'info' | 'success' | 'warning' | 'error' | 'neutral'

  function handleClick(index: number) {
    tags = tags.filter((_, tagIndex) => tagIndex !== index)
  }
</script>

<ul class={styles.flex} data-size="sm">
  {#each tags as tag, index}
    {#if isClosable}
      <li>
        <button
          class={styles.chip}
          data-removable="true"
          onclick={() => handleClick(index)}
          aria-label={tag.ariaLabel}>
          {tag.text}
        </button>
      </li>
    {:else}
      <li class={styles.tag} data-icon="false" data-color={tag.color?.replace('error', 'danger')}>
        {tag.text}
      </li>
    {/if}
  {/each}
</ul>
