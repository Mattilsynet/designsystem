import '@testing-library/jest-dom'
import { vi } from 'vitest'

const DataTransfer = vi.fn(() => {
  const items = vi.fn()
  items.add = vi.fn()
  const files = vi.fn()
  return {
    items,
    files
  }
})

vi.stubGlobal('DataTransfer', DataTransfer)
const ResizeObserverMock = vi.fn(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn()
}))

vi.stubGlobal('ResizeObserver', ResizeObserverMock)
