<script lang="ts">
  import Label from './Label.svelte'
  import TextInput from './TextInput.svelte'
  import InputError from './InputErrorMessage.svelte'
  import { fly } from 'svelte/transition'
  import {
    ENTER,
    DOWN_ARROW,
    END,
    UP_ARROW,
    ESCAPE,
    HOME,
    maintainScrollVisibility,
    calculateActiveOption
  } from '../../../ts/combobox-utils'
  import { createInputAriaDescribedby, type ErrorDetail, type MultiSelectOption } from '../../../ts'
  import { createEventDispatcher } from 'svelte'

  export let streetLabel = ''
  export let streetName = ''
  export let streetValue: string | undefined = undefined
  export let streetIsRequired: boolean | undefined = undefined
  export let streetError: ErrorDetail | undefined
  export let streetHelpText
  export let streetInputClass = ''

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
  export let showOptionalText = true
  export let loadJs = false
  export let hits = `10`

  let input: HTMLInputElement
  let inputValue = streetValue && postalCodeValue ? `${streetValue}, ${postalCodeValue}` : ''
  let options = []
  let isExpanded
  let listId
  let activeOption: undefined | MultiSelectOption
  let listBox: HTMLUListElement
  let showOptions = false
  let isLoading = false
  const dispatch = createEventDispatcher()

  $: {
    console.log('street', streetValue)
    console.log('postalCodeValue', postalCodeValue)
    console.log('inputValue', inputValue)
  }

  async function handleInput(e) {
    dispatch('addressChange', { [streetName]: undefined, [postalCodeName]: undefined })
    console.log('e', e)
    streetValue = undefined
    postalCodeValue = undefined
    setTimeout(async () => {
      await fetchOptions(e.target.value)
    }, 300)
  }

  async function fetchOptions(inputValue: string) {
    if (inputValue.length > 2) {
      optionsVisibility(true)
      isLoading = true
      const res = await fetch(
        `https://ws.geonorge.no/adresser/v1/sok?sok=${inputValue}&fuzzy=true&utkoordsys=4258&treffPerSide=${hits}&side=0&asciiKompatibel=true`
      )
      const data = await res.json()
      options = data.adresser.map(a => ({
        adressetekst: `${a.adressetekst}`,
        postnummer: `${a.postnummer}`,
        poststed: `${a.poststed}`
      }))
      isLoading = false
    } else {
      optionsVisibility(false)
      console.log('search length', inputValue.length)
    }
  }
  function handleTokenClick(): void {
    // optionsVisibility(true)
  }
  function handleBlur(): void {
    optionsVisibility(false)
  }

  function handleKeyup(e: KeyboardEvent): void {
    e.stopPropagation()
    // optionsVisibility(true)
    switch (e.key) {
      case ENTER: {
        // e.preventDefault()
        if (!activeOption) {
          break
        }
        console.log('click enter', activeOption)

        inputValue = `${activeOption.adressetekst}, ${activeOption.postnummer} ${activeOption.poststed}`
        streetValue = activeOption.adressetekst
        postalCodeValue = activeOption.postnummer
        optionsVisibility(false)
        break
      }
      case ESCAPE: {
        console.log('click escape')
        optionsVisibility(false)
        inputValue = ''
        break
      }
      case DOWN_ARROW:
      case UP_ARROW: {
        // up and down arrows
        // console.log('click up or down')
        const increment = e.key === UP_ARROW ? -1 : 1
        const calcIndex = options.indexOf(activeOption) + increment
        // console.log('calcIndex', calcIndex)

        activeOption = calculateActiveOption(calcIndex, options)
        // console.log('activeOption', activeOption)

        const activeIndex = calcActiveIndex(calcIndex, options.length)
        // console.log('activeIndex', activeIndex)
        maintainScrollVisibility(listBox.children[activeIndex], listBox)
        break
      }
      case END:
      case HOME: {
        const index = e.key === HOME ? 0 : options.length - 1
        activeOption = options[index]
        maintainScrollVisibility(listBox.children[index], listBox)
        break
      }
    }
  }
  function calcActiveIndex(calcIndex: number, numberOfOptions: number): number {
    if (calcIndex < 0) {
      return numberOfOptions - 1
    } else if (calcIndex === numberOfOptions) {
      return 0
    }
    return calcIndex
  }

  function optionsVisibility(show: boolean | undefined): void {
    if (typeof show === 'boolean') {
      showOptions = show
      show && input.focus()
    } else {
      showOptions = !showOptions
    }
    if (!showOptions) {
      activeOption = undefined
    }
  }

  function handleOptionMouseup(e: MouseEvent): void {
    const { street, zip, place } = (e.target as HTMLInputElement).dataset
    console.log('handleOptionMouseup', street, zip)
    inputValue = `${street}, ${zip} ${place}`
    streetValue = street
    postalCodeValue = zip
    input.focus()
    optionsVisibility(false)
  }
