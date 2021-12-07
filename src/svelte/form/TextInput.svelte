<script lang="ts">
  import InputError from './InputErrorMessage.svelte';
  import {countCharacters} from '../../ts/count-characters';
  import type {AutocompleteType, ErrorDetail, InputModeType} from '../../ts/types';
  import {createInputAriaDescribedby} from '../../ts/utils';
  import Label from './Label.svelte';

  export let value;
  export let name: string;
  export let label: string;
  export let error: ErrorDetail | undefined;
  export let helpText: string | undefined;
  export let textOptional: string | undefined;
  export let hiddenErrorText: string | undefined;

  export let maxlength: number | undefined;
  export let placeholder: string | undefined;
  export let isRequired: boolean | undefined = undefined;
  export let inputmode: InputModeType | undefined;
  export let autocomplete: AutocompleteType | undefined;
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
  use:countCharacters
  class="form-field"
  bind:value
  class:error
  aria-required={isRequired || undefined}
  aria-describedby={createInputAriaDescribedby(name, error)}
  aria-invalid={!!error}
  {maxlength}
  {inputmode}
  {placeholder}
  {autocomplete}
/>
