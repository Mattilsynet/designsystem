/**
 * @jest-environment jsdom
 */

import {render} from '@testing-library/svelte'
import MenuPoints from './MenuPointsIcons.svelte'

describe('Highlighted content', () => {
  test('Renders default display type', () => {
    const componentOptions = {
      title: 'Tittel',
      menuPoints: [
        {
          title: 'Dyr',
          url: 'http',
          keywords: 'Stikkord for dyr',
          iconResource: '<svg>hello from svg</svg>'
        }
      ]
    }
    const {getByTestId, getByText, queryByText} = render(MenuPoints, componentOptions)
    expect(getByText('Tittel')).toBeInTheDocument()
    expect(getByText('Dyr')).toBeInTheDocument()
    expect(getByText('hello from svg')).toBeInTheDocument()
    expect(queryByText('This is the title')).not.toBeInTheDocument()
    const link = getByTestId('menupoints-link')
    expect(link.getAttribute('rel')).toEqual('external')
    const headerElement = getByText('Dyr')
    expect(headerElement.tagName).toEqual('H3')
  })

  test('Renders image', () => {
    const componentOptions = {
      menuPoints: [
        {
          iconResource: undefined,
          icon: 'icon src'
        }
      ]
    }
    const {getByTestId} = render(MenuPoints, componentOptions)
    const link = getByTestId('img-icon')
    expect(link.getAttribute('src')).toEqual('icon src')
  })

  test('Renders without props', () => {
    const {queryByText, getByTestId} = render(MenuPoints, {})
    expect(queryByText('Tittel')).not.toBeInTheDocument()
    expect(getByTestId('menu-points')).toBeInTheDocument()
  })
})
