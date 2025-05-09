import { render, screen, fireEvent, waitFor } from '@testing-library/svelte'
import ChapterMenuSubChapter from './ChapterMenuSubChapter.svelte'
import type { Chapter } from '$lib/ts'

describe('Chapter sub menu', () => {
  const subChapters: Chapter[] = [
    { heading: 'Subchapter 1', url: '1', index: 1, subChapters: [] },
    { heading: 'Subchapter 2', url: '2', index: 2, subChapters: [] }
  ]
  const componentOptions = {
    showChapterNumbers: false,
    parentIndex: 1,
    subChapters: subChapters,
    ariaLabel: 'view sub chapters',
    loadJs: true
  }

  test('Toggle visibility of subchapter list', async () => {
    // Arrange
    render(ChapterMenuSubChapter, componentOptions)

    // Assert: default closed state with no subchapters showing
    const toggleButton = screen.getByRole('button', { name: 'view sub chapters' })
    expect(toggleButton).toHaveAttribute('aria-expanded', 'false')
    await waitFor(() => {
      expect(screen.queryByRole('list')).not.toBeInTheDocument()
    })

    // Act: click to open subchapters
    await fireEvent.click(toggleButton)

    // Assert: open state with subchapters showing
    expect(toggleButton).toHaveAttribute('aria-expanded', 'true')
    await waitFor(() => {
      expect(screen.getByRole('list')).toBeInTheDocument()
    })
  })

  test('Render links without chapter numbers', async () => {
    // Arrange
    render(ChapterMenuSubChapter, componentOptions)

    // Act: click to open subchapters
    await fireEvent.click(screen.getByRole('button', { name: 'view sub chapters' }))

    // Assert: list of subchapters with all correct links visible
    await waitFor(() => {
      expect(screen.getByRole('list')).toBeInTheDocument()
    })
    expect(screen.getAllByRole('listitem').length).toBe(2)
    const links = screen.getAllByRole('link')
    expect(links.length).toBe(2)
    expect(links[0]).toHaveAccessibleName('Subchapter 1')
    expect(links[1]).toHaveAccessibleName('Subchapter 2')
  })

  test('Render links with chapter numbers', async () => {
    // Arrange
    render(ChapterMenuSubChapter, { ...componentOptions, showChapterNumbers: true })

    // Act: click to open subchapters
    await fireEvent.click(screen.getByRole('button', { name: 'view sub chapters' }))

    // Assert: list of subchapters with all correct numbered links visible
    await waitFor(() => {
      expect(screen.getByRole('list')).toBeInTheDocument()
    })
    expect(screen.getAllByRole('listitem').length).toBe(2)
    const links = screen.getAllByRole('link')
    expect(links.length).toBe(2)
    expect(links[0]).toHaveAccessibleName('1.1. Subchapter 1')
    expect(links[1]).toHaveAccessibleName('1.2. Subchapter 2')
  })

  test('Render component without js', () => {
    // Arrange
    render(ChapterMenuSubChapter, { ...componentOptions, loadJs: false })

    // Assert: no button, but all subchapters showing by default
    expect(screen.queryByRole('button')).not.toBeInTheDocument()
    expect(screen.getByRole('list')).toBeInTheDocument()
    expect(screen.getAllByRole('listitem').length).toBe(2)
  })
})
