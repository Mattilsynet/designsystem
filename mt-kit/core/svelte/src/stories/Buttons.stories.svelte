<script lang="ts" module>
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import ButtonSpinner from '$lib/svelte/components/ButtonSpinner.svelte'
  import { wrapInShadowDom } from './storybook-utils/utils'

  const { Story } = defineMeta({
    title: 'Components/Buttons',
    args: {
      primary: 'Gå videre',
      primaryLong: 'Send inn til Mattilsynet',
      secondary: 'Avbryt',
      inProgress: false,
      uploadRequired: false,
      disabled: false,
      disableJs: false,
      disableCss: false
    },
    argTypes: {
      primary: { control: 'text' },
      inProgress: { control: 'boolean' },
      disabled: { control: 'boolean' },
      disableJs: { control: 'boolean' },
      disableCss: { control: 'boolean' },
      uploadRequired: { control: 'boolean' },
      removeFile: { action: 'removeFile' }
    }
  })
</script>

<Story name="Normal">
  {#snippet children({ primary, primaryLong, disableCss, disabled, secondary })}
    <div use:wrapInShadowDom={disableCss}>
      <h1 class="mt-h1">Knapper</h1>
      <p class="description">Hovedknapp - stor</p>
      <button class="mt-button mt-button--primary" {disabled}>{primary}</button>
      <button class="mt-button mt-button--primary" {disabled}>{primaryLong}</button>
      <button class="mt-button mt-button--primary" {disabled} style="width: 15rem"
        >{primaryLong}</button>

      <p class="description">Sekundær - stor</p>
      <button class="mt-button mt-button--secondary" {disabled}>{secondary}</button>

      <p class="description">Lenkeknapp</p>
      <button class="mt-button mt-button--link"> ...</button>

      <p class="description">Flat - stor</p>
      <button class="mt-button mt-button--flat no-icon">Uten ikon</button>
      <button class="mt-button mt-button--flat no-icon">Avbryt</button>

      <p class="description">Flat med icon - stor</p>
      <button class="mt-button mt-button--flat closable">Med ikon</button>

      <p class="description">Flat med icon på venstre side</p>
      <button class="mt-button mt-button--flat icon--search-before">Søk</button>

      <p class="description">På blå - stor</p>
      <div class="background-mt-blue p-xxs">
        <button type="button" class="mt-button mt-button--on-primary">{primary}</button>
      </div>
    </div>
  {/snippet}
</Story>

<Story name="Loading">
  {#snippet children({ disableCss, inProgress })}
    <div use:wrapInShadowDom={disableCss}>
      <h1 class="mt-h1">Loading</h1>
      <p class="description">Hovedknapp</p>
      <div class="layout-flex">
        <ButtonSpinner
          formInProgressAriaLabel="Sender inn skjema, venter på svar."
          btnClassNames="mt-button--primary"
          spinnerPlacement="start"
          {inProgress}>
          Spinner placement start
        </ButtonSpinner>
        <ButtonSpinner
          formInProgressAriaLabel="Sender inn skjema, venter på svar."
          btnClassNames="mt-button--primary"
          {inProgress}
          spinnerPlacement="end">
          Spinner placement end
        </ButtonSpinner>
      </div>

      <p class="description">Sekundær</p>
      <ButtonSpinner
        type="submit"
        formInProgressAriaLabel="Sender inn skjema, venter på svar."
        btnClassNames="mt-button--secondary"
        {inProgress}
        spinnerPlacement="end">
        Send in skjema
      </ButtonSpinner>
    </div>
  {/snippet}
</Story>

<style lang="scss" global>
  button {
    margin-right: var(--spacer-x-small);
  }

  .description {
    margin-top: 2rem;
  }
</style>
