import { fireEvent, render } from '@testing-library/svelte'
import Checkbox from './Checkbox.svelte'

describe('Checkbox', () => {
  const value = []
  const name = 'name'
  const label = 'Velg noe'
  const error = undefined
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
  test('Renders', async () => {
    const onChangeSpy = vi.fn()
    const { getByLabelText, getByText, getByRole } = render(Checkbox, {
      value,
      error,
      name,
      label,
      helpText,
      options,
      onChange: onChangeSpy,
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
    const fieldSet = getByRole('checkbox', { name: 'Ja' })
    expect(fieldSet).not.toBeChecked()
    expect(fieldSet?.getAttribute('aria-required')).toEqual('true')
    expect(fieldSet?.getAttribute('aria-describedby')).toEqual('name-hint')
    await fireEvent.click(fieldSet)
    expect(fieldSet).toBeChecked()
    expect(onChangeSpy).toHaveBeenCalledTimes(1)
  })

  test('Renders optional in label if not required', () => {
    const err = { fieldName: name, message: 'This is the errormessage' }
    const { getByText } = render(Checkbox, {
      value,
      error: err,
      name,
      label,
      helpText,
      options
    })
    expect(getByText(/Valgfitt/)).toBeInTheDocument()
  })

  test('Renders error', () => {
    const err = { fieldName: name, message: 'This is the errormessage' }
    const { getByText, getByRole } = render(Checkbox, {
      value,
      error: err,
      name,
      label,
      helpText,
      options
    })
    expect(getByText(/This is the errormessage/)).toBeInTheDocument()
    const fieldSet = getByRole('checkbox', { name: 'Ja' })
    expect(fieldSet.getAttribute('aria-describedby')).toEqual('name-hint name-error')
  })

  test('Renders without helptext', () => {
    const { getByRole } = render(Checkbox, {
      value,
      error: undefined,
      name,
      label,
      helpText: undefined,
      options
    })
    const fieldSet = getByRole('checkbox', { name: 'Ja' })
    expect(fieldSet.getAttribute('aria-describedby')).toBeNull()
  })

  test('Renders preselected - uncheck', async () => {
    const { getByRole } = render(Checkbox, {
      value: ['yes'],
      error: undefined,
      name,
      label,
      helpText: undefined,
      options
    })
    const fieldSet = getByRole('checkbox', { name: 'Ja' })
    expect(fieldSet).toBeChecked()
    await fireEvent.click(fieldSet)
    expect(fieldSet).not.toBeChecked()
  })
})
