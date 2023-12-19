<!--suppress XmlDuplicatedId -->
<script>import InputError from "./InputErrorMessage.svelte";
import { countCharacters, errorOnTooManyCharacters } from "../../../ts/count-characters";
import { createInputAriaDescribedby } from "../../../ts/utils";
import Label from "./Label.svelte";
import { beforeUpdate } from "svelte";
export let value;
export let name;
export let label;
export let labelClass;
export let countCharactersLeftLabel;
export let countCharactersTooManyLabel;
export let tooManyCharactersErrorText = "Teksten er for lang";
export let error;
export let helpText;
export let textOptional;
export let showOptionalText;
export let hiddenErrorText;
export let maxlength;
export let placeholder;
export let isRequired = void 0;
export let inputmode;
export let autocomplete;
export let hasTransition = false;
export let inputClass = "";
let isInitialized = false;
let countCharsParams = {
  countCharacters: maxlength && maxlength > 0,
  maxlength: maxlength ?? 0,
  id: name,
  countCharactersLeftLabel,
  countCharactersTooManyLabel
};
beforeUpdate(() => {
  if (value === void 0 && !isInitialized && document) {
    value = document?.querySelector(`input[name="${name}"]`)?.value;
    isInitialized = true;
  }
});
</script>

<Label for={name} {isRequired} {textOptional}>{label}</Label>

{#if helpText}
  <div id={`${name}-hint`} class="hint">
    {@html helpText}
  </div>
{/if}

{#if error}
  <InputError {...error} {hiddenErrorText} />
{/if}

<input
  id={name}
  {name}
  use:countCharacters={countCharsParams}
  on:input={e => {
    error = errorOnTooManyCharacters(e, countCharsParams, name, tooManyCharactersErrorText) || error
  }}
  class="mt-input form-field {inputClass}"
  bind:value
  class:error
  aria-required={isRequired || undefined}
  aria-describedby={createInputAriaDescribedby(helpText ? name : undefined, error, maxlength)}
  aria-invalid={!!error}
  {inputmode}
  {placeholder}
  {autocomplete} />
