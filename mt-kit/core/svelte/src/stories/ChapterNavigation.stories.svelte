<script lang="ts">
  import { Meta, Story } from '@storybook/addon-svelte-csf'
  import { wrapInShadowDom } from './storybook-utils/utils'
  import { action } from '@storybook/addon-actions'
  import ChapterNavigation from '$lib/svelte/components/ChapterNavigation.svelte'

  const chapterChangeAction = action('chapterChange')
  let currentChapterNumber = 0

  function chapterChange(e) {
    e.preventDefault()
    chapterChangeAction(e)
    currentChapterNumber = e.detail.index
  }
</script>

<Meta
  title="Components/Chapter Navigation"
  args={{
    disableCss: false,
    chapters: [
      { index: 0, url: '?0', heading: 'Formål' },
      { index: 1, url: '?1', heading: 'Virkeområde' },
      { index: 2, url: '?2', heading: 'Definisjoner av dyr og dyrehold' },
      { index: 3, url: '?3', heading: 'Forurensning av vann' },
      { index: 4, url: '?4', heading: 'Kapittel 4' },
      { index: 5, url: '?5', heading: 'Kapittel 5' },
      { index: 6, url: '?6', heading: 'Kapittel 6' }
    ],
    showChapterNumber: true
  }}
  argTypes={{
    disableCss: { control: 'boolean' },
    chapters: { control: 'array' },
    showChapterNumber: { control: 'boolean' }
  }} />

<Story name="Normal" let:disableCss let:args>
  <div use:wrapInShadowDom={disableCss}>
    <article>
      <h1 class="mt-h2">Kapittelnavigering</h1>
      <ChapterNavigation
        showChapterNumber={args.showChapterNumber}
        chapters={args.chapters}
        currentChapterIndex={currentChapterNumber}
        on:chapterChange={chapterChange}
        nextText="Neste"
        previousText="Forrige"
        class="chapter-navigation--bottom" />
    </article>
  </div>
</Story>

<style lang="scss">
</style>
