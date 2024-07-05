import TextInput from './TextInput.svelte'
import { fireEvent, render } from '@testing-library/svelte'
import { tick } from 'svelte'

describe('TextInput', () => {
  const props = {
    value: 'this is the value',
    error: undefined,
    name: 'name',
    label: 'Navn',
    helpText: 'This is the helptext',
    inputmode: 'text',
    autocomplete: 'name',
    placeholder: 'Eg. Test Testsen',
    countCharactersLeftLabel: 'chars left',
    countCharactersTooManyLabel: 'chars too many',
    tooManyCharactersErrorText: 'too many chars error',
    validationRequired: {
      errorMessage: 'Error'
    }
  }
  test('Renders', () => {
    const { getByLabelText, getByDisplayValue, getByPlaceholderText, getByText } = render(
      TextInput,
      {
        ...props,
        isRequired: !!props.validationRequired
      }
    )
    expect(getByText(props.helpText)).toBeInTheDocument()
    const inputByLabel: Partial<HTMLInputElement> = getByLabelText(/Navn/)
    expect(inputByLabel).toBeInTheDocument()
    expect(inputByLabel.value).toEqual(props.value)
    const input = getByDisplayValue(props.value)
    expect(input).toBeInTheDocument()
    expect(input.getAttribute('autocomplete')).toEqual(props.autocomplete)
    expect(input.getAttribute('inputmode')).toEqual(props.inputmode)
    expect(input.getAttribute('aria-required')).toEqual('true')
    expect(input.getAttribute('aria-describedby').indexOf('name-hint') > -1).toEqual(true)
    expect(input.getAttribute('aria-invalid')).toEqual('false')
    expect(getByPlaceholderText(props.placeholder)).toBeInTheDocument()
  })

  test('Does not render properties when not defined', () => {
    const { getByDisplayValue, queryByPlaceholderText } = render(TextInput, {
      value: props.value,
      properties: {}
    })
    const input = getByDisplayValue(props.value)
    expect(input).toBeInTheDocument()
    expect(input.getAttribute('autocomplete')).toEqual(null)
    expect(input.getAttribute('inputmode')).toEqual(null)
    expect(queryByPlaceholderText(props.placeholder)).not.toBeInTheDocument()
  })

  test('Render error message when defined', () => {
    const err = { key: props.name, message: 'This is the errormessage' }
    const { getByText, getByLabelText } = render(TextInput, {
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
    const { getByText, queryByText, getByLabelText } = render(TextInput, {
      ...props,
      maxlength: 1,
      value: ''
    })
    const input = getByLabelText(/Navn/)
    expect(input).toBeInTheDocument()
    let error = queryByText(props.tooManyCharactersErrorText)
    expect(error).not.toBeInTheDocument()

    const newValue = 'entotrefi'
    await fireEvent.input(input, { target: { value: newValue } })
    expect(input.value).toEqual(newValue)
    error = getByText(props.tooManyCharactersErrorText)
    expect(error).toBeInTheDocument()
  })

  test('Does not render aria-describedby when no helptext, error or maxlength', () => {
    const { getByLabelText } = render(TextInput, {
      ...props,
      error: undefined,
      helpText: undefined
    })
    const input = getByLabelText(/Navn/)
    expect(input.getAttribute('aria-describedby')).toBeNull()
  })

  test('Renders optional in label if not required', () => {
    const err = { fieldName: props.name, message: 'This is the errormessage' }
    const { getByText } = render(TextInput, {
      ...props,
      error: err
    })
    expect(getByText(/Valgfritt/)).toBeInTheDocument()
  })

  test('A11y for characters left', async () => {
    const { getByLabelText } = render(TextInput, {
      ...props,
      value: '',
      maxlength: 10
    })
    const input = getByLabelText(/Navn/i)
    expect(input).toBeInTheDocument()
    expect(input.getAttribute('aria-describedby')).toEqual('name-maxlength name-hint')
    await fireEvent.input(input, { target: { value: 'entotrefi' } })
    const characterCounter = document.querySelector('#name-maxlength')
    expect(characterCounter.getAttribute('aria-live')).toEqual('polite')
    const newValue = 'entotrefiee'
    await fireEvent.input(input, { target: { value: newValue } })
    await tick()
    expect(input.value).toEqual(newValue)
    expect(characterCounter.getAttribute('aria-live')).toEqual('polite')
  })
})
