/**
 * @jest-environment jsdom
 */

import {getByTestId, render} from '@testing-library/svelte'
import CardArticle from './CardArticle.svelte'

describe('Card Article', () => {
  test('Renders', () => {
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
      disableCss: false
    }

    const {getByText} = render(CardArticle, {props: componentOptions})
    expect(getByText('Varsle om piggtrådgjerder')).toBeInTheDocument()
    expect(getByText('Varsle om piggtrådgjerder')).toMatchSnapshot(
      '<h3 class="title" id="testId">Varsle om piggtrådgjerder</h3>'
    )
  })
  test('Renders with h2 heading', () => {
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
      headerTag: 'h2'
    }

    const {getByText} = render(CardArticle, {props: componentOptions})
    expect(getByText('Varsle om piggtrådgjerder')).toBeInTheDocument()
    expect(getByText('Varsle om piggtrådgjerder')).toMatchSnapshot(
      '<h2 class="title" id="testId">Varsle om piggtrådgjerder</h2>'
    )
  })
})
