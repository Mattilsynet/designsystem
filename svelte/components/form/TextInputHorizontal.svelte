<!--suppress XmlDuplicatedId -->
<script>import InputError from "./InputErrorMessage.svelte";
import { createInputAriaDescribedby } from "../../../ts/utils";
import Label from "./Label.svelte";
import { slide } from "svelte/transition";
import { beforeUpdate } from "svelte";
export let value;
export let name;
export let label;
export let labelClass;
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
beforeUpdate(() => {
  if (value === void 0 && !isInitialized && document) {
    value = document?.querySelector(`input[name="${name}"]`)?.value;
    isInitialized = true;
  }
});
</script>

<div
  class="input-horizontal"
  style="--gap:var(--spacer-xxx-small)"
  in:slide={{ duration: hasTransition ? 300 : 0 }}
  out:slide={{ duration: hasTransition ? 300 : 0 }}
>
  {#if error}
    <InputError {...error} {hiddenErrorText} />
  {/if}

  <div class="layout-flex layout-flex-col justify-content-center" style="--gap: 0">
    <Label for={name} {isRequired} {textOptional} {showOptionalText} class={labelClass}>
      {label}
    </Label>

    {#if helpText}
      <div id={`${name}-hint`} class="hint">
        {@html helpText}
      </div>
    {/if}
  </div>

  <input
    id={name}
    {name}
    class="mt-input form-field {inputClass}"
    bind:value
    class:error
    aria-required={isRequired || undefined}
    aria-describedby={createInputAriaDescribedby(helpText ? name : undefined, error, maxlength)}
    aria-invalid={!!error}
    {inputmode}
    {placeholder}
    {autocomplete}
  />
</div>
