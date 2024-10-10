<script lang="ts">
  import { Meta, Story } from '@storybook/addon-svelte-csf'
  import Checkbox from '$lib/svelte/components/form/Checkbox.svelte'
  import { wrapInShadowDom } from '../storybook-utils/utils'

  const name = 'checkbox'
  let buttonCheckboxValue = []

  function handleOnChange(event) {
    console.log(event.detail)
  }
</script>

<Meta
  title="Components/Form/Checkbox"
  args={{
    label: 'Kan vi kontakte deg?',
    helpText:
      'Beskriv kort og konkret hva du har observert og hvor alvorlig hendelsen er. Vær oppmerksom på den ansvarlige ofte får se meldingen.',
    errorMessage: 'Fyll inn dette feltet.',
    hiddenErrorText: 'Feilmelding',
    isRequired: false,
    textOptional: 'Valgfitt',
    options: [
      {
        text: 'Dere kan kontakte meg',
        value: 'yes'
      },
      {
        text: 'Jeg ønsker å være anonym',
        value: 'no'
      }
    ],
    buttonOptions: [
      {
        text: 'Ja',
        value: '1'
      },
      {
        text: 'Nei',
        value: '2'
      }
    ],
    disableCss: false
  }}
  argTypes={{
    label: { control: 'text' },
    helpText: { control: 'text' },
    errorMessage: { control: 'text' },
    hiddenErrorText: { control: 'text' },
    isRequired: { control: 'boolean' },
    textOptional: { control: 'text' },
    options: { control: 'object' },
    buttonOptions: { control: 'object' },
    disableCss: { control: 'boolean' }
  }} />

<Story
  name="Normal"
  let:label
  let:helpText
  let:disableCss
  let:options
  let:buttonOptions
  let:isRequired
  let:textOptional>
  <div use:wrapInShadowDom={disableCss}>
    <h1 class="mt-h1">Checkbox</h1>
    <h2 id="theme" class="mt-h2">Theme - checkbox</h2>
    <form class="mt-form">
      <Checkbox
        {name}
        {label}
        {helpText}
        {options}
        {isRequired}
        {textOptional}
        on:onChange={handleOnChange} />
    </form>
    <h2 id="theme" class="mt-h2">Theme - button</h2>
    <form action="" class="mt-form form-layout">
      <Checkbox
        {name}
        {label}
        {isRequired}
        {textOptional}
        options={buttonOptions}
        {helpText}
        theme="button"
        bind:value={buttonCheckboxValue} />
    </form>
  </div>
</Story>

<Story
  name="Checkbox with error"
  let:label
  let:helpText
  let:disableCss
  let:errorMessage
  let:hiddenErrorText
  let:options
  let:buttonOptions
  let:isRequired
  let:textOptional>
  <div use:wrapInShadowDom={disableCss}>
    <h2 id="theme" class="mt-h2">Theme - checkbox</h2>
    <form class="mt-form">
      <Checkbox
        {name}
        {label}
        {helpText}
        {options}
        {isRequired}
        {hiddenErrorText}
        {textOptional}
        error={{ key: name, message: errorMessage }}
        let:isRequired />
    </form>
    <h2 id="theme" class="mt-h2">Theme - button</h2>
    <form class="mt-form">
      <Checkbox
        {name}
        {label}
        {helpText}
        {isRequired}
        {hiddenErrorText}
        {textOptional}
        options={buttonOptions}
        error={{ key: name, message: errorMessage }}
        theme="button" />
    </form>
  </div>
</Story>

<style lang="scss">
  #theme {
    margin-top: var(--spacer-medium);
    margin-bottom: var(--spacer-xx-small);
  }
</style>
