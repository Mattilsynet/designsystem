<script lang="ts">
  import InputError from './InputErrorMessage.svelte'

  
  interface Props {
    class?: string;
    legend?: string;
    error?: any;
    hiddenErrorText?: boolean;
    legendClass?: string;
    children?: import('svelte').Snippet;
  }

  let {
    class: className = '',
    legend = '',
    error = null,
    hiddenErrorText = false,
    legendClass = '',
    children
  }: Props = $props();
  let inputErrorId = $derived(error ? `${error.key}-error` : '')
  let fieldsetErrorClass = $derived(error ? 'fieldset-error' : '')
</script>

<fieldset
  class="mt-fieldset layout-flex layout-flex-col {className} {fieldsetErrorClass} "
  aria-invalid={!!error}
  aria-describedby={inputErrorId}
  data-testid="fieldset"
  style="--gap: 0">
  <legend class="mt-legend {legendClass}">
    {legend}
  </legend>

  {#if error}
    <InputError {...error} {hiddenErrorText} />
  {/if}

  {@render children?.()}
</fieldset>
