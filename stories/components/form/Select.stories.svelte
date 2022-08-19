<script lang="ts">
  import {Meta, Story} from '@storybook/addon-svelte-csf'
  import Select from '../../../src/svelte/form/Select.svelte'
  import MultiSelect from '../../../src/svelte/form/MultiSelect.svelte'
  import {wrapInShadowDom} from '../../utils'

  let value = []

  function handleSubmit() {
    console.log('FORM handle submit')
  }

  function handleFormKeyUp() {
    console.log('HandleFormKeyUp')
  }

  function handleFormKeyDown(e) {
    if (e.key === 'Enter' && e.target.type !== 'submit') {
      e.preventDefault()
    }
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
        {value: 'NO', text: 'Norge', removeAriaLabel: 'Fjern Norge fra listen'},
        {value: 'SE', text: 'Sverige', removeAriaLabel: 'Fjern Sverig fra listen'},
        {value: 'FI', text: 'Finland', removeAriaLabel: 'Fjern Finland fra listen'}
      ],
      options: [
        {value: 'DA', text: 'Danmark', removeAriaLabel: 'Fjern Danmark fra listen'},
        {value: 'FI', text: 'Finland', removeAriaLabel: 'Fjern Finland fra listen'},
        {value: 'FR', text: 'Frankrike', removeAriaLabel: 'Fjern Frankrike fra listen'},
        {value: 'NO', text: 'Norge', removeAriaLabel: 'Fjern Norge fra listen'},
        {value: 'PT', text: 'Portugal', removeAriaLabel: 'Fjern Portugal fra listen'},
        {value: 'ES', text: 'Spania', removeAriaLabel: 'Fjern Spania fra listen'},
        {value: 'SE', text: 'Sverige', removeAriaLabel: 'Fjern Sverige fra listen'},
        {value: 'KR', text: 'Sør Korea', removeAriaLabel: 'Fjern Sør Korea fra listen'},
        {value: 'DE', text: 'Tyskland', removeAriaLabel: 'Fjern Tyskland fra listen'}
      ],
      label: 'Hvilke land har du vært i?',
      tagsLabel: 'Land du skal besøke:',
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
    <form
      on:keyup|preventDefault={handleFormKeyUp}
      on:keydown|stopPropagation={handleFormKeyDown}
      on:submit|preventDefault={handleSubmit}>
      <MultiSelect
        options={args.multiselect.options}
        preferredOptions={args.multiselect.preferredOptions}
        label={args.multiselect.label}
        name="multi-select"
        bind:values={value}
        tagsLabel={args.multiselect.tagsLabel}
        isRequired={args.multiselect.isRequired}
        helpText={args.multiselect.helpText} />
      <button type="submit" class="button">Submit</button>
      <p>
        Values:
        {JSON.stringify(value, null, 2)}
      </p>
    </form>
  </div>
</Story>
