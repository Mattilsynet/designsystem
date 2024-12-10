<script lang="ts">
  import { Meta, Story } from '@storybook/addon-svelte-csf'
  import { wrapInShadowDom } from './storybook-utils/utils'
  import FormErrorSummary from '$lib/svelte/components/form/FormErrorSummary.svelte'

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
</script>

<Meta
  title="Components/Error Summary"
  args={{
    label: 'E-post',
    helpText: '',
    errorMessage: 'Fyll inn dette feltet.',
    heading: 'Feil oppstod',
    errors: [
      { fieldName: 'name', message: 'Fyll inn navn' },
      { fieldName: 'phone', message: 'Fyll inn telefonnummer' },
      { fieldName: 'email', message: 'Fyll inn epost' }
    ],
    disableCss: false
  }}
  argTypes={{
    label: { control: 'text' },
    helpText: { control: 'text' },
    errorMessage: { control: 'text' },
    disableCss: { control: 'boolean' }
  }}
/>

<Story name="Normal">
  {#snippet children({ errors, label, helpText, heading, disableCss, errorMessage })}
    <div use:wrapInShadowDom={disableCss}>
      <FormErrorSummary {errors} {heading} />

      <form class="mt-form form-layout">
        <label class="mt-label" for="inputfield"> Navn </label>

        {#if helpText}
          <div class="hint">
            {@html helpText}
          </div>
        {/if}

        <input
          id="inputfield"
          name="name"
          class="mt-input form-field"
          aria-describedby="inputfield-hint inputfield-error"
        />

        <label class="mt-label" for="inputfield">
          {label}
        </label>

        {#if helpText}
          <div class="hint">
            {@html helpText}
          </div>
        {/if}

        <span id="inputfield-error" class="form-error">
          <span class="inclusively-hidden">Feilmelding:</span>
          {errors[0].message}
        </span>

        <input
          id="email"
          name="email"
          class="mt-input form-field error"
          aria-invalid="true"
          aria-describedby="inputfield-hint inputfield-error"
        />
      </form>
    </div>
  {/snippet}
</Story>

<Story name="Text only">
  {#snippet children({ errors, label, helpText, heading, disableCss, errorMessage })}
    <div use:wrapInShadowDom={disableCss}>
      <FormErrorSummary {errors} {heading} linkToFields={false} />
    </div>
  {/snippet}
</Story>
