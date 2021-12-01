<script lang="ts">
  import {Meta, Story} from '@storybook/addon-svelte-csf';
  import TextInput from '../../../src/svelte/form/TextInput.svelte';
  import {wrapInShadowDom} from '../../utils';
</script>

<Meta
  title="Components/Form/Input"
  args={{
    label: 'Når skjedde det?',
    helpText: 'Skriv når hendelsen skjedde og om det har pågått over lengere periode.',
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

<Story name="Input" let:label let:helpText let:disableCss>
  <div use:wrapInShadowDom={disableCss}>
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
  </div>
</Story>

<Story name="Input with error" let:label let:helpText let:errorMessage let:disableCss>
  <div use:wrapInShadowDom={disableCss}>
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
  </div>
</Story>
