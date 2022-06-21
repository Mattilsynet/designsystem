<script lang="ts">
  import {Meta, Story} from '@storybook/addon-svelte-csf'
  import Select from '../../../src/svelte/form/Select.svelte'
  import MultiSelect from '../../../src/svelte/MultiSelect.svelte'
  import {wrapInShadowDom} from '../../utils'

  let value = []

  function handleSubmit(e) {
    console.log('form handle submit')
  }
  function handleFormKeyUp(e) {
    console.log('form handle handleFormKeyUp')
  }
</script>

<Meta
  title="Components/Form/Select"
  args={{
    label: 'Velg dyr',
    helpText: 'Velg den typen dyr som denne saken gjelder',
    errorMessage: 'Fyll inn dette feltet.',
    multiselect: {
      preferredOptions: [
        {value: 'NO', text: 'Norge', ariaLabel: 'Fjern Norge fra listen'},
        {value: 'SE', text: 'Sverige', ariaLabel: 'Fjern Sverig fra listen'},
        {value: 'FI', text: 'Finland', ariaLabel: 'Fjern Finland fra listen'}
      ],
      options: [
        {value: 'DA', text: 'Danmark', ariaLabel: 'Fjern Danmark fra listen'},
        {value: 'FI', text: 'Finland', ariaLabel: 'Fjern Finland fra listen'},
        {value: 'FR', text: 'Frankrike', ariaLabel: 'Fjern Frankrike fra listen'},
        {value: 'NO', text: 'Norge', ariaLabel: 'Fjern Norge fra listen'},
        {value: 'PT', text: 'Portugal', ariaLabel: 'Fjern Portugal fra listen'},
        {value: 'ES', text: 'Spania', ariaLabel: 'Fjern Spania fra listen'},
        {value: 'SE', text: 'Sverige', ariaLabel: 'Fjern Sverige fra listen'},
        {value: 'KR', text: 'Sør Korea', ariaLabel: 'Fjern Sør Korea fra listen'},
        {value: 'DE', text: 'Tyskland', ariaLabel: 'Fjern Tyskland fra listen'}
      ],
      label: 'Hvilke land har du vært i?',
      helpText: 'Legg til landene du har vært i før dere kom til Norge.',
      isRequired: true
    },
    disableCss: false
  }}
  argTypes={{
    label: {control: 'text'},
    helpText: {control: 'text'},
    errorMessage: {control: 'text'},
    disableCss: {control: 'boolean'}
  }} />

<Story name="Normal" let:label let:helpText let:disableCss>
  <div use:wrapInShadowDom={disableCss}>
    <form>
      <Select
        options={[
          {text: 'Hund', value: 'dog'},
          {text: 'Cat', value: 'cat'}
        ]}
        {label}
        {helpText}
        name="animal"
        error={undefined}
        idPrefix="select-box-" />
    </form>
  </div>
</Story>

<Story name="Velg fler" let:args let:disableCss>
  <div use:wrapInShadowDom={disableCss}>
    <form on:submit|preventDefault={handleSubmit} on:keyup|preventDefault={handleFormKeyUp}>
      <MultiSelect
        options={args.multiselect.options}
        preferredOptions={args.multiselect.preferredOptions}
        label={args.multiselect.label}
        name="multi-select"
        bind:values={value}
        isRequired={args.multiselect.isRequired}
        helpText={args.multiselect.helpText} />
      <p>
        Values:
        {JSON.stringify(value, null, 2)}
      </p>
    </form>
  </div>
</Story>
