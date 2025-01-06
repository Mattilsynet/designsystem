<script lang="ts" module>
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import { wrapInShadowDom } from '../storybook-utils/utils'
  import FormErrorSummary from '$lib/svelte/components/form/FormErrorSummary.svelte'

  const { Story } = defineMeta({
    title: 'Components/Form/Error Summary',
    args: {
      heading: 'Feil oppstod',
      errors: [
        { key: 'name', message: 'Fyll inn navn' },
        { key: 'phone', message: 'Fyll inn telefonnummer' },
        { key: 'email', message: 'Fyll inn epost' }
      ],
      disableCss: false
    },
    argTypes: {
      heading: { control: 'text' },
      disableCss: { control: 'boolean' }
    }
  })
</script>

<Story name="Normal">
  {#snippet children({ errors, heading, disableCss })}
    <div use:wrapInShadowDom={disableCss}>
      <FormErrorSummary {errors} {heading} />

      <form class="mt-form form-layout">
        <label class="mt-label" for="name"> Navn </label>
        <div id="name-hint" class="hint">Fyll ut navn</div>
        <span id="name-error" class="form-error">
          <span class="inclusively-hidden">Feilmelding:</span>
          {errors[0].message}
        </span>
        <input
          id="name"
          name="name"
          class="mt-input form-field"
          aria-describedby="name-hint name-error" />

        <label class="mt-label" for="phone"> Telefon </label>
        <div id="phone-hint" class="hint">Fyll ut telefonnummer</div>
        <span id="phone-error" class="form-error">
          <span class="inclusively-hidden">Feilmelding:</span>
          {errors[1].message}
        </span>
        <input
          id="phone"
          name="phone"
          class="mt-input form-field"
          aria-describedby="phone-hint phone-error" />

        <label class="mt-label" for="email"> E-post </label>
        <div id="email-hint" class="hint">Fyll ut e-post</div>
        <span id="email-error" class="form-error">
          <span class="inclusively-hidden">Feilmelding:</span>
          {errors[2].message}
        </span>
        <input
          id="email"
          name="email"
          class="mt-input form-field error"
          aria-invalid="true"
          aria-describedby="email-hint email-error" />
      </form>
    </div>
  {/snippet}
</Story>

<Story name="Text only">
  {#snippet children({ errors, heading, disableCss })}
    <div use:wrapInShadowDom={disableCss}>
      <FormErrorSummary {errors} {heading} linkToFields={false} />
    </div>
  {/snippet}
</Story>
