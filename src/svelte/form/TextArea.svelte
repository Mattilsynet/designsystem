<script lang="ts">
  import InputError from './InputErrorMessage.svelte';
  import {countCharacters} from '../../ts/count-characters';
  import {createInputAriaDescribedby} from '../../ts/utils';
  import type {AutocompleteType, ErrorDetail, InputModeType} from '../../ts/types';
  import Label from './Label.svelte';
  export let value;
  export let name: string;
  export let label: string;
  export let countCharactersLeftLabel: string | undefined;
  export let error: ErrorDetail | undefined;
  export let helpText: string | undefined;
  export let textOptional: string | undefined;
  export let hiddenErrorText: string | undefined;

  export let rows: number | undefined = 5;
  export let cols: number | undefined;
  export let maxlength: number | undefined;
  export let placeholder: string | undefined;
  export let isRequired: boolean | undefined = undefined;
  export let inputmode: InputModeType | undefined;
  export let autocomplete: AutocompleteType | undefined;
</script>

<Label htmlFor={name} {isRequired} {textOptional}>{label}</Label>

{#if helpText}
  <div id={`${name}-hint`} class="hint">
    {@html helpText}
  </div>
{/if}

{#if error}
  <InputError {...error} {hiddenErrorText} />
{/if}

<textarea
  id={name}
  {name}
  use:countCharacters={countCharactersLeftLabel ? {countCharactersLeftLabel} : undefined}
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
