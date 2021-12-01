<script lang="ts">
  import {Meta, Story} from '@storybook/addon-svelte-csf';
  import Select from '../../../src/svelte/form/Select.svelte';
  import {wrapInShadowDom} from '../../utils';
</script>

<Meta
  title="Components/Form/Select"
  args={{
    label: 'Velg dyr',
    helpText: 'Velg den typen dyr som denne saken gjelder',
    errorMessage: 'Fyll inn dette feltet.',
    disableCss: false
  }}
  argTypes={{
    label: {control: 'text'},
    helpText: {control: 'text'},
    errorMessage: {control: 'text'},
    disableCss: {control: 'boolean'}
  }}
/>

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
        idPrefix="select-box-"
      />
    </form>
  </div>
</Story>
