import { render } from '@testing-library/svelte'
import Address from './Address.svelte'

describe('Addresss', () => {
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
  const props = {
    nameAddress: 'ownerAddress',
    nameZip: 'ownerZip'
  }
  test('Renders', () => {
    const { getByLabelText, getByText, getByRole } = render(Address, props)
    expect(getByText(helpText)).toBeInTheDocument()
    expect(getByLabelText(options[0].text)).toBeInTheDocument()
    expect(getByLabelText(options[1].text)).toBeInTheDocument()
    const fieldSet = getByRole('checkbox', { name: 'Ja' })
    expect(fieldSet?.getAttribute('aria-required')).toEqual('true')
    expect(fieldSet?.getAttribute('aria-describedby')).toEqual('name-hint')
  })
})
