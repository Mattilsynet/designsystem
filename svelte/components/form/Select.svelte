<script context="module">let instanceCounter = 0;
</script>

<script>import InputError from "./InputErrorMessage.svelte";
import { createInputAriaDescribedby } from "../../../ts/utils";
import Label from "./Label.svelte";
import { beforeUpdate } from "svelte";
export let name;
export let label;
export let value;
export let error;
export let helpText;
export let isRequired = void 0;
export let options = [];
export let textOptional;
export let hiddenErrorText;
const selectId = `ui-select-${instanceCounter++}`;
let isInitialized = false;
beforeUpdate(() => {
  if (value === void 0 && !isInitialized && document) {
    value = document?.querySelector(`input[name="${name}"]:checked`)?.value;
    isInitialized = true;
  }
});
</script>

<Label for={selectId} {isRequired} {textOptional}>{label}</Label>

{#if helpText}
  <div id={`${name}-hint`} class="hint">
    {@html helpText}
  </div>
{/if}

{#if error}
  <InputError {...error} {hiddenErrorText} />
{/if}

<select
  {name}
  id={selectId}
  bind:value
  class="form-field"
  aria-required={isRequired}
  aria-describedby={createInputAriaDescribedby(helpText ? name : undefined, error)}
>
  {#each options as option (option.value)}
    <option value={option.value}>
      {option.text}
    </option>
  {/each}
</select>
