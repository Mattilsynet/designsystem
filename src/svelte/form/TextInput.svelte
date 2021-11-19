<script lang="ts">
  import InputError from './InputErrorMessage.svelte';
  import {countCharacters} from '../../ts/count-characters';
  import type {AutocompleteType, ErrorDetail, InputModeType} from '../../ts/types';
  import {createInputAriaDescribedby} from '../../ts/utils';
  import Label from './Label.svelte';

  export let value;
  export let error: ErrorDetail | undefined;
  export let name: string;
  export let label: string;
  export let helpText: string | undefined;
  export let textOptional: string | undefined;

  export let maxlength: number | undefined;
  export let placeholder: string | undefined;
  export let isRequired: boolean;
  export let inputmode: InputModeType;
  export let autocomplete: AutocompleteType;
</script>

<Label htmlFor={name} {isRequired} {textOptional}>{label}</Label>

{#if helpText}
  <div id={`${name}-hint`} class="hint">
    {@html helpText}
  </div>
{/if}

{#if error}
  <InputError {...error} />
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
