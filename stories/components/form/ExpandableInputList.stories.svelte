<script lang="ts">
  import {Meta, Story} from '@storybook/addon-svelte-csf'
  import ExpandableInputList from '../../../src/svelte/form/ExpandableInputList.svelte'
  import type {ErrorDetail, InputModeType} from '../../../src/ts/types'

  interface Input {
    label?: string
    name?: string
    isRequired?: boolean
    textOptional?: string
    inputmode: InputModeType
    error?: ErrorDetail
  }
  let inputList: Array<Input> = [
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
  ]
  let fieldSetId = 'whatCountriesHaveYouBeenTo'
  let expandableAriaLabel = ''
  let values = {}

  $: error = undefined

  function handleSubmit(e) {
    inputList = inputList.map(input => {
      if (values[input.name] === undefined || values[input.name] === '') {
        return input
      }
      return !isNaN(values[input.name])
        ? {...input, error: undefined}
        : {...input, error: {key: input.name, message: 'Vennligst benytt tall'}}
    })
    const isValid = inputList.some(
      input => values[input.name] !== undefined && values[input.name] !== ''
    )
    if (!isValid) {
      error = [{key: fieldSetId, message: 'Vennligs fyll inn antall dyr'}]
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
    disableJs: false,
    disableCss: false
  }}
  argTypes={{
    disableJs: {control: 'boolean'},
    disableCss: {control: 'boolean'}
  }} />

<Story name="Normal" let:disableCss let:args>
  <main>
    <h1>Utvidebarliste med inputs</h1>
    <form on:submit|preventDefault={handleSubmit}>
      <ExpandableInputList
        {inputList}
        {fieldSetId}
        fieldSetLabel={args.fieldSetLabel}
        fieldSetHelpText={args.helpText}
        fieldSetError={error}
        expandableText={args.expandableText}
        collapsableText={args.collapsableText}
        expandableAriaLabel={args.expandableAriaLabel}
        bind:values
        loadJs={!args.disableJs} />
      <button type="submit" class="button button--primary">Gå videre</button>
    </form>
  </main>
</Story>

<style lang="scss">
  .button {
    margin-top: 5rem;
  }
</style>
