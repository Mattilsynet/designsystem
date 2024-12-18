<script lang="ts">
  import { tick } from 'svelte'
  import InputError from './InputErrorMessage.svelte'
  import { createInputAriaDescribedby, forceArray, toKebabCase } from '$lib/ts/utils'
  import type { ErrorDetail } from '$lib/ts'

  interface Props {
    value?: Array<string>
    name: string
    label: string
    error?: ErrorDetail
    helpText?: string
    options?: Array<{ value: string; text: string }>
    isRequired?: boolean
    textOptional?: string
    showOptionalText?: boolean
    hiddenErrorText?: string
    theme?: 'checkbox' | 'button'
    class?: string
    legendClass?: string
    onChange?: (element: HTMLInputElement) => void
  }

  let {
    value = $bindable(),
    name,
    label,
    error,
    helpText,
    options = [],
    isRequired = undefined,
    textOptional = 'Valgfitt',
    showOptionalText = true,
    hiddenErrorText,
    theme = 'checkbox',
    class: className = '',
    legendClass = '',
    onChange = () => {}
  }: Props = $props()
  let isInitialized = $state(false)

  $effect.pre(() => {
    tick().then(() => {
      if (forceArray(value).length === 0 && !isInitialized && document) {
        value = Array.from(
          document?.querySelectorAll<HTMLInputElement>(`input[name="${name}"]:checked`)
        ).map(item => {
          return item.value
        })
        isInitialized = true
      }
    })
  })

  function handleOnChange(e: InputEvent): void {
    const target = e.target as HTMLInputElement
    onChange(target)
    const inputValue = target.value
    if (target.checked) {
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
        id={`${name}-${toKebabCase(checkbox.value)}`}
        {name}
        class="mt-input input__control"
        class:error
        value={checkbox.value}
        checked={forceArray(value).includes(checkbox.value)}
        onchange={handleOnChange}
        aria-required={isRequired}
        aria-describedby={createInputAriaDescribedby(helpText ? name : undefined, error)} />
      <label
        class="mt-label {theme === 'button' ? 'mt-button mt-button--secondary' : ''}"
        for={`${name}-${toKebabCase(checkbox.value)}`}>
        {checkbox.text}
      </label>
    </div>
  {/each}
</fieldset>
