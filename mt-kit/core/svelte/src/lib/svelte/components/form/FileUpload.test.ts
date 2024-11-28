import { fireEvent, render, screen } from '@testing-library/svelte'
import FileUpload from './FileUpload.svelte'
import userEvent from '@testing-library/user-event'

describe('File upload', () => {
  const loadJs = true
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
  const fileName = undefined
  const hiddenErrorText = 'Aria error text'

  test('Renders', () => {
    const { getByLabelText, getByText } = render(FileUpload, {
      loadJs,
      name,
      error,
      multiple,
      accept,
      isRequired,
      value,
      label,
      fileInputName,
      fileNameInputName,
      helpText,
      fileName,
      textOptional,
      hiddenErrorText
    })
    const labelForInput = getByLabelText(/Har du bilder eller annen dokumentasjon?/)
    expect(getByText(helpText)).toBeInTheDocument()
    expect(labelForInput).toBeInTheDocument()
    expect(labelForInput.getAttribute('aria-required')).toEqual('true')
    expect(labelForInput.getAttribute('accept')).toEqual(accept)
    expect(labelForInput.getAttribute('multiple')).toBeDefined()
  })

  test('Add one file, remove', async () => {
    const user = userEvent.setup()
    const file = new File(['hello'], 'hello.png', { type: 'image/png' })
    render(FileUpload, {
      loadJs,
      name,
      error,
      multiple,
      accept,
      isRequired,
      value,
      label,
      fileInputName,
      fileNameInputName,
      helpText,
      textOptional,
      hiddenErrorText,
      fileName: [file.name]
    })

    const input = screen.getByLabelText(/Har du bilder eller annen dokumentasjon?/i)
    await user.upload(input, file)

    expect(input.files[0]).toStrictEqual(file)
    expect(input.files.item(0)).toStrictEqual(file)
    expect(input.files).toHaveLength(1)

    const fileInput = screen.getByTestId(fileInputName)
    expect(fileInput.files.length).toEqual(1)

    expect(screen.getByTestId('filename-attachment').value).toEqual('hello.png')

    const remove = screen.getByTestId('remove-hello.png')
    await fireEvent.click(remove)

    expect(screen.getByTestId('filename-attachment').value).toEqual('')
  })

  test('upload multiple files, remove one', async () => {
    const files = [
      new File(['hello'], 'hello.png', { type: 'image/png' }),
      new File(['there'], 'there.png', { type: 'image/png' }),
      new File(['here'], 'here.png', { type: 'image/png' })
    ]
    const user = userEvent.setup()
    render(FileUpload, {
      loadJs,
      name,
      error,
      multiple,
      accept,
      isRequired,
      value: ['1-1', '2-2', '3-3'],
      label,
      fileInputName,
      fileNameInputName,
      helpText,
      textOptional,
      hiddenErrorText,
      fileName: [files[0].name, files[1].name, files[2].name]
    })

    const input = screen.getByLabelText(/Har du bilder eller annen dokumentasjon?/i)
    await user.upload(input, files)

    expect(input.files).toHaveLength(3)
    expect(input.files[0]).toStrictEqual(files[0])
    expect(input.files[1]).toStrictEqual(files[1])
    expect(input.files[2]).toStrictEqual(files[2])
    expect(screen.getByText('hello.png')).toBeInTheDocument()
    expect(screen.getByText('there.png')).toBeInTheDocument()
    expect(screen.getByText('here.png')).toBeInTheDocument()

    expect(screen.getByTestId('filename-attachment').value).toEqual('hello.png,there.png,here.png')

    const removeSecond = screen.getByTestId('remove-there.png')
    await fireEvent.click(removeSecond)
    expect(screen.getByTestId('filename-attachment').value).toEqual('hello.png,here.png')

    expect(screen.getByText('hello.png')).toBeInTheDocument()
    expect(screen.queryByText('there.png')).not.toBeInTheDocument()
    expect(screen.getByText('here.png')).toBeInTheDocument()

    const uuidInputBefore = screen.getByTestId('attachment')
    expect(uuidInputBefore.value).toEqual('1-1,3-3')
  })

  test('2 from before, remove 1', async () => {
    const files = [
      new File(['hello'], 'hello.png', { type: 'image/png' }),
      new File(['there'], 'there.png', { type: 'image/png' }),
      new File(['here'], 'here.png', { type: 'image/png' })
    ]
    const { getByTestId, queryByTestId } = render(FileUpload, {
      value: ['1-1', '2-2'],
      loadJs,
      name,
      error,
      multiple,
      accept,
      isRequired,
      label,
      fileInputName,
      fileNameInputName,
      helpText,
      textOptional,
      hiddenErrorText,
      fileName: [files[0].name, files[1].name]
    })

    const uuidInputBefore = getByTestId('attachment')
    expect(uuidInputBefore.value).toEqual('1-1,2-2')
    const toRemove = getByTestId('remove-hello.png')
    expect(toRemove).toBeInTheDocument()
    await fireEvent.click(toRemove)
    const uuidInput = getByTestId('attachment')
    expect(uuidInput.value).toEqual('2-2')
    expect(queryByTestId('remove-hello.png')).not.toBeInTheDocument()
  })
})
