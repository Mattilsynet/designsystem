<script lang="ts">
  import type { Snippet } from 'svelte'
  import '@u-elements/u-datalist'
  import Label from './Label.svelte'
  import InputError from './InputErrorMessage.svelte'
  import { createInputAriaDescribedby, type ErrorDetail } from '$lib/ts'

  interface Props {
    inputName?: string
    listName?: string
    inputLabel?: string
    inputValue?: string
    inputIsRequired?: boolean
    inputHelpText?: string
    inputClass?: string
    inputError?: ErrorDetail
    apiError?: ErrorDetail
    hiddenErrorText?: string
    textOptional?: string
    showOptionalText?: boolean
    formInProgressAriaLabel?: string
    isLoading?: boolean
    inputRef?: HTMLInputElement
    isFetchFallback?: boolean
    onInput?: (e: Event) => Promise<void>
    options?: Snippet
  }

  let {
    inputName = '',
    listName = '',
    inputLabel = '',
    inputValue = $bindable(),
    inputIsRequired,
    inputHelpText,
    inputClass = '',
    inputError,
    apiError,
    hiddenErrorText,
    textOptional,
    showOptionalText = true,
    formInProgressAriaLabel = 'Søker',
    isLoading = false,
    // @ts-expect-error value is never read, but it's bound
    inputRef = $bindable(),
    isFetchFallback = false,
    onInput,
    options
  }: Props = $props()
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
      oninput={onInput} />
    <span
      role="status"
      aria-live="assertive"
      class:icon--spinner={isLoading}
      aria-label={isLoading ? formInProgressAriaLabel : ''}></span>
  </div>
  <u-datalist id={listName} class="mt-datalist">
    {@render options?.()}
  </u-datalist>
</div>
