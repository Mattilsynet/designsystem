<!-- @migration-task Error while migrating Svelte code: Can't migrate code with beforeUpdate. Please migrate by hand. -->
<script lang="ts">
  import InputError from './InputErrorMessage.svelte'
  import { createInputAriaDescribedby, toKebabCase } from '../../../ts/utils'
  import type { ErrorDetail } from '../../../ts/types'
  import { beforeUpdate } from 'svelte'

  export let value
  export let name: string
  export let label: string
  export let helpText: string | undefined
  export let error: ErrorDetail | undefined
  export let options: Array<{ value: string; text: string }> = []
  export let isRequired: boolean | undefined = undefined
  export let textOptional = '(valgfritt felt)'
  export let showOptionalText: boolean = true
  export let hiddenErrorText: string | undefined
  export let loadJs = false
  export let theme: 'radio' | 'button' = 'radio'
  let className = ''
  export { className as class }
  let isInitialized = false

  beforeUpdate(() => {
    if (value === undefined && !isInitialized && document) {
      value = document?.querySelector(`input[name="${name}"]:checked`)?.value
      isInitialized = true
    }
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
