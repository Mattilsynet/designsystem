<script lang="ts">
  import InputError from './InputErrorMessage.svelte'
  import {toKebabCase, createInputAriaDescribedby} from '../../../ts/utils'
  import type {ErrorDetail} from '../../../ts/types'

  export let value
  export let name: string
  export let label: string
  export let helpText: string | undefined
  export let error: ErrorDetail | undefined
  export let options: Array<{value: string; text: string}> = []
  export let isRequired: boolean | undefined = undefined
  export let textOptional = 'valgfritt felt'
  export let hiddenErrorText: string | undefined

  export let theme: 'radio' | 'button' = 'radio'
  let className = ''
  export {className as class}
</script>

<fieldset
  id={name}
  aria-describedby={createInputAriaDescribedby(helpText ? name : undefined, error)}
  class="form-fieldset {theme === 'radio' ? 'radio' : ''} {theme === 'button'
    ? 'button-radio'
    : ''} {className}">
  <legend class="form-legend">
    {label}
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
    <div class="form-control ">
      <input
        type="radio"
        id={toKebabCase(radio.value)}
        {name}
        class="input__control"
        class:error
        bind:group={value}
        value={radio.value}
        aria-required={isRequired}
        aria-describedby={createInputAriaDescribedby(helpText ? name : undefined, error)}
        checked={value === radio.value} />
      <label
        class="form-label {theme === 'button' ? 'button button--secondary' : ''}"
        for={toKebabCase(radio.value)}>
        {radio.text}
      </label>
    </div>
  {/each}
</fieldset>
