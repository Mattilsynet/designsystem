/**
 * @jest-environment jsdom
 */

import {render} from '@testing-library/svelte'
import HighlightedContent from './HighlightedContentLink.svelte'

describe('Highlighted content', () => {
  test('Renders', () => {
    const componentOptions = {
      heading: 'This is the heading',
      isExternal: true,
      image: {src: 'test', alt: 'alt text'}
    }
    const {getByTestId, getByText, getByAltText} = render(HighlightedContent, componentOptions)
    expect(getByText('This is the heading')).toBeInTheDocument()
    expect(getByAltText('alt text')).toBeInTheDocument()
    const link = getByTestId('hightlighted-content-link')
    expect(link.getAttribute('rel')).toEqual('external')
    const headerElement = getByText('This is the heading')
    expect(headerElement.tagName).toEqual('H2')
  })
  test('Renders without props', () => {
    const {queryByText, queryByAltText, getByTestId} = render(HighlightedContent, {})
    expect(queryByText('This is the heading')).not.toBeInTheDocument()
    expect(queryByAltText('alt text')).not.toBeInTheDocument()
    const link = getByTestId('hightlighted-content-link')
    expect(link.getAttribute('rel')).toEqual(null)
  })
  test('Render with h3 title', () => {
    const componentOptions = {
      heading: 'This is the heading',
      isExternal: true,
      image: {src: 'test', alt: 'alt text'},
      headerTag: 'h3'
    }
    const {getByText} = render(HighlightedContent, componentOptions)
    const headerElement = getByText('This is the heading')
    expect(headerElement.tagName).toEqual('H3')
  })
})