</script>

{#if loadJs}
  <div class="multiselect m-t-xxs">
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

    <div class="actions m-t-xxs" on:blur={handleBlur}>
      <input
        type="text"
        autocomplete="off"
        id={`${streetName}-input`}
        name={`${streetName}-input`}
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
        on:blur={handleBlur}
        on:keyup={handleKeyup}
        on:input={handleInput} />
      <span
        role="status"
        aria-live="assertive"
        class:icon--spinner={isLoading}
        aria-label={isLoading ? formInProgressAriaLabel : ''} />
    </div>

    <ul
      id={listId}
      class="mt-ul options options-dropdown"
      role="listbox"
      aria-label=""
      bind:this={listBox}
      class:hidden={!showOptions}
      transition:fly|local={{ duration: 200, y: 5 }}
      on:mousedown|preventDefault
      on:mouseup|preventDefault={handleOptionMouseup}>
      {#if options.length > 0}
        {#each options as option, index}
          <li
            id="{option.adressetekst}-{index}"
            role="option"
            class="option"
            aria-selected={false}
            class:active={activeOption?.adressetekst === option.adressetekst &&
              activeOption?.postnummer === option.postnummer}
            data-street={option.adressetekst}
            data-zip={option.postnummer}
            data-place={option.poststed}>
            {option.adressetekst}, {option.postnummer}
            {option.poststed}
          </li>
        {/each}
      {/if}
    </ul>
  </div>
  <!--{#if options?.length === 0 && inputValue?.length > 2}-->
  <!--  <p>Ingen treff</p>-->
  <!--{/if}-->
  <input type="hidden" class="form-field" name={streetName} bind:value={streetValue} />
  <input type="hidden" class="form-field" name={postalCodeName} bind:value={postalCodeValue} />
  <!--{#if !zipCodeValue && inputValue?.length > 2}-->
  <!--    <TextInput-->
  <!--      label={zipCodeLabel}-->
  <!--      name={zipCodeName}-->
  <!--      isRequired={zipCodeIsRequired}-->
  <!--      bind:value={zipCodeValue}-->
  <!--      error={zipCodeError} />-->

  <!--    <input-->
  <!--      type="text"-->
  <!--      id={zipCodeName}-->
  <!--      name={zipCodeName}-->
  <!--      bind:value={zipCodeValue}-->
  <!--      class="mt-input form-field" />-->
  <!--{/if}-->
{:else}
  <TextInput
    label={streetLabel}
    name={streetName}
    bind:value={streetValue}
    inputClass={streetInputClass}
    isRequired={streetIsRequired}
    error={streetError}
    helpText={streetHelpText}
    {textOptional}
    {showOptionalText} />
  <TextInput
    label={postalCodeLabel}
    name={postalCodeName}
    inputClass={postalCodeInputClass}
    isRequired={postalCodeIsRequired}
    bind:value={postalCodeValue}
    error={postalCodeError}
    helpText={postalCodeHelpText}
    {textOptional}
    {showOptionalText} />
{/if}
