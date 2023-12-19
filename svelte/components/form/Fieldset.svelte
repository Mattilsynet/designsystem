<script>import InputError from "./InputErrorMessage.svelte";
let className = "";
export { className as class };
export let legend = "";
export let error = null;
export let hiddenErrorText = false;
export let legendClass = "";
$:
  inputErrorId = error ? `${error.key}-error` : "";
$:
  fieldsetErrorClass = error ? "fieldset-error" : "";
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

  <slot />
</fieldset>
