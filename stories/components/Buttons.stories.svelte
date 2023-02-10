<script lang="ts">
  import {Meta, Story} from '@storybook/addon-svelte-csf'
  import {action} from '@storybook/addon-actions'
  import FileUploadButton from '../../src/svelte/components/FileUploadButton.svelte'
  import ButtonSpinner from '../../src/svelte/components/ButtonSpinner.svelte'
  import {wrapInShadowDom} from '../utils'
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
  }} />

<Story name="Normal" let:primary let:primaryLong let:disableCss let:disabled let:secondary>
  <div use:wrapInShadowDom={disableCss}>
    <h1>Knapper</h1>
    <p class="description">Hovedknapp - stor</p>
    <button class="button button--primary" {disabled}>{primary}</button>
    <button class="button button--primary" {disabled}>{primaryLong}</button>
    <button class="button button--primary" {disabled} style="width: 15rem">{primaryLong}</button>

    <p class="description">Sekundær - stor</p>
    <button class="button button--secondary" {disabled}>{secondary}</button>

    <p class="description">Lenkeknapp</p>
    <button class="button button--link"> ... </button>

    <p class="description">Flat - stor</p>
    <button class="button button--flat">Uten ikon</button>

    <p class="description">Flat med icon - stor</p>
    <button class="button button--flat closable">Med ikon</button>

    <p class="description">Flat med icon på venstre side</p>
    <button class="button button--flat icon-search-before">Søk</button>

    <p class="description">På blå - stor</p>
    <div class="background-mt-blue p-xxs">
      <buttton type="button" class="button button--on-primary">{primary}</buttton>
    </div>
  </div>
</Story>

<Story
  name="FileUpload"
  parameters={{xstate: true}}
  let:disableJs
  let:disableCss
  let:uploadRequired>
  <div use:wrapInShadowDom={disableCss}>
    <FileUploadButton
      name="file"
      id="file1"
      buttonText="Legg til fil"
      loadJs={!disableJs}
      multiple={true}
      isRequired={uploadRequired}
      on:removeFile={action('removeFile')} />
  </div></Story>

<Story name="Loading" let:disableCss>
  <div use:wrapInShadowDom={disableCss}>
    <h1>Loading</h1>
    <p class="description">Hovedknapp</p>
    <ButtonSpinner
      formInProgressAriaLabel="Sender inn skjema, venter på svar."
      btnClassNames="button--primary"
      spinnerPlacement="start">
      Spinner placement start
    </ButtonSpinner><br />
    <ButtonSpinner
      formInProgressAriaLabel="Sender inn skjema, venter på svar."
      btnClassNames="button--primary"
      spinnerPlacement="end">
      Spinner placement end
    </ButtonSpinner>

    <p class="description">Sekundær</p>
    <ButtonSpinner
      formInProgressAriaLabel="Sender inn skjema, venter på svar."
      btnClassNames="button--secondary"
      spinnerPlacement="end">
      Send in skjema
    </ButtonSpinner>
  </div>
</Story>

<style lang="scss" global>
  button {
    margin-right: var(--spacer-x-small);
  }
  .description {
    margin-top: 2rem;
  }
</style>
