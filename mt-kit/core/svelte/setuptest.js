import '@testing-library/jest-dom'
import { vi } from 'vitest'

const DataTransfer = vi.fn(() => {
  // items: []
  const items = vi.fn()
  items.add = vi.fn()
  const files = vi.fn()
  return {
    items,
    files
  }
})

vi.stubGlobal('DataTransfer', DataTransfer)
