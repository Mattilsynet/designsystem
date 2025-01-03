<script lang="ts">
  import type { Snippet } from 'svelte'

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
    isRequired = undefined,
    showOptionalText = true,
    children
  }: Props = $props()
</script>

<label class="mt-label {className}" id="{htmlFor}-label" for={htmlFor}>
  {@render children?.()}
  {#if !isRequired && showOptionalText}
    <span class="tag info tag-text">{textOptional}</span>
  {/if}
</label>
