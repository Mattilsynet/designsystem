<script lang="ts">
  let className = ''
  export { className as class }
  export let style = ''
  export let caption = ''
  export let headers: string[] = []
  export let rows: Array<{}> = [{}]
</script>

{#if caption}
  <caption class="m-t-m">
    {caption}
  </caption>
{/if}
<table class="mt-table responsive-table m-t-xxs {className}" id="table-{caption}" style={style}>
  <thead class="mt-thead">
    <tr class="mt-tr">
      {#each headers as header}
        <slot name="headers" {header} />
      {/each}
    </tr>
  </thead>
  <tbody class="mt-tbody">
    {#each rows as row}
      <slot name="row" {row} />
    {/each}
  </tbody>
</table>
