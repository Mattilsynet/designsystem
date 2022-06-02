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
        links: [
          {url: 'https://www.mattilsynet.no', text: 'Test link 1'},
          {url: '/varsle', text: 'Test link 2'}
        ]
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
    expect(getByText('Test link 1')).toBeInTheDocument()
    const leftCol = getByTestId('left-col')
    expect(leftCol.children[0].innerHTML).toEqual('Main heading')
    const rightCol = getByTestId('right-col')
    expect(rightCol.children[0].innerHTML).toEqual('Overskrift 1')
  })

  test('Does not render title when list of links is empty', () => {
    const {getByTestId, queryByText, getByText} = render(RelatedLinksList, {
      title: 'This is the title',
      linkGroups: [{title: 'This is the group heading', links: []}]
    })
    expect(getByText('This is the title')).toBeInTheDocument()
    expect(queryByText('This is the group heading')).not.toBeInTheDocument()
    expect(getByTestId('left-col')).toBeInTheDocument()
    expect(getByTestId('right-col')).toBeInTheDocument()
  })

  test('Render properties when no main title, no group title', () => {
    const {getByTestId} = render(RelatedLinksList, {
      linkGroups: [{links: []}]
    })
    expect(getByTestId('left-col')).toBeInTheDocument()
    expect(getByTestId('right-col')).toBeInTheDocument()
  })

  test('Render properties when not defined', () => {
    const {getByTestId} = render(RelatedLinksList, {})
    expect(getByTestId('left-col')).toBeInTheDocument()
    expect(getByTestId('right-col')).toBeInTheDocument()
  })

  test('Link attributes', () => {
    const {getByText} = render(RelatedLinksList, componentOptions)
    const externalLink = getByText('Test link 1')
    expect(externalLink).toBeInTheDocument()
    expect(externalLink.getAttribute('rel')).toEqual('external')
    const relativeLink = getByText('Test link 2')
    expect(relativeLink).toBeInTheDocument()
    expect(relativeLink.getAttribute('rel')).toEqual(null)
  })
})
