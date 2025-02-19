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

  test('Render error message when defined', async () => {
    const err = { key: props.name, message: 'This is the errormessage' }
    const { getByText } = render(TextInput, {
      ...props,
      error: err
    })
    const errorMessage = getByText(err.message)
    expect(errorMessage).toBeInTheDocument()
  })

  test('Does not set aria-required when isRequired is undefined', () => {
    const { getByText, getByLabelText } = render(TextInput, {
      ...props,
      isRequired: undefined
    })
    const input = getByLabelText(/Navn/i)
    expect(input).toBeInTheDocument()
    console.log('input', input)
    expect(input.getAttribute('aria-required')).toEqual(null)
  })

  test('A11y for characters left', async () => {
    const { getByLabelText } = render(TextInput, {
      ...props,
      value: '',
      maxlength: 10
    })
    const input = getByLabelText(/Navn/i)
    expect(input).toBeInTheDocument()
    await fireEvent.input(input, { target: { value: 'entotrefi' } })
    const characterCounter = document.querySelector('[data-count="10"]')
    expect(characterCounter.getAttribute('aria-live')).toBeDefined()
    const newValue = 'entotrefiee'
    await fireEvent.input(input, { target: { value: newValue } })
    await tick()
    expect(input.value).toEqual(newValue)
    expect(characterCounter.getAttribute('aria-live')).toBeDefined()
  })
})
