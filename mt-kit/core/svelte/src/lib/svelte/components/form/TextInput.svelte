<!--suppress XmlDuplicatedId -->
<script lang="ts">
  import InputError from './InputErrorMessage.svelte'
  import type { AutocompleteType, CountCharsParams, ErrorDetail, InputModeType } from '$lib/ts'
  import { countCharacters, createInputAriaDescribedby, errorOnTooManyCharacters } from '$lib/ts'
  import Label from './Label.svelte'
  import { beforeUpdate } from 'svelte'

  export let value
  export let name: string
  export let label: string
  export let labelClass: string = ''
  export let countCharactersLeftLabel: string | undefined = undefined
  export let countCharactersTooManyLabel: string | undefined = undefined
  export let tooManyCharactersErrorText = 'Teksten er for lang'
  export let error: ErrorDetail | undefined = undefined
  export let helpText: string | undefined = undefined
  export let textOptional: string | undefined = undefined
  export let showOptionalText: boolean = true
  export let hiddenErrorText: string | undefined = undefined
  export let maxlength: number | undefined = undefined
  export let placeholder: string | undefined = undefined
  export let isRequired: boolean | undefined = undefined
  export let inputmode: InputModeType | undefined = undefined
  export let autocomplete: AutocompleteType | undefined = undefined
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

<!-- TODO check if we can remove wrapping after svelte5 upgrade. See MTP-2784 -->
<div class="mt-form">
  <Label for={name} {isRequired} {textOptional} {showOptionalText} class={labelClass}
    >{label}</Label>

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
      error =
        errorOnTooManyCharacters(e, countCharsParams, name, tooManyCharactersErrorText) || error
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
</div>
