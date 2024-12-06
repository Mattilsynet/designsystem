import {render, screen, fireEvent, waitFor } from '@testing-library/svelte';
import ChapterMenuSubChapter from './ChapterMenuSubChapter.svelte';
import type {Chapter} from "$lib/ts";

describe('Chapter sub menu', () => {

  test('Render without chapter numbers', () => {
    const subChapters: Chapter[] = [
      { heading: 'Subchapter 1', url: '1', index: 1, subChapters: [] },
      { heading: 'Subchapter 2', url: '2', index: 2, subChapters: [] },
    ]
    const componentOptions = {
      showChapterNumbers: false,
      parentIndex: 1,
      subChapters: subChapters,
      ariaLabel: 'view sub chapters',
      id: 'id'
    }
    render(ChapterMenuSubChapter, componentOptions);
    const toggleButton = screen.getByRole('button', { name: 'view sub chapters'});
    expect(toggleButton).toBeInTheDocument();
    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getAllByRole('listitem').length).toBe(2);
    const links = screen.getAllByRole('link');
    expect(links.length).toBe(2);
    expect(links[0]).toHaveAccessibleName('Subchapter 1');
    expect(links[1]).toHaveAccessibleName('Subchapter 2');
  });

  test('Render with chapter numbers', () => {
    const subChapters: Chapter[] = [
      { heading: 'Subchapter 1', url: '1', index: 1, subChapters: [] },
      { heading: 'Subchapter 2', url: '2', index: 2, subChapters: [] },
    ]
    const componentOptions = {
      showChapterNumbers: true,
      parentIndex: 2,
      subChapters: subChapters,
      ariaLabel: 'view sub chapters',
      id: 'id',
    }
    render(ChapterMenuSubChapter, componentOptions);
    const toggleButton = screen.getByRole('button', { name: 'view sub chapters'});
    expect(toggleButton).toBeInTheDocument();
    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getAllByRole('listitem').length).toBe(2);
    const links = screen.getAllByRole('link');
    expect(links.length).toBe(2);
    expect(links[0]).toHaveAccessibleName('2.1. Subchapter 1');
    expect(links[1]).toHaveAccessibleName('2.2. Subchapter 2');
  });

  test('Render toggle visibility', async () => {
    const subChapters: Chapter[] = [
      { heading: 'Subchapter 1', url: '1', index: 1, subChapters: [] },
      { heading: 'Subchapter 2', url: '2', index: 2, subChapters: [] },
    ]
    const componentOptions = {
      showChapterNumbers: false,
      parentIndex: 1,
      subChapters: subChapters,
      ariaLabel: 'view sub chapters',
      id: 'id'
    }
    render(ChapterMenuSubChapter, componentOptions);

    const toggleButton = screen.getByRole('button', { name: 'view sub chapters'});
    await fireEvent.click(toggleButton);
    await waitFor(() => {
      expect(screen.queryByRole('list')).not.toBeInTheDocument();
    });
  });

});
