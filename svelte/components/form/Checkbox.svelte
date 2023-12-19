<script>import { beforeUpdate } from "svelte";
import InputError from "./InputErrorMessage.svelte";
import { createInputAriaDescribedby, toKebabCase } from "../../../ts/utils";
export let value = [];
export let name;
export let label;
export let error;
export let helpText;
export let options = [];
export let isRequired = void 0;
export let textOptional = "(valgfitt felt)";
export let hiddenErrorText;
export let onChange = () => {
};
export let theme = "checkbox";
let className = "";
export { className as class };
let isInitialized = false;
beforeUpdate(() => {
  if (value.length === 0 && !isInitialized && document) {
    value = Array.from(document?.querySelectorAll(`input[name="${name}"]:checked`)).map((item) => {
      return item.value;
    });
    isInitialized = true;
  }
});
</script>

<fieldset
  id={name}
  aria-describedby={createInputAriaDescribedby(helpText ? name : undefined, error)}
  aria-required={isRequired || undefined}
  class="mt-fieldset form-fieldset {theme === 'checkbox' ? 'checkbox' : ''} {theme === 'button'
    ? 'mt-button-checkbox'
    : ''} {className}">
  <legend class="mt-legend form-legend">
    {label}
    {#if !isRequired}
      <span class="text-small">{textOptional}</span>
    {/if}
  </legend>

  {#if helpText}
    <div class="hint">
      {@html helpText}
    </div>
  {/if}

  {#if error}
    <InputError {...error} {hiddenErrorText} />
  {/if}

  {#each options as checkbox (checkbox.value)}
    <div class="form-control">
      <input
        type="checkbox"
        id={toKebabCase(checkbox.value)}
        {name}
        class="mt-input input__control"
        class:error
        value={checkbox.value}
        bind:group={value}
        aria-required={isRequired}
        on:change={onChange}
        aria-describedby={createInputAriaDescribedby(helpText ? name : undefined, error)} />
      <label
        class="mt-label {theme === 'button' ? 'mt-button mt-button--secondary' : ''}"
        for={toKebabCase(checkbox.value)}>
        {checkbox.text}
      </label>
    </div>
  {/each}
</fieldset>
