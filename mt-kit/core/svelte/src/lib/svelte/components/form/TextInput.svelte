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
    countCharactersLeftLabel?: string | undefined
    countCharactersTooManyLabel?: string | undefined
    tooManyCharactersErrorText?: string
    error?: ErrorDetail | undefined
    helpText?: string | undefined
    textOptional?: string | undefined
    showOptionalText?: boolean
    hiddenErrorText?: string | undefined
    maxlength?: number | undefined
    placeholder?: string | undefined
    isRequired?: boolean | undefined
    inputmode?: InputModeType | undefined
    autocomplete?: AutocompleteType | undefined
    inputClass?: string
  }

  let {
    value = $bindable(),
    name,
    label,
    labelClass = '',
    countCharactersLeftLabel = undefined,
    countCharactersTooManyLabel = undefined,
    tooManyCharactersErrorText = 'Teksten er for lang',
    error = $bindable(),
    helpText = undefined,
    textOptional = undefined,
    showOptionalText = true,
    hiddenErrorText = undefined,
    maxlength = undefined,
    placeholder = undefined,
    isRequired = undefined,
    inputmode = undefined,
    autocomplete = undefined,
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
