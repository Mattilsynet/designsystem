import { render } from '@testing-library/svelte'
import Pagination from './Pagination.svelte'
import { vi } from 'vitest'

describe('Pagination', () => {
  const pages = [
    { url: '1' },
    { url: '2' },
    { url: '3' },
    { url: '4' },
    { url: '5' },
    { url: '6' },
    { url: '7' }
  ]

  const moreThan7Pages = [
    { url: '1' },
    { url: '2' },
    { url: '3' },
    { url: '4' },
    { url: '5' },
    { url: '6' },
    { url: '7' },
    { url: '8' },
    { url: '9' }
  ]

  const componentOptions = {
    nextText: 'Neste',
    previousText: 'Forige',
    pages: pages,
    currentPageIndex: 0
  }

  function defindeWindowMatch(matches: boolean) {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: vi.fn().mockImplementation(query => ({
        matches,
        media: query,
        onchange: null,
        addListener: vi.fn(), // deprecated
        removeListener: vi.fn(), // deprecated
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn()
      }))
    })
  }
  const isMobile = true

  test('Renders with defaults - first page - desktop', () => {
    defindeWindowMatch(!isMobile)
    const { getByText } = render(Pagination, componentOptions)
    const current = getByText('1')
    expect(current).toBeInTheDocument()
    expect(current.getAttribute('aria-current')).toEqual('page')
    expect(getByText('2')).toBeInTheDocument()
    expect(getByText('3')).toBeInTheDocument()
    expect(getByText('4')).toBeInTheDocument()
    expect(getByText('5')).toBeInTheDocument()
    expect(getByText('6')).toBeInTheDocument()
    expect(getByText('7')).toBeInTheDocument()
    expect(getByText('Neste')).toBeInTheDocument()
    expect(getByText('Forige').classList.contains('inclusively-hidden--fit-content')).toEqual(true)
  })

  test('Renders with defaults - first page - more than 7 pages - desktop', () => {
    defindeWindowMatch(!isMobile)
    const { getByText, queryByText } = render(Pagination, {
      ...componentOptions,
      pages: moreThan7Pages
    })
    const current = getByText('1')
    expect(current).toBeInTheDocument()
    expect(current.getAttribute('aria-current')).toEqual('page')
    expect(getByText('2')).toBeInTheDocument()
    expect(getByText('3')).toBeInTheDocument()
    expect(getByText('4')).toBeInTheDocument()
    expect(getByText('5')).toBeInTheDocument()
    expect(queryByText('6')).not.toBeInTheDocument()
    expect(queryByText('7')).not.toBeInTheDocument()
    expect(queryByText('8')).not.toBeInTheDocument()
    expect(getByText('9')).toBeInTheDocument()
    expect(getByText('Neste')).toBeInTheDocument()
    expect(getByText('Forige').classList.contains('inclusively-hidden--fit-content')).toEqual(true)
  })

  test('Renders with defaults - first page - mobile', () => {
    defindeWindowMatch(isMobile)
    const { getByText, queryByText } = render(Pagination, componentOptions)
    const current = getByText('1')
    expect(current).toBeInTheDocument()
    expect(current.getAttribute('aria-current')).toEqual('page')
    // expect(getByText('2')).toBeInTheDocument()
    // expect(getByText('3')).toBeInTheDocument()
    expect(queryByText('2')).not.toBeInTheDocument()
    expect(queryByText('3')).not.toBeInTheDocument()
    expect(queryByText('4')).not.toBeInTheDocument()
    expect(queryByText('5')).not.toBeInTheDocument()
    expect(queryByText('6')).not.toBeInTheDocument()
    expect(getByText('7')).toBeInTheDocument()
    expect(getByText('Neste')).toBeInTheDocument()
    expect(getByText('Forige').classList.contains('inclusively-hidden--fit-content')).toEqual(true)
  })

  test('Renders page 2 - desktop', () => {
    defindeWindowMatch(!isMobile)
    const { getByText } = render(Pagination, {
      ...componentOptions,
      currentPageIndex: 1
    })
    expect(getByText('1')).toBeInTheDocument()
    const current = getByText('2')
    expect(current).toBeInTheDocument()
    expect(current.getAttribute('aria-current')).toEqual('page')
    expect(getByText('3')).toBeInTheDocument()
    expect(getByText('4')).toBeInTheDocument()
    expect(getByText('5')).toBeInTheDocument()
    expect(getByText('6')).toBeInTheDocument()
    expect(getByText('7')).toBeInTheDocument()
    expect(getByText('Forige')).toBeInTheDocument()
    expect(getByText('Neste')).toBeInTheDocument()
  })
  test('Renders page 2 - mobile', () => {
    defindeWindowMatch(isMobile)
    const { getByText, queryByText } = render(Pagination, {
      ...componentOptions,
      currentPageIndex: 1
    })
    expect(getByText('1')).toBeInTheDocument()
    const current = getByText('2')
    expect(current).toBeInTheDocument()
    expect(current.getAttribute('aria-current')).toEqual('page')
    expect(queryByText('3')).not.toBeInTheDocument()
    expect(queryByText('4')).not.toBeInTheDocument()
    expect(queryByText('5')).not.toBeInTheDocument()
    expect(queryByText('6')).not.toBeInTheDocument()
    expect(getByText('7')).toBeInTheDocument()
    expect(getByText('Forige')).toBeInTheDocument()
    expect(getByText('Neste')).toBeInTheDocument()
  })

  test('Renders page 3 - mobile', () => {
    defindeWindowMatch(isMobile)
    const { getByText, queryByText } = render(Pagination, {
      ...componentOptions,
      currentPageIndex: 2
    })
    expect(getByText('1')).toBeInTheDocument()
    expect(queryByText('2')).not.toBeInTheDocument()
    const current = getByText('3')
    expect(current).toBeInTheDocument()
    expect(current.getAttribute('aria-current')).toEqual('page')
    expect(queryByText('4')).not.toBeInTheDocument()
    expect(queryByText('5')).not.toBeInTheDocument()
    expect(queryByText('6')).not.toBeInTheDocument()
    expect(getByText('7')).toBeInTheDocument()
    expect(getByText('Forige')).toBeInTheDocument()
    expect(getByText('Neste')).toBeInTheDocument()
  })

  test('Renders from second last page - desktop', () => {
    defindeWindowMatch(!isMobile)
    const { getByText } = render(Pagination, {
      ...componentOptions,
      currentPageIndex: 5
    })
    expect(getByText('1')).toBeInTheDocument()
    expect(getByText('2')).toBeInTheDocument()
    expect(getByText('3')).toBeInTheDocument()
    expect(getByText('4')).toBeInTheDocument()
    expect(getByText('5')).toBeInTheDocument()
    const current = getByText('6')
    expect(current).toBeInTheDocument()
    expect(current.getAttribute('aria-current')).toEqual('page')
    expect(getByText('7')).toBeInTheDocument()
    expect(getByText('Forige')).toBeInTheDocument()
    expect(getByText('Neste')).toBeInTheDocument()
  })

  test('Renders from second last page - mobile', () => {
    defindeWindowMatch(isMobile)
    const { getByText, queryByText } = render(Pagination, {
      ...componentOptions,
      currentPageIndex: 5
    })
    expect(getByText('1')).toBeInTheDocument()
    expect(queryByText('2')).not.toBeInTheDocument()
    expect(queryByText('3')).not.toBeInTheDocument()
    expect(queryByText('4')).not.toBeInTheDocument()
    expect(queryByText('5')).not.toBeInTheDocument()
    const current = getByText('6')
    expect(current).toBeInTheDocument()
    expect(current.getAttribute('aria-current')).toEqual('page')
    expect(getByText('7')).toBeInTheDocument()
    expect(getByText('Forige')).toBeInTheDocument()
    expect(getByText('Neste')).toBeInTheDocument()
  })

  test('Renders from last page - desktop', () => {
    defindeWindowMatch(!isMobile)
    const { getByText } = render(Pagination, {
      ...componentOptions,
      currentPageIndex: 6
    })
    expect(getByText('1')).toBeInTheDocument()
    expect(getByText('2')).toBeInTheDocument()
    expect(getByText('3')).toBeInTheDocument()
    expect(getByText('4')).toBeInTheDocument()
    expect(getByText('5')).toBeInTheDocument()
    expect(getByText('6')).toBeInTheDocument()
    const current = getByText('7')
    expect(current).toBeInTheDocument()
    expect(current.getAttribute('aria-current')).toEqual('page')
    expect(getByText('Forige')).toBeInTheDocument()
    expect(getByText('Neste').classList.contains('inclusively-hidden--fit-content')).toEqual(true)
  })

  test('Renders from last page - more than 7 - desktop', () => {
    defindeWindowMatch(!isMobile)
    const { getByText, queryByText } = render(Pagination, {
      ...componentOptions,
      pages: moreThan7Pages,
      currentPageIndex: 8
    })
    expect(getByText('1')).toBeInTheDocument()
    expect(queryByText('2')).not.toBeInTheDocument()
    expect(queryByText('3')).not.toBeInTheDocument()
    expect(queryByText('4')).not.toBeInTheDocument()
    expect(getByText('5')).toBeInTheDocument()
    expect(getByText('6')).toBeInTheDocument()
    expect(getByText('7')).toBeInTheDocument()
    expect(getByText('8')).toBeInTheDocument()
    const current = getByText('9')
    expect(current).toBeInTheDocument()
    expect(current.getAttribute('aria-current')).toEqual('page')
    expect(getByText('Forige')).toBeInTheDocument()
    expect(getByText('Neste').classList.contains('inclusively-hidden--fit-content')).toEqual(true)
  })
  test('Renders from last page - mobile', () => {
    defindeWindowMatch(isMobile)
    const { getByText, queryByText } = render(Pagination, {
      ...componentOptions,
      currentPageIndex: 6
    })
    expect(getByText('1')).toBeInTheDocument()
    expect(queryByText('2')).not.toBeInTheDocument()
    expect(queryByText('3')).not.toBeInTheDocument()
    expect(queryByText('4')).not.toBeInTheDocument()
    expect(queryByText('5')).not.toBeInTheDocument()
    expect(queryByText('6')).not.toBeInTheDocument()
    const current = getByText('7')
    expect(current).toBeInTheDocument()
    expect(current.getAttribute('aria-current')).toEqual('page')
    expect(getByText('Forige')).toBeInTheDocument()
    expect(getByText('Neste').classList.contains('inclusively-hidden--fit-content')).toEqual(true)
  })
})
