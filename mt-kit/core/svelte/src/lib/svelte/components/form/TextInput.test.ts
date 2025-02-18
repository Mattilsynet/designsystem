import '@mattilsynet/design'
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
    expect(input.getAttribute('aria-describedby')).toBeDefined()
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

  test('Render error message when defined', async () => {
    const err = { key: props.name, message: 'This is the errormessage' }
    const { getByText, getByLabelText } = render(TextInput, {
      ...props,
      error: err
    })
    await tick()
    const errorMessage = getByText(err.message)
    expect(errorMessage).toBeInTheDocument()
    const input = getByLabelText(/Navn/)
    expect(input.getAttribute('aria-describedby')).toBeDefined()
    let attribute = input.getAttribute('aria-invalid')
    console.log('input', input)
    console.log('aria invalid', attribute)
    expect(attribute).toEqual('true')
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
    // expect(input.getAttribute('aria-describedby')).toEqual('name-maxlength name-hint')
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
