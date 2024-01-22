import { fireEvent, render, screen } from '@testing-library/svelte'
import FileUpload from './FileUpload.svelte'
import userEvent from '@testing-library/user-event'

describe('File upload', () => {
  const value = 'this is the value'
  const error = undefined
  const name = 'attachment'
  const label = 'Har du bilder eller annen dokumentasjon?'
  const helpText = 'This is the helptext'
  const isRequired = true
  const multiple = true
  const textOptional = '(valgfritt felt)'
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

  test('Add one file, remove', async () => {
    const file = new File(['hello'], 'hello.png', { type: 'image/png' })
    render(FileUpload, {
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
      fileNameInputName,
      fileName: [file.name]
    })

    const input = screen.getByLabelText(/Har du bilder eller annen dokumentasjon?/i)
    await userEvent.upload(input, file)

    expect(input.files[0]).toStrictEqual(file)
    expect(input.files.item(0)).toStrictEqual(file)
    expect(input.files).toHaveLength(1)

    const fileInput = screen.getByTestId(fileInputName)
    expect(fileInput.files.length).toEqual(1)

    expect(screen.getByTestId('filename-attachment').value).toEqual('hello.png')

    const remove = screen.getByTestId('remove-hello.png')
    fireEvent.click(remove)

    expect(screen.getByTestId('filename-attachment').value).toEqual('')

    const attachment = screen.getByLabelText(/Har du bilder eller annen dokumentasjon?/i)
    expect(attachment.files).toHaveLength(0)
  })

  test('upload multiple files, remove one', async () => {
    const files = [
      new File(['hello'], 'hello.png', { type: 'image/png' }),
      new File(['there'], 'there.png', { type: 'image/png' }),
      new File(['here'], 'here.png', { type: 'image/png' })
    ]

    render(FileUpload, {
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
      fileNameInputName,
      fileName: [files[0].name, files[1].name]
    })

    const input = screen.getByLabelText(/Har du bilder eller annen dokumentasjon?/i)
    userEvent.upload(input, files)

    expect(input.files).toHaveLength(3)
    expect(input.files[0]).toStrictEqual(files[0])
    expect(input.files[1]).toStrictEqual(files[1])
    expect(input.files[2]).toStrictEqual(files[2])

    expect(screen.getByTestId('filename-attachment').value).toEqual('hello.png,there.png')
    const removeSecond = screen.getByTestId('remove-there.png')

    fireEvent.click(removeSecond)
    expect(screen.getByTestId('filename-attachment').value).toEqual('hello.png')

    // <name> + file-<name> inputs not in use after remove
    const input2 = screen.getByLabelText(/Har du bilder eller annen dokumentasjon?/i)
    expect(input2.files.length).toEqual(0)

    const fileInput: HTMLInputElement = screen.getByTestId('file-attachment')
    expect(fileInput.files.length).toEqual(0)
  })
})
