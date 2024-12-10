<script lang="ts">
  import { run, preventDefault } from 'svelte/legacy'

  import { Meta, Story } from '@storybook/addon-svelte-csf'
  import ExpandableInputList from '$lib/svelte/components/form/ExpandableInputList.svelte'
  import { wrapInShadowDom } from '../storybook-utils/utils'

  let inputList = $state([
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
  let expandableAriaLabel = ''
  let values = $state({})

  let error
  run(() => {
    error = undefined
  })

  function handleSubmit(e) {
    inputList = inputList.map(input => {
      if (values[input.name] === undefined || values[input.name] === '') {
        return input
      }
      return !isNaN(values[input.name])
        ? { ...input, error: undefined }
        : { ...input, error: { key: input.name, message: 'Vennligst benytt tall' } }
    })
    const isValid = inputList.some(
      input => values[input.name] !== undefined && values[input.name] !== ''
    )
    if (!isValid) {
      error = [{ key: fieldSetId, message: 'Vennligs fyll inn antall dyr' }]
    } else {
      error = undefined
      inputList = inputList
    }
  }
</script>

<Meta
  title="Components/Form/Utvidbar liste med inputs"
  args={{
    fieldSetLabel: 'Hvilke dyr reiser du med?',
    helpText: 'Legg til de dyrene du reiser med.',
    expandableAriaLabel: '{0}, viser {1} av {2}',
    expandableText: 'Vis flere',
    collapsableText: 'Vis færre',
    inputList: inputList,
    disableJs: false,
    disableCss: false
  }}
  argTypes={{
    fieldSetLabel: { control: 'text' },
    helpText: { control: 'text' },
    expandableAriaLabel: { control: 'text' },
    expandableText: { control: 'text' },
    collapsableText: { control: 'text' },
    inputList: { control: 'object' },
    disableJs: { control: 'boolean' },
    disableCss: { control: 'boolean' }
  }}
/>

<Story name="Normal">
  {#snippet children({ disableCss, args })}
    <main class="mt-main" use:wrapInShadowDom={disableCss}>
      <h1 class="mt-h1">Utvidebarliste med inputs</h1>
      <form class="mt-form" onsubmit={preventDefault(handleSubmit)}>
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
          loadJs={!args.disableJs}
        />
        <button type="submit" class="mt-button mt-button--primary">Gå videre</button>
      </form>
    </main>
  {/snippet}
</Story>

<style lang="scss">
  .button {
    margin-top: 5rem;
  }
</style>
