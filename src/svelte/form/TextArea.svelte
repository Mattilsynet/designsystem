<script lang="ts">
  import InputError from './InputErrorMessage.svelte';
  import {countCharacters} from '../../ts/count-characters';
  import {createInputAriaDescribedby} from '../../ts/utils';
  import type {AutocompleteType, ErrorDetail, InputModeType} from '../../ts/types';
  import Label from './Label.svelte';
  export let value;
  export let error: ErrorDetail | undefined;
  export let name: string;
  export let label: string;
  export let helpText: string | undefined;
  export let textOptional: string | undefined;

  export let rows: number | undefined = 5;
  export let cols: number;
  export let maxlength: number | undefined;
  export let placeholder: string | undefined;
  export let isRequired: boolean | undefined = undefined;
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

<textarea
  id={name}
  {name}
  use:countCharacters
  class="form-field"
  bind:value
  {maxlength}
  {placeholder}
  {autocomplete}
  {inputmode}
  {rows}
  {cols}
  class:error
  aria-required={isRequired}
  aria-describedby={createInputAriaDescribedby(name, error)}
  aria-invalid={!!error}
/>
