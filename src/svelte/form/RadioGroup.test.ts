/**
 * @jest-environment jsdom
 */
import {fireEvent, render} from '@testing-library/svelte'
import RadioGroup from './RadioGroup.svelte'

describe('RadioGroup', () => {
  const value = 'yes'
  const name = 'name'
  const yesLabel = 'Ja'
  const helpText = 'This is the helptext'
  const options = [
    {text: 'Ja', value: 'yes'},
    {text: 'Nei', value: 'no'}
  ]
  const properties = {
    validationRequired: {
      errorMessage: 'Error'
    }
  }
  const error = {
    key: name,
    message: 'This is the error message'
  }
  test('Renders', () => {
    const {getByLabelText, getByDisplayValue, getByText, getByRole} = render(RadioGroup, {
      value,
      error,
      name,
      label: yesLabel,
      helpText,
      options,
      isRequired: !!properties.validationRequired
    })
    expect(getByText(helpText)).toBeInTheDocument()
    expect(getByLabelText(options[0].text)).toBeInTheDocument()
    expect(getByLabelText(options[1].text)).toBeInTheDocument()
    const input = getByDisplayValue(value)
    expect(input).toBeInTheDocument()
    const fieldSet = getByRole('radio', {name: 'Ja'})
    expect(fieldSet?.getAttribute('aria-required')).toEqual('true')
    expect(getByText(error.message)).toBeInTheDocument()
  })

  test('Renders with button theme', async () => {
    const {getByLabelText, getByDisplayValue, getByText, getByRole, queryByText} = render(
      RadioGroup,
      {
        value,
        name,
        label: yesLabel,
        helpText,
        options,
        isRequired: !!properties.validationRequired,
        theme: 'button'
      }
    )
    expect(getByText(helpText)).toBeInTheDocument()
    expect(getByLabelText(options[0].text)).toBeInTheDocument()
    expect(getByLabelText(options[1].text)).toBeInTheDocument()
    const input = getByDisplayValue(value)
    expect(input).toBeInTheDocument()
    const fieldSet = getByRole('radio', {name: 'Ja'})
    expect(fieldSet?.getAttribute('aria-required')).toEqual('true')
    expect(queryByText(error.message)).not.toBeInTheDocument()
    const label2 = getByLabelText(options[1].text)
    await fireEvent.click(label2)
    const label2AfterClick = getByLabelText(options[1].text)
    expect(label2AfterClick.checked).toEqual(true)

    const label1 = getByLabelText(options[0].text)
    await fireEvent.click(label1)
    const label1AfterClick = getByLabelText(options[0].text)
    expect(label1AfterClick.checked).toEqual(true)
    expect(label2AfterClick.checked).toEqual(false)
  })

  test('Renders optional in label if not required', () => {
    const err = {fieldName: name, message: 'This is the errormessage'}
    const {getByText} = render(RadioGroup, {
      value,
      error: err,
      name,
      label: yesLabel,
      helpText,
      options
    })
    expect(getByText(/valgfritt felt/)).toBeInTheDocument()
  })
})
