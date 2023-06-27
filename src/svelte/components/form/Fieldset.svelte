<script lang="ts">
  import InputError from './InputErrorMessage.svelte'

  export let className = 'validation m-t-m'
  export let legend = ''
  export let error = null
  export let hiddenErrorText = false
  $: inputErrorId = error ? `${error.key}-error` : ''
  $: fieldsetError = !!error
</script>

<fieldset
  class={className}
  class:fieldsetError
  aria-invalid={!!error}
  aria-describedby={inputErrorId}
  data-testid="fieldset">
  <legend class="h2">
    {legend}
  </legend>

  {#if error}
    <InputError {...error} {hiddenErrorText} />
  {/if}

  <slot />
</fieldset>
