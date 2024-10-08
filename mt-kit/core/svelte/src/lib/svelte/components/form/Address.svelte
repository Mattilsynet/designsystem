<script lang="ts">
  import '@u-elements/u-datalist'
  import TextInput from './TextInput.svelte'
  import { type ErrorDetail, interpolate } from '../../../ts'
  import Combobox from './Combobox.svelte'

  interface GeonorgeResponse {
    adresser: Array<GeonorgeAddress>
  }

  interface GeonorgeAddress {
    adressetekst: string
    postnummer: string
    poststed: string
  }

  export let inputName = ''
  export let listName = 'address-list'

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

  export let formInProgressAriaLabel = 'Søker'
  export let hiddenErrorText: string | undefined = 'Feilmelding'

  export let textOptional: string | undefined = 'Valgfritt'
  export let noResultsText: string = 'Ingen resultater for {0}'
  export let fetchFailedText: string = 'Skriv inn manuelt under'
  export let showOptionalText = true
  export let loadJs = false
  export let hits = `10`
  export let inputError: undefined | ErrorDetail
  export let isFetchFallback = false

  let input: HTMLInputElement
  let inputValue = streetValue && postalCodeValue ? `${streetValue}, ${postalCodeValue}` : ''

  let isLoading = false
  let apiError: undefined | ErrorDetail = undefined
  // eslint-disable-next-line no-undef
  let debounceTimer: NodeJS.Timeout

  async function handleInput(e: Event): Promise<void> {
    streetValue = undefined
    postalCodeValue = undefined
    if (!e.inputType) {
      const index = Number(input.value.split(`:`)[0])
      const option = input.list?.options?.[index]
      if (option) {
        streetValue = option['data-street']
        postalCodeValue = option['data-postalcode']
        inputValue = streetValue && postalCodeValue ? `${streetValue}, ${postalCodeValue}` : ''
      }
    } else if (!input.value) {
      input.list.textContent = ''
    } else {
      const value = encodeURIComponent(e.target.value.trim())
      apiError = undefined
      clearTimeout(debounceTimer)
      debounceTimer = setTimeout(async () => {
        await fetchOptions(value)
      }, 300)
    }
  }

  function getSearchUrl(value: string, hits: string): string {
    return `https://ws.geonorge.no/adresser/v1/sok?sok=${value}&fuzzy=true&utkoordsys=4258&treffPerSide=${hits}&side=0&asciiKompatibel=true`
  }

  async function fetchOptions(inputValue: string): Promise<void> {
    if (inputValue.length > 2) {
      isLoading = true

      try {
        const res = await fetch(getSearchUrl(inputValue, hits))
        const data: GeonorgeResponse = await res.json()
        const options = data.adresser.map(({ adressetekst, postnummer, poststed }, index) => {
          const option = document.createElement('u-option')
          option.classList.add('option')
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
        apiError = { key: `${streetName}-input`, message: fetchFailedText }
        isFetchFallback = true
      }
      isLoading = false
    }
  }
</script>

{#if loadJs}
  <Combobox
    {inputName}
    {listName}
    inputLabel={streetLabel}
    bind:inputValue
    inputIsRequired={streetIsRequired}
    inputHelpText={streetHelpText}
    {apiError}
    {inputError}
    {isFetchFallback}
    {isLoading}
    {handleInput}
    bind:inputRef={input}
    {formInProgressAriaLabel}></Combobox>
  {#if !isFetchFallback}
    <input
      type="hidden"
      class="form-field"
      name={streetName}
      value={streetValue}
      data-testid="hidden-street" />
    <input
      type="hidden"
      class="form-field"
      name={postalCodeName}
      value={postalCodeValue}
      data-testid="hidden-postal-code" />
  {:else}
    <TextInput
      label={streetFallbackLabel}
      name={streetName}
      inputClass={streetInputClass}
      bind:value={streetValue}
      isRequired={streetIsRequired}
      error={streetError}
      helpText={streetFallbackHelpText}
      {hiddenErrorText}
      {textOptional}
      {showOptionalText} />
    <TextInput
      label={postalCodeLabel}
      name={postalCodeName}
      inputClass={`${postalCodeInputClass} form-field--medium-width`}
      isRequired={postalCodeIsRequired}
      bind:value={postalCodeValue}
      error={postalCodeError}
      helpText={postalCodeHelpText}
      {hiddenErrorText}
      {textOptional}
      {showOptionalText} />
  {/if}
{:else}
  <TextInput
    label={streetFallbackLabel}
    name={streetName}
    bind:value={streetValue}
    isRequired={streetIsRequired}
    error={streetError}
    helpText={streetFallbackHelpText}
    {hiddenErrorText}
    {textOptional}
    {showOptionalText} />
  <TextInput
    label={postalCodeLabel}
    name={postalCodeName}
    inputClass={`${postalCodeInputClass} form-field--medium-width`}
    isRequired={postalCodeIsRequired}
    bind:value={postalCodeValue}
    error={postalCodeError}
    helpText={postalCodeHelpText}
    {hiddenErrorText}
    {textOptional}
    {showOptionalText} />
{/if}
