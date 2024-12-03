import { fireEvent, render } from '@testing-library/svelte'
import DisclosureMock from './Disclosure.test.svelte'

describe('Disclosure', () => {
  const componentOptions = {
    title: 'Varsle om piggtrådgjerder',
    loadJs: true
  }

  test('Renders', () => {
    const { getByText, queryByText } = render(DisclosureMock, { props: componentOptions })
    const byText = getByText('Varsle om piggtrådgjerder')
    expect(byText.parentElement.getAttribute('aria-expanded')).toEqual('false')
    const disclosure = document.querySelector('.disclosure-bordered')
    expect(disclosure).toBeInTheDocument()
    const panel = queryByText('This is the disclosure panel text')
    expect(panel).not.toBeInTheDocument()
  })

  test('Renders - links', () => {
    render(DisclosureMock, { props: { ...componentOptions, theme: 'links' } })
    const disclosure = document.querySelector('.disclosure-links')
    expect(disclosure).toBeInTheDocument()
  })

  test('Renders - no-border', () => {
    render(DisclosureMock, {
      props: { ...componentOptions, theme: 'no-border', class: 'background-mt-white' }
    })
    const disclosure = document.querySelector('.disclosure-no-border')
    expect(disclosure).toBeInTheDocument()
    const white = document.querySelector('.background-mt-white')
    expect(white).toBeInTheDocument()
  })

  test('Renders - no.js', () => {
    const { getByText } = render(DisclosureMock, {
      props: { ...componentOptions, loadJs: false }
    })
    const byText = getByText('Varsle om piggtrådgjerder')
    expect(byText).toBeInTheDocument()
    const panel = getByText('This is the disclosure panel text')
    expect(panel).toBeInTheDocument()
  })

  test('Renders - start open', () => {
    const { getAllByText, getByText } = render(DisclosureMock, {
      props: { ...componentOptions, startOpen: true }
    })
    const byText = getAllByText('Varsle om piggtrådgjerder')
    expect(byText.length > 0).toEqual(true)
    const btn = byText.find(el => {
      return el.parentElement.tagName === 'BUTTON'
    })
    expect(btn.parentElement.getAttribute('aria-expanded')).toEqual('true')
    const panel = getByText('This is the disclosure panel text')
    expect(panel).toBeInTheDocument()
  })

  test('Render correct heading level - h2', async () => {
    const { getAllByText, queryByText, getByText } = render(DisclosureMock, {
      props: { ...componentOptions, headerTag: 'h2' }
    })
    const heading = getAllByText('Varsle om piggtrådgjerder')
    const panel = queryByText('This is the disclosure panel text')
    expect(panel).not.toBeInTheDocument()

    await fireEvent.click(heading[0])

    const all = getAllByText('Varsle om piggtrådgjerder')
    expect(all[1].tagName).toEqual('H2')
    const panelOpen = getByText('This is the disclosure panel text')
    expect(panelOpen).toBeInTheDocument()
  })

  test('Render correct heading level - h3', async () => {
    const { getAllByText } = render(DisclosureMock, {
      props: { ...componentOptions, headerTag: 'h3' }
    })
    const heading = getAllByText('Varsle om piggtrådgjerder')
    await fireEvent.click(heading[0])

    const all = getAllByText('Varsle om piggtrådgjerder')
    expect(all[1].tagName).toEqual('H3')
  })

  test('Render correct heading level - h4', async () => {
    const { getAllByText } = render(DisclosureMock, {
      props: { ...componentOptions, headerTag: 'h4' }
    })
    const heading = getAllByText('Varsle om piggtrådgjerder')
    await fireEvent.click(heading[0])

    const all = getAllByText('Varsle om piggtrådgjerder')
    expect(all[1].tagName).toEqual('H4')
  })
})
