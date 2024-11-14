<script lang="ts">
  import { Meta, Story } from '@storybook/addon-svelte-csf'
  import { wrapInShadowDom } from '../storybook-utils/utils'
  import Address from '$lib/svelte/components/form/Address.svelte'

  let values = {}
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
      postalAreaLabel: 'Poststed',
      postalAreaName: 'ownerPlace',
      postalAreaError: undefined,
      loadJs: true
    },
    address2: {
      streetLabel: 'Søk etter gateadresse',
      streetFallbackLabel: 'Gateadresse',
      streetName: 'reporterStreet',
      streetError: { key: 'reporterStreet', message: 'Skriv inn adresse' },
      postalCodeLabel: 'Postnummer',
      postalCodeName: 'reporterZip',
      postalCodeError: { key: 'reporterZip', message: 'Trenger postnummer' },
      postalAreaLabel: 'Poststed',
      postalAreaName: 'reporterPlace',
      postalAreaError: { key: 'reporterPlace', message: 'Trenger poststed' },
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
    <form method="get" class="mt-form form-layout" style="--gap: 0;">
      <Address
        streetLabel={args.address.streetLabel}
        streetFallbackLabel={args.address.streetFallbackLabel}
        streetName={args.address.streetName}
        postalCodeLabel={args.address.postalCodeLabel}
        postalCodeName={args.address.postalCodeName}
        streetError={args.address.streetError}
        postalAreaLabel={args.address.postalAreaLabel}
        postalAreaName={args.address.postalAreaName}
        postalAreaError={args.address.postalAreaError}
        streetIsRequired={true}
        postalCodeIsRequired={true}
        postalAreaIsRequired={true}
        loadJs={args.address.loadJs}
        streetHelpText={helpText}
        bind:streetValue={values['ownerStreet']}
        bind:postalCodeValue={values['ownerZip']}
        bind:postalAreaValue={values['ownerArea']}>
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
        postalCodeError={args.address2.postalCodeError}
        postalAreaLabel={args.address2.postalAreaLabel}
        postalAreaName={args.address2.postalAreaName}
        postalAreaError={args.address2.postalAreaError}
        streetError={args.address2.streetError}
        streetIsRequired={true}
        postalCodeIsRequired={true}
        postalAreaIsRequired={true}
        loadJs={args.address2.loadJs}
        streetHelpText={helpText}
        postalCodeHelpText="Skriv inn postnummeret. 4 siffer"
        bind:streetValue={values['reporterStreet']}
        bind:postalCodeValue={values['reporterZip']}
        bind:postalAreaValue={values['reporterArea']}>
      </Address>
    </form>
  </div>
</Story>
