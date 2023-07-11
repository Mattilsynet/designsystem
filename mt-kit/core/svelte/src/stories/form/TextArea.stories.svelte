<script lang="ts">
  import {Meta, Story} from '@storybook/addon-svelte-csf'
  import TextArea from '../../../src/svelte/components/form/TextArea.svelte'
  import {wrapInShadowDom} from '../utils'
</script>

<Meta
  title="Components/Form/TextArea"
  args={{
    label: 'Hva gjelder bekymringen?',
    helpText:
      'Beskriv kort og konkret hva du har observert og hvor alvorlig hendelsen er. Vær oppmerksom på den ansvarlige ofte får se meldingen.',
    errorMessage: 'Fyll inn dette feltet.',
    disableCss: false,
    countCharactersLeftLabel: 'karakterer igjen',
    countCharactersTooManyLabel: 'karakterer for mange',
    tooManyCharactersErrorText: 'For lang tekst'
  }}
  argTypes={{
    label: {control: 'text'},
    helpText: {control: 'text'},
    countCharactersLeft: {control: 'text'},
    countCharactersTooManyLabel: {control: 'text'},
    tooManyCharactersErrorText: {control: 'text'},
    errorMessage: {control: 'text'},
    disableCss: {control: 'boolean'}
  }} />

<Story
  name="TextArea normal"
  let:label
  let:helpText
  let:disableCss
  let:countCharactersLeftLabel
  let:countCharactersTooManyLabel
  let:tooManyCharactersErrorText>
  <div use:wrapInShadowDom={disableCss}>
    <form class="form-layout">
      <TextArea
        name="email"
        {label}
        {helpText}
        {countCharactersLeftLabel}
        {countCharactersTooManyLabel}
        {tooManyCharactersErrorText}
        maxlength="100"
        textOptional="valgfritt felt"
        inputmode="text"
        rows="3"
        cols="5" />

      <TextArea
        name="email2"
        {label}
        {helpText}
        {countCharactersLeftLabel}
        {countCharactersTooManyLabel}
        {tooManyCharactersErrorText}
        textOptional="valgfritt felt"
        inputmode="text"
        maxlength="100"
        isRequired={true}
        placeholder="Skriv inn tekst her"
        rows="3"
        cols="5" />
    </form>
  </div>
</Story>

<Story name="TextArea with error" let:label let:helpText let:errorMessage let:disableCss>
  <div use:wrapInShadowDom={disableCss}>
    <form class="form-layout">
      <TextArea
        name="email"
        {label}
        {helpText}
        error={{key: 'email', message: errorMessage}}
        textOptional="valgfritt felt"
        inputmode="text"
        maxlength="100"
        rows="3"
        cols="5" />
    </form>
  </div>
</Story>
