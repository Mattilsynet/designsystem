<script lang="ts" module>
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import TextInput from '$lib/svelte/components/form/TextInput.svelte'
  import { wrapInShadowDom } from '../storybook-utils/utils'
  import TextInputHorizontal from '$lib/svelte/components/form/TextInputHorizontal.svelte'

  const { Story } = defineMeta({
    title: 'Components/Form/Input',
    args: {
      label: 'Når skjedde det?',
      helpText: 'Skriv når hendelsen skjedde og om det har pågått over lengere periode.',
      errorMessage: 'Fyll inn dette feltet.',
      textOptional: 'Valgfritt',
      isRequired: false,
      horizontal: [
        {
          label: 'Hund, antall',
          textOptional: 'Valgfritt',
          helpText: 'Hjelpetekst',
          isRequired: true,
          maxLength: 2
        },
        {
          label: 'Katt, antall',
          textOptional: 'Valgfritt',
          helpText: 'Hjelpetekst',
          isRequired: true
        }
      ],
      countCharactersLeftLabel: 'karakterer igjen',
      tooManyCharactersErrorText: 'For lang tekst',
      disableCss: false
    },
    argTypes: {
      label: { control: 'text' },
      helpText: { control: 'text' },
      isRequired: { control: 'boolean' },
      textOptional: { control: 'text' },
      errorMessage: { control: 'text' },
      tooManyCharactersErrorText: { control: 'text' },
      horizontal: { control: 'object' },
      countCharactersLeftLabel: { control: 'text' },
      disableCss: { control: 'boolean' }
    }
  })
</script>

<Story name="Input">
  {#snippet children({
    label,
    helpText,
    disableCss,
    textOptional,
    isRequired,
    tooManyCharactersErrorText,
    horizontal,
    countCharactersLeftLabel
  })}
    <div use:wrapInShadowDom={disableCss}>
      <form class="mt-form form-layout">
        <TextInput
          name="inputfield"
          {label}
          {helpText}
          {textOptional}
          inputmode="text"
          {isRequired}
          {countCharactersLeftLabel}
          placeholder=""
          autocomplete="off" />

        <TextInput
          name="inputfield2"
          {label}
          {helpText}
          {textOptional}
          inputmode="text"
          {isRequired}
          {countCharactersLeftLabel}
          placeholder="Skriv noe"
          autocomplete="off" />

        <TextInput
          name="inputfield3"
          {label}
          {helpText}
          {textOptional}
          inputmode="text"
          {isRequired}
          {countCharactersLeftLabel}
          placeholder=""
          autocomplete="off"
          {tooManyCharactersErrorText}
          maxlength={30} />

        <h2 class="mt-h2">Horisontal layout</h2>
        <div class="collapsable-input-list-grid">
          {#each horizontal as horizontal}
            <TextInputHorizontal
              name="inputfield4"
              label={horizontal.label}
              textOptional={horizontal.textOptional}
              helpText={horizontal.helpText}
              inputmode="text"
              {countCharactersLeftLabel}
              isRequired={horizontal.isRequired}
              maxlength={horizontal.maxLength}
              placeholder=""
              autocomplete="off"
              inputClass="form-field--small form-field--small-width" />
          {/each}
        </div>
      </form>
    </div>
  {/snippet}
</Story>

<Story name="Input with error">
  {#snippet children({
    label,
    helpText,
    errorMessage,
    disableCss,
    countCharactersLeftLabel,
    textOptional,
    horizontal
  })}
    <div use:wrapInShadowDom={disableCss}>
      <form class="mt-form form-layout">
        <TextInput
          name="inputfield"
          {label}
          {helpText}
          {countCharactersLeftLabel}
          error={{ key: 'inputfield', message: errorMessage }}
          {textOptional}
          inputmode="text"
          maxlength={10}
          placeholder=""
          autocomplete="off" />
        <div class="collapsable-input-list-grid">
          {#each horizontal as horizontal, index}
            <TextInputHorizontal
              name="inputfield{index}"
              label={horizontal.label}
              textOptional={horizontal.textOptional}
              helpText={horizontal.helpText}
              inputmode="text"
              error={{ key: 'inputfield', message: 'Feltet er påkrevd' }}
              {countCharactersLeftLabel}
              isRequired={horizontal.isRequired}
              placeholder=""
              autocomplete="off"
              inputClass="form-field--small form-field--small-width" />
          {/each}
        </div>
      </form>
    </div>
  {/snippet}
</Story>

<style>
  .collapsable-input-list-grid {
    display: grid;
    row-gap: 1rem;
    width: 20rem;
  }
</style>
