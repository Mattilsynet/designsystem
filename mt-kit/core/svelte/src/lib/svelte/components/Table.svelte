<script lang="ts">
  interface Props {
    captionClass?: string
    class?: string
    style?: string
    caption?: string
    headers?: Array<Record<string, unknown>>
    rows?: Array<Record<string, unknown>>
    headersSlot?: import('svelte').Snippet<[Record<string, unknown>]>
    rowSlot?: import('svelte').Snippet<[Record<string, unknown>]>
  }

  let {
    captionClass = '',
    style = '',
    caption = '',
    headers = [{}],
    rows = [{}],
    headersSlot,
    rowSlot,
    class: className = ''
  }: Props = $props()
</script>

{#if caption}
  <caption class={captionClass}>
    {caption}
  </caption>
{/if}
<table class="mt-table responsive-table {className}" id="table-{caption}" {style}>
  <thead class="mt-thead">
    <tr class="mt-tr">
      {#each headers as header}
        {@render headersSlot?.(header)}
      {/each}
    </tr>
  </thead>
  <tbody class="mt-tbody">
    {#each rows as row}
      {@render rowSlot?.(row)}
    {/each}
  </tbody>
</table>
