<script lang="ts">
  import { Meta, Story } from '@storybook/addon-svelte-csf'
  import ChapterMenu from '../../src/svelte/components/ChapterMenu.svelte'
  import { wrapInShadowDom } from './storybook-utils/utils'
  import { action } from '@storybook/addon-actions'

  const chapterChangeAction = action('chapterChange')
  let currentChapterNumber = 0

  function chapterChange(e) {
    chapterChangeAction(e)
    currentChapterNumber = e.detail.index
  }
</script>

<Meta
  title="Components/Chapter Menu"
  parameters={{ layout: 'fullscreen' }}
  args={{
    showChapterNumbers: true,
    chapters: [
      {
        heading: 'Formål',
        url: '',
        index: 0
      },
      {
        heading: 'Virkeområde',
        url: '',
        index: 1,
        subChapters: [
          { heading: 'Subchapter', url: '', index: 0 },
          { heading: 'Another chapter', url: '', index: 1 }
        ]
      },
      {
        heading: 'Grenseverdier',
        url: '',
        index: 2
      },
      {
        heading: 'Registrering',
        url: '',
        index: 3,
        subChapters: [
          { heading: 'Subchapter', url: '', index: 0 },
          { heading: 'Another chapter', url: '', index: 1 },
          { heading: 'Subchapter', url: '', index: 2 },
          { heading: 'Another chapter', url: '', index: 3 }
        ]
      },
      {
        heading: 'Distribusjonssystem og internt fordelingsnett',
        url: '',
        index: 4,
        subChapters: [
          { heading: 'Subchapter', url: '', index: 0 },
          { heading: 'Another chapter', url: '', index: 1 }
        ]
      }
    ],
    disableJs: false,
    disableCss: false
  }}
  argTypes={{
    showChapterNumbers: { control: 'boolean' },
    chapters: { control: 'array' },
    disableCss: { control: 'boolean' },
    disableJs: { control: 'boolean' },
    chapterChange: { action: 'chapterChange' }
  }}
/>

<Story name="Normal" let:showChapterNumbers let:disableCss let:disableJs let:chapters>
  <div use:wrapInShadowDom={disableCss}>
    <div class="chapter-menu-wrapper">
      <ChapterMenu
        {chapters}
        {showChapterNumbers}
        basePath="/#"
        loadJs={!disableJs}
        menuTitle="Innhold"
        {currentChapterNumber}
        on:chapterChange={chapterChange}
      />
    </div>
  </div>
</Story>

<style lang="scss">
  .chapter-menu-wrapper {
    display: inline-block;
    margin: 2rem;
    max-width: 375px;
    background-color: var(--color-mt-blue);
  }
</style>
