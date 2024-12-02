<script lang="ts">
  import { Meta, Story } from '@storybook/addon-svelte-csf'
  import { wrapInShadowDom } from '../storybook-utils/utils'
  import Combobox from '$lib/svelte/components/form/Combobox.svelte'
  import type { ErrorDetail } from '$lib/ts'

  let input: HTMLInputElement
  let secondInput: HTMLInputElement
  let values = {}
  let debounceTimer
  let isFetchFallback = false
  let isLoading = false

  let apiError: undefined | ErrorDetail = undefined
  let inputValue = ''

  async function fetchOptions(inputValue: string): Promise<void> {
    if (inputValue.length > 2) {
      isLoading = true

      try {
        const res = await fetch(
          `https://ws.geonorge.no/adresser/v1/sok?sok=${inputValue?.replace(',', '')}&fuzzy=true&utkoordsys=4258&treffPerSide=10&side=0&asciiKompatibel=true`
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
          input.list.textContent = 'Ingen resultater'
        } else {
          input.list.replaceChildren(...options)
        }
      } catch (err) {
        apiError = { key: `ownerStreet-input`, message: 'fetchFailedText' }
        isFetchFallback = true
      }
      isLoading = false
    }
  }

  async function handleInput(e): Promise<void> {
    if (!e.inputType) {
      const index = Number(input.value.split(`:`)[0])
      const option = input.list.options[index]
      if (option) {
        values['ownerStreet'] = option['data-street']
        values['ownerZip'] = option['data-postalcode']
        inputValue = `${option['data-street']}, ${option['data-postalcode']}`
      }
    } else if (!input.value) {
      input.list.textContent = ''
    } else {
      const valueInput = e.target?.value?.trim()?.replace(/,+/g, '')
      const value = encodeURIComponent(valueInput)
      clearTimeout(debounceTimer)
      debounceTimer = setTimeout(async () => {
        await fetchOptions(value)
      }, 300)
    }
  }
</script>

<Meta
  title="Components/Form/Combobox"
  args={{
    errorMessage: 'Fyll inn dette feltet.',
    address: {
      streetLabel: 'Søk etter gateadresse',
      streetFallbackLabel: 'Gateadresse',
      streetName: 'ownerStreet',
      listName: 'ownerStreet-list',
      isRequired: false,
      showOptionalText: false,
      streetHelpText: 'Skriv når hendelsen skjedde og om det har pågått over lengere periode.',
      streetError: undefined,
      postalCodeLabel: 'Postnummer',
      postalCodeName: 'ownerZip',
      postalCodeError: undefined,
      loadJs: true
    },
    simple: {
      inputLabel: 'Velg et tall',
      inputName: 'choice',
      listName: 'choices-list',
      inputError: undefined
    },
    disableCss: false
  }}
  argTypes={{
    disableCss: { control: 'boolean' },
    disableJs: { control: 'boolean' }
  }} />

<Story name="Normal" let:args>
  <div use:wrapInShadowDom={args.disableCss}>
    <h1 class="mt-h1">Combobox</h1>
    <h2 class="mt-h2">Simple options</h2>
    <form method="get" class="mt-form form-layout" style="--gap: 0;">
      <Combobox
        inputLabel={args.simple.inputLabel}
        inputName={args.simple.inputName}
        listName={args.simple.listName}
        inputError={args.simple.inputError}
        inputIsRequired={true}
        inputHelpText={''}
        bind:inputRef={secondInput}
        bind:inputValue={values['choice']}>
        <svelte:fragment slot="options">
          <u-option>en</u-option>
          <u-option>to</u-option>
          <u-option>tre</u-option>
          <u-option>fire</u-option>
          <u-option>fem</u-option>
        </svelte:fragment>
      </Combobox>
    </form>
    <h2 class="mt-h2 m-t-m">With api request</h2>
    <form method="get" class="mt-form form-layout" style="--gap: 0;">
      <Combobox
        inputLabel={args.address.streetLabel}
        inputName={args.address.streetName}
        listName={args.address.listName}
        inputError={args.address.streetError}
        inputIsRequired={args.address.isRequired}
        showOptionalText={args.address.showOptionalText}
        loadJs={args.address.loadJs}
        inputHelpText={args.address.streetHelpText}
        bind:inputRef={input}
        bind:inputValue={values['ownerStreet']}
        {handleInput}>
      </Combobox>
    </form>
  </div>
</Story>
