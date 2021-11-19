<script context="module" lang="ts">
  let instanceCounter = 0;
</script>

<script lang="ts">
  import InputError from './InputErrorMessage.svelte';
  import type {ErrorDetail} from '../../ts/types';
  import {createInputAriaDescribedby} from '../../ts/utils';
  import Label from './Label.svelte';
  export let value: string | undefined;
  export let error: ErrorDetail | undefined;
  export let name: string;
  export let label: string;
  export let helpText: string | undefined;
  export let options: Array<{value: string; text: string}> = [];
  export let isRequired: boolean | undefined;
  export let textOptional: string | undefined;
  export let idPrefix: string;

  const selectId = `${idPrefix}-${instanceCounter++}-`;
</script>

<Label htmlFor={`${selectId}${name}`} {isRequired} {textOptional}>{label}</Label>

{#if helpText}
  <div id={`${name}-hint`} class="hint">
    {@html helpText}
  </div>
{/if}

{#if error}
  <InputError {...error} />
{/if}

<select
  {name}
  id={`${selectId}${name}`}
  bind:value
  class="form-field"
  aria-required={isRequired}
  aria-describedby={createInputAriaDescribedby(name, error)}
>
  {#each options as option (option.value)}
    <option value={option.value}>
      {option.text}
    </option>
  {/each}
</select>
