/**
 * @jest-environment jsdom
 */

import {getByTestId, render} from '@testing-library/svelte'
import CardArticle, {headerTag} from './CardArticle.svelte'

describe('Card Article', () => {
  const componentOptions = {
    headingId: 'testId',
    title: 'Varsle om piggtrådgjerder',
    intro: '',
    text: `<p>Du bør varsle Mattilsynet hvis du oppdager</p>
           <ul>
             <li>at noen setter opp nye piggtrådgjerder</li>
             <li>eldre piggtrådgjerder som utgjør en risiko for at dyr blir skadet</li>
           </ul>`,
    formLinkUrl: 'http://',
    formLinkText: 'Lenke til skjema',
    disableCss: false,
    headerTag: ''
  }

  test('Renders', () => {
    const {getByText} = render(CardArticle, {props: componentOptions})
    expect(getByText('Varsle om piggtrådgjerder')).toBeInTheDocument()
    const headerElement = getByText('Varsle om piggtrådgjerder')
    expect(headerElement.tagName).toEqual('H3')
  })
  test('Renders with h2 heading', () => {
    componentOptions.headerTag = 'h2'
    const {getByText} = render(CardArticle, {props: componentOptions})
    expect(getByText('Varsle om piggtrådgjerder')).toBeInTheDocument()
    const headerElement = getByText('Varsle om piggtrådgjerder')
    expect(headerElement.tagName).toEqual('H2')
  })
})
