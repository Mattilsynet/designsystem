<script lang="ts">
  import { Meta, Story } from '@storybook/addon-svelte-csf'
  import TextInput from '../../lib/svelte/components/form/TextInput.svelte'
  import { wrapInShadowDom } from '../storybook-utils/utils'
  import TextArea from '../../lib/svelte/components/form/TextArea.svelte'
  import RadioGroup from '../../lib/svelte/components/form/RadioGroup.svelte'
  import Checkbox from '../../lib/svelte/components/form/Checkbox.svelte'
  import CheckboxWithSubSets from '../../lib/svelte/components/form/CheckboxWithSubSets.svelte'
  import Address from '../../lib/svelte/components/form/Address.svelte'

  let values = {}
  $: {
    console.log('values', values)
  }
  function handleAddress(e) {
    console.log('handleAddress', e)
  }
  function handleSubmit(e) {
    // e.preventDefault()
    console.log('handleSubmit', values)
  }
</script>

<Meta
  title="Components/Form/Address"
  args={{
    label: 'Når skjedde det?',
    radioLabel: 'Kan vi kontakte deg?',
    checkboxLabel: 'Hva liker du?',
    checkboxWithSubsetsLegend: 'Hvilkt tema er det du er interessert i?',
    helpText: 'Skriv når hendelsen skjedde og om det har pågått over lengere periode.',
    errorMessage: 'Fyll inn dette feltet.',
    countCharactersLeftLabel: 'karakterer igjen',
    address: {
      streetLabel: 'Søk etter gateadresse',
      streetFallbackLabel: 'Gateadresse',
      streetName: 'ownerStreet',
      streetError: undefined,
      postalCodeLabel: 'Postnummer',
      postalCodeName: 'ownerZip',
      postalCodeError: undefined,
      loadJs: true
    },
    address2: {
      streetLabel: 'Søk etter gateadresse',
      streetFallbackLabel: 'Gateadresse',
      streetName: 'reporterStreet',
      streetError: undefined,
      postalCodeLabel: 'Postnummer',
      postalCodeName: 'reporterZip',
      postalCodeError: undefined,
      loadJs: false
    },
    disableCss: false
  }}
  argTypes={{
    label: { control: 'text' },
    radioLabel: { control: 'text' },
    checkboxLabel: { control: 'text' },
    checkboxWithSubsetsLegend: { control: 'text' },
    helpText: { control: 'text' },
    countCharactersLeftLabel: { control: 'text' },
    disableCss: { control: 'boolean' },
    disableJs: { control: 'boolean' }
  }} />

<Story
  name="Normal"
  let:label
  let:helpText
  let:radioLabel
  let:checkboxLabel
  let:checkboxWithSubsetsLegend
  let:countCharactersLeftLabel
  let:args>
  <div use:wrapInShadowDom={args.disableCss}>
    <h1 class="mt-h1">Adresse komponent</h1>
    <h2 class="mt-h2">Med JS</h2>
    <form method="get" class="mt-form form-layout" style="--gap: 0;" on:submit={handleSubmit}>
      <Address
        streetLabel={args.address.streetLabel}
        streetFallbackLabel={args.address.streetFallbackLabel}
        streetName={args.address.streetName}
        postalCodeLabel={args.address.postalCodeLabel}
        postalCodeName={args.address.postalCodeName}
        streetError={args.address.streetError}
        streetIsRequired={true}
        postalCodeIsRequired={true}
        loadJs={args.address.loadJs}
        streetHelpText={helpText}
        bind:streetValue={values['ownerStreet']}
        bind:postalCodeValue={values['ownerZip']}>
      </Address>
    </form>
    <h2 class="mt-h2 m-t-m">Uten JS</h2>
    <form method="get" class="mt-form form-layout" style="--gap: 0;">
      <Address
        streetLabel={args.address2.streetLabel}
        streetName={args.address2.streetName}
        streetFallbackLabel={args.address2.streetFallbackLabel}
        postalCodeLabel={args.address2.postalCodeLabel}
        postalCodeName={args.address2.postalCodeName}
        streetError={args.address2.streetError}
        streetIsRequired={true}
        postalCodeIsRequired={true}
        loadJs={args.address2.loadJs}
        streetHelpText={helpText}
        postalCodeHelpText="Skriv inn postnummeret. 4 siffer"
        bind:streetValue={values['reporterStreet']}
        bind:postalCodeValue={values['reporterZip']}>
      </Address>
    </form>
  </div>
</Story>
