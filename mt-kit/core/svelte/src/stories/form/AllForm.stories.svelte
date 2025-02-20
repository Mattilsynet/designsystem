<script lang="ts" module>
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import TextInput from '$lib/svelte/components/form/TextInput.svelte'
  import { wrapInShadowDom } from '../storybook-utils/utils'
  import TextArea from '$lib/svelte/components/form/TextArea.svelte'
  import RadioGroup from '$lib/svelte/components/form/RadioGroup.svelte'
  import Checkbox from '$lib/svelte/components/form/Checkbox.svelte'
  import CheckboxWithSubSets from '$lib/svelte/components/form/CheckboxWithSubSets.svelte'
  import Address from '$lib/svelte/components/form/Address.svelte'

  const radioName = 'radiobuttons'
  const checkboxName = 'checkboxes'
  const checkboxWithSubsetsName = 'checkboxesWithSubsets'
  const radioOptions = [
    {
      text: 'Dere kan kontakte meg',
      value: 'yes'
    },
    {
      text: 'Jeg ønsker å være anonym',
      value: 'no'
    }
  ]
  const checkBoxOptions = [
    {
      text: 'Is',
      value: 'Is'
    },
    {
      text: 'Pizza',
      value: 'Pizza'
    }
  ]
  const checkboxWithSubsetsOptions = {
    children: [
      {
        key: 'dyr',
        displayName: 'Dyr',
        docCount: 49,
        children: [
          {
            key: 'produksjonsdyr',
            displayName: 'Produksjonsdyr asdf asdfklj jlkjsadflkf jlafdj kl lkjasdfaasdf',
            docCount: 38,
            children: []
          },
          {
            key: 'dyresykdommer',
            displayName: 'Dyresykdommer',
            docCount: 2,
            children: []
          },
          {
            key: 'kjaeledyr',
            displayName: 'Kjæledyr',
            docCount: 1,
            children: []
          }
        ]
      },
      {
        key: 'fisk-og-akvakultur',
        displayName: 'Fisk og akvakultur',
        docCount: 1,
        children: [
          {
            key: 'fiskesykdommer',
            displayName: 'Fiskesykdommer',
            docCount: 1,
            children: []
          }
        ]
      },
      {
        key: 'mat',
        displayName: 'Mat',
        docCount: 3,
        children: [
          {
            key: 'import-av-mat',
            displayName: 'Import av mat',
            docCount: 1,
            children: [
              {
                key: 'kommersiell-import',
                displayName: 'Kommersiell import',
                docCount: 1,
                children: []
              }
            ]
          }
        ]
      },
      {
        key: 'kosmetikk',
        displayName: 'Kosmetikk',
        docCount: 1,
        children: []
      }
    ]
  }
  let values = $state({})

  const { Story } = defineMeta({
    title: 'Components/Form/All',
    args: {
      label: 'Når skjedde det?',
      radioLabel: 'Kan vi kontakte deg?',
      checkboxLabel: 'Hva liker du?',
      checkboxWithSubsetsLegend: 'Hvilkt tema er det du er interessert i?',
      helpText: 'Skriv når hendelsen skjedde og om det har pågått over lengere periode.',
      errorMessage: 'Fyll inn dette feltet.',
      countCharactersLeftLabel: 'karakterer igjen',
      address: {
        streetLabel: 'Søk i gateadresse',
        streetFallbackLabel: 'Gateadresse',
        streetName: 'ownerStreet',
        streetError: undefined,
        postalCodeLabel: 'Postnummer',
        postalCodeName: 'ownerZip',
        postalCodeError: undefined,
        loadJs: true
      },
      disableCss: false
    },
    argTypes: {
      label: { control: 'text' },
      radioLabel: { control: 'text' },
      checkboxLabel: { control: 'text' },
      checkboxWithSubsetsLegend: { control: 'text' },
      helpText: { control: 'text' },
      countCharactersLeftLabel: { control: 'text' },
      disableCss: { control: 'boolean' }
    }
  })
</script>

<Story name="Normal">
  {#snippet children({
    label,
    helpText,
    radioLabel,
    checkboxLabel,
    checkboxWithSubsetsLegend,
    countCharactersLeftLabel,
    address,
    disableCss
  })}
    <div use:wrapInShadowDom={disableCss} class="layout-grid layout-grid--column-12">
      <div class="col-3-span-6 multipage-form-view">
        <form class="mt-form">
          <TextInput
            name="inputfield"
            {label}
            {helpText}
            error={undefined}
            isRequired={true}
            textOptional="Valgfritt"
            inputmode="text"
            placeholder=""
            autocomplete="off" />
          <!-- TextArea   -->
          <TextArea
            name="email"
            {label}
            {helpText}
            {countCharactersLeftLabel}
            error={undefined}
            isRequired={true}
            textOptional="Valgfritt"
            inputmode="text"
            maxlength={300}
            rows={3}
            cols={5} />

          <!--  Radio -->
          <RadioGroup
            options={radioOptions}
            name={radioName}
            error={undefined}
            {helpText}
            label={radioLabel}
            isRequired={true}
            textOptional="Valgfritt" />

          <!-- Checkbox -->
          <Checkbox
            name={checkboxName}
            label={checkboxLabel}
            {helpText}
            options={checkBoxOptions}
            textOptional="Valgfritt" />

          <!-- Checkboxes with subsets-->
          <CheckboxWithSubSets
            name={checkboxWithSubsetsName}
            level1Legend={checkboxWithSubsetsLegend}
            options={checkboxWithSubsetsOptions} />

          <!-- Address -->
          <Address
            streetLabel={address.streetLabel}
            streetFallbackLabel={address.streetFallbackLabel}
            streetName={address.streetName}
            postalCodeLabel={address.postalCodeLabel}
            postalCodeName={address.postalCodeName}
            streetError={address.streetError}
            streetIsRequired={true}
            postalCodeIsRequired={true}
            loadJs={address.loadJs}
            streetHelpText={helpText}
            bind:streetValue={values['ownerStreet']}
            bind:postalCodeValue={values['ownerZip']}></Address>
        </form>
      </div>
    </div>
  {/snippet}
</Story>

<Story name="Input with error">
  {#snippet children({
    label,
    helpText,
    errorMessage,
    radioLabel,
    checkboxLabel,
    countCharactersLeftLabel,
    disableCss
  })}
    <div use:wrapInShadowDom={disableCss}>
      <form class="mt-form form-layout">
        <TextInput
          name="name"
          {label}
          {helpText}
          {countCharactersLeftLabel}
          error={{ key: 'name', message: errorMessage }}
          isRequired={true}
          textOptional="(valgfritt felt)"
          maxlength="10"
          inputmode="text"
          placeholder=""
          autocomplete="off" />

        <TextArea
          name="textfield"
          {label}
          {helpText}
          error={{ key: 'textfield', message: errorMessage }}
          isRequired={true}
          textOptional="(valgfritt felt)"
          inputmode="text"
          maxlength={300}
          rows={3}
          cols={5} />

        <!--  Radio -->
        <RadioGroup
          options={radioOptions}
          name={radioName}
          error={{ key: radioName, message: errorMessage }}
          {helpText}
          label={radioLabel}
          isRequired={true}
          textOptional="valgfritt" />

        <!--    Checkbox-->
        <Checkbox
          name={checkboxName}
          label={checkboxLabel}
          {helpText}
          options={checkBoxOptions}
          error={{ key: checkboxName, message: errorMessage }} />
      </form>
    </div>
  {/snippet}
</Story>
