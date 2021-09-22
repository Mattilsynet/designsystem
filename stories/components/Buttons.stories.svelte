<script lang="ts">
  import {Meta, Story} from '@storybook/addon-svelte-csf';
  import {action} from '@storybook/addon-actions';
  import FileUploadButton from '../../src/svelte/FileUploadButton.svelte';
  import Button from '../../src/svelte/Button.svelte';
</script>

<Meta
  title="Components/Buttons"
  args={{
    primary: 'Gå videre',
    primaryLong: 'Send inn til Mattilsynet',
    secondary: 'Avbryt',
    disabled: false,
    disableJs: false,
    disableCss: false
  }}
  argTypes={{
    primary: {control: 'text'},
    disabled: {control: 'boolean'},
    disableJs: {control: 'boolean'},
    disableCss: {control: 'boolean'},
    removeFile: {action: 'removeFile'}
  }}
/>

<Story name="Normal" let:primary let:primaryLong let:disableCss let:disabled let:secondary>
  <h1>Knapper</h1>
  <p class="description">Hovedknapp</p>
  <button class="button button--primary" {disabled}>{primary}</button>
  <button class="button button--primary" {disabled}>{primaryLong}</button>

  <p class="description">Sekundær</p>
  <button class="button button--secondary" {disabled}>{secondary}</button>
</Story>

<Story name="FileUpload" parameters={{xstate: true}} let:disableJs>
  <FileUploadButton
    name="file"
    id="file1"
    buttonText="Legg til fil"
    loadJs={!disableJs}
    multiple={true}
    on:removeFile={action('removeFile')}
  />
</Story>

<Story name="Loading" >
  <Button progressIndicator={true}>Send in skjema</Button>
</Story>

<style lang="scss" global>
  @import 'src/scss/app';

  button {
    margin-top: 0.5rem;
    margin-right: var(--spacer-2);
  }
  .description {
    margin-top: 2rem;
  }
</style>
