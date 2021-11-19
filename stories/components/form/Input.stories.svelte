<script lang="ts">
  import {Meta, Story} from '@storybook/addon-svelte-csf';
  import TextInput from '../../../src/svelte/form/TextInput.svelte';
</script>

<Meta
  title="Components/Form/Input"
  args={{
    label: 'Når skjedde det?',
    helpText: 'Skriv når hendelsen skjedde og om det har pågått over lengere periode.',
    errorMessage: 'Fyll inn dette feltet.'
  }}
  argTypes={{
    title: {control: 'text'},
    disableCss: {control: 'boolean'}
  }}
/>

<Story name="Input" let:label let:helpText>
  <form class="form-layout">
    <TextInput
      name="inputfield"
      {label}
      {helpText}
      textOptional="valgfritt felt"
      inputmode="text"
      placeholder=""
      autocomplete=""
    />
  </form>
</Story>

<Story name="Input with error" let:label let:helpText let:errorMessage>
  <form class="form-layout">
    <TextInput
      name="inputfield"
      {label}
      {helpText}
      error={{key: 'inputfield', message: errorMessage}}
      textOptional="valgfritt felt"
      inputmode="text"
      placeholder=""
      autocomplete=""
    />
  </form>
</Story>
