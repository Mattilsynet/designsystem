/**
 * @jest-environment jsdom
 */
import {fireEvent, render} from '@testing-library/svelte'
import TextArea from './TextArea.svelte'
import {tick} from 'svelte'

describe('TextArea', () => {
  const value = 'this is the value'
  const error = undefined
  const name = 'name'
  const label = 'Navn'
  const helpText = 'This is the helptext'
  const field = {
    rows: 5,
    cols: 3
  }
  const inputmode = 'text'
  const autocomplete = 'name'
  const placeholder = 'Eg. Test Testsen'
  const validationRequired = {
    errorMessage: 'Error'
  }
  const maxlength = 100
  test('Renders', () => {
    const {getByLabelText, getByDisplayValue, getByPlaceholderText, getByText} = render(TextArea, {
      value,
      error,
      name,
      label,
      helpText,
      autocomplete,
      inputmode,
      isRequired: !!validationRequired,
      placeholder,
      cols: field.cols,
      rows: field.rows,
      maxlength
    })
    expect(getByText(helpText)).toBeInTheDocument()
    const byLabelText: Partial<HTMLTextAreaElement> = getByLabelText(label)
    expect(byLabelText).toBeInTheDocument()
    expect(byLabelText.value).toEqual(value)
    const input = getByDisplayValue(value)
    expect(input).toBeInTheDocument()
    expect(input.getAttribute('autocomplete')).toEqual(autocomplete)
    expect(input.getAttribute('inputmode')).toEqual(inputmode)
    expect(input.getAttribute('aria-required')).toEqual('true')
    expect(input.getAttribute('cols')).toEqual(`${field.cols}`)
    expect(input.getAttribute('rows')).toEqual(`${field.rows}`)
    expect(input.getAttribute('aria-describedby').indexOf('name-hint') > -1).toEqual(true)
    expect(getByPlaceholderText(placeholder)).toBeInTheDocument()
  })

  test('Does not render properties when not defined', () => {
    const {getByDisplayValue, queryByPlaceholderText, getByText} = render(TextArea, {
      value,
      error,
      name,
      label,
      helpText
    })
    const input = getByDisplayValue(value)
    expect(input).toBeInTheDocument()
    expect(input.getAttribute('autocomplete')).toEqual(null)
    expect(input.getAttribute('inputmode')).toEqual(null)
    expect(input.getAttribute('aria-required')).toEqual(null)
    expect(input.getAttribute('cols')).toEqual(null)
    expect(queryByPlaceholderText(placeholder)).not.toBeInTheDocument()
    expect(getByText(/valgfritt felt/)).toBeInTheDocument()
  })

  test('Render error message when defined', () => {
    const err = {key: name, message: 'This is the errormessage'}
    const {getByText, getByLabelText} = render(TextArea, {
      value,
      error: err,
      name,
      label,
      helpText
    })
    const errorMessage = getByText(err.message)
    expect(errorMessage).toBeInTheDocument()
    expect(errorMessage.getAttribute('id').indexOf(name) > -1).toEqual(true)
    const input = getByLabelText(/Navn/)
    expect(input.getAttribute('aria-describedby').indexOf('name-error') > -1).toEqual(true)
    expect(input.getAttribute('aria-invalid')).toEqual('true')
  })

  test('Does not render aria-describedby when no helptext, error or maxlength', () => {
    const {getByLabelText} = render(TextArea, {
      value,
      error: undefined,
      name,
      label,
      helpText: undefined
    })
    const input = getByLabelText(/Navn/)
    expect(input.getAttribute('aria-describedby')).toBeNull()
  })

  test('A11y for characters left', async () => {
    const {getByLabelText} = render(TextArea, {
      value: '',
      name,
      label,
      helpText,
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
