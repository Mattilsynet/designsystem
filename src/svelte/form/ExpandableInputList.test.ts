/**
 * @jest-environment jsdom
 */
import ExpandableInputList from './ExpandableInputList.svelte'
import {fireEvent, render, RenderResult} from '@testing-library/svelte'

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
    const renderResult = render(ExpandableInputList, componentOptions)
    const {getByLabelText, queryByText} = renderResult
    testByText(['hjelpetekst', 'Hvilke land har du vært i?', 'Vis flere dyr'], renderResult, true)
    expect(queryByText('Vis færre dyr')).not.toBeInTheDocument()
    testByLabelList([/hund/i, /katt/i], renderResult, true)
    expect(getByLabelText(/viser 2 av 6/i)).toBeInTheDocument()
    testByLabelList([/fugl/i, /ilder/i, /gnager/i, /kanin/i], renderResult, false)
  })

  test('Expand list', async () => {
    const renderResult = render(ExpandableInputList, componentOptions)
    const {getByLabelText, getByText, queryByText} = renderResult
    testByText(['hjelpetekst', 'Hvilke land har du vært i?'], renderResult, true)
    const showMoreButton = getByText('Vis flere dyr')
    expect(showMoreButton).toBeInTheDocument()
    expect(queryByText('Vis færre dyr')).not.toBeInTheDocument()
    testByLabelList([/hund/i, /katt/i], renderResult, true)
    expect(getByLabelText(/viser 2 av 6/i)).toBeInTheDocument()

    await fireEvent.click(showMoreButton)
    expect(getByText('Vis færre dyr')).toBeInTheDocument()
    expect(queryByText('Vis flere dyr')).not.toBeInTheDocument()
    expect(getByLabelText(/viser 6 av 6/i)).toBeInTheDocument()
    testByLabelList([/fugl/i, /ilder/i, /gnager/i, /kanin/i], renderResult, true)
  })

  test('Show error, optional text', async () => {
    const renderResult = render(ExpandableInputList, {
      ...componentOptions,
      fieldSetError: [{key: componentOptions.fieldSetId, message: 'Det er en feil i skjema'}],
      showOptionalText: true
    })
    const {getByText, rerender, queryByText, getAllByText} = renderResult
    expect(getByText('Det er en feil i skjema')).toBeInTheDocument()
    expect(getAllByText(/Valgfritt felt/i).length).toEqual(2)
    rerender(componentOptions)
    expect(queryByText('Det er en feil i skjema')).not.toBeInTheDocument()
    inputList[0].error = {key: 'dogs', message: 'Feil på hund input'}
    inputList[5].error = {key: 'bird', message: 'Feil på fugl input'}
    rerender({...componentOptions, inputList: inputList})
    await fireEvent.click(getByText('Vis flere dyr'))
    testByText(['Feil på hund input', 'Feil på fugl input'], renderResult, true)
  })

  test('Renders without JS', async () => {
    const renderResult = render(ExpandableInputList, {
      ...componentOptions,
      loadJs: false
    })
    const {getByText, rerender} = renderResult
    testByText(['hjelpetekst', 'Hvilke land har du vært i?'], renderResult, true)
    const showMoreButton = getByText('Vis flere dyr')
    expect(showMoreButton).toBeInTheDocument()
    testByLabelList([/hund/i, /katt/i, /fugl/i, /ilder/i, /gnager/i, /kanin/i], renderResult, true)
    inputList[0].error = {key: 'dogs', message: 'Feil på hund input'}
    rerender({...componentOptions, inputList: inputList})
    testByText(['Feil på hund input'], renderResult, true)
  })
})
function testByText(
  list: Array<RegExp | string>,
  {getByText, queryByText}: RenderResult,
  shouldExist: boolean
) {
  list.forEach(regEx => {
    if (shouldExist) {
      expect(getByText(regEx)).toBeInTheDocument()
    } else {
      expect(queryByText(regEx)).not.toBeInTheDocument()
    }
  })
}
function testByLabelList(
  list: Array<RegExp>,
  {getByLabelText, queryByLabelText}: RenderResult,
  shouldExist: boolean
) {
  list.forEach(regEx => {
    if (shouldExist) {
      expect(getByLabelText(regEx)).toBeInTheDocument()
    } else {
      expect(queryByLabelText(regEx)).not.toBeInTheDocument()
    }
  })
}
