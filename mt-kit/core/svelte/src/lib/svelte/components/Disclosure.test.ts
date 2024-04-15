import { fireEvent, render } from '@testing-library/svelte'
import Disclosure from './Disclosure.svelte'

describe('Disclosure', () => {
  const componentOptions = {
    title: 'Varsle om piggtrådgjerder'
  }

  test('Renders', () => {
    const { getAllByText } = render(Disclosure, { props: componentOptions })
    const byText = getAllByText('Varsle om piggtrådgjerder')
    expect(byText.length).toEqual(1)
    expect(byText[0].parentElement.getAttribute('aria-expanded')).toEqual('false')
    const disclosure = document.querySelector('.disclosure-bordered')
    expect(disclosure).toBeInTheDocument()
  })

  test('Renders - links', () => {
    render(Disclosure, { props: { ...componentOptions, theme: 'links' } })
    const disclosure = document.querySelector('.disclosure-links')
    expect(disclosure).toBeInTheDocument()
  })

  test('Renders - no-border', () => {
    render(Disclosure, {
      props: { ...componentOptions, theme: 'no-border', class: 'background-mt-white' }
    })
    const disclosure = document.querySelector('.disclosure-no-border')
    expect(disclosure).toBeInTheDocument()
    const white = document.querySelector('.background-mt-white')
    expect(white).toBeInTheDocument()
  })

  test('Renders - start open', () => {
    const { getAllByText } = render(Disclosure, { props: { ...componentOptions, startOpen: true } })
    const byText = getAllByText('Varsle om piggtrådgjerder')
    expect(byText.length > 0).toEqual(true)
    const btn = byText.find(el => {
      return el.parentElement.tagName === 'BUTTON'
    })
    expect(btn.parentElement.getAttribute('aria-expanded')).toEqual('true')
  })

  test('Render correct heading level - h2', async () => {
    const { getAllByText } = render(Disclosure, {
      props: { ...componentOptions, headerTag: 'h2' }
    })
    const heading = getAllByText('Varsle om piggtrådgjerder')
    await fireEvent.click(heading[0])

    const all = getAllByText('Varsle om piggtrådgjerder')
    expect(all[1].tagName).toEqual('H2')
  })

  test('Render correct heading level - h3', async () => {
    const { getAllByText } = render(Disclosure, {
      props: { ...componentOptions, headerTag: 'h3' }
    })
    const heading = getAllByText('Varsle om piggtrådgjerder')
    await fireEvent.click(heading[0])

    const all = getAllByText('Varsle om piggtrådgjerder')
    expect(all[1].tagName).toEqual('H3')
  })

  test('Render correct heading level - h4', async () => {
    const { getAllByText } = render(Disclosure, {
      props: { ...componentOptions, headerTag: 'h4' }
    })
    const heading = getAllByText('Varsle om piggtrådgjerder')
    await fireEvent.click(heading[0])

    const all = getAllByText('Varsle om piggtrådgjerder')
    expect(all[1].tagName).toEqual('H4')
  })
})
