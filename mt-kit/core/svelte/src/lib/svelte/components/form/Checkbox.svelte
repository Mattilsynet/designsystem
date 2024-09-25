<script lang="ts">
  import { beforeUpdate, createEventDispatcher } from 'svelte'
  import InputError from './InputErrorMessage.svelte'
  import { createInputAriaDescribedby, forceArray, toKebabCase } from '../../../ts/utils'
  import type { CustomCheckedEvent, ErrorDetail } from '../../../ts/types'

  export let value: Array<string> | undefined
  export let name: string
  export let label: string
  export let error: ErrorDetail | undefined
  export let helpText: string | undefined
  export let options: Array<{ value: string; text: string }> = []
  export let isRequired: boolean | undefined = undefined
  export let textOptional = 'Valgfitt'
  export let showOptionalText: boolean = true
  export let hiddenErrorText: string | undefined

  export let theme: 'checkbox' | 'button' = 'checkbox'
  let className = ''
  export { className as class }
  export let legendClass = ''
  let isInitialized = false

  const dispatch = createEventDispatcher<CustomEvent<CustomCheckedEvent>>()

  beforeUpdate(() => {
    if (forceArray(value).length === 0 && !isInitialized && document) {
      value = Array.from(document?.querySelectorAll(`input[name="${name}"]:checked`)).map(item => {
        return item.value
      })
      isInitialized = true
    }
  })

  function onChange(e: Event): void {
    dispatch('onChange', { event: e })
    const { checked } = e.target
    const inputValue = e.target.value
    if (checked) {
      value = [...forceArray(value), inputValue]
    } else {
      value = forceArray(value).filter(item => item !== inputValue)
    }
  }
</script>

<fieldset
  id={name}
  aria-describedby={createInputAriaDescribedby(helpText ? name : undefined, error)}
  aria-required={isRequired || undefined}
  class="mt-fieldset form-fieldset {theme === 'checkbox' ? 'checkbox' : ''} {theme === 'button'
    ? 'mt-button-checkbox'
    : ''} {className}">
  <legend class="mt-legend form-legend {legendClass}">
    {label}
    {#if !isRequired && showOptionalText}
      <span class="tag info tag-text">{textOptional}</span>
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

  {#each options as checkbox (checkbox.value)}
    <div class="form-control">
      <input
        type="checkbox"
        id={toKebabCase(checkbox.value)}
        {name}
        class="mt-input input__control"
        class:error
        value={checkbox.value}
        checked={forceArray(value).includes(checkbox.value)}
        on:change={onChange}
        aria-required={isRequired}
        aria-describedby={createInputAriaDescribedby(helpText ? name : undefined, error)} />
      <label
        class="mt-label {theme === 'button' ? 'mt-button mt-button--secondary' : ''}"
        for={toKebabCase(checkbox.value)}>
        {checkbox.text}
      </label>
    </div>
  {/each}
</fieldset>
