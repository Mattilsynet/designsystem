import { render } from '@testing-library/svelte'
import ChapterNavigation from './ChapterNavigation.svelte'

describe('Chapter Navigation', () => {
  const chapters = [
    { url: '1', heading: 'Intro', index: 0 },
    { url: '2', heading: 'Chapter 1', index: 1 },
    { url: '3', heading: 'Chapter 2', index: 2 }
  ]

  const componentOptions = {
    showChapterNumbers: false,
    nextText: '',
    previousText: '',
    chapters: chapters,
    currentChapterIndex: 0,
    startIndex: 0
  }
  test('Renders with defaults - first page', () => {
    const { getByText, queryByText } = render(ChapterNavigation, componentOptions)
    expect(queryByText('Intro')).not.toBeInTheDocument()
    expect(getByText('Chapter 1')).toBeInTheDocument()
    expect(queryByText('Chapter 2')).not.toBeInTheDocument()
  })

  test('Renders from middle', () => {
    const { getByText, queryByText } = render(ChapterNavigation, {
      ...componentOptions,
      currentChapterIndex: 1
    })
    expect(getByText('Intro')).toBeInTheDocument()
    expect(queryByText('Chapter 1')).not.toBeInTheDocument()
    expect(getByText('Chapter 2')).toBeInTheDocument()
  })

  test('Renders from last page', () => {
    const { getByText, queryByText } = render(ChapterNavigation, {
      ...componentOptions,
      currentChapterIndex: 2
    })
    expect(queryByText('Intro')).not.toBeInTheDocument()
    expect(getByText('Chapter 1')).toBeInTheDocument()
    expect(queryByText('Chapter 2')).not.toBeInTheDocument()
  })

  test('Renders with button text', () => {
    const { getByText } = render(ChapterNavigation, {
      ...componentOptions,
      nextText: 'Next',
      previousText: 'Previous',
      currentChapterIndex: 1
    })
    expect(getByText(/Next/)).toBeInTheDocument()
    expect(getByText(/Previous/)).toBeInTheDocument()
  })

  test('Renders with numbers', () => {
    const { getByText, queryByText } = render(ChapterNavigation, {
      ...componentOptions,
      showChapterNumber: true,
      currentChapterIndex: 1
    })
    expect(getByText('0. Intro')).toBeInTheDocument()
    expect(queryByText('1. Chapter 1')).not.toBeInTheDocument()
    expect(getByText('2. Chapter 2')).toBeInTheDocument()
  })

  test('Dont show chapter nav if there is 1 chapter', () => {
    const { queryByText } = render(ChapterNavigation, {
      ...componentOptions,
      chapters: componentOptions.chapters.splice(0, 1)
    })
    expect(queryByText('0. Intro')).not.toBeInTheDocument()
    expect(queryByText('1. Chapter 1')).not.toBeInTheDocument()
    expect(queryByText('2. Chapter 2')).not.toBeInTheDocument()
  })
})
