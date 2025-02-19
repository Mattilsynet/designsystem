import { render } from '@testing-library/svelte'
import RadioGroup from './RadioGroup.svelte'

describe('RadioGroup', () => {
  const value = 'yes'
  const name = 'name'
  const yesLabel = 'Ja'
  const helpText = 'This is the helptext'
  const options = [
    { text: 'Ja', value: 'yes' },
    { text: 'Nei', value: 'no' }
  ]
  const properties = {
    validationRequired: {
      errorMessage: 'Error'
    }
  }
  const error = undefined
  test('Renders', () => {
    const { getByLabelText, getByDisplayValue, getByText } = render(RadioGroup, {
      value: value,
      error,
      name,
      label: yesLabel,
      helpText,
      options,
      isRequired: !!properties.validationRequired
    })
    expect(getByText(helpText)).toBeInTheDocument()
    const option1 = getByLabelText(options[0].text)
    expect(option1).toBeInTheDocument()
    const option2 = getByLabelText(options[1].text)
    expect(option2).toBeInTheDocument()
    expect(option1.getAttribute('id')).not.toEqual(option2.getAttribute('id'))
    expect(option1.getAttribute('id')).toContain(name)
    expect(option2.getAttribute('id')).toContain(name)
    const input = getByDisplayValue(value)
    expect(input).toBeInTheDocument()
    expect(input.checked).toEqual(true)
  })

  test('Renders optional in label if not required', () => {
    const err = { fieldName: name, message: 'This is the errormessage' }
    const { getByText, getByRole } = render(RadioGroup, {
      value,
      error: err,
      name,
      label: yesLabel,
      helpText,
      options
    })
    expect(getByText(/valgfritt felt/)).toBeInTheDocument()
    const fieldSet = getByRole('group')
    expect(fieldSet).not.toHaveAttribute('aria-required')
  })

  test('Renders error', () => {
    const err = { fieldName: name, message: 'This is the errormessage' }
    const { getByText } = render(RadioGroup, {
      value,
      error: err,
      name,
      label: yesLabel,
      helpText,
      options
    })
    expect(getByText(/This is the errormessage/)).toBeInTheDocument()
  })

  test('Renders without helptext', () => {
    const { getByRole } = render(RadioGroup, {
      value,
      error: undefined,
      name,
      label: yesLabel,
      helpText: undefined,
      options
    })
    const fieldSet = getByRole('radio', { name: 'Ja' })
    expect(fieldSet.getAttribute('aria-describedby')).toBeNull()
  })
})
