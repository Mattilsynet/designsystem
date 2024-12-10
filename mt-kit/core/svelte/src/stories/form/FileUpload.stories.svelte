<script lang="ts">
  import { Meta, Story } from '@storybook/addon-svelte-csf'
  import { wrapInShadowDom } from '../storybook-utils/utils'
  import FileUpload from '$lib/svelte/components/form/FileUpload.svelte'
  import { forceArray } from '$lib/ts/utils.js'

  let values: Record<string, Array<string> | undefined> = $state({})
  async function handleChange(e: CustomEvent, name): Promise<void> {
    const files = e.detail.files
    const existingFiles = forceArray(values[`filename-${name}`])
    values[`filename-${name}`] = [...existingFiles, ...Array.from(files).map(f => f.name)]
  }
</script>

<Meta
  title="Components/Form/FileUpload"
  args={{
    label: 'Legg til fil',
    helpText: 'Hjelpetekst',
    buttonText: 'Legg til fil',
    uploadInProgressAriaLabel: 'Laster opp filer',
    hiddenErrorText: 'Skjult feilmelding',
    textOptional: 'Valgfritt',
    accept: 'image/*',
    upload1: {
      name: 'fileUpload1',
      isRequired: false,
      multiple: true,
      loadJs: true
    },
    upload2: {
      name: 'fileUpload2',
      isRequired: true,
      multiple: true,
      loadJs: false
    },
    upload3: {
      name: 'fileUpload3',
      isRequired: true,
      multiple: false,
      loadJs: true
    },
    upload4: {
      name: 'fileUpload4',
      isRequired: true,
      multiple: true,
      loadJs: true
    },
    isLoading: false,
    disableCss: false,
    disableJs: false
  }}
  argTypes={{
    label: { control: 'text' },
    disableCss: { control: 'boolean' },
    disableJs: { control: 'boolean' }
  }} />

<Story name="Normal" >
  {#snippet children({ args })}
    <div use:wrapInShadowDom={args.disableCss}>
      <h1 class="mt-h1">Filopplasting komponent</h1>
      <h2 class="mt-h2">Med JS</h2>
      <form method="get" class="mt-form form-layout" style="--gap: 0;">
        <FileUpload
          name={args.upload1.name}
          label={args.label}
          helpText={args.helpText}
          buttonText={args.buttonText}
          fileInputName="file-{args.upload1.name}"
          fileNameInputName="filename-{args.upload1.name}"
          bind:fileName={values['filename-' + args.upload1.name]}
          textOptional={args.textOptional}
          hiddenErrorText={args.hiddenErrorText}
          accept={args.accept}
          isRequired={args.upload1.isRequired}
          multiple={args.upload1.multiple}
          bind:value={values[args.upload1.name]}
          on:change={e => handleChange(e, args.upload1.name)}
          error={undefined}
          isLoading={args.isLoading}
          uploadInProgressAriaLabel={args.uploadInProgressAriaLabel}
          loadJs={!args.disableJs && args.upload1.loadJs} />
      </form>
      <h2 class="mt-h2 m-t-m">Uten JS</h2>
      <form method="get" class="mt-form form-layout" style="--gap: 0;">
        <FileUpload
          name={args.upload2.name}
          label={args.label}
          helpText={args.helpText}
          buttonText={args.buttonText}
          fileInputName="file-{args.upload2.name}"
          fileNameInputName="filename-{args.upload2.name}"
          bind:fileName={values['filename-' + args.upload2.name]}
          textOptional={args.textOptional}
          hiddenErrorText={args.hiddenErrorText}
          accept={args.accept}
          isRequired={args.upload2.isRequired}
          multiple={args.upload2.multiple}
          bind:value={values[args.upload2.name]}
          on:change={e => handleChange(e, args.upload2.name)}
          error={undefined}
          isLoading={args.isLoading}
          uploadInProgressAriaLabel={args.uploadInProgressAriaLabel}
          loadJs={!args.disableJs && args.upload2.loadJs} />
      </form>
      <h2 class="mt-h2 m-t-m">Kan kun velge ett bilde</h2>
      <form method="get" class="mt-form form-layout" style="--gap: 0;">
        <FileUpload
          name={args.upload3.name}
          label={args.label}
          helpText={args.helpText}
          buttonText={args.buttonText}
          fileInputName="file-{args.upload3.name}"
          fileNameInputName="filename-{args.upload3.name}"
          bind:fileName={values['filename-' + args.upload3.name]}
          textOptional={args.textOptional}
          hiddenErrorText={args.hiddenErrorText}
          accept={args.accept}
          isRequired={args.upload3.isRequired}
          multiple={args.upload3.multiple}
          bind:value={values[args.upload3.name]}
          on:change={e => handleChange(e, args.upload3.name)}
          error={{ message: 'Eksempel på feilmelding' }}
          isLoading={args.isLoading}
          uploadInProgressAriaLabel={args.uploadInProgressAriaLabel}
          loadJs={!args.disableJs && args.upload3.loadJs} />
      </form>
      <h2 class="mt-h2 m-t-m">Under opplasting</h2>
      <form method="get" class="mt-form form-layout" style="--gap: 0;">
        <FileUpload
          name={args.upload4.name}
          label={args.label}
          helpText={args.helpText}
          buttonText={args.buttonText}
          fileInputName="file-{args.upload4.name}"
          fileNameInputName="filename-{args.upload4.name}"
          bind:fileName={values['filename-' + args.upload4.name]}
          textOptional={args.textOptional}
          hiddenErrorText={args.hiddenErrorText}
          accept={args.accept}
          isRequired={args.upload4.isRequired}
          multiple={args.upload4.multiple}
          bind:value={values[args.upload4.name]}
          on:change={e => handleChange(e, args.upload4.name)}
          error={undefined}
          isLoading={true}
          uploadInProgressAriaLabel={args.uploadInProgressAriaLabel}
          loadJs={!args.disableJs && args.upload4.loadJs} />
      </form>
      <h2 class="mt-h2 m-t-m">Under opplasting. Uten JS</h2>
      <form method="get" class="mt-form form-layout" style="--gap: 0;">
        <FileUpload
          name={args.upload4.name}
          label={args.label}
          helpText={args.helpText}
          buttonText={args.buttonText}
          fileInputName="file-{args.upload4.name}"
          fileNameInputName="filename-{args.upload4.name}"
          bind:fileName={values['filename-' + args.upload4.name]}
          textOptional={args.textOptional}
          hiddenErrorText={args.hiddenErrorText}
          accept={args.accept}
          isRequired={args.upload4.isRequired}
          multiple={args.upload4.multiple}
          bind:value={values[args.upload4.name]}
          on:change={e => handleChange(e, args.upload4.name)}
          error={undefined}
          isLoading={true}
          uploadInProgressAriaLabel={args.uploadInProgressAriaLabel}
          loadJs={!args.disableJs && !args.upload4.loadJs} />
      </form>
    </div>
  {/snippet}
</Story>
