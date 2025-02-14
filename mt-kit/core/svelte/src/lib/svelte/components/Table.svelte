<script lang="ts">
  import type { Snippet } from 'svelte'
  import { styles } from '@mattilsynet/design'
  interface Props {
    captionClass?: string
    class?: string
    style?: string
    caption?: string
    headers?: Array<Record<string, unknown>>
    rows?: Array<Record<string, unknown>>
    headersSlot?: Snippet<[Record<string, unknown>]>
    rowSlot?: Snippet<[Record<string, unknown>]>
  }

  let {
    captionClass = '',
    style = '',
    caption = '',
    headers = [],
    rows = [],
    headersSlot,
    rowSlot,
    class: className = ''
  }: Props = $props()
</script>

<table class="{styles.table} {className}" data-fixed data-mobile="stacked" data-size="sm" {style}>
  {#if caption}
    <caption class={captionClass}>
      {caption}
    </caption>
  {/if}
  <thead>
    <tr>
      {#each headers as header}
        {@render headersSlot?.(header)}
      {/each}
    </tr>
  </thead>
  <tbody>
    {#each rows as row}
      {@render rowSlot?.(row)}
    {/each}
  </tbody>
</table>
