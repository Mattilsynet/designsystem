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
    expect(input.getAttribute('maxlength')).toEqual(`${maxlength}`)
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
    expect(input.getAttribute('maxlength')).toEqual(null)
    expect(queryByPlaceholderText(placeholder)).not.toBeInTheDocument()
    expect(getByText(/valgfritt felt/)).toBeInTheDocument()
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
    expect(input.getAttribute('maxlength')).toEqual('10')
    expect(input.getAttribute('aria-describedby')).toEqual('name-hint name-maxlength')
    await fireEvent.input(input, {target: {value: 'entotrefi'}})
    const characterCounter = document.querySelector('#name-maxlength')
    expect(characterCounter.getAttribute('aria-live')).toEqual('off')
    const newValue = 'entotrefiee'
    await fireEvent.input(input, {target: {value: newValue}})
    await tick()
    expect(input.value).toEqual(newValue)
    expect(characterCounter.getAttribute('aria-live')).toEqual('assertive')
  })
})
