import { fireEvent, render } from '@testing-library/svelte'
import TextArea from './TextArea.svelte'
import { tick } from 'svelte'

describe('TextArea', () => {
  const props = {
    value: 'this is the value',
    error: undefined,
    name: 'name',
    label: 'Navn',
    helpText: 'This is the helptext',
    placeholder: 'Eg. Test Testsen',
    tooManyCharactersErrorText: 'too many chars error',
    validationRequired: {
      errorMessage: 'Error'
    },
    maxlength: 100
  }
  test('Renders', () => {
    const { getByLabelText, getByDisplayValue, getByPlaceholderText, getByText } = render(
      TextArea,
      {
        ...props,
        isRequired: !!props.validationRequired
      }
    )
    expect(getByText(props.helpText)).toBeInTheDocument()
    const byLabelText: Partial<HTMLTextAreaElement> = getByLabelText(props.label)
    expect(byLabelText).toBeInTheDocument()
    expect(byLabelText.value).toEqual(props.value)
    const input = getByDisplayValue(props.value)
    expect(input).toBeInTheDocument()
    expect(input.getAttribute('aria-required')).toEqual('true')
    expect(getByPlaceholderText(props.placeholder)).toBeInTheDocument()
  })

  test('Does not render properties when not defined', () => {
    const { getByDisplayValue, queryByPlaceholderText } = render(TextArea, {
      value: props.value,
      error: props.error,
      name: props.name,
      label: props.label,
      helpText: props.helpText
    })
    const input = getByDisplayValue(props.value)
    expect(input).toBeInTheDocument()
    expect(input.getAttribute('aria-required')).toEqual(null)
    expect(input.getAttribute('cols')).toEqual(null)
    expect(queryByPlaceholderText(props.placeholder)).not.toBeInTheDocument()
  })

  test('Render error message when defined', () => {
    const err = { key: props.name, message: 'This is the errormessage' }
    const { getByText, getByLabelText } = render(TextArea, {
      ...props,
      error: err
    })
    const input = getByLabelText(/Navn/)
    expect(input.getAttribute('aria-invalid')).toEqual('true')
  })

  test('Render tooManyCharactersErrorText when defined', async () => {
    const err = { key: props.name, message: 'This is the errormessage' }
    const { getByText, queryByText, getByLabelText } = render(TextArea, {
      ...props,
      maxlength: 1,
      value: '',
      error: err
    })
    const input = getByLabelText(/Navn/)
    expect(input).toBeInTheDocument()
    const error = queryByText(props.tooManyCharactersErrorText)

    expect(error).not.toBeInTheDocument()
    const newValue = 'entotrefi'
    await fireEvent.input(input, { target: { value: newValue } })
    expect(input.value).toEqual(newValue)
    const errorMessage = getByText(err.message)
    expect(errorMessage).toBeInTheDocument()
  })

  test('Does not set aria-required when isRequired is undefined', () => {
    const { getByLabelText } = render(TextArea, {
      value: props.value,
      name: props.name,
      label: props.label,
      error: undefined,
      helpText: undefined
    })
    const input = getByLabelText(/Navn/)
    expect(input.getAttribute('aria-required')).toEqual(null)
  })

  test('A11y for characters left', async () => {
    const { getByLabelText } = render(TextArea, {
      ...props,
      value: '',
      maxlength: 10
    })
    const input = getByLabelText(/Navn/i)
    expect(input).toBeInTheDocument()
    await fireEvent.input(input, { target: { value: 'entotrefi' } })
    const characterCounter = document.querySelector('[data-count="10"]')
    expect(characterCounter).toBeInTheDocument()
    const newValue = 'entotrefire'
    await fireEvent.input(input, { target: { value: newValue } })
    await tick()
    expect(input.value).toEqual(newValue)
  })
})
