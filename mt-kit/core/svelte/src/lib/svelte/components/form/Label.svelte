<script lang="ts">
  let htmlFor: string
  export { htmlFor as for }
  let className = ''
  export { className as class }
  export let textOptional: string | undefined = 'valgfritt felt'
  export let isRequired: boolean | undefined = undefined
  export let showOptionalText = true
</script>

<label class="form-label {className}" for={htmlFor}>
  <slot />
  {#if !isRequired && showOptionalText}
    <span class="text-small">({textOptional})</span>
  {/if}
</label>
