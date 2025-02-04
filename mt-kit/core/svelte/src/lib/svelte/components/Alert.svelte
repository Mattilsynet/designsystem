<script lang="ts">
  import type { Snippet } from 'svelte'
  import { styles } from '@mattilsynet/design'

  export type AlertProps = {
    'data-color'?: 'info' | 'success' | 'warning' | 'danger'
    class?: string
    children?: Snippet
    [key: string]: unknown
  }

  let { class: className = '', children, ...rest }: AlertProps = $props()
</script>

<div class="{styles.alert} {className}" {...rest}>
  {@render children?.()}
</div>
