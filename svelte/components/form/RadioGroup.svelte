<script>import InputError from "./InputErrorMessage.svelte";
import { createInputAriaDescribedby, toKebabCase } from "../../../ts/utils";
import { beforeUpdate } from "svelte";
export let value;
export let name;
export let label;
export let helpText;
export let error;
export let options = [];
export let isRequired = void 0;
export let textOptional = "(valgfritt felt)";
export let hiddenErrorText;
export let loadJs = false;
export let theme = "radio";
let className = "";
export { className as class };
let isInitialized = false;
beforeUpdate(() => {
  if (value === void 0 && !isInitialized && document) {
    value = document?.querySelector(`input[name="${name}"]:checked`)?.value;
    isInitialized = true;
  }
});
</script>

<fieldset
  id={name}
  aria-describedby={createInputAriaDescribedby(helpText ? name : undefined, error)}
  class="mt-fieldset form-fieldset {theme === 'radio' ? 'radio' : ''} {theme === 'button'
    ? 'mt-button-radio'
    : ''} {className}">
  <legend class="mt-legend form-legend">
    {label}
    {#if !isRequired}
      <span class="text-small">{textOptional}</span>
    {/if}
  </legend>

  {#if helpText}
    <div id={`${name}-hint`} class="hint">
      {@html helpText}
    </div>
  {/if}

  {#if error}
    <InputError {...error} {hiddenErrorText} />
  {/if}

  {#each options as radio (radio.value)}
    <div class="form-control">
      <input
        type="radio"
        id={toKebabCase(radio.value)}
        {name}
        class="mt-input input__control"
        class:error
        bind:group={value}
        value={radio.value}
        aria-required={isRequired}
        aria-describedby={createInputAriaDescribedby(helpText ? name : undefined, error)}
        checked={value === radio.value} />
      <label
        class="mt-label {theme === 'button' ? 'mt-button mt-button--secondary' : ''}"
        for={toKebabCase(radio.value)}>
        {radio.text}
      </label>
    </div>
  {/each}
</fieldset>
