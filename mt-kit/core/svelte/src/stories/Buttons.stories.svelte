<script lang="ts" module>
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import ButtonSpinner from '$lib/svelte/components/ButtonSpinner.svelte'
  import { wrapInShadowDom } from './storybook-utils/utils'
  import { styles } from '@mattilsynet/design'
  import { X, MagnifyingGlass } from 'phosphor-svelte'

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
      <button type="button" data-variant="primary" class={styles.button} {disabled}
        >{primary}</button>
      <button type="button" data-variant="primary" class={styles.button} {disabled}
        >{primaryLong}</button>
      <button
        type="button"
        data-variant="primary"
        class={styles.button}
        {disabled}
        style="width: 15rem">{primaryLong}</button>

      <p class="description">Sekundær</p>
      <button type="button" data-variant="secondary" class={styles.button} {disabled}
        >{secondary}</button>

      <p class="description">Lenkeknapp</p>
      <button class="mt-button mt-button--link"> ...</button>

      <p class="description">Flat - stor</p>
      <button type="button" data-variant="tertiary" class={styles.button}>Uten ikon</button>
      <button type="button" data-variant="tertiary" class={styles.button}>Avbryt</button>

      <p class="description">Flat med icon</p>
      <button type="button" data-variant="tertiary" class={styles.button}
        >Med ikon
        <X color="#000" />
      </button>

      <p class="description">Flat med icon på venstre side</p>
      <button type="button" data-variant="tertiary" class={styles.button}>
        <MagnifyingGlass />
        Søk
      </button>

      <p class="description">På bakgrunn</p>
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
