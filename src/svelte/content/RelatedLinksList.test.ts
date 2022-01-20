/**
 * @jest-environment jsdom
 */
import {render} from '@testing-library/svelte'
import RelatedLinksList from './RelatedLinksList.svelte'

describe('Related links list', () => {
  const componentOptions = {
    title: 'Main heading',
    linkGroups: [
      {
        title: 'Overskrift 1',
        links: [
          {url: 'https://www.mattilsynet.no', text: 'mattilsynet.no'},
          {url: 'https://www.mattilsynet.no', text: 'Annen link'}
        ]
      },
      {
        title: 'Overskrift 2',
        links: [{url: 'https://www.mattilsynet.no', text: 'Test link'}]
      }
    ]
  }

  test('Renders', () => {
    const {getByText, getByTestId} = render(RelatedLinksList, componentOptions)
    expect(getByText('Main heading')).toBeInTheDocument()
    expect(getByText('Overskrift 1')).toBeInTheDocument()
    expect(getByText('Overskrift 2')).toBeInTheDocument()
    expect(getByText('mattilsynet.no')).toBeInTheDocument()
    expect(getByText('Annen link')).toBeInTheDocument()
    expect(getByText('Test link')).toBeInTheDocument()
    const leftCol = getByTestId('left-col')
    expect(leftCol.children[0].innerHTML).toEqual('Main heading')
    const rightCol = getByTestId('right-col')
    expect(rightCol.children[0].innerHTML).toEqual('Overskrift 1')
  })

  test('Render properties when no main title, no group title', () => {
    const {getByTestId} = render(RelatedLinksList, {linkGroups: [{links: []}]})
    expect(getByTestId('left-col')).toBeInTheDocument()
    expect(getByTestId('right-col')).toBeInTheDocument()
  })

  test('Render properties when not defined', () => {
    const {getByTestId} = render(RelatedLinksList, {})
    expect(getByTestId('left-col')).toBeInTheDocument()
    expect(getByTestId('right-col')).toBeInTheDocument()
  })
})
