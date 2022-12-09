<script lang="ts">
  import InputError from './InputErrorMessage.svelte'
  import {countCharacters} from '../../../ts/count-characters'
  import type {AutocompleteType, ErrorDetail, InputModeType} from '../../../ts/types'
  import {createInputAriaDescribedby} from '../../../ts/utils'
  import Label from './Label.svelte'

  export let value
  export let name: string
  export let label: string
  export let labelClass: string
  export let countCharactersLeftLabel: string | undefined
  export let countCharactersTooManyLabel: string | undefined
  export let error: ErrorDetail | undefined
  export let helpText: string | undefined
  export let textOptional: string | undefined
  export let showOptionalText: boolean
  export let hiddenErrorText: string | undefined

  export let maxlength: number | undefined
  export let placeholder: string | undefined
  export let isRequired: boolean | undefined = undefined
  export let inputmode: InputModeType | undefined
  export let autocomplete: AutocompleteType | undefined

  export let inputClass = ''
  export let isHorizontal = false

  $: countCharsParams = {
    countCharacters: maxlength && maxlength > 0,
    maxlength: maxlength,
    id: name,
    countCharactersLeftLabel: countCharactersLeftLabel,
    countCharactersTooManyLabel: countCharactersTooManyLabel
  }
</script>

{#if isHorizontal}
  <div class="input-horizontal" style="--gap:var(--spacer-xxx-small)">
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
      use:countCharacters={countCharsParams}
      class="form-field {inputClass}"
      bind:value
      class:error
      aria-required={isRequired || undefined}
      aria-describedby={createInputAriaDescribedby(helpText ? name : undefined, error, maxlength)}
      aria-invalid={!!error}
      {inputmode}
      {placeholder}
      {autocomplete} />
  </div>
{:else}
  <Label for={name} {isRequired} {textOptional}>{label}</Label>

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
    class="form-field {inputClass}"
    bind:value
    class:error
    aria-required={isRequired || undefined}
    aria-describedby={createInputAriaDescribedby(helpText ? name : undefined, error, maxlength)}
    aria-invalid={!!error}
    {inputmode}
    {placeholder}
    {autocomplete} />
{/if}
