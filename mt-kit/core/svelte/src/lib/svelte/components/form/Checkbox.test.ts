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
    const { getByLabelText, getByText, getByRole, component } = render(Checkbox, {
      value,
      error,
      name,
      label,
      helpText,
      options,
      isRequired: !!properties.validationRequired
    })
    component.$on('onChange', onChangeSpy)
    expect(getByText(helpText)).toBeInTheDocument()
    expect(getByLabelText(options[0].text)).toBeInTheDocument()
    expect(getByLabelText(options[1].text)).toBeInTheDocument()
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
