/**
 * @jest-environment jsdom
 */

import {render} from '@testing-library/svelte'
import Disclosure from './Disclosure.svelte'

describe('Disclosure', () => {
  const componentOptions = {
    title: 'Varsle om piggtrådgjerder'
  }

  test('Renders', () => {
    const {getByText} = render(Disclosure, {props: componentOptions})
    const byText = getByText('Varsle om piggtrådgjerder')
    expect(byText).toBeInTheDocument()
    expect(byText.getAttribute('aria-expanded')).toEqual('false')
    const disclosure = document.querySelector('.disclosure-bordered')
    expect(disclosure).toBeInTheDocument()
  })

  test('Renders - links', () => {
    render(Disclosure, {props: {...componentOptions, theme: 'links'}})
    const disclosure = document.querySelector('.disclosure-links')
    expect(disclosure).toBeInTheDocument()
  })

  test('Renders - no-border', () => {
    render(Disclosure, {
      props: {...componentOptions, theme: 'no-border', class: 'background-mt-white'}
    })
    const disclosure = document.querySelector('.disclosure-no-border')
    expect(disclosure).toBeInTheDocument()
    const white = document.querySelector('.background-mt-white')
    expect(white).toBeInTheDocument()
  })

  test('Renders - start open', () => {
    const {getAllByText} = render(Disclosure, {props: {...componentOptions, startOpen: true}})
    const byText = getAllByText('Varsle om piggtrådgjerder')
    expect(byText.length > 0).toEqual(true)
    const btn = byText.find(el => {
      return el.tagName === 'BUTTON'
    })
    expect(btn.getAttribute('aria-expanded')).toEqual('true')
  })
})
