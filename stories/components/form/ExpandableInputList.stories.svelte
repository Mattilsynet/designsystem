<script lang="ts">
  import {Meta, Story} from '@storybook/addon-svelte-csf'
  import ExpandableInputList from '../../../src/svelte/form/ExpandableInputList.svelte'

  let inputList = [
    {
      label: 'Hund, antall:',
      name: 'dogs',
      isRequired: false,
      textOptional: '',
      inputmode: 'numeric',
      ariaLabel: 'Fjern Spania fra listen'
    },
    {
      label: 'Katt, antall:',
      name: 'cats',
      isRequired: false,
      inputmode: 'numeric',
      textOptional: '',
      ariaLabel: 'Fjern Frankrike fra listen'
    },
    {
      label: 'Ilder, antall:',
      name: 'ilders',
      isRequired: false,
      inputmode: 'numeric',
      textOptional: '',
      ariaLabel: 'Fjern Portugal fra listen'
    },
    {
      label: 'Kanin, antall:',
      name: 'rabit',
      isRequired: false,
      inputmode: 'numeric',
      textOptional: '',
      ariaLabel: 'Fjern Portugal fra listen'
    },
    {
      label: 'Gnager, antall:',
      name: 'rodent',
      isRequired: false,
      inputmode: 'numeric',
      textOptional: '',
      ariaLabel: 'Fjern Portugal fra listen'
    },
    {
      label: 'Fugl, antall:',
      name: 'birds',
      isRequired: false,
      inputmode: 'numeric',
      textOptional: '',
      ariaLabel: 'Fjern Portugal fra listen'
    }
  ]
  let formId = 'whatCountriesHaveYouBeenTo'
  let expandableAriaLabel = ''
  let values = {}

  $: error = undefined

  function handleSubmit(e) {
    // @ts-ignore
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
      error = [{key: formId, message: 'Vennligs fyll inn antall dyr'}]
    } else {
      error = undefined
      inputList = inputList
    }
  }
</script>

<Meta
  title="Components/Form/Utvidbar liste med inputs"
  args={{
    fieldsetLabel: 'Hvilke dyr reiser du med?',
    helpText: 'Legg til de dyrene du reiser med.',
    expandableAriaLabel: '{0}, viser {1} av {2}',
    isRequired: true,
    expandableText: 'Vis flere',
    collapsableText: 'Vis færre',
    disabled: false,
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
        fieldsetLabel={args.fieldsetLabel}
        expandableText={args.expandableText}
        collapsableText={args.collapsableText}
        fieldSetHelpText={args.helpText}
        expandableAriaLabel={args.expandableAriaLabel}
        bind:values
        {formId}
        fieldSetError={error}
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
