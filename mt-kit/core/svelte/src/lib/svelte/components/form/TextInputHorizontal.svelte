<script lang="ts">
  import InputError from './InputErrorMessage.svelte'
  import type { AutocompleteType, ErrorDetail, InputModeType } from '$lib/ts'
  import { createInputAriaDescribedby } from '$lib/ts'
  import Label from './Label.svelte'
  import { slide } from 'svelte/transition'
  import { tick } from 'svelte'

  interface Props {
    value?: string
    name: string
    label: string
    labelClass: string
    error: ErrorDetail | undefined
    helpText?: string | undefined
    textOptional: string | undefined
    showOptionalText: boolean
    hiddenErrorText: string | undefined
    maxlength: number | undefined
    placeholder: string | undefined
    isRequired?: boolean | undefined
    inputmode: InputModeType | undefined
    autocomplete: AutocompleteType | undefined
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
    isRequired = undefined,
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
  class="input-horizontal"
  style="--gap:var(--spacer-xxx-small)"
  in:slide={{ duration: hasTransition ? 300 : 0 }}
  out:slide={{ duration: hasTransition ? 300 : 0 }}>
  {#if error}
    <InputError {...error} {hiddenErrorText} />
  {/if}

  <div class="layout-flex layout-flex-col justify-content-center" style="--gap: 0">
    <Label for={name} {isRequired} {textOptional} {showOptionalText} class={labelClass}>
      {label}
    </Label>

    {#if helpText}
      <div id={`${name}-hint`} class="hint">
        {@html helpText}
      </div>
    {/if}
  </div>

  <input
    id={name}
    {name}
    class="mt-input form-field {inputClass}"
    bind:value
    class:error
    aria-required={isRequired || undefined}
    aria-describedby={createInputAriaDescribedby(helpText ? name : undefined, error, maxlength)}
    aria-invalid={!!error}
    {inputmode}
    {placeholder}
    {autocomplete} />
</div>
