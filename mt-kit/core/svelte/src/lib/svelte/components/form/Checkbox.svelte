<script lang="ts">
  import { tick } from 'svelte'
  import InputError from './InputErrorMessage.svelte'
  import { createInputAriaDescribedby, forceArray, toKebabCase } from '$lib/ts/utils'
  import type { ErrorDetail } from '$lib/ts'
  import type { CheckboxOption } from '$lib/ts/types'
  import { styles } from '@mattilsynet/design'

  interface Props {
    value?: Array<string>
    name: string
    label: string
    error?: ErrorDetail
    helpText?: string
    options?: Array<CheckboxOption>
    isRequired?: boolean
    textOptional?: string
    showOptionalText?: boolean
    hiddenErrorText?: string
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
    isRequired,
    textOptional = 'Valgfritt',
    showOptionalText = true,
    hiddenErrorText,
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

  function handleOnChange(e: Event): void {
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
  class="{styles.fieldset} {className}">
  <legend class={legendClass}>
    {label}
    {#if !isRequired && showOptionalText}
      <span class="tag info tag-text">{textOptional}</span>
    {/if}
  </legend>

  {#if helpText}
    <p>
      {helpText}
    </p>
  {/if}

  {#each options as checkbox (checkbox.value)}
    <div class={styles.field}>
      <input
        type="checkbox"
        id={`${name}-${toKebabCase(checkbox.value)}`}
        {name}
        class={styles.input}
        value={checkbox.value}
        checked={forceArray(value).includes(checkbox.value)}
        onchange={handleOnChange}
        disabled={checkbox.disabled}
        aria-required={isRequired}
        aria-describedby={createInputAriaDescribedby(helpText ? name : undefined, error)} />
      <label for={`${name}-${toKebabCase(checkbox.value)}`}>
        {checkbox.text}
      </label>

      {#if checkbox.helpText}
        <p>
          {checkbox.helpText}
        </p>
      {/if}
    </div>
  {/each}

  {#if error}
    <InputError {...error} {hiddenErrorText} />
  {/if}
</fieldset>
