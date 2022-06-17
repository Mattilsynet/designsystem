<script lang="ts">
  import {Meta, Story} from '@storybook/addon-svelte-csf'
  import TextInput from '../../../src/svelte/form/TextInput.svelte'
  import {wrapInShadowDom} from '../../utils'
</script>

<Meta
  title="Components/Form/Input"
  args={{
    label: 'Når skjedde det?',
    helpText: 'Skriv når hendelsen skjedde og om det har pågått over lengere periode.',
    errorMessage: 'Fyll inn dette feltet.',
    horizontal: [
      {
        label: 'Hund, antall',
        textOptional: 'Valgfritt felt',
        helpText: 'Hjelpetekst',
        isRequired: false
      },
      {
        label: 'Katt, antall',
        textOptional: 'Valgfritt felt',
        helpText: 'Hjelpetekst',
        isRequired: false
      }
    ],
    countCharactersLeftLabel: 'karakterer igjen',
    disableCss: false
  }}
  argTypes={{
    label: {control: 'text'},
    helpText: {control: 'text'},
    errorMessage: {control: 'text'},
    disableCss: {control: 'boolean'}
  }} />

<Story name="Input" let:label let:helpText let:disableCss let:args>
  <div use:wrapInShadowDom={disableCss}>
    <form class="form-layout">
      <TextInput
        name="inputfield"
        {label}
        {helpText}
        textOptional="valgfritt felt"
        inputmode="text"
        placeholder=""
        autocomplete="" />

      <TextInput
        name="inputfield2"
        {label}
        {helpText}
        textOptional="valgfritt felt"
        inputmode="text"
        isRequired={true}
        placeholder="Skriv noe"
        autocomplete="" />

      <TextInput
        name="inputfield3"
        {label}
        {helpText}
        textOptional="valgfritt felt"
        inputmode="text"
        isRequired={true}
        placeholder=""
        autocomplete=""
        maxlength={30} />

      <h2>Horisontal layout</h2>
      <div class="collapsable-input-list-grid">
        {#each args.horizontal as horizontal}
          <TextInput
            name="inputfield3"
            label={horizontal.label}
            textOptional={horizontal.textOptional}
            helpText={horizontal.helpText}
            inputmode="text"
            isRequired={horizontal.isRequired}
            placeholder=""
            autocomplete=""
            isHorizontal={true}
            inputClass="form-field--small form-field--small-width" />
        {/each}
      </div>
    </form>
  </div>
</Story>

<Story
  name="Input with error"
  let:label
  let:helpText
  let:errorMessage
  let:disableCss
  let:countCharactersLeftLabel>
  <div use:wrapInShadowDom={disableCss}>
    <form class="form-layout">
      <TextInput
        name="inputfield"
        {label}
        {helpText}
        countCharactersLeftLabel="karakterer igjen"
        error={{key: 'inputfield', message: errorMessage}}
        textOptional="valgfritt felt"
        inputmode="text"
        maxlength={10}
        placeholder=""
        autocomplete="" />
      <div class="collapsable-input-list-grid">
        <TextInput
          name="inputfield3"
          label="Hund, antall"
          helpText="Skriv inn antall hunder"
          textOptional="valgfritt felt"
          inputmode="text"
          error={{key: 'inputfield', message: 'Feltet er påkrevd'}}
          isRequired={false}
          placeholder=""
          isHorizontal={true}
          autocomplete=""
          inputClass="form-field--small form-field--small-width" />
      </div>
    </form>
  </div>
</Story>

<style>
  .collapsable-input-list-grid {
    display: grid;
    row-gap: 1rem;
    width: 20rem;
  }
</style>
