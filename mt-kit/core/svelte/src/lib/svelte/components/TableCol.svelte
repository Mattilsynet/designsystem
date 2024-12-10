<script lang="ts">
  interface Props {
    class?: string
    header?: string
    children?: import('svelte').Snippet
  }

  let { class: className = '', header = '', children }: Props = $props()
</script>

<td class="mt-td text {className}" role="cell">
  <span class="responsive-table__heading" aria-hidden="true">
    {header}
  </span>
  {@render children?.()}
</td>
