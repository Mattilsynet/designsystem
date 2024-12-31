<script lang="ts">
  let className = ''
  export { className as class }
  export let captionClass = ''
  export let style = ''
  export let caption = ''
  export let headers: Array<{}> = [{}]
  export let rows: Array<{}> = [{}]
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
        <slot name="headersSlot" {header} />
      {/each}
    </tr>
  </thead>
  <tbody class="mt-tbody">
    {#each rows as row}
      <slot name="rowSlot" {row} />
    {/each}
  </tbody>
</table>
