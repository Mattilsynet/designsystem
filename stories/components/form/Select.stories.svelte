<script lang="ts">
  import {Meta, Story} from '@storybook/addon-svelte-csf';
  import Select from '../../../src/svelte/form/Select.svelte';
</script>

<Meta
  title="Components/Form/Select"
  args={{
    label: 'Velg dyr',
    helpText: 'Velg den typen dyr som denne saken gjelder',
    errorMessage: 'Fyll inn dette feltet.'
  }}
  argTypes={{
    title: {control: 'text'},
    disableCss: {control: 'boolean'}
  }}
/>

<Story name="Normal" let:label let:helpText>
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
      idPrefix="select-box-"
    />
  </form>
</Story>
