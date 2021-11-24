<script lang="ts">
  import InputError from './InputErrorMessage.svelte';
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
  <legend class="form-legend">
    {label}
    {#if !isRequired}
      <span class="text-small">({textOptional})</span>
    {/if}
  </legend>

  {#if helpText}
    <div class="hint">
      {@html helpText}
    </div>
  {/if}

  {#if error}
    <InputError {...error} {hiddenErrorText} />
  {/if}

  {#each options as radio (radio.value)}
    <div class="form-control checkbox">
      <input type="checkbox" class="input__control" class:error id={radio.value} {name} value={radio.value} />
      <label for={radio.value}>
        {radio.text}
      </label>
    </div>
  {/each}
</fieldset>
