<script lang="ts">
  import InputError from './InputErrorMessage.svelte'
  import type { Snippet } from 'svelte'
  import type { ErrorDetail } from '$lib/ts'

  interface Props {
    class?: string
    legend?: string
    error?: ErrorDetail
    hiddenErrorText?: string
    legendClass?: string
    children?: Snippet
  }

  let {
    class: className = '',
    legend = '',
    error,
    hiddenErrorText,
    legendClass = '',
    children
  }: Props = $props()
  let inputErrorId = $derived(error ? `${error.key}-error` : '')
  let fieldsetErrorClass = $derived(error ? 'fieldset-error' : '')
</script>

<fieldset
  class="mt-fieldset layout-flex layout-flex-col {className} {fieldsetErrorClass} "
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
