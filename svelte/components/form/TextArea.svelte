<!--suppress XmlDuplicatedId -->
<script>import InputError from "./InputErrorMessage.svelte";
import { countCharacters, errorOnTooManyCharacters } from "../../../ts/count-characters";
import { createInputAriaDescribedby } from "../../../ts/utils";
import Label from "./Label.svelte";
import { beforeUpdate } from "svelte";
export let value;
export let name;
export let label;
export let labelClass = "";
export let countCharactersLeftLabel;
export let countCharactersTooManyLabel;
export let tooManyCharactersErrorText = "Teksten er for lang";
export let error;
export let helpText;
export let textOptional;
export let helpTextClass = "";
export let showOptionalText = true;
export let hiddenErrorText;
export let helpTextPlacement = "above";
export let textAreaRef = void 0;
export let textAreaClass = "";
export let rows = 5;
export let cols;
export let maxlength;
export let placeholder;
export let isRequired = void 0;
export let inputmode;
export let autocomplete;
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

<Label for={name} class={labelClass} {isRequired} {textOptional} {showOptionalText}>{label}</Label>

{#if helpText && helpTextPlacement === 'above'}
  <div id={`${name}-hint`} class="hint {helpTextClass}">
    {@html helpText}
  </div>
{/if}

{#if error}
  <InputError {...error} {hiddenErrorText} />
{/if}

<textarea
  id={name}
  {name}
  use:countCharacters={countCharsParams}
  on:input={e => {
    error = errorOnTooManyCharacters(e, countCharsParams, name, tooManyCharactersErrorText) || error
  }}
  class="form-field {textAreaClass}"
  bind:value
  bind:this={textAreaRef}
  {placeholder}
  {autocomplete}
  {rows}
  {cols}
  class:error
  {inputmode}
  aria-required={isRequired}
  aria-describedby={createInputAriaDescribedby(helpText ? name : undefined, error, maxlength)}
  aria-invalid={!!error} />

{#if helpText && helpTextPlacement === 'below'}
  <div id={`${name}-hint`} class="hint {helpTextClass}">
    {@html helpText}
  </div>
{/if}
