<script lang="ts">
  import {Meta, Story} from '@storybook/addon-svelte-csf';
  import TextArea from '../../../src/svelte/form/TextArea.svelte';
</script>

<Meta
  title="Components/Form/TextArea"
  args={{
    label: 'Hva gjelder bekymringen?',
    helpText:
      'Beskriv kort og konkret hva du har observert og hvor alvorlig hendelsen er. Vær oppmerksom på den ansvarlige ofte får se meldingen.',
    errorMessage: 'Fyll inn dette feltet.'
  }}
  argTypes={{
    title: {control: 'text'},
    disableCss: {control: 'boolean'}
  }}
/>

<Story name="TextArea normal" let:label let:helpText>
  <form class="form-layout">
    <TextArea
      name="email"
      {label}
      {helpText}
      textOptional="valgfritt felt"
      inputmode="text"
      maxlength={300}
      rows="3"
      cols="5"
    />
  </form>
</Story>

<Story name="TextArea with error" let:label let:helpText let:errorMessage>
  <form class="form-layout">
    <TextArea
      name="email"
      {label}
      {helpText}
      error={{key: 'email', message: errorMessage}}
      textOptional="valgfritt felt"
      inputmode="text"
      maxlength="300"
      rows="3"
      cols="5"
    />
  </form>
</Story>
