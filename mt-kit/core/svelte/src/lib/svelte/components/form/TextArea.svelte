<!-- @migration-task Error while migrating Svelte code: Can't migrate code with beforeUpdate. Please migrate by hand. -->
<!--suppress XmlDuplicatedId -->
<script lang="ts">
  import InputError from './InputErrorMessage.svelte'
  import { countCharacters, errorOnTooManyCharacters } from '../../../ts/count-characters'
  import { createInputAriaDescribedby } from '../../../ts/utils'
  import type {
    AutocompleteType,
    CountCharsParams,
    ErrorDetail,
    InputModeType
  } from '../../../ts/types'
  import Label from './Label.svelte'
  import { beforeUpdate } from 'svelte'

  export let value
  export let name: string
  export let label: string
  export let labelClass = ''
  export let countCharactersLeftLabel: string | undefined
  export let countCharactersTooManyLabel: string | undefined
  export let tooManyCharactersErrorText = 'Teksten er for lang'
  export let error: ErrorDetail | undefined
  export let helpText: string | undefined
  export let textOptional: string | undefined
  export let helpTextClass = ''
  export let showOptionalText = true
  export let hiddenErrorText: string | undefined
  export let helpTextPlacement: 'above' | 'below' = 'above'
  export let textAreaRef = undefined
  export let textAreaClass = ''

  export let rows: number | undefined = 5
  export let cols: number | undefined
  export let maxlength: number | undefined
  export let placeholder: string | undefined
  export let isRequired: boolean | undefined = undefined
  export let inputmode: InputModeType | undefined
  export let autocomplete: AutocompleteType | undefined
  let isInitialized = false

  let countCharsParams: CountCharsParams = {
    countCharacters: (maxlength && maxlength > 0) as boolean,
    maxlength: maxlength ?? 0,
    id: name,
    countCharactersLeftLabel: countCharactersLeftLabel,
    countCharactersTooManyLabel: countCharactersTooManyLabel
  }

  beforeUpdate(() => {
    if (value === undefined && !isInitialized && document) {
      value = document?.querySelector(`input[name="${name}"]`)?.value
      isInitialized = true
    }
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
  on:input={e => {
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
  aria-invalid={!!error} />

{#if helpText && helpTextPlacement === 'below'}
  <div id={`${name}-hint`} class="hint {helpTextClass}">
    {@html helpText}
  </div>
{/if}
