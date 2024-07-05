<script lang="ts">
  let htmlFor: string
  export { htmlFor as for }
  let className = ''
  export { className as class }
  export let textOptional: string | undefined = 'Valgfritt'
  export let isRequired: boolean | undefined = undefined
  export let showOptionalText = true
</script>

<label class="mt-label {className}" id="{htmlFor}-label" for={htmlFor}>
  <slot />
  {#if !isRequired && showOptionalText}
    <span class="tag info tag-text">{textOptional}</span>
  {/if}
</label>
