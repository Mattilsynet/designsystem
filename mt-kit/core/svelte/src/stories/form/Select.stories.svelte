<script lang="ts" module>
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import Select from '$lib/svelte/components/form/Select.svelte'
  import MultiSelect from '$lib/svelte/components/form/MultiSelect.svelte'
  import { wrapInShadowDom } from '../storybook-utils/utils'
  import ResourceList from '../storybook-utils/ResourceList.svelte'

  let value = $state([])

  function handleSubmit(e: SubmitEvent) {
    e.preventDefault()
    console.log('FORM handle submit')
  }

  function handleFormKeyUp(e: KeyboardEvent) {
    e.preventDefault()
    console.log('HandleFormKeyUp')
  }

  function handleFormKeyDown(e: KeyboardEvent) {
    e.stopPropagation()
    if (e.key === 'Enter' && e.target.type !== 'submit') {
      e.preventDefault()
    }
  }

  const { Story } = defineMeta({
    title: 'Components/Form/Select',
    args: {
      label: 'Velg dyr',
      helpText: 'Velg den typen dyr som denne saken gjelder',
      errorMessage: 'Fyll inn dette feltet.',
      multiselect: {
        preferredOptions: [
          { value: 'NO', text: 'Norge', removeAriaLabel: 'Fjern Norge fra listen' },
          { value: 'SE', text: 'Sverige', removeAriaLabel: 'Fjern Sverig fra listen' },
          { value: 'FI', text: 'Finland', removeAriaLabel: 'Fjern Finland fra listen' }
        ],
        options: [
          { value: 'DA', text: 'Danmark', removeAriaLabel: 'Fjern Danmark fra listen' },
          { value: 'FI', text: 'Finland', removeAriaLabel: 'Fjern Finland fra listen' },
          { value: 'FR', text: 'Frankrike', removeAriaLabel: 'Fjern Frankrike fra listen' },
          { value: 'NO', text: 'Norge', removeAriaLabel: 'Fjern Norge fra listen' },
          { value: 'PT', text: 'Portugal', removeAriaLabel: 'Fjern Portugal fra listen' },
          { value: 'ES', text: 'Spania', removeAriaLabel: 'Fjern Spania fra listen' },
          { value: 'SE', text: 'Sverige', removeAriaLabel: 'Fjern Sverige fra listen' },
          { value: 'KR', text: 'Sør Korea', removeAriaLabel: 'Fjern Sør Korea fra listen' },
          { value: 'DE', text: 'Tyskland', removeAriaLabel: 'Fjern Tyskland fra listen' }
        ],
        label: 'Hvilke land har du vært i?',
        error: '',
        tagsLabel: 'Land du skal besøke:',
        helpText: 'Legg til landene du har vært i før dere kom til Norge.',
        isRequired: true
      },
      disableJs: false,
      disableCss: false
    },
    argTypes: {
      label: { control: 'text' },
      helpText: { control: 'text' },
      errorMessage: { control: 'text' },
      disableJs: { control: 'boolean' },
      disableCss: { control: 'boolean' }
    }
  })
</script>

<Story name="Normal">
  {#snippet children({ label, helpText, disableCss })}
    <div use:wrapInShadowDom={disableCss}>
      <form class="mt-form">
        <Select
          options={[
            { text: 'Hund', value: 'dog' },
            { text: 'Cat', value: 'cat' }
          ]}
          {label}
          {helpText}
          name="animal"
          error={undefined}
          idPrefix="select-box-" />
      </form>
    </div>
  {/snippet}
</Story>

<Story name="Velg fler">
  {#snippet children(args)}
    <div use:wrapInShadowDom={args.disableCss}>
      <h1 class="mt-h1">Flervalg</h1>
      <ResourceList
        figmaUrl="https://www.figma.com/file/dp856nY6joVcAUSVSmPSRO/MT-Eksternt-Designsystem?node-id=1871%3A5152&t=3fZ5xL2MGOLfFwqv-4"
        githubUrl="https://github.com/Mattilsynet/designsystem/blob/main/src/svelte/components/form/MultiSelect.svelte" />
      <section>
        <h2 class="mt-h2">Normal</h2>
        <form
          class="mt-form"
          onkeyup={handleFormKeyUp}
          onkeydown={handleFormKeyDown}
          onsubmit={handleSubmit}>
          <MultiSelect
            options={args.multiselect.options}
            preferredOptions={args.multiselect.preferredOptions}
            label={args.multiselect.label}
            error={args.multiselect.error !== ''
              ? { key: 'multi-select', message: args.multiselect.error }
              : undefined}
            name="multi-select"
            bind:values={value}
            loadJs={true}
            tagsLabel={args.multiselect.tagsLabel}
            isRequired={args.multiselect.isRequired}
            helpText={args.multiselect.helpText}
            textOptional="Valgfritt"
            hiddenErrorText={undefined} />
          <button type="submit" class="mt-button">Submit</button>
          <p>
            Values:
            {JSON.stringify(value, null, 2)}
          </p>
        </form>
      </section>
      <section>
        <h2 class="mt-h2">Normal - without JS</h2>
        <form class="mt-form" onsubmit={handleSubmit}>
          <MultiSelect
            options={args.multiselect.options}
            preferredOptions={args.multiselect.preferredOptions}
            label={args.multiselect.label}
            error={args.multiselect.error !== ''
              ? { key: 'multi-select', message: args.multiselect.error }
              : undefined}
            name="multi-select-no-js"
            bind:values={value}
            loadJs={false}
            tagsLabel={args.multiselect.tagsLabel}
            isRequired={args.multiselect.isRequired}
            helpText={args.multiselect.helpText}
            textOptional="Valgfritt"
            hiddenErrorText={undefined} />
          <button type="submit" class="mt-button">Submit</button>
          <p>
            Values:
            {JSON.stringify(value, null, 2)}
          </p>
        </form>
      </section>
    </div>
  {/snippet}
</Story>

<style>
  h2 {
    margin-top: var(--spacer-small);
  }
</style>
