/**
 * @jest-environment jsdom
 */
import {fireEvent, render} from '@testing-library/svelte'
import TextArea from './TextArea.svelte'
import {tick} from 'svelte'
import TextInput from './TextInput.svelte'

describe('TextArea', () => {
  const props = {
    value: 'this is the value',
    error: undefined,
    name: 'name',
    label: 'Navn',
    helpText: 'This is the helptext',
    rows: 5,
    cols: 3,
    inputmode: 'text',
    autocomplete: 'name',
    placeholder: 'Eg. Test Testsen',
    countCharactersLeftLabel: 'chars left',
    countCharactersTooManyLabel: 'chars too many',
    tooManyCharactersErrorText: 'too many chars error',
    validationRequired: {
      errorMessage: 'Error'
    },
    maxlength: 100
  }
  test('Renders', () => {
    const {getByLabelText, getByDisplayValue, getByPlaceholderText, getByText} = render(TextArea, {
      ...props,
      isRequired: !!props.validationRequired
    })
    expect(getByText(props.helpText)).toBeInTheDocument()
    const byLabelText: Partial<HTMLTextAreaElement> = getByLabelText(props.label)
    expect(byLabelText).toBeInTheDocument()
    expect(byLabelText.value).toEqual(props.value)
    const input = getByDisplayValue(props.value)
    expect(input).toBeInTheDocument()
    expect(input.getAttribute('autocomplete')).toEqual(props.autocomplete)
    expect(input.getAttribute('inputmode')).toEqual(props.inputmode)
    expect(input.getAttribute('aria-required')).toEqual('true')
    expect(input.getAttribute('cols')).toEqual(`${props.cols}`)
    expect(input.getAttribute('rows')).toEqual(`${props.rows}`)
    expect(input.getAttribute('aria-describedby').indexOf('name-hint') > -1).toEqual(true)
    expect(getByPlaceholderText(props.placeholder)).toBeInTheDocument()
  })

  test('Does not render properties when not defined', () => {
    const {getByDisplayValue, queryByPlaceholderText, getByText} = render(TextArea, {
      value: props.value,
      error: props.error,
      name: props.name,
      label: props.label,
      helpText: props.helpText
    })
    const input = getByDisplayValue(props.value)
    expect(input).toBeInTheDocument()
    expect(input.getAttribute('autocomplete')).toEqual(null)
    expect(input.getAttribute('inputmode')).toEqual(null)
    expect(input.getAttribute('aria-required')).toEqual(null)
    expect(input.getAttribute('cols')).toEqual(null)
    expect(queryByPlaceholderText(props.placeholder)).not.toBeInTheDocument()
    expect(getByText(/valgfritt felt/)).toBeInTheDocument()
  })

  test('Render error message when defined', () => {
    const err = {key: props.name, message: 'This is the errormessage'}
    const {getByText, getByLabelText} = render(TextArea, {
      ...props,
      error: err
    })
    const errorMessage = getByText(err.message)
    expect(errorMessage).toBeInTheDocument()
    expect(errorMessage.getAttribute('id').indexOf(props.name) > -1).toEqual(true)
    const input = getByLabelText(/Navn/)
    expect(input.getAttribute('aria-describedby').indexOf('name-error') > -1).toEqual(true)
    expect(input.getAttribute('aria-invalid')).toEqual('true')
  })

  test('Render tooManyCharactersErrorText when defined', async () => {
    const {getByText, queryByText, getByLabelText} = render(TextInput, {
      ...props,
      maxlength: 1,
      value: ''
    })
    const input = getByLabelText(/Navn/)
    expect(input).toBeInTheDocument()
    let error = queryByText(props.tooManyCharactersErrorText)
    expect(error).not.toBeInTheDocument()

    const newValue = 'entotrefi'
    await fireEvent.input(input, {target: {value: newValue}})
    expect(input.value).toEqual(newValue)
    error = getByText(props.tooManyCharactersErrorText)
    expect(error).toBeInTheDocument()
  })

  test('Does not render aria-describedby when no helptext, error or maxlength', () => {
    const {getByLabelText} = render(TextArea, {
      value: props.value,
      name: props.name,
      label: props.label,
      error: undefined,
      helpText: undefined
    })
    const input = getByLabelText(/Navn/)
    expect(input.getAttribute('aria-describedby')).toBeNull()
  })

  test('A11y for characters left', async () => {
    const {getByLabelText} = render(TextArea, {
      ...props,
      value: '',
      maxlength: 10
    })
    const input = getByLabelText(/Navn/i)
    expect(input).toBeInTheDocument()
    expect(input.getAttribute('aria-describedby')).toEqual('name-maxlength name-hint')
    await fireEvent.input(input, {target: {value: 'entotrefi'}})
    const characterCounter = document.querySelector('#name-maxlength')
    expect(characterCounter.getAttribute('aria-live')).toEqual('polite')
    const newValue = 'entotrefiee'
    await fireEvent.input(input, {target: {value: newValue}})
    await tick()
    expect(input.value).toEqual(newValue)
    expect(characterCounter.getAttribute('aria-live')).toEqual('polite')
  })
})
