<script lang="ts">
  import InputError from './InputErrorMessage.svelte'
  import type { ErrorDetail } from '$lib/ts'
  import { createInputAriaDescribedby, toKebabCase } from '$lib/ts'
  import { tick } from 'svelte'

  interface Props {
    value?: string | undefined
    name: string
    label: string
    helpText: string | undefined
    error: ErrorDetail | undefined
    class?: string
    options?: Array<{ value: string; text: string }>
    isRequired?: boolean | undefined
    textOptional?: string
    showOptionalText?: boolean
    hiddenErrorText: string | undefined
    theme?: 'radio' | 'button'
  }

  let {
    value = $bindable(),
    name,
    label,
    helpText,
    error,
    class: className = '',
    options = [],
    isRequired = undefined,
    textOptional = '(valgfritt felt)',
    showOptionalText = true,
    hiddenErrorText,
    theme = 'radio'
  }: Props = $props()
  let isInitialized = false

  $effect.pre(() => {
    tick().then(() => {
      if (value === undefined && !isInitialized && document) {
        value = document?.querySelector<HTMLInputElement>(`input[name="${name}"]:checked`)?.value
        isInitialized = true
      }
    })
  })
</script>

<fieldset
  id={name}
  aria-describedby={createInputAriaDescribedby(helpText ? name : undefined, error)}
  class="mt-fieldset form-fieldset {theme === 'radio' ? 'radio' : ''} {theme === 'button'
    ? 'mt-button-radio'
    : ''} {className}">
  <legend class="mt-legend form-legend">
    {label}
    {#if !isRequired && showOptionalText}
      <span class="tag info tag-text">{textOptional}</span>
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
    <div class="form-control">
      <input
        type="radio"
        id={`${name}-${toKebabCase(radio.value)}`}
        {name}
        class="mt-input input__control"
        class:error
        bind:group={value}
        value={radio.value}
        aria-required={isRequired}
        aria-describedby={createInputAriaDescribedby(helpText ? name : undefined, error)}
        checked={value === radio.value} />
      <label
        class="mt-label {theme === 'button' ? 'mt-button mt-button--secondary' : ''}"
        for={`${name}-${toKebabCase(radio.value)}`}>
        {radio.text}
      </label>
    </div>
  {/each}
</fieldset>
