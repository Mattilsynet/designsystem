<!--suppress XmlDuplicatedId -->
<script lang="ts">
  import InputError from './InputErrorMessage.svelte'
  import { countCharacters, errorOnTooManyCharacters } from '../../../ts/count-characters'
  import type {
    AutocompleteType,
    CountCharsParams,
    ErrorDetail,
    InputModeType
  } from '../../../ts/types'
  import { createInputAriaDescribedby } from '../../../ts/utils'
  import Label from './Label.svelte'
  import { beforeUpdate } from 'svelte'

  export let value
  export let name: string
  export let label: string
  export let labelClass: string
  export let countCharactersLeftLabel: string | undefined
  export let countCharactersTooManyLabel: string | undefined
  export let tooManyCharactersErrorText = 'Teksten er for lang'
  export let error: ErrorDetail | undefined
  export let helpText: string | undefined
  export let textOptional: string | undefined
  export let showOptionalText: boolean = true
  export let hiddenErrorText: string | undefined
  export let maxlength: number | undefined
  export let placeholder: string | undefined
  export let isRequired: boolean | undefined = undefined
  export let inputmode: InputModeType | undefined
  export let autocomplete: AutocompleteType | undefined
  export let hasTransition = false

  export let inputClass = ''
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

<Label for={name} {isRequired} {textOptional} {showOptionalText} class={labelClass}>{label}</Label>

{#if helpText}
  <div id={`${name}-hint`} class="hint">
    {@html helpText}
  </div>
{/if}

{#if error}
  <InputError {...error} {hiddenErrorText} />
{/if}

<input
  id={name}
  {name}
  use:countCharacters={countCharsParams}
  on:input={e => {
    error = errorOnTooManyCharacters(e, countCharsParams, name, tooManyCharactersErrorText) || error
  }}
  class="mt-input form-field {inputClass}"
  bind:value
  class:error
  aria-required={isRequired || undefined}
  aria-describedby={createInputAriaDescribedby(helpText ? name : undefined, error, maxlength)}
  aria-invalid={!!error}
  {inputmode}
  {placeholder}
  {autocomplete} />
