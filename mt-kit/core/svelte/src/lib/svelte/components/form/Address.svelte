<script lang="ts">
  import '@u-elements/u-datalist'
  import Label from './Label.svelte'
  import TextInput from './TextInput.svelte'
  import InputError from './InputErrorMessage.svelte'
  import { createInputAriaDescribedby, type ErrorDetail, interpolate } from '../../../ts'
  import { createEventDispatcher } from 'svelte'

  export let streetLabel = ''
  export let streetName = ''
  export let streetValue: string | undefined = undefined
  export let streetIsRequired: boolean | undefined = undefined
  export let streetError: ErrorDetail | undefined
  export let streetHelpText
  export let streetInputClass = ''

  export let streetFallbackLabel = ''
  export let streetFallbackHelpText = ''

  export let postalCodeLabel = ''
  export let postalCodeName = ''
  export let postalCodeValue: string | undefined = undefined
  export let postalCodeIsRequired: boolean | undefined = undefined
  export let postalCodeError: ErrorDetail | undefined
  export let postalCodeHelpText
  export let postalCodeInputClass = ''

  export let formInProgressAriaLabel = ''
  export let hiddenErrorText: string | undefined

  export let textOptional: string | undefined = 'Valgfritt'
  export let noResultsText: string = 'Ingen resultater for {0}'
  export let fetchFailedText: string = 'Skriv inn manuelt under'
  export let showOptionalText = true
  export let loadJs = false
  export let hits = `10`

  let input: HTMLInputElement
  let inputValue = streetValue && postalCodeValue ? `${streetValue}, ${postalCodeValue}` : ''

  let isExpanded
  let listId
  let isLoading = false
  let isFetchFallback = false
  let apiError: undefined | ErrorDetail = undefined
  let debounceTimer // Debounce so we do not spam API
  const dispatch = createEventDispatcher()

  $: {
    console.log('street', streetValue)
    console.log('postalCodeValue', postalCodeValue)
    // console.log('inputValue', inputValue)
  }

  async function handleInput(e) {
    if (!e.inputType) {
      const index = Number(input.value.split(`:`)[0])
      const option = input.list.options[index]
      if (option) {
        streetValue = option['data-street']
        postalCodeValue = option['data-postalcode']
        inputValue = streetValue && postalCodeValue ? `${streetValue}, ${postalCodeValue}` : ''
      } else {
        //todo
      }
    } else if (!input.value) {
      // do nothing
    } else {
      // User is typing
      const value = encodeURIComponent(e.target.value.trim())
      streetValue = undefined
      postalCodeValue = undefined
      apiError = undefined
      clearTimeout(debounceTimer)
      debounceTimer = setTimeout(async () => {
        await fetchOptions(value)
      }, 300)
    }
  }

  async function fetchOptions(inputValue: string) {
    if (inputValue.length > 2) {
      isLoading = true

      try {
        const res = await fetch(
          `https://ws.geonorge.no/adresser/v1/sok?sok=${inputValue}&fuzzy=true&utkoordsys=4258&treffPerSide=${hits}&side=0&asciiKompatibel=true`
          // `https://ws.geonorge.no/adresser/v1/sok?sok=`
        )
        const data = await res.json()
        const options = data.adresser.map(({ adressetekst, postnummer, poststed }, index) => {
          const option = document.createElement('u-option')
          option.classList = 'option'
          return Object.assign(option, {
            text: `${adressetekst}, ${postnummer} ${poststed}`,
            value: `${index}: ${input.value}`,
            ['data-street']: `${adressetekst}`,
            ['data-postalcode']: `${postnummer}`
          })
        })
        if (options.length === 0) {
          input.list.textContent = interpolate(noResultsText, [decodeURIComponent(inputValue)])
        } else {
          input.list.replaceChildren(...options)
        }
      } catch (err) {
        apiError = { key: streetName, message: fetchFailedText }
        isFetchFallback = true
      }
      isLoading = false
    }
  }
</script>

{#if loadJs}
  <div class="address-wrapper col-1-span-12">
    <Label
      {textOptional}
      isRequired={streetIsRequired}
      {showOptionalText}
      for={`${streetName}-input`}>
      {streetLabel}
    </Label>
    {#if streetHelpText}
      <div id={`${streetName}-hint`} class="hint">
        {@html streetHelpText}
      </div>
    {/if}

    {#if streetError}
      <InputError {...streetError} {hiddenErrorText} />
    {/if}
    {#if isFetchFallback && apiError}
      <InputError {...apiError} {hiddenErrorText} />
    {/if}

    <div class="actions m-t-xxs">
      <input
        type="text"
        autocomplete="off"
        id={`${streetName}-input`}
        name={`${streetName}-input`}
        list={`${streetName}-list2`}
        class="mt-input form-field {streetInputClass}"
        bind:value={inputValue}
        bind:this={input}
        role="combobox"
        aria-autocomplete="list"
        aria-expanded={isExpanded}
        aria-controls={listId}
        aria-describedby={createInputAriaDescribedby(
          streetHelpText ? streetName : undefined,
          streetError
        )}
        on:input={handleInput} />
      <span
        role="status"
        aria-live="assertive"
        class:icon--spinner={isLoading}
        aria-label={isLoading ? formInProgressAriaLabel : ''} />
    </div>
    <u-datalist id={`${streetName}-list2`} class="mt-datalist"> </u-datalist>
  </div>
  {#if !isFetchFallback}
    <input
      type="hidden"
      class="form-field"
      name={streetName}
      bind:value={streetValue}
      data-testid="hidden-street" />
    <input
      type="hidden"
      class="form-field"
      name={postalCodeName}
      bind:value={postalCodeValue}
      data-testid="hidden-postal-code" />
  {:else}
    <TextInput
      label={streetFallbackLabel}
      name={streetName}
      bind:value={streetValue}
      labelClass={'col-1-span-12'}
      inputClass={'col-1-span-12'}
      isRequired={streetIsRequired}
      error={streetError}
      helpText={streetFallbackHelpText}
      {textOptional}
      {showOptionalText} />
    <TextInput
      label={postalCodeLabel}
      name={postalCodeName}
      labelClass="col-1-span-12"
      inputClass={'col-1-span-4'}
      isRequired={postalCodeIsRequired}
      bind:value={postalCodeValue}
      error={postalCodeError}
      helpText={postalCodeHelpText}
      {textOptional}
      {showOptionalText} />
  {/if}
{:else}
  <TextInput
    label={streetFallbackLabel}
    name={streetName}
    bind:value={streetValue}
    labelClass={'col-1-span-12'}
    inputClass={'col-1-span-12'}
    isRequired={streetIsRequired}
    error={streetError}
    helpText={streetFallbackHelpText}
    {textOptional}
    {showOptionalText} />
  <TextInput
    label={postalCodeLabel}
    name={postalCodeName}
    labelClass="col-1-span-12"
    inputClass={'col-1-span-4'}
    isRequired={postalCodeIsRequired}
    bind:value={postalCodeValue}
    error={postalCodeError}
    helpText={postalCodeHelpText}
    {textOptional}
    {showOptionalText} />
{/if}
