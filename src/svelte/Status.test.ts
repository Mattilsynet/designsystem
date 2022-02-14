/**
 * @jest-environment jsdom
 */

import {render} from '@testing-library/svelte'
import Status from './Status.svelte'

describe('Status', () => {
  const componentOptions = {
    text: `<p>Dette er det Mattilsynet vil informere om</p>`,
    actionsTakenByMattilsynet: `<p>Dette er det Mattilsynet gjør med saken</p>`,
    statusType: 'important',
    linkUrl: 'https://www.mattilsynet.no',
    linkText: 'Link text',
    linkIsExternal: true,
    updatedDate: '2021-06-24T11:40:02.889Z',
    publishedText: 'Updated'
  }

  test('Renders', () => {
    const {getByText, getByTestId} = render(Status, componentOptions)
    expect(getByText('Dette er det Mattilsynet vil informere om')).toBeInTheDocument()
    expect(getByText('Dette er det Mattilsynet gjør med saken')).toBeInTheDocument()
    expect(getByText('Updated')).toBeInTheDocument()
    expect(getByText('24.06.2021')).toBeInTheDocument()
    const link = getByText('Link text')
    expect(link).toBeInTheDocument()
    expect(link.getAttribute('rel')).toEqual('external')
    const statusType = getByTestId('status-type')
    expect(statusType).toBeInTheDocument()
    expect(statusType.classList[0]).toEqual('important')
    expect(getByTestId('published-date')).toBeInTheDocument()
  })

  test('Renders message only', () => {
    const {getByText, getByTestId, queryByText, queryByTestId} = render(Status, {
      ...componentOptions,
      statusType: 'none',
      linkUrl: null,
      linkText: null,
      linkIsExternal: false
    })
    expect(getByText('Dette er det Mattilsynet vil informere om')).toBeInTheDocument()
    expect(getByText('Dette er det Mattilsynet gjør med saken')).toBeInTheDocument()
    const link = queryByText('Link text')
    expect(link).not.toBeInTheDocument()
    const statusType = getByTestId('status-type')
    expect(statusType).toBeInTheDocument()
    expect(statusType.classList[0]).toEqual('none')
    expect(queryByTestId('published-date')).not.toBeInTheDocument()
  })

  test('Renders without props', () => {
    render(Status, {})
  })
})
