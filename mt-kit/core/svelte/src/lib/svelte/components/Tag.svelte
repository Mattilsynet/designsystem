<script lang="ts">
  import type { Snippet } from 'svelte'
  import { styles } from '@mattilsynet/design'

  interface Props {
    'data-color'?: 'info' | 'success' | 'warning' | 'danger' | 'neutral'
    'data-size'?: 'sm' | 'md' | 'lg' // Default to sm since mattilsynet-web uses a lot of lg
    'data-icon'?: true | false
    class?: string
    children?: Snippet
    [key: string]: unknown
  }

  let { class: className = '', 'data-size': size = 'sm', children, ...rest }: Props = $props()
</script>

<span class="{styles.tag} {className}" data-size={size} {...rest}>
  {@render children?.()}
</span>
