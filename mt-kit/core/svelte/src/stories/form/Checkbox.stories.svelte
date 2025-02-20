<script lang="ts" module>
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import Checkbox from '$lib/svelte/components/form/Checkbox.svelte'
  import { wrapInShadowDom } from '../storybook-utils/utils'
  import { action } from '@storybook/addon-actions'

  const name = 'checkbox'

  const checkedAction = action('checked')
  function onChange({ checked, value }: HTMLInputElement) {
    checkedAction('checked:', checked, 'value:', value)
  }

  const { Story } = defineMeta({
    title: 'Components/Form/Checkbox',
    args: {
      label: 'Kan vi kontakte deg?',
      helpText:
        'Beskriv kort og konkret hva du har observert og hvor alvorlig hendelsen er. Vær oppmerksom på den ansvarlige ofte får se meldingen.',
      errorMessage: 'Fyll inn dette feltet.',
      hiddenErrorText: 'Feilmelding',
      isRequired: false,
      textOptional: 'Valgfritt',
      options: [
        {
          text: 'Dere kan kontakte meg',
          value: 'yes'
        },
        {
          text: 'Jeg ønsker å være anonym',
          value: 'no',
          helpText: 'Hjelpetekst til det enkelte valg'
        }
      ],
      disableCss: false
    },
    argTypes: {
      label: { control: 'text' },
      helpText: { control: 'text' },
      errorMessage: { control: 'text' },
      hiddenErrorText: { control: 'text' },
      isRequired: { control: 'boolean' },
      textOptional: { control: 'text' },
      options: { control: 'object' },
      buttonOptions: { control: 'object' },
      disableCss: { control: 'boolean' }
    }
  })
</script>

<Story name="Normal">
  {#snippet children({ label, helpText, disableCss, options, isRequired, textOptional })}
    <div use:wrapInShadowDom={disableCss}>
      <h1 class="mt-h1">Checkbox</h1>
      <form class="mt-form">
        <Checkbox {name} {label} {helpText} {options} {isRequired} {textOptional} {onChange} />
      </form>
    </div>
  {/snippet}
</Story>

<Story name="Checkbox with error">
  {#snippet children({
    label,
    helpText,
    disableCss,
    errorMessage,
    hiddenErrorText,
    options,
    isRequired,
    textOptional
  })}
    <div use:wrapInShadowDom={disableCss}>
      <h1 class="mt-h1">Checkbox</h1>
      <form class="mt-form">
        <Checkbox
          {name}
          {label}
          {helpText}
          {options}
          {isRequired}
          {hiddenErrorText}
          {textOptional}
          error={{ key: name, message: errorMessage }} />
      </form>
    </div>
  {/snippet}
</Story>
