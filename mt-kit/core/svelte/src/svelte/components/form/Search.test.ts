import { fireEvent, render } from '@testing-library/svelte'
import Search from './Search.svelte'

describe('Search', () => {
  const props = {
    name: 'name',
    label: 'Name'
  }

  test('Renders', () => {
    const { getByLabelText } = render(Search, props)
    const search = getByLabelText(/Name/)
    expect(search).toBeInTheDocument()
  })

  test('Enter text and clear', async () => {
    const { getByLabelText, getByTestId } = render(Search, props)
    const search = getByLabelText(/Name/)
    expect(search).toBeInTheDocument()
    await fireEvent.input(search, { target: { value: 'test' } })
    let byLabelText = getByLabelText(/Name/)
    expect(byLabelText.value).toEqual('test')
    let clear = getByTestId('search-clear')
    await fireEvent.click(clear)
    const searchInput = getByLabelText(/Name/)
    expect(searchInput).toHaveValue('')
  })
})
