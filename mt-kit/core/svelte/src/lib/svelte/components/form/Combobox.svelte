<script lang="ts">
  import '@u-elements/u-datalist'
  import Label from './Label.svelte'
  import InputError from './InputErrorMessage.svelte'
  import { createInputAriaDescribedby, type ErrorDetail } from '../../../ts'



  interface Props {
    inputName?: string;
    listName?: string;
    inputLabel?: string;
    inputValue?: string | undefined;
    inputIsRequired?: boolean | undefined;
    inputHelpText?: string | undefined;
    inputClass?: string;
    inputError?: ErrorDetail | undefined;
    apiError?: ErrorDetail | undefined;
    hiddenErrorText?: string | undefined;
    textOptional?: string | undefined;
    showOptionalText?: boolean;
    formInProgressAriaLabel?: string;
    isLoading?: boolean;
    inputRef: HTMLInputElement;
    isFetchFallback?: boolean;
    handleInput: (e: Event) => Promise<void>;
    options?: import('svelte').Snippet;
  }

  let {
    inputName = '',
    listName = '',
    inputLabel = '',
    inputValue = $bindable(undefined),
    inputIsRequired = undefined,
    inputHelpText = undefined,
    inputClass = '',
    inputError = undefined,
    apiError = undefined,
    hiddenErrorText = undefined,
    textOptional = undefined,
    showOptionalText = true,
    formInProgressAriaLabel = 'Søker',
    isLoading = false,
    inputRef = $bindable(),
    isFetchFallback = false,
    handleInput,
    options
  }: Props = $props();
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
      oninput={handleInput} />
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
