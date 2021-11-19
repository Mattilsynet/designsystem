<script lang="ts">
  import {Meta, Story} from '@storybook/addon-svelte-csf';
  import {action} from '@storybook/addon-actions';
  import FileUploadButton from '../../src/svelte/FileUploadButton.svelte';
  import ButtonSpinner from '../../src/svelte/ButtonSpinner.svelte';
</script>

<Meta
  title="Components/Buttons"
  args={{
    primary: 'Gå videre',
    primaryLong: 'Send inn til Mattilsynet',
    secondary: 'Avbryt',
    uploadRequired: false,
    disabled: false,
    disableJs: false,
    disableCss: false
  }}
  argTypes={{
    primary: {control: 'text'},
    disabled: {control: 'boolean'},
    disableJs: {control: 'boolean'},
    disableCss: {control: 'boolean'},
    uploadRequired: {control: 'boolean'},
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

  <p class="description">Lenkeknapp</p>
  <button class="button button--link"> ... </button>
</Story>

<Story name="FileUpload" parameters={{xstate: true}} let:disableJs let:uploadRequired>
  <FileUploadButton
    name="file"
    id="file1"
    buttonText="Legg til fil"
    loadJs={!disableJs}
    multiple={true}
    isRequired={uploadRequired}
    on:removeFile={action('removeFile')}
  />
</Story>

<Story name="Loading">
  <h1>Loading</h1>
  <p class="description">Hovedknapp</p>
  <ButtonSpinner
    formInProgressAriaLabel="Sender inn skjema, venter på svar."
    btnClassNames="button--primary"
    spinnerPlacement="start"
  >
    Spinner placement start
  </ButtonSpinner><br />
  <ButtonSpinner
    formInProgressAriaLabel="Sender inn skjema, venter på svar."
    btnClassNames="button--primary"
    spinnerPlacement="end"
  >
    Spinner placement end
  </ButtonSpinner>

  <p class="description">Sekundær</p>
  <ButtonSpinner
    formInProgressAriaLabel="Sender inn skjema, venter på svar."
    btnClassNames="button--secondary"
    spinnerPlacement="end"
  >
    Send in skjema
  </ButtonSpinner>
</Story>

<style lang="scss" global>
  button {
    margin-top: 0.5rem;
    margin-right: var(--spacer-small);
  }
  .description {
    margin-top: 2rem;
  }
</style>
