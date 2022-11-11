/**
 * @jest-environment jsdom
 */

import {render} from '@testing-library/svelte'
import HighlightedContent from './HighlightedContentLink.svelte'

describe('Highlighted content', () => {
  test('Renders default display type', () => {
    const componentOptions = {
      title: 'This is the title',
      shortTitle: 'This is the short title',
      isExternal: true,
      image: {src: 'test', alt: 'alt text'}
    }
    const {getByTestId, getByText, getByAltText, queryByText} = render(
      HighlightedContent,
      componentOptions
    )
    expect(queryByText('This is the title')).not.toBeInTheDocument()
    expect(getByText('This is the short title')).toBeInTheDocument()
    expect(getByAltText('alt text')).toBeInTheDocument()
    const link = getByTestId('hightlighted-content-link')
    expect(link.getAttribute('rel')).toEqual('external')
    const headerElement = getByText('This is the short title')
    expect(headerElement.tagName).toEqual('H2')
  })

  test('Renders blue display type', () => {
    const componentOptions = {
      title: 'This is the title',
      shortTitle: 'This is the short title',
      displayType: 'blue',
      isExternal: true,
      image: {src: 'test', alt: 'alt text'}
    }
    const {getByText, queryByAltText} = render(HighlightedContent, componentOptions)
    expect(getByText('This is the title')).toBeInTheDocument()
    expect(getByText('This is the short title')).toBeInTheDocument()
    expect(queryByAltText('alt text')).not.toBeInTheDocument()
    const headerElement = getByText('This is the title')
    expect(headerElement.tagName).toEqual('H2')
    const headerElement2 = getByText('This is the short title')
    expect(headerElement2.tagName).toEqual('A')
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
      shortTitle: 'This is the heading',
      isExternal: true,
      image: {src: 'test', alt: 'alt text'},
      headerTag: 'h3'
    }
    const {getByText} = render(HighlightedContent, componentOptions)
    const headerElement = getByText('This is the heading')
    expect(headerElement.tagName).toEqual('H3')
  })
})
