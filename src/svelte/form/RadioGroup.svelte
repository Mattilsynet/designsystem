<script lang="ts">
  import InputError from './InputErrorMessage.svelte';
  import {toKebabCase, createInputAriaDescribedby} from '../../ts/utils';
  import type {ErrorDetail} from '../../ts/types';

  export let value;
  export let error: ErrorDetail | undefined;
  export let name: string;
  export let label: string;
  export let helpText: string | undefined;
  export let options: Array<{value: string; text: string}> = [];
  export let isRequired: boolean | undefined;
  export let textOptional: string | undefined = 'valgfitt felt';
  export let hiddenErrorText: string | undefined;
</script>

<fieldset id={name} aria-describedby={`${name}-hint ${name}-error`} aria-required={isRequired} class="form-fieldset">
  <legend class="form-legend"
    >{label}
    {#if !isRequired}
      <span class="text-small">({textOptional})</span>
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
    <div class="form-control radio">
      <input
        type="radio"
        id={toKebabCase(radio.value)}
        {name}
        class="input__control"
        class:error
        bind:group={value}
        value={radio.value}
        aria-describedby={createInputAriaDescribedby(name, error)}
        checked={value === radio.value}
      />
      <label class="form-label" for={toKebabCase(radio.value)}>
        {radio.text}
      </label>
    </div>
  {/each}
</fieldset>
