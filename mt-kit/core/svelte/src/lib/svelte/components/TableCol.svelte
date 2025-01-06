<script lang="ts">
  import type { Snippet } from 'svelte'

  interface Props {
    class?: string
    header?: string
    children?: Snippet
  }

  let { class: className = '', header = '', children }: Props = $props()
</script>

<td class="mt-td text {className}" role="cell">
  <span class="responsive-table__heading" aria-hidden="true">
    {header}
  </span>
  {@render children?.()}
</td>
