<script lang="ts">
  import InputError from './InputErrorMessage.svelte'
  import type { AutocompleteType, ErrorDetail, InputModeType } from '$lib/ts'
  import { createInputAriaDescribedby } from '$lib/ts'
  import Label from './Label.svelte'
  import { slide } from 'svelte/transition'
  import { tick } from 'svelte'
  import { styles } from '@mattilsynet/design'

  interface Props {
    value?: string
    name: string
    label: string
    labelClass?: string
    error?: ErrorDetail
    helpText?: string | undefined
    textOptional?: string
    showOptionalText?: boolean
    hiddenErrorText?: string
    maxlength?: number
    placeholder?: string
    isRequired?: boolean
    inputmode?: InputModeType
    autocomplete?: AutocompleteType
    hasTransition?: boolean
    inputClass?: string
  }

  let {
    value = $bindable(),
    name,
    label,
    labelClass,
    error,
    helpText,
    textOptional,
    showOptionalText,
    hiddenErrorText,
    maxlength,
    placeholder,
    isRequired,
    inputmode,
    autocomplete,
    hasTransition = false,
    inputClass = ''
  }: Props = $props()

  let isInitialized = false

  $effect.pre(() => {
    tick().then(() => {
      if (value === undefined && !isInitialized && document) {
        value = document?.querySelector<HTMLInputElement>(`input[name="${name}"]`)?.value
        isInitialized = true
      }
    })
  })
</script>

<div
  class="{styles.field} input-horizontal"
  data-size="md"
  data-required="hidden"
  in:slide={{ duration: hasTransition ? 300 : 0 }}
  out:slide={{ duration: hasTransition ? 300 : 0 }}>
  {#if error}
    <p class={styles.validation}>
      {error.message}
    </p>
  {/if}

  <div class="{styles.flex} layout-flex-col justify-content-center">
    <Label for={name} {isRequired} {textOptional} {showOptionalText} class={labelClass}>
      {label}
    </Label>

    {#if helpText}
      <p>
        {@html helpText}
      </p>
    {/if}
  </div>

  <input
    id={name}
    {name}
    class="{styles.input} {inputClass}"
    bind:value
    aria-required={isRequired || undefined}
    {inputmode}
    {placeholder}
    {autocomplete} />
</div>
