/**
 * @jest-environment jsdom
 */

import {fireEvent, render} from '@testing-library/svelte'
import Tags from './Tags.svelte'

describe('Tags', () => {
  const componentOptions = {
    tags: [
      {text: 'Sverige', ariaLabel: ''},
      {text: 'Norge', ariaLabel: ''},
      {text: 'Finland', ariaLabel: ''}
    ],
    isClosable: true
  }

  test('Renders', async () => {
    const {getAllByText, queryAllByText} = render(Tags, componentOptions)
    const sverige = getAllByText('Sverige')
    expect(sverige.length).toEqual(2)
    const norway = getAllByText('Norge')
    expect(norway.length).toEqual(2)
    const finland = getAllByText('Finland')
    expect(finland.length).toEqual(2)
    await fireEvent.click(norway[1])
    const norway2 = queryAllByText('Norge')
    expect(norway2.length).toEqual(0)
    expect(getAllByText('Sverige').length).toEqual(2)
    const finland2 = getAllByText('Finland')
    expect(finland2.length).toEqual(2)
    await fireEvent.click(finland2[1])
    expect(getAllByText('Sverige').length).toEqual(2)
    expect(queryAllByText('Finland').length).toEqual(0)
    expect(queryAllByText('Norge').length).toEqual(0)
  })
})
