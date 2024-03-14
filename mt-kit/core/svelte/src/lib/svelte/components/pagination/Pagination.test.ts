import { render } from '@testing-library/svelte'
import Pagination from './Pagination.svelte'
import { vi } from 'vitest'

describe('Pagination', () => {
  const pages = [
    { url: '1', heading: 'Intro', index: 0 },
    { url: '2', heading: 'Chapter 1', index: 1 },
    { url: '3', heading: 'Chapter 2', index: 2 },
    { url: '4', heading: 'Chapter 3', index: 3 },
    { url: '5', heading: 'Chapter 4', index: 4 },
    { url: '6', heading: 'Chapter 5', index: 5 },
    { url: '7', heading: 'Chapter 6', index: 6 }
  ]

  const componentOptions = {
    nextText: 'Neste',
    previousText: 'Forige',
    pages: pages,
    currentPageIndex: 0,
    startIndex: 0
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
  const isDesktop = true

  test('Renders with defaults - first page - desktop', () => {
    defindeWindowMatch(isDesktop)
    const { getByText, queryByText } = render(Pagination, componentOptions)
    expect(getByText('1')).toBeInTheDocument()
    expect(getByText('2')).toBeInTheDocument()
    expect(getByText('3')).toBeInTheDocument()
    expect(getByText('4')).toBeInTheDocument()
    expect(getByText('5')).toBeInTheDocument()
    expect(queryByText('6')).not.toBeInTheDocument()
    expect(getByText('7')).toBeInTheDocument()
    expect(getByText('Neste')).toBeInTheDocument()
    expect(getByText('Forige').classList.contains('inclusively-hidden--fit-content')).toEqual(true)
  })

  test('Renders with defaults - first page - mobile', () => {
    defindeWindowMatch(!isDesktop)
    const { getByText, queryByText } = render(Pagination, componentOptions)
    expect(getByText('1')).toBeInTheDocument()
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
    defindeWindowMatch(isDesktop)
    const { getByText, queryByText } = render(Pagination, {
      ...componentOptions,
      currentChapterIndex: 1
    })
    expect(getByText('1')).toBeInTheDocument()
    expect(getByText('2')).toBeInTheDocument()
    expect(getByText('3')).toBeInTheDocument()
    expect(getByText('4')).toBeInTheDocument()
    expect(getByText('5')).toBeInTheDocument()
    expect(queryByText('6')).not.toBeInTheDocument()
    expect(getByText('7')).toBeInTheDocument()
    expect(getByText('Forige')).toBeInTheDocument()
    expect(getByText('Neste')).toBeInTheDocument()
  })
  test('Renders page 2 - mobile', () => {
    defindeWindowMatch(!isDesktop)
    const { getByText, queryByText } = render(Pagination, {
      ...componentOptions,
      currentChapterIndex: 1
    })
    expect(getByText('1')).toBeInTheDocument()
    expect(getByText('2')).toBeInTheDocument()
    expect(queryByText('3')).not.toBeInTheDocument()
    expect(queryByText('4')).not.toBeInTheDocument()
    expect(queryByText('5')).not.toBeInTheDocument()
    expect(queryByText('6')).not.toBeInTheDocument()
    expect(getByText('7')).toBeInTheDocument()
    expect(getByText('Forige')).toBeInTheDocument()
    expect(getByText('Neste')).toBeInTheDocument()
  })

  test('Renders page 3 - mobile', () => {
    defindeWindowMatch(!isDesktop)
    const { getByText, queryByText } = render(Pagination, {
      ...componentOptions,
      currentChapterIndex: 2
    })
    expect(getByText('1')).toBeInTheDocument()
    expect(queryByText('2')).not.toBeInTheDocument()
    expect(getByText('3')).toBeInTheDocument()
    expect(queryByText('4')).not.toBeInTheDocument()
    expect(queryByText('5')).not.toBeInTheDocument()
    expect(queryByText('6')).not.toBeInTheDocument()
    expect(getByText('7')).toBeInTheDocument()
    expect(getByText('Forige')).toBeInTheDocument()
    expect(getByText('Neste')).toBeInTheDocument()
  })

  test('Renders from second last page - desktop', () => {
    defindeWindowMatch(isDesktop)
    const { getByText, queryByText } = render(Pagination, {
      ...componentOptions,
      currentChapterIndex: 5
    })
    expect(getByText('1')).toBeInTheDocument()
    expect(queryByText('2')).not.toBeInTheDocument()
    expect(getByText('3')).toBeInTheDocument()
    expect(getByText('4')).toBeInTheDocument()
    expect(getByText('5')).toBeInTheDocument()
    expect(getByText('6')).toBeInTheDocument()
    expect(getByText('7')).toBeInTheDocument()
    expect(getByText('Forige')).toBeInTheDocument()
    expect(getByText('Neste')).toBeInTheDocument()
  })

  test('Renders from second last page - mobile', () => {
    defindeWindowMatch(!isDesktop)
    const { getByText, queryByText } = render(Pagination, {
      ...componentOptions,
      currentChapterIndex: 5
    })
    expect(getByText('1')).toBeInTheDocument()
    expect(queryByText('2')).not.toBeInTheDocument()
    expect(queryByText('3')).not.toBeInTheDocument()
    expect(queryByText('4')).not.toBeInTheDocument()
    expect(queryByText('5')).not.toBeInTheDocument()
    expect(getByText('6')).toBeInTheDocument()
    expect(getByText('7')).toBeInTheDocument()
    expect(getByText('Forige')).toBeInTheDocument()
    expect(getByText('Neste')).toBeInTheDocument()
  })

  test('Renders from last page - desktop', () => {
    defindeWindowMatch(isDesktop)
    const { getByText, queryByText } = render(Pagination, {
      ...componentOptions,
      currentChapterIndex: 6
    })
    expect(getByText('1')).toBeInTheDocument()
    expect(queryByText('2')).not.toBeInTheDocument()
    expect(getByText('3')).toBeInTheDocument()
    expect(getByText('4')).toBeInTheDocument()
    expect(getByText('5')).toBeInTheDocument()
    expect(getByText('6')).toBeInTheDocument()
    expect(getByText('7')).toBeInTheDocument()
    expect(getByText('Forige')).toBeInTheDocument()
    expect(getByText('Neste').classList.contains('inclusively-hidden--fit-content')).toEqual(true)
  })
  test('Renders from last page - mobile', () => {
    defindeWindowMatch(!isDesktop)
    const { getByText, queryByText } = render(Pagination, {
      ...componentOptions,
      currentChapterIndex: 6
    })
    expect(getByText('1')).toBeInTheDocument()
    expect(queryByText('2')).not.toBeInTheDocument()
    expect(queryByText('3')).not.toBeInTheDocument()
    expect(queryByText('4')).not.toBeInTheDocument()
    expect(queryByText('5')).not.toBeInTheDocument()
    expect(queryByText('6')).not.toBeInTheDocument()
    expect(getByText('7')).toBeInTheDocument()
    expect(getByText('Forige')).toBeInTheDocument()
    expect(getByText('Neste').classList.contains('inclusively-hidden--fit-content')).toEqual(true)
  })
})
