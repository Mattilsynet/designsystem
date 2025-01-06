<script lang="ts" module>
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import ExpandableInputList from '$lib/svelte/components/form/ExpandableInputList.svelte'
  import { wrapInShadowDom } from '../storybook-utils/utils'
  import type { InputProps } from '$lib/ts'
  import { action } from '@storybook/addon-actions'

  let inputList: Array<InputProps> = $state([
    {
      label: 'Hund, antall:',
      name: 'dogs',
      isRequired: false,
      textOptional: '',
      inputmode: 'numeric',
      error: undefined
    },
    {
      label: 'Katt, antall:',
      name: 'cats',
      isRequired: false,
      inputmode: 'numeric',
      textOptional: '',
      error: undefined
    },
    {
      label: 'Ilder, antall:',
      name: 'ilders',
      isRequired: false,
      inputmode: 'numeric',
      textOptional: '',
      error: undefined
    },
    {
      label: 'Kanin, antall:',
      name: 'rabit',
      isRequired: false,
      inputmode: 'numeric',
      textOptional: '',
      error: undefined
    },
    {
      label: 'Gnager, antall:',
      name: 'rodent',
      isRequired: false,
      inputmode: 'numeric',
      textOptional: '',
      error: undefined
    },
    {
      label: 'Fugl, antall:',
      name: 'birds',
      isRequired: false,
      inputmode: 'numeric',
      textOptional: '',
      error: undefined
    }
  ])

  let fieldSetId = 'whatCountriesHaveYouBeenTo'
  let values: Record<string, string> = $state({})

  let error: { key: string; message: string }[] | undefined = $state()

  const submitValuesAction = action('submitValues')
  function handleSubmit(e: SubmitEvent) {
    e.preventDefault()
    inputList = inputList.map(input => {
      if (values[input.name] === undefined || values[input.name] === '') {
        return input
      }
      return !isNaN(Number.parseInt(values[input.name]))
        ? { ...input, error: undefined }
        : { ...input, error: { key: input.name, message: 'Vennligst benytt tall' } }
    })
    const hasError = inputList.some(input => input.error)

    const hasValue = inputList.some(
      input => values[input.name] !== undefined && values[input.name] !== ''
    )
    if (!hasValue) {
      error = [{ key: fieldSetId, message: 'Vennligs fyll inn antall dyr' }]
    } else if (hasError) {
      error = [{ key: fieldSetId, message: 'Vennligs fyll inn tall i riktig format' }]
    } else {
      error = undefined
      inputList = inputList
    }

    submitValuesAction(values)
  }

  const { Story } = defineMeta({
    title: 'Components/Form/Utvidbar liste med inputs',
    args: {
      fieldSetLabel: 'Hvilke dyr reiser du med?',
      helpText: 'Legg til de dyrene du reiser med.',
      expandableAriaLabel: '{0}, viser {1} av {2}',
      expandableText: 'Vis flere',
      collapsableText: 'Vis færre',
      // eslint-disable-next-line svelte/valid-compile
      inputList: inputList,
      disableJs: false,
      disableCss: false
    },
    argTypes: {
      fieldSetLabel: { control: 'text' },
      helpText: { control: 'text' },
      expandableAriaLabel: { control: 'text' },
      expandableText: { control: 'text' },
      collapsableText: { control: 'text' },
      inputList: { control: 'object' },
      disableJs: { control: 'boolean' },
      disableCss: { control: 'boolean' }
    }
  })
</script>

<Story name="Normal">
  {#snippet children(args)}
    <main class="mt-main" use:wrapInShadowDom={args.disableCss}>
      <h1 class="mt-h1">Utvidbar liste med inputs</h1>
      <form class="mt-form" onsubmit={handleSubmit}>
        <ExpandableInputList
          inputList={args.inputList}
          {fieldSetId}
          fieldSetLabel={args.fieldSetLabel}
          fieldSetHelpText={args.helpText}
          fieldSetError={error}
          expandableText={args.expandableText}
          collapsableText={args.collapsableText}
          expandableAriaLabel={args.expandableAriaLabel}
          bind:values
          loadJs={!args.disableJs} />
        <button type="submit" class="mt-button mt-button--primary">Gå videre</button>
      </form>

      <h1 class="mt-h1">Utvidbar liste med inputs uten JS</h1>
      <form class="mt-form" onsubmit={handleSubmit}>
        <ExpandableInputList
          inputList={args.inputList}
          {fieldSetId}
          fieldSetLabel={args.fieldSetLabel}
          fieldSetHelpText={args.helpText}
          fieldSetError={error}
          expandableText={args.expandableText}
          collapsableText={args.collapsableText}
          expandableAriaLabel={args.expandableAriaLabel}
          bind:values
          loadJs={false}
          numberOfInputOutside={4} />
        <button type="submit" class="mt-button mt-button--primary">Gå videre</button>
      </form>
    </main>
  {/snippet}
</Story>
