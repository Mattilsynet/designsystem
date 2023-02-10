<script lang="ts">
  import {Meta, Story} from '@storybook/addon-svelte-csf'
  import TextInput from '../../../src/svelte/components/form/TextInput.svelte'
  import {wrapInShadowDom} from '../../utils'
  import TextArea from '../../../src/svelte/components/form/TextArea.svelte'
  import RadioGroup from '../../../src/svelte/components/form/RadioGroup.svelte'
  import Checkbox from '../../../src/svelte/components/form/Checkbox.svelte'
  import CheckboxWithSubSets from '../../../src/svelte/components/form/CheckboxWithSubSets.svelte'
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
  const checkboxWithSubsetsOptions = [
    {
      key: 'dyr',
      displayName: 'Dyr',
      docCount: 49,
      children: [
        {
          key: 'produksjonsdyr',
          displayName: 'Produksjonsdyr',
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
</script>

<Meta
  title="Components/Form/All"
  args={{
    label: 'Når skjedde det?',
    radioLabel: 'Kan vi kontakte deg?',
    checkboxLabel: 'Hva liker du?',
    checkboxWithSubsetsLegend: 'Hvilkt tema er det du er interessert i?',
    helpText: 'Skriv når hendelsen skjedde og om det har pågått over lengere periode.',
    errorMessage: 'Fyll inn dette feltet.',
    countCharactersLeftLabel: 'karakterer igjen',
    disableCss: false
  }}
  argTypes={{
    label: {control: 'text'},
    radioLabel: {control: 'text'},
    checkboxLabel: {control: 'text'},
    checkboxWithSubsetsLegend: {control: 'text'},
    helpText: {control: 'text'},
    countCharactersLeftLabel: {control: 'text'},
    disableCss: {control: 'boolean'}
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
    <form class="form-layout">
      <TextInput
        name="inputfield"
        {label}
        {helpText}
        error={undefined}
        isRequired={true}
        textOptional="valgfritt felt"
        inputmode="text"
        placeholder=""
        autocomplete="" />

      <!-- TextArea   -->
      <TextArea
        name="email"
        {label}
        {helpText}
        {countCharactersLeftLabel}
        error={undefined}
        isRequired={true}
        textOptional="valgfritt felt"
        inputmode="text"
        maxlength="300"
        rows="3"
        cols="5" />

      <!--  Radio -->
      <RadioGroup
        options={radioOptions}
        name={radioName}
        error={undefined}
        {helpText}
        label={radioLabel}
        isRequired={true}
        textOptional="valgfritt" />

      <!-- Checkbox -->
      <Checkbox name={checkboxName} label={checkboxLabel} {helpText} options={checkBoxOptions} />

      <!-- Checkboxes with subsets-->
      <CheckboxWithSubSets
        name={checkboxWithSubsetsName}
        legend={checkboxWithSubsetsLegend}
        options={checkboxWithSubsetsOptions} />
    </form>
  </div>
</Story>

<Story
  name="Input with error"
  let:label
  let:helpText
  let:errorMessage
  let:radioLabel
  let:checkboxLabel
  let:args
  let:countCharactersLeftLabel>
  <div use:wrapInShadowDom={args.disableCss}>
    <form class="form-layout">
      <TextInput
        name="name"
        {label}
        {helpText}
        {countCharactersLeftLabel}
        error={{key: 'name', message: errorMessage}}
        isRequired={true}
        textOptional="valgfritt felt"
        inputmode="text"
        placeholder=""
        autocomplete="" />

      <TextArea
        name="textfield"
        {label}
        {helpText}
        error={{key: 'textfield', message: errorMessage}}
        isRequired={true}
        textOptional="valgfritt felt"
        inputmode="text"
        maxlength="300"
        rows="3"
        cols="5" />

      <!--  Radio -->
      <RadioGroup
        options={radioOptions}
        name={radioName}
        error={{key: radioName, message: errorMessage}}
        {helpText}
        label={radioLabel}
        isRequired="true"
        textOptional="valgfritt" />

      <!--    Checkbox-->
      <Checkbox
        name={checkboxName}
        label={checkboxLabel}
        {helpText}
        options={checkBoxOptions}
        error={{key: checkboxName, message: errorMessage}} />
    </form>
  </div>
</Story>
