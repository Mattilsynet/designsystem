<script lang="ts" module>
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import RadioGroup from '$lib/svelte/components/form/RadioGroup.svelte'
  import { wrapInShadowDom } from '../storybook-utils/utils'

  const name = 'radiobuttons'
  const options = [
    {
      text: 'Dere kan kontakte meg',
      value: 'yes'
    },
    {
      text: 'Jeg ønsker å være anonym',
      value: 'no'
    }
  ]

  const { Story } = defineMeta({
    title: 'Components/Form/RadioButtons',
    args: {
      label: 'Kan vi kontakte deg?',
      helpText:
        'Beskriv kort og konkret hva du har observert og hvor alvorlig hendelsen er. Vær oppmerksom på den ansvarlige ofte får se meldingen.',
      errorMessage: 'Fyll inn dette feltet.',
      disableCss: false
    },
    argTypes: {
      label: { control: 'text' },
      helpText: { control: 'text' },
      errorMessage: { control: 'text' },
      disableCss: { control: 'boolean' }
    }
  })
</script>

<Story name="Normal">
  {#snippet children({ label, helpText, disableCss })}
    <div use:wrapInShadowDom={disableCss}>
      <h1 class="mt-h1">Radioknapper</h1>
      <h2 class="mt-h2">Theme - radio</h2>
      <form class="mt-form form-layout">
        <RadioGroup
          {options}
          {name}
          {helpText}
          {label}
          textOptional="Valgfritt"
          isRequired />
      </form>
    </div>
  {/snippet}
</Story>

<Story name="Radio with error">
  {#snippet children({ label, helpText, disableCss, errorMessage })}
    <div use:wrapInShadowDom={disableCss}>
      <h2 class="mt-h2">Theme - radio</h2>
      <form class="mt-form form-layout">
        <RadioGroup
          {options}
          {name}
          {helpText}
          {label}
          error={{ key: name, message: errorMessage }}
          textOptional="valgfritt" />
      </form>
    </div>
  {/snippet}
</Story>

<style lang="scss">
  #theme {
    margin-top: var(--spacer-medium);
    margin-bottom: var(--spacer-xx-small);
  }
</style>
