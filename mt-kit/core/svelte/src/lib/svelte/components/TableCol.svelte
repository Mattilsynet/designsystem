<script lang="ts">
  let className = ''
  export { className as class }
  export let header = ''
</script>

<td class="mt-td text {className}" role="cell">
  <span class="responsive-table__heading" aria-hidden="true">
    {header}
  </span>
  <slot />
</td>
