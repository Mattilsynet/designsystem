import { render } from '@testing-library/svelte'
import Pagination from './Pagination.svelte'
import { vi } from 'vitest'
import * as win from 'svelte/reactivity/window'

vi.mock('svelte/reactivity/window', () => {
  return { innerWidth: { current: vi.fn() } }
})

describe('Pagination', () => {
  const lessThan5 = [{ url: '1' }, { url: '2' }, { url: '3' }, { url: '4' }, { url: '5' }]
  const pages = [...lessThan5, { url: '6' }, { url: '7' }]
  const moreThan7Pages = [...pages, { url: '8' }, { url: '9' }]

  const componentOptions = {
    nextText: 'Neste',
    previousText: 'Forige',
    pages: pages,
    currentPageIndex: 0
  }

  test('Renders with defaults - first page - desktop', () => {
    Object.assign(win.innerWidth, { current: 1025 })
    const { getByText, getByLabelText } = render(Pagination, componentOptions)
    const current = getByText('1')
    expect(current).toBeInTheDocument()
    expect(current.getAttribute('aria-current')).toEqual('page')
    expect(getByText('2')).toBeInTheDocument()
    expect(getByText('3')).toBeInTheDocument()
    expect(getByText('4')).toBeInTheDocument()
    expect(getByText('5')).toBeInTheDocument()
    expect(getByText('6')).toBeInTheDocument()
    expect(getByText('7')).toBeInTheDocument()
    expect(getByLabelText('Neste')).toBeInTheDocument()
    expect(getByLabelText('Forige')).toHaveAttribute('aria-disabled', 'true')
  })

  test('Renders with defaults - first page - more than 7 pages - desktop', () => {
    Object.assign(win.innerWidth, { current: 1025 })
    const { getByText, queryByText, getByLabelText } = render(Pagination, {
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
    expect(getByLabelText('Neste')).toBeInTheDocument()
    expect(getByLabelText('Forige')).toHaveAttribute('aria-disabled', 'true')
  })

  test('Renders with defaults - first page - mobile', () => {
    Object.assign(win.innerWidth, { current: 1000 })
    const { getByText, queryByText, getByLabelText } = render(Pagination, componentOptions)
    const current = getByText('1')
    expect(current).toBeInTheDocument()
    expect(current.getAttribute('aria-current')).toEqual('page')
    expect(getByText('2')).toBeInTheDocument()
    expect(getByText('3')).toBeInTheDocument()
    expect(queryByText('4')).not.toBeInTheDocument()
    expect(queryByText('5')).not.toBeInTheDocument()
    expect(queryByText('6')).not.toBeInTheDocument()
    expect(getByText('7')).toBeInTheDocument()
    expect(getByLabelText('Neste')).toBeInTheDocument()
    expect(getByLabelText('Forige')).toHaveAttribute('aria-disabled', 'true')
  })
  test('Renders with defaults - first page - less than 5 - mobile', () => {
    Object.assign(win.innerWidth, { current: 1000 })
    const { getByText, getByLabelText } = render(Pagination, {
      ...componentOptions,
      pages: lessThan5
    })
    const current = getByText('1')
    expect(current).toBeInTheDocument()
    expect(current.getAttribute('aria-current')).toEqual('page')
    expect(getByText('2')).toBeInTheDocument()
    expect(getByText('3')).toBeInTheDocument()
    expect(getByText('4')).toBeInTheDocument()
    expect(getByText('5')).toBeInTheDocument()
    expect(getByLabelText('Neste')).toBeInTheDocument()
    expect(getByLabelText('Forige')).toHaveAttribute('aria-disabled', 'true')
  })

  test('Renders page 2 - desktop', () => {
    Object.assign(win.innerWidth, { current: 1025 })
    const { getByText, getByLabelText } = render(Pagination, {
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
    expect(getByLabelText('Forige')).toBeInTheDocument()
    expect(getByLabelText('Neste')).toBeInTheDocument()
  })
  test('Renders page 4 - more than 7 pages - desktop', () => {
    Object.assign(win.innerWidth, { current: 1025 })
    const { getByText, queryByText, getByLabelText } = render(Pagination, {
      ...componentOptions,
      pages: moreThan7Pages,
      currentPageIndex: 3
    })
    expect(getByText('1')).toBeInTheDocument()
    expect(getByText('2')).toBeInTheDocument()
    expect(getByText('3')).toBeInTheDocument()
    const current = getByText('4')
    expect(current).toBeInTheDocument()
    expect(current.getAttribute('aria-current')).toEqual('page')
    expect(getByText('5')).toBeInTheDocument()
    expect(queryByText('6')).not.toBeInTheDocument()
    expect(queryByText('7')).not.toBeInTheDocument()
    expect(queryByText('8')).not.toBeInTheDocument()
    expect(getByText('9')).toBeInTheDocument()
    expect(getByLabelText('Forige')).toBeInTheDocument()
    expect(getByLabelText('Neste')).toBeInTheDocument()
  })
  test('Renders page 2 - mobile', () => {
    Object.assign(win.innerWidth, { current: 1000 })
    const { getByText, queryByText, getByLabelText } = render(Pagination, {
      ...componentOptions,
      currentPageIndex: 1
    })
    expect(getByText('1')).toBeInTheDocument()
    const current = getByText('2')
    expect(current).toBeInTheDocument()
    expect(current.getAttribute('aria-current')).toEqual('page')
    expect(getByText('3')).toBeInTheDocument()
    expect(queryByText('4')).not.toBeInTheDocument()
    expect(queryByText('5')).not.toBeInTheDocument()
    expect(queryByText('6')).not.toBeInTheDocument()
    expect(getByText('7')).toBeInTheDocument()
    expect(getByLabelText('Forige')).toBeInTheDocument()
    expect(getByLabelText('Neste')).toBeInTheDocument()
  })

  test('Renders page 3 - mobile', () => {
    Object.assign(win.innerWidth, { current: 1000 })
    const { getByText, queryByText, getByLabelText } = render(Pagination, {
      ...componentOptions,
      currentPageIndex: 2
    })
    expect(getByText('1')).toBeInTheDocument()
    expect(getByText('2')).toBeInTheDocument()
    const current = getByText('3')
    expect(current).toBeInTheDocument()
    expect(current.getAttribute('aria-current')).toEqual('page')
    expect(queryByText('4')).not.toBeInTheDocument()
    expect(queryByText('5')).not.toBeInTheDocument()
    expect(queryByText('6')).not.toBeInTheDocument()
    expect(getByText('7')).toBeInTheDocument()
    expect(getByLabelText('Forige')).toBeInTheDocument()
    expect(getByLabelText('Neste')).toBeInTheDocument()
  })

  test('Renders from second last page - desktop', () => {
    Object.assign(win.innerWidth, { current: 1025 })
    const { getByText, getByLabelText } = render(Pagination, {
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
    expect(getByLabelText('Forige')).toBeInTheDocument()
    expect(getByLabelText('Neste')).toBeInTheDocument()
  })

  test('Renders from second last page - mobile', () => {
    Object.assign(win.innerWidth, { current: 1000 })
    const { getByText, queryByText, getByLabelText } = render(Pagination, {
      ...componentOptions,
      currentPageIndex: 5
    })
    expect(getByText('1')).toBeInTheDocument()
    expect(queryByText('2')).not.toBeInTheDocument()
    expect(queryByText('3')).not.toBeInTheDocument()
    expect(queryByText('4')).not.toBeInTheDocument()
    expect(getByText('5')).toBeInTheDocument()
    const current = getByText('6')
    expect(current).toBeInTheDocument()
    expect(current.getAttribute('aria-current')).toEqual('page')
    expect(getByText('7')).toBeInTheDocument()
    expect(getByLabelText('Forige')).toBeInTheDocument()
    expect(getByLabelText('Neste')).toBeInTheDocument()
  })

  test('Renders from last page - desktop', () => {
    Object.assign(win.innerWidth, { current: 1025 })
    const { getByText, getByLabelText } = render(Pagination, {
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
    expect(getByLabelText('Forige')).toBeInTheDocument()
    expect(getByLabelText('Neste')).toHaveAttribute('aria-disabled', 'true')
  })

  test('Renders from last page - more than 7 - desktop', () => {
    Object.assign(win.innerWidth, { current: 1025 })
    const { getByText, queryByText, getByLabelText } = render(Pagination, {
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
    expect(getByLabelText('Forige')).toBeInTheDocument()
    expect(getByLabelText('Neste')).toHaveAttribute('aria-disabled', 'true')
  })
  test('Renders from last page - mobile', () => {
    Object.assign(win.innerWidth, { current: 1000 })
    const { getByText, queryByText, getByLabelText } = render(Pagination, {
      ...componentOptions,
      currentPageIndex: 6
    })
    expect(getByText('1')).toBeInTheDocument()
    expect(queryByText('2')).not.toBeInTheDocument()
    expect(queryByText('3')).not.toBeInTheDocument()
    expect(queryByText('4')).not.toBeInTheDocument()
    expect(getByText('5')).toBeInTheDocument()
    expect(getByText('6')).toBeInTheDocument()
    const current = getByText('7')
    expect(current).toBeInTheDocument()
    expect(current.getAttribute('aria-current')).toEqual('page')
    expect(getByLabelText('Forige')).toBeInTheDocument()
    expect(getByLabelText('Neste')).toHaveAttribute('aria-disabled', 'true')
  })
  test('Renders from last page - less than 5 - mobile', () => {
    Object.assign(win.innerWidth, { current: 1000 })
    const { getByText, getByLabelText } = render(Pagination, {
      ...componentOptions,
      pages: lessThan5,
      currentPageIndex: 4
    })
    expect(getByText('1')).toBeInTheDocument()
    expect(getByText('2')).toBeInTheDocument()
    expect(getByText('3')).toBeInTheDocument()
    expect(getByText('4')).toBeInTheDocument()
    const current = getByText('5')
    expect(current).toBeInTheDocument()
    expect(current.getAttribute('aria-current')).toEqual('page')
    expect(getByLabelText('Forige')).toBeInTheDocument()
    expect(getByLabelText('Neste')).toHaveAttribute('aria-disabled', 'true')
  })
})
