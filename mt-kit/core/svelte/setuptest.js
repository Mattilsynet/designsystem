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

/**
 * Fix so svelte-transitions don´t get stuck in transition,
 * i.e. never completely hide element, when running tests
 * Ref: https://github.com/testing-library/svelte-testing-library/issues/206#issuecomment-1470158576
 */
vi.stubGlobal('requestAnimationFrame', fn => {
  return window.setTimeout(() => fn(Date.now()), 16)
})

vi.mock('svelte/transition', () => ({
  slide: vi.fn(),
  blur: vi.fn(),
  fade: vi.fn(),
  fly: vi.fn(),
  scale: vi.fn(),
  draw: vi.fn(),
  crossfade: vi.fn()
}))
