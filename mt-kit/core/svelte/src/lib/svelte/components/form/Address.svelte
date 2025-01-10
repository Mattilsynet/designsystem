<script lang="ts">
  import '@u-elements/u-datalist'
  import TextInput from './TextInput.svelte'
  import { type ErrorDetail, type InputModeType, interpolate } from '$lib/ts'
  import Combobox from './Combobox.svelte'

  interface GeonorgeResponse {
    adresser: Array<GeonorgeAddress>
  }

  interface GeonorgeAddress {
    adressetekst: string
    postnummer: string
    poststed: string
  }

  interface Props {
    inputName?: string
    listName?: string
    streetLabel?: string
    streetName?: string
    streetValue?: string
    streetIsRequired?: boolean
    streetError?: ErrorDetail
    streetHelpText?: string
    streetInputClass?: string
    streetInputmode?: InputModeType
    streetFallbackLabel?: string
    streetFallbackHelpText?: string
    postalCodeLabel?: string
    postalCodeName?: string
    postalCodeValue?: string
    postalCodeIsRequired?: boolean
    postalCodeError?: ErrorDetail
    postalCodeHelpText?: string
    postalCodeInputClass?: string
    postalCodeInputmode?: InputModeType
    postalAreaLabel?: string
    postalAreaName?: string
    postalAreaValue?: string
    postalAreaIsRequired?: boolean
    postalAreaError?: ErrorDetail
    postalAreaHelpText?: string
    postalAreaInputClass?: string
    postalAreaInputmode?: InputModeType
    formInProgressAriaLabel?: string
    hiddenErrorText?: string
    textOptional?: string
    noResultsText?: string
    fetchFailedText?: string
    showOptionalText?: boolean
    loadJs?: boolean
    hits?: string
    inputError?: ErrorDetail
    isFetchFallback?: boolean
  }

  let {
    inputName = '',
    listName = 'address-list',
    streetLabel = '',
    streetName = '',
    streetValue = $bindable(),
    streetIsRequired,
    streetError,
    streetHelpText,
    streetInputClass = '',
    streetInputmode = 'text',
    streetFallbackLabel = '',
    streetFallbackHelpText = '',
    postalCodeLabel = '',
    postalCodeName = '',
    postalCodeValue = $bindable(),
    postalCodeIsRequired,
    postalCodeError,
    postalCodeHelpText,
    postalCodeInputClass = '',
    postalCodeInputmode = 'numeric',
    postalAreaLabel = '',
    postalAreaName = '',
    postalAreaValue = $bindable(),
    postalAreaIsRequired,
    postalAreaError,
    postalAreaHelpText,
    postalAreaInputClass = '',
    postalAreaInputmode = 'text',
    formInProgressAriaLabel = 'Søker',
    hiddenErrorText = 'Feilmelding',
    textOptional = 'Valgfritt',
    noResultsText = 'Ingen resultater for {0}',
    fetchFailedText = 'Skriv inn manuelt under',
    showOptionalText = true,
    loadJs = false,
    hits = `10`,
    inputError,
    isFetchFallback = $bindable(false)
  }: Props = $props()

  let input: HTMLInputElement | undefined = $state()
  let inputValue = $state(
    streetValue && postalCodeValue && postalAreaValue
      ? `${streetValue}, ${postalCodeValue} ${postalAreaValue}`
      : ''
  )

  let isLoading = $state(false)
  let apiError: undefined | ErrorDetail = $state(undefined)
  // eslint-disable-next-line no-undef
  let debounceTimer: NodeJS.Timeout

  async function handleInput(e: Event): Promise<void> {
    streetValue = undefined
    postalCodeValue = undefined
    postalAreaValue = undefined
    if (!(e instanceof InputEvent)) {
      const index = Number(input?.value.split(`:`)[0])
      const option = input?.list?.options?.[index]
      if (option) {
        streetValue = option['data-street']
        postalCodeValue = option['data-postalcode']
        postalAreaValue = option['data-postalplace']
        inputValue =
          streetValue && postalCodeValue && postalAreaValue
            ? `${streetValue}, ${postalCodeValue} ${postalAreaValue}`
            : ''
      }
    } else if (!input?.value) {
      if (input && input.list) {
        input.list.textContent = ''
      }
    } else {
      const addressSearchInput = (e.target as HTMLInputElement)?.value?.trim()?.replace(/,+/g, '')
      const addressSearchString = encodeURIComponent(addressSearchInput)
      apiError = undefined
      clearTimeout(debounceTimer)
      debounceTimer = setTimeout(async () => {
        await fetchOptions(addressSearchString)
      }, 300)
    }
  }

  function getSearchUrl(value: string, hits: string): string {
    return `https://ws.geonorge.no/adresser/v1/sok?sok=${value?.replace(',', '')}&fuzzy=true&utkoordsys=4258&treffPerSide=${hits}&side=0&asciiKompatibel=true`
  }

  async function fetchOptions(addressSearchString: string): Promise<void> {
    if (addressSearchString.length > 2) {
      isLoading = true

      try {
        const res = await fetch(getSearchUrl(addressSearchString, hits))
        const data: GeonorgeResponse = await res.json()
        const options = data.adresser.map(({ adressetekst, postnummer, poststed }, index) => {
          const option = document.createElement('u-option')
          option.classList.add('option')
          return Object.assign(option, {
            text: `${adressetekst}, ${postnummer} ${poststed}`,
            value: `${index}: ${input?.value}`,
            ['data-street']: `${adressetekst}`,
            ['data-postalcode']: `${postnummer}`,
            ['data-postalplace']: `${poststed}`
          })
        })
        if (options.length === 0) {
          if (input && input.list) {
            input.list.textContent = interpolate(noResultsText, [
              decodeURIComponent(addressSearchString)
            ])
          }
        } else {
          if (input && input.list) {
            input.list.replaceChildren(...options)
          }
        }
      } catch {
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
    onInput={handleInput}
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
    <input
      type="hidden"
      class="form-field"
      name={postalAreaName}
      value={postalAreaValue}
      data-testid="hidden-postal-place" />
  {:else}
    <TextInput
      label={streetFallbackLabel}
      name={streetName}
      inputClass={streetInputClass}
      bind:value={streetValue}
      isRequired={streetIsRequired}
      error={streetError}
      inputmode={streetInputmode}
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
      inputmode={postalCodeInputmode}
      helpText={postalCodeHelpText}
      {hiddenErrorText}
      {textOptional}
      {showOptionalText} />
    <TextInput
      label={postalAreaLabel}
      name={postalAreaName}
      inputClass={`${postalAreaInputClass}`}
      isRequired={postalAreaIsRequired}
      bind:value={postalAreaValue}
      error={postalAreaError}
      inputmode={postalAreaInputmode}
      helpText={postalAreaHelpText}
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
    inputmode={streetInputmode}
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
    inputmode={postalCodeInputmode}
    helpText={postalCodeHelpText}
    {hiddenErrorText}
    {textOptional}
    {showOptionalText} />
  <TextInput
    label={postalAreaLabel}
    name={postalAreaName}
    inputClass={`${postalAreaInputClass}`}
    isRequired={postalAreaIsRequired}
    bind:value={postalAreaValue}
    error={postalAreaError}
    inputmode={postalAreaInputmode}
    helpText={postalAreaHelpText}
    {hiddenErrorText}
    {textOptional}
    {showOptionalText} />
{/if}
