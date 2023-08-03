<script lang="ts">
  import InputError from './InputErrorMessage.svelte'

  export let className = 'validation m-t-m'
  export let legend = ''
  export let error = null
  export let hiddenErrorText = false
  export let legendClass = ''
  $: inputErrorId = error ? `${error.key}-error` : ''
  $: fieldsetErrorClass = !!error ? 'fieldset-error' : ''
</script>

<fieldset
  class="{className} {fieldsetErrorClass}"
  aria-invalid={!!error}
  aria-describedby={inputErrorId}
  data-testid="fieldset"
>
  <legend class={legendClass}>
    {legend}
  </legend>

  {#if error}
    <InputError {...error} {hiddenErrorText} />
  {/if}

  <slot />
</fieldset>
