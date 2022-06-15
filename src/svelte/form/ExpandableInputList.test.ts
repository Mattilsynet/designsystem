/**
 * @jest-environment jsdom
 */
import ExpandableInputList from './ExpandableInputList.svelte'
import {fireEvent, render} from '@testing-library/svelte'

describe('ExpandableInputList', () => {
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
  const componentOptions = {
    inputList: inputList,
    fieldSetId: 'fieldset-id',
    fieldSetLabel: 'Hvilke land har du vært i?',
    fieldSetHelpText: 'hjelpetekst',
    fieldSetError: undefined,
    expandableText: 'Vis flere dyr',
    collapsableText: 'Vis færre dyr',
    expandableAriaLabel: '{0}, viser {1} av {2}',
    loadJs: true
  }
  test('Renders', () => {
    const {getByLabelText, queryByLabelText, getByText, queryByText, getAllByText} = render(
      ExpandableInputList,
      componentOptions
    )
    expect(getByText('hjelpetekst')).toBeInTheDocument()
    expect(getByText('Hvilke land har du vært i?')).toBeInTheDocument()
    expect(getByText('Vis flere dyr')).toBeInTheDocument()
    expect(queryByText('Vis færre dyr')).not.toBeInTheDocument()
    expect(getByLabelText(/Hund/i)).toBeInTheDocument()
    expect(getByLabelText(/Katt/i)).toBeInTheDocument()
    expect(getByLabelText(/viser 2 av 6/i)).toBeInTheDocument()
    expect(queryByLabelText(/Ilder/i)).not.toBeInTheDocument()
    expect(queryByLabelText(/Fugl/i)).not.toBeInTheDocument()
    expect(queryByLabelText(/Kanin/i)).not.toBeInTheDocument()
    expect(queryByLabelText(/Gnager/i)).not.toBeInTheDocument()
  })

  test('Expand list', async () => {
    const {getByLabelText, queryByLabelText, getByText, queryByText} = render(
      ExpandableInputList,
      componentOptions
    )
    expect(getByText('hjelpetekst')).toBeInTheDocument()
    expect(getByText('Hvilke land har du vært i?')).toBeInTheDocument()
    const showMoreButton = getByText('Vis flere dyr')
    expect(showMoreButton).toBeInTheDocument()
    expect(queryByText('Vis færre dyr')).not.toBeInTheDocument()
    expect(getByLabelText(/Hund/i)).toBeInTheDocument()
    expect(getByLabelText(/Katt/i)).toBeInTheDocument()
    expect(getByLabelText(/viser 2 av 6/i)).toBeInTheDocument()
    expect(queryByLabelText(/Ilder/i)).not.toBeInTheDocument()
    expect(queryByLabelText(/Fugl/i)).not.toBeInTheDocument()
    expect(queryByLabelText(/Kanin/i)).not.toBeInTheDocument()
    expect(queryByLabelText(/Gnager/i)).not.toBeInTheDocument()
    await fireEvent.click(showMoreButton)
    expect(getByText('Vis færre dyr')).toBeInTheDocument()
    expect(queryByText('Vis flere dyr')).not.toBeInTheDocument()
    expect(getByLabelText(/viser 6 av 6/i)).toBeInTheDocument()
    expect(getByLabelText(/Ilder/i)).toBeInTheDocument()
    expect(getByLabelText(/Fugl/i)).toBeInTheDocument()
    expect(getByLabelText(/Kanin/i)).toBeInTheDocument()
    expect(getByLabelText(/Gnager/i)).toBeInTheDocument()
  })

  test('Show error, optional text', async () => {
    const {getByText, rerender, queryByText, getAllByText} = render(ExpandableInputList, {
      ...componentOptions,
      fieldSetError: [{key: componentOptions.fieldSetId, message: 'Det er en feil i skjema'}],
      showOptionalText: true
    })
    expect(getByText('Det er en feil i skjema')).toBeInTheDocument()
    expect(getAllByText(/Valgfritt felt/i).length).toEqual(2)
    rerender(componentOptions)
    expect(queryByText('Det er en feil i skjema')).not.toBeInTheDocument()
    inputList[0].error = {key: 'dogs', message: 'Feil på hund input'}
    inputList[5].error = {key: 'bird', message: 'Feil på fugl input'}
    rerender({...componentOptions, inputList: inputList})
    await fireEvent.click(getByText('Vis flere dyr'))
    expect(getByText('Feil på hund input')).toBeInTheDocument()
    expect(getByText('Feil på fugl input')).toBeInTheDocument()
  })

  test('Renders without JS', async () => {
    const {getByText, getByLabelText, queryByText, queryByLabelText} = render(ExpandableInputList, {
      ...componentOptions,
      loadJs: false
    })
    expect(getByText('hjelpetekst')).toBeInTheDocument()
    expect(getByText('Hvilke land har du vært i?')).toBeInTheDocument()
    const showMoreButton = getByText('Vis flere dyr')
    expect(showMoreButton).toBeInTheDocument()
    expect(queryByText('Vis færre dyr')).not.toBeInTheDocument()
    expect(getByLabelText(/Hund/i)).toBeInTheDocument()
    expect(getByLabelText(/Katt/i)).toBeInTheDocument()
    expect(getByLabelText(/viser 2 av 6/i)).toBeInTheDocument()
    expect(queryByLabelText(/Ilder/i)).not.toBeInTheDocument()
    expect(queryByLabelText(/Fugl/i)).not.toBeInTheDocument()
    expect(queryByLabelText(/Kanin/i)).not.toBeInTheDocument()
    expect(queryByLabelText(/Gnager/i)).not.toBeInTheDocument()
    await fireEvent.click(showMoreButton)
    expect(getByText('Vis færre dyr')).toBeInTheDocument()
    expect(queryByText('Vis flere dyr')).not.toBeInTheDocument()
    expect(getByLabelText(/viser 6 av 6/i)).toBeInTheDocument()
    expect(getByLabelText(/Ilder/i)).toBeInTheDocument()
    expect(getByLabelText(/Fugl/i)).toBeInTheDocument()
    expect(getByLabelText(/Kanin/i)).toBeInTheDocument()
    expect(getByLabelText(/Gnager/i)).toBeInTheDocument()
  })
})
