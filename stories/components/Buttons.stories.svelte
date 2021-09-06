<script lang="ts">
  import {Meta, Story} from '@storybook/addon-svelte-csf';
  import FileUploadButton from '../../src/svelte/FileUploadButton.svelte';
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
    disableCss: {control: 'boolean'}
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

<Story name="FileUpload" let:disableJs>
  <FileUploadButton name="file" label="Legg til fil" loadJs={!disableJs}>
    <div class="hint">Legg ved relevant dokumentasjon som bilde eller video (max fil str. 40MB)</div>
  </FileUploadButton>
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
