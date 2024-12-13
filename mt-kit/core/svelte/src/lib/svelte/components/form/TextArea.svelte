<script lang="ts">
  import InputError from './InputErrorMessage.svelte'
  import type { AutocompleteType, CountCharsParams, ErrorDetail, InputModeType } from '$lib/ts'
  import { countCharacters, createInputAriaDescribedby, errorOnTooManyCharacters } from '$lib/ts'
  import Label from './Label.svelte'
  import { tick } from 'svelte'

  interface Props {
    value?: string
    name: string
    label: string
    labelClass?: string
    countCharactersLeftLabel: string | undefined
    countCharactersTooManyLabel: string | undefined
    tooManyCharactersErrorText?: string
    error?: ErrorDetail | undefined
    helpText: string | undefined
    textOptional: string | undefined
    helpTextClass?: string
    showOptionalText?: boolean
    hiddenErrorText?: string | undefined
    helpTextPlacement?: 'above' | 'below'
    textAreaRef?: HTMLElement | undefined
    textAreaClass?: string
    rows?: number | undefined
    cols: number | undefined
    maxlength?: number | undefined
    placeholder?: string | undefined
    isRequired?: boolean | undefined
    inputmode: InputModeType | undefined
    autocomplete?: AutocompleteType | undefined
  }

  let {
    value = $bindable(),
    name,
    label,
    labelClass = '',
    countCharactersLeftLabel,
    countCharactersTooManyLabel,
    tooManyCharactersErrorText = 'Teksten er for lang',
    error = $bindable(),
    helpText,
    textOptional,
    helpTextClass = '',
    showOptionalText = true,
    hiddenErrorText,
    helpTextPlacement = 'above',
    // @ts-expect-error "is declared but its value is never read." textAreaRef is used as a binding to the textarea element
    textAreaRef = $bindable(),
    textAreaClass = '',
    rows = 5,
    cols,
    maxlength,
    placeholder,
    isRequired = undefined,
    inputmode,
    autocomplete = 'off'
  }: Props = $props()
  let isInitialized = false

  let countCharsParams: CountCharsParams = {
    countCharacters: (maxlength && maxlength > 0) as boolean,
    maxlength: maxlength ?? 0,
    id: name,
    countCharactersLeftLabel: countCharactersLeftLabel,
    countCharactersTooManyLabel: countCharactersTooManyLabel
  }

  $effect.pre(() => {
    tick().then(() => {
      if (value === undefined && !isInitialized && document) {
        value = document?.querySelector<HTMLInputElement>(`input[name="${name}"]`)?.value
        isInitialized = true
      }
    })
  })
</script>

<Label for={name} class={labelClass} {isRequired} {textOptional} {showOptionalText}>{label}</Label>

{#if helpText && helpTextPlacement === 'above'}
  <div id={`${name}-hint`} class="hint {helpTextClass}">
    {@html helpText}
  </div>
{/if}

{#if error}
  <InputError {...error} {hiddenErrorText} />
{/if}

<textarea
  id={name}
  {name}
  use:countCharacters={countCharsParams}
  oninput={e => {
    error = errorOnTooManyCharacters(e, countCharsParams, name, tooManyCharactersErrorText) || error
  }}
  class="form-field {textAreaClass}"
  bind:value
  bind:this={textAreaRef}
  {placeholder}
  {autocomplete}
  {rows}
  {cols}
  class:error
  {inputmode}
  aria-required={isRequired}
  aria-describedby={createInputAriaDescribedby(helpText ? name : undefined, error, maxlength)}
  aria-invalid={!!error}></textarea>

{#if helpText && helpTextPlacement === 'below'}
  <div id={`${name}-hint`} class="hint {helpTextClass}">
    {@html helpText}
  </div>
{/if}
