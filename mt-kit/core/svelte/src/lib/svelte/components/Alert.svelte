<script lang="ts">
  import type { Snippet } from 'svelte'
  import { styles } from '@mattilsynet/design'

  interface Props {
    class?: string
    severity?: 'info' | 'success' | 'warning' | 'danger'
    children?: Snippet
    [key: string]: unknown
  }

  let { class: className = '', severity = 'info', children, ...rest }: Props = $props()
</script>

<div class="{styles.alert} {className}" data-color={severity} {...rest}>
  {@render children?.()}
</div>
