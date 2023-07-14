<script lang="ts">
  import { Meta, Story } from '@storybook/addon-svelte-csf'
  import RadioGroup from '../../../src/svelte/components/form/RadioGroup.svelte'
  import { wrapInShadowDom } from '../storybook-utils/utils'

  const name = 'radiobuttons'
  const options = [
    {
      text: 'Dere kan kontakte meg',
      value: 'yes'
    },
    {
      text: 'Jeg ønsker å være anonym',
      value: 'no'
    }
  ]
  let buttonRadioValue
  const buttonOptions = [
    {
      text: 'Ja',
      value: '1'
    },
    {
      text: 'Nei',
      value: '2'
    }
  ]
</script>

<Meta
  title="Components/Form/RadioButtons"
  args={{
    label: 'Kan vi kontakte deg?',
    helpText:
      'Beskriv kort og konkret hva du har observert og hvor alvorlig hendelsen er. Vær oppmerksom på den ansvarlige ofte får se meldingen.',
    errorMessage: 'Fyll inn dette feltet.',
    buttonRadio: {
      label: 'Reiser du selv med dyret?',
      helpText: 'Hjelpetekst',
      errorMessage: 'Fyll inn dette feltet.',
      name: 'travelWithAnimal'
    },
    disableCss: false
  }}
  argTypes={{
    label: { control: 'text' },
    helpText: { control: 'text' },
    errorMessage: { control: 'text' },
    disableCss: { control: 'boolean' }
  }}
/>

<Story name="Normal" let:label let:helpText let:disableCss let:args>
  <div use:wrapInShadowDom={disableCss}>
    <h1>Radioknapper</h1>
    <h2>Theme - radio</h2>
    <form class="form-layout">
      <RadioGroup
        {options}
        {name}
        {helpText}
        {label}
        error={undefined}
        textOptional="valgfritt"
        theme="radio"
      />
    </form>
    <h2 id="theme">Theme - button</h2>
    <form action="" class="form-layout">
      <RadioGroup
        options={buttonOptions}
        bind:value={buttonRadioValue}
        name={args.buttonRadio.name}
        {helpText}
        label={args.buttonRadio.label}
        error={undefined}
        textOptional={args.buttonRadio.textOptional}
        theme="button"
      />
    </form>
  </div>
</Story>

<Story name="Radio with error" let:label let:helpText let:disableCss let:errorMessage let:args>
  <div use:wrapInShadowDom={disableCss}>
    <h2>Theme - radio</h2>
    <form class="form-layout">
      <RadioGroup
        {options}
        {name}
        {helpText}
        {label}
        error={{ key: name, message: errorMessage }}
        textOptional="valgfritt"
      />
    </form>
    <h2 id="theme">Theme - button</h2>
    <form class="form-layout">
      <RadioGroup
        options={buttonOptions}
        bind:value={buttonRadioValue}
        name={args.buttonRadio.name}
        {helpText}
        label={args.buttonRadio.label}
        error={{ key: name, message: errorMessage }}
        textOptional={args.buttonRadio.textOptional}
        theme="button"
      />
    </form>
  </div>
</Story>

<style lang="scss">
  #theme {
    margin-top: var(--spacer-medium);
    margin-bottom: var(--spacer-xx-small);
  }
</style>
