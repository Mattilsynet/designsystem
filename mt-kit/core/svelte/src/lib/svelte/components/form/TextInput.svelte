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
    countCharactersLeftLabel?: string
    countCharactersTooManyLabel?: string
    tooManyCharactersErrorText?: string
    error?: ErrorDetail
    helpText?: string
    textOptional?: string
    showOptionalText?: boolean
    maxlength?: number
    placeholder?: string
    isRequired?: boolean
    inputmode?: InputModeType
    autocomplete?: AutocompleteType
    inputClass?: string
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
    showOptionalText = true,
    maxlength,
    placeholder,
    isRequired,
    inputmode,
    autocomplete,
    inputClass = ''
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
    oninput={e => {
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
