<script lang="ts">
  import {Meta, Story} from '@storybook/addon-svelte-csf';
  import Checkbox from '../../../src/svelte/form/Checkbox.svelte';

  const name = 'checkbox';
  const options = [
    {
      text: 'Dere kan kontakte meg',
      value: 'yes'
    },
    {
      text: 'Jeg ønsker å være anonym',
      value: 'no'
    }
  ];
</script>

<Meta
  title="Components/Form/Checkbox"
  args={{
    label: 'Kan vi kontakte deg?',
    helpText:
      'Beskriv kort og konkret hva du har observert og hvor alvorlig hendelsen er. Vær oppmerksom på den ansvarlige ofte får se meldingen.',
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
  <form>
    <Checkbox {name} {label} {helpText} {options} />
  </form>
</Story>

<Story name="Checkbox with error" let:label let:helpText let:disableCss let:errorMessage>
  <form>
    <Checkbox {name} {label} {helpText} {options} error={{key: name, message: errorMessage}} />
  </form>
</Story>
