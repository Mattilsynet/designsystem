/**
 * @jest-environment jsdom
 */

import {render} from '@testing-library/svelte'
import Published from './Published.svelte'

describe('Publised', () => {
  test('Renders published when published and professionallyUpdated is same', () => {
    const componentOptions = {
      publishFrom: '2022-02-01T13:10:52.905451Z',
      professionallyUpdated: '2022-02-01T13:10:52.905451Z'
    }
    const {getByText, queryByText} = render(Published, componentOptions)
    expect(getByText('Publisert')).toBeInTheDocument()
    expect(queryByText('Faglig oppdatert')).not.toBeInTheDocument()
    expect(getByText('01.02.2022')).toBeInTheDocument()
  })

  test('Renders profesionally updated when professionallyUpdated after published', () => {
    const componentOptions = {
      publishFrom: '2021-06-24T11:40:02.889Z',
      professionallyUpdated: '2021-07-24T11:32:22Z'
    }
    const {getByText, queryByText} = render(Published, componentOptions)
    expect(queryByText('Publisert')).not.toBeInTheDocument()
    expect(getByText('Faglig oppdatert')).toBeInTheDocument()
    expect(getByText('24.07.2021')).toBeInTheDocument()
  })

  test('Renders published when only published is provided', () => {
    const componentOptions = {
      publishFrom: '2021-06-24T11:40:02.889Z'
    }
    const {getByText, queryByText} = render(Published, componentOptions)
    expect(getByText('Publisert')).toBeInTheDocument()
    expect(queryByText('Faglig oppdatert')).not.toBeInTheDocument()
    expect(getByText('24.06.2021')).toBeInTheDocument()
  })

  test('Renders professionally updated when only published is provided', () => {
    const componentOptions = {
      professionallyUpdated: '2021-06-24T11:40:02.889Z'
    }
    const {getByText, queryByText} = render(Published, componentOptions)
    expect(queryByText('Publisert')).not.toBeInTheDocument()
    expect(getByText('Faglig oppdatert')).toBeInTheDocument()
    expect(getByText('24.06.2021')).toBeInTheDocument()
  })

  test('Renders without props', () => {
    const {queryByText} = render(Published, {})
    expect(queryByText('Publisert')).not.toBeInTheDocument()
    expect(queryByText('Faglig oppdatert')).not.toBeInTheDocument()
  })
})
