/**
 * @jest-environment jsdom
 */

import {render} from '@testing-library/svelte'
import Link from './Link.svelte'

describe('Link', () => {
  const componentOptions = {
    linkText: 'This is the link text',
    href: 'https://www.mattilsynet.no'
  }
  test('Renders', () => {
    const {getByText} = render(Link, componentOptions)
    const link = getByText('This is the link text')
    expect(link).toBeInTheDocument()
    expect(link.getAttribute('href')).toEqual('https://www.mattilsynet.no')
  })

  test('Renders pdf link', () => {
    const {getByText} = render(Link, {
      ...componentOptions,
      class: 'document',
      fileName: 'thispdf.pdf'
    })
    const link = getByText(/This is the link text/i)
    expect(link).toBeInTheDocument()
    const linkPDF = getByText(/(PDF)/i)
    expect(linkPDF).toBeInTheDocument()
    expect(link.getAttribute('href')).toEqual('https://www.mattilsynet.no')
    expect(link.classList).toContain('document')
  })
})
