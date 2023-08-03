import { render } from '@testing-library/svelte'
import ChapterMenu from './ChapterMenu.svelte'

describe('Chapter menu', () => {
  const chapters = [
    { url: '1', heading: 'Intro' },
    { url: '2', heading: 'Chapter 1' },
    { url: '3', heading: 'Chapter 2' }
  ]
  test('Renders with defaults', () => {
    const componentOptions = {
      chapters: chapters,
      currentChapterNumber: 0,
      startIndex: 0,
      menuTitle: 'Content',
      showChapterNumbers: false
    }
    const { getByText } = render(ChapterMenu, componentOptions)
    expect(getByText('Content')).toBeInTheDocument()
    expect(getByText('Intro')).toBeInTheDocument()
    expect(getByText('Chapter 1')).toBeInTheDocument()
    expect(getByText('Chapter 1')).toBeInTheDocument()
  })

  test('Renders with numbers', () => {
    const componentOptions = {
      chapters: chapters,
      currentChapterNumber: 0,
      startIndex: 0,
      menuTitle: 'Content',
      showChapterNumbers: true
    }
    const { getByText } = render(ChapterMenu, componentOptions)
    expect(getByText('Content')).toBeInTheDocument()
    expect(getByText('Intro')).toBeInTheDocument()
    expect(getByText('1. Chapter 1')).toBeInTheDocument()
    expect(getByText('2. Chapter 2')).toBeInTheDocument()
  })

  test('Renders with numbers, start at 1', () => {
    const componentOptions = {
      chapters: chapters,
      currentChapterNumber: 0,
      startIndex: 1,
      menuTitle: 'Content',
      showChapterNumbers: true
    }
    const { getByText } = render(ChapterMenu, componentOptions)
    expect(getByText('Content')).toBeInTheDocument()
    expect(getByText('1. Intro')).toBeInTheDocument()
    expect(getByText('2. Chapter 1')).toBeInTheDocument()
    expect(getByText('3. Chapter 2')).toBeInTheDocument()
  })
})
