/**
 * @jest-environment jsdom
 */

import CardArticle from './CardArticle.svelte'
import { render } from '@testing-library/svelte'

describe('Card Article', () => {
  const componentOptions = {
    headingId: 'testId',
    iconClass: '',
    title: 'Varsle om piggtrådgjerder',
    intro: '',
    text: `<p>Du bør varsle Mattilsynet hvis du oppdager</p>
           <ul>
             <li>at noen setter opp nye piggtrådgjerder</li>
             <li>eldre piggtrådgjerder som utgjør en risiko for at dyr blir skadet</li>
           </ul>`,
    linkUrl: 'http://',
    linkText: 'Lenke til skjema',
    disableCss: false,
    headerTag: undefined,
    type: ''
  }

  test('Renders', () => {
    const { getByText } = render(CardArticle, { props: componentOptions })
    expect(getByText('Varsle om piggtrådgjerder')).toBeInTheDocument()
    const headerElement = getByText('Varsle om piggtrådgjerder')
    expect(headerElement.tagName).toEqual('H3')
  })
  test('Renders with h2 heading', () => {
    componentOptions.headerTag = 'h2'
    const { getByText } = render(CardArticle, { props: componentOptions })
    expect(getByText('Varsle om piggtrådgjerder')).toBeInTheDocument()
    const headerElement = getByText('Varsle om piggtrådgjerder')
    expect(headerElement.tagName).toEqual('H2')
  })
  test('Renders with h3 heading', () => {
    componentOptions.headerTag = 'h3'
    const { getByText } = render(CardArticle, { props: componentOptions })
    expect(getByText('Varsle om piggtrådgjerder')).toBeInTheDocument()
    const headerElement = getByText('Varsle om piggtrådgjerder')
    expect(headerElement.tagName).toEqual('H3')
  })
  test('Renders with h4 heading', () => {
    componentOptions.headerTag = 'h4'
    const { getByText } = render(CardArticle, { props: componentOptions })
    expect(getByText('Varsle om piggtrådgjerder')).toBeInTheDocument()
    const headerElement = getByText('Varsle om piggtrådgjerder')
    expect(headerElement.tagName).toEqual('H4')
  })

  test('Link - external link has rel="external"', () => {
    const { getByText } = render(CardArticle, { props: componentOptions })
    const link = getByText('Lenke til skjema')
    expect(link).toBeInTheDocument()
    expect(link.getAttribute('rel')).toEqual('external')
  })

  test('Link - relative link does not have rel="external"', () => {
    componentOptions.linkUrl = '/varsle'
    const { getByText } = render(CardArticle, { props: componentOptions })
    const link = getByText('Lenke til skjema')
    expect(link).toBeInTheDocument()
    expect(link.getAttribute('rel')).toEqual(null)
  })

  test('Link - button link type contains correct classes', () => {
    const { getByText } = render(CardArticle, { props: componentOptions })
    const link = getByText('Lenke til skjema')
    expect(link).toBeInTheDocument()
    expect(link.classList.contains('link--transport')).toBeTruthy()
  })

  test('Renders with icon class', () => {
    componentOptions.iconClass = 'info-icon'
    const { getByText } = render(CardArticle, { props: componentOptions })
    const title = getByText('Varsle om piggtrådgjerder')
    expect(title).toBeInTheDocument()
    expect(title.classList.contains('title')).toBeTruthy()
    expect(title.classList.contains('info-icon')).toBeTruthy()
  })

  test('Defaults to task-icon when task type', () => {
    componentOptions.iconClass = undefined
    componentOptions.type = 'task'
    const { getByText } = render(CardArticle, { props: componentOptions })
    const title = getByText('Varsle om piggtrådgjerder')
    expect(title).toBeInTheDocument()
    expect(title.classList.contains('task-icon')).toBeTruthy()
  })
})
