<script lang="ts">
  import {Meta, Story} from '@storybook/addon-svelte-csf';
  import TextArea from '../../../src/svelte/form/TextArea.svelte';
  import {wrapInShadowDom} from '../../utils';
</script>

<Meta
  title="Components/Form/TextArea"
  args={{
    label: 'Hva gjelder bekymringen?',
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

<Story name="TextArea normal" let:label let:helpText let:disableCss>
  <div use:wrapInShadowDom={disableCss}>
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

      <TextArea
        name="email2"
        {label}
        {helpText}
        textOptional="valgfritt felt"
        inputmode="text"
        maxlength={300}
        isRequired={true}
        placeholder="Skriv inn tekst her"
        rows="3"
        cols="5"
      />
    </form>
  </div>
</Story>

<Story name="TextArea with error" let:label let:helpText let:errorMessage let:disableCss>
  <div use:wrapInShadowDom={disableCss}>
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
  </div>
</Story>
