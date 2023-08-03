import { fireEvent, render } from '@testing-library/svelte'
import Tags from './Tags.svelte'

describe('Tags', () => {
  const componentOptions = {
    tags: [
      { text: 'Sverige', ariaLabel: '' },
      { text: 'Norge', ariaLabel: '' },
      { text: 'Finland', ariaLabel: '' }
    ],
    isClosable: true
  }

  test('Renders', async () => {
    const { getByText, queryByText } = render(Tags, componentOptions)
    const sverige = getByText('Sverige')
    expect(sverige).toBeInTheDocument()
    const norway = getByText('Norge')
    expect(norway).toBeInTheDocument()
    const finland = getByText('Finland')
    expect(finland).toBeInTheDocument()
    await fireEvent.click(norway)
    const norway2 = queryByText('Norge')
    expect(norway2).not.toBeInTheDocument()
    expect(getByText('Sverige')).toBeInTheDocument()
    const finland2 = getByText('Finland')
    expect(finland2).toBeInTheDocument()
    await fireEvent.click(finland2)
    expect(getByText('Sverige')).toBeInTheDocument()
    expect(queryByText('Finland')).not.toBeInTheDocument()
    expect(queryByText('Norge')).not.toBeInTheDocument()
  })
})
