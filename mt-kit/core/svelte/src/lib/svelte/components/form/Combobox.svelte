<script lang="ts">
  import '@u-elements/u-datalist'
  import Label from './Label.svelte'
  import InputError from './InputErrorMessage.svelte'
  import { createInputAriaDescribedby, type ErrorDetail } from '../../../ts'

  export let inputName = ''
  export let listName = ''
  export let inputLabel = ''
  export let inputValue: string | undefined = undefined
  export let inputIsRequired: boolean | undefined = undefined
  export let inputHelpText: string | undefined = undefined
  export let inputClass = ''
  export let inputError: ErrorDetail | undefined = undefined
  export let apiError: ErrorDetail | undefined = undefined
  export let hiddenErrorText: string | undefined = undefined
  export let textOptional: string | undefined = undefined
  export let showOptionalText = true
  export let formInProgressAriaLabel = 'Søker'
  export let isLoading = false

  export let inputRef: HTMLInputElement
  export let isFetchFallback = false

  export let handleInput: (e: Event) => Promise<void>
</script>

<div class="combobox-wrapper">
  <Label {textOptional} isRequired={inputIsRequired} {showOptionalText} for={inputName}>
    {inputLabel}
  </Label>

  {#if inputHelpText}
    <div id={`${inputName}-hint`} class="hint">
      {@html inputHelpText}
    </div>
  {/if}

  {#if inputError}
    <InputError {...inputError} {hiddenErrorText} />
  {/if}
  {#if isFetchFallback && apiError}
    <InputError {...apiError} {hiddenErrorText} />
  {/if}

  <div class="actions m-t-xxs">
    <input
      type="text"
      autocomplete="off"
      id={inputName}
      name={inputName}
      list={listName}
      class="mt-input form-field {inputClass}"
      class:error={!!inputError}
      bind:value={inputValue}
      bind:this={inputRef}
      aria-autocomplete="list"
      aria-controls={listName}
      aria-describedby={createInputAriaDescribedby(
        inputHelpText ? inputName : undefined,
        inputError
      )}
      on:input={handleInput} />
    <span
      role="status"
      aria-live="assertive"
      class:icon--spinner={isLoading}
      aria-label={isLoading ? formInProgressAriaLabel : ''} />
  </div>
  <u-datalist id={listName} class="mt-datalist">
    <slot name="options" />
  </u-datalist>
</div>
