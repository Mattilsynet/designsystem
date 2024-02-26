import { render } from '@testing-library/svelte'
import Map from './Map.svelte'

describe('Map', () => {
  test('Renders', () => {
    const { getByText, getByTestId } = render(Map)
    const hiddenLink = getByText('Gå til kart')
    const map = getByTestId('map')
    expect(hiddenLink).toBeInTheDocument()
    expect(map).toBeInTheDocument()
  })
})
