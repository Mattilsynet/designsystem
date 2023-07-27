import { render } from '@testing-library/svelte'
import FileUpload from './FileUpload.svelte'

describe('File upload', () => {
  const value = 'this is the value'
  const error = undefined
  const name = 'name'
  const label = 'Har du bilder eller annen dokumentasjon?'
  const helpText = 'This is the helptext'
  const isRequired = true
  const multiple = true
  const textOptional = 'valgfritt felt'
  const fileInputName = `file-${name}`
  const fileNameInputName = `filename-${name}`
  const accept = 'image/*,.pdf'

  test('Renders', () => {
    const { getByLabelText, getByText } = render(FileUpload, {
      value,
      error,
      name,
      label,
      helpText,
      isRequired,
      accept,
      multiple,
      textOptional,
      fileInputName,
      fileNameInputName
    })
    const labelForInput = getByLabelText(/Har du bilder eller annen dokumentasjon?/)
    expect(getByText(helpText)).toBeInTheDocument()
    expect(labelForInput).toBeInTheDocument()
    expect(labelForInput.getAttribute('aria-required')).toEqual('true')
    expect(labelForInput.getAttribute('accept')).toEqual(accept)
    expect(labelForInput.getAttribute('multiple')).toBeDefined()
  })
})
