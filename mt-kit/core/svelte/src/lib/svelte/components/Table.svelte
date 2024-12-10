<!-- @migration-task Error while migrating Svelte code: This migration would change the name of a slot making the component unusable -->
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
