<script lang="ts">
  import type { Snippet } from 'svelte'
  import Tag from '../Tag.svelte'

  interface Props {
    for: string
    class?: string
    textOptional?: string
    isRequired?: boolean
    showOptionalText?: boolean
    children?: Snippet
  }

  let {
    for: htmlFor,
    class: className = '',
    textOptional = 'Valgfritt',
    isRequired,
    showOptionalText = true,
    children
  }: Props = $props()
</script>

<label class="mt-label {className}" id="{htmlFor}-label" for={htmlFor}>
  {@render children?.()}
  {#if !isRequired && showOptionalText}
    <Tag data-icon={false} data-color="info">{textOptional}</Tag>
  {/if}
</label>
