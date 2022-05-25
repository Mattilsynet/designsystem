<script lang="ts">
  import {Meta, Story} from '@storybook/addon-svelte-csf'
  import ChapterMenu from '../../src/svelte/ChapterMenu.svelte'
  import {wrapInShadowDom} from '../utils'
  import {action} from '@storybook/addon-actions'

  const chapterChangeAction = action('chapterChange')
  let currentChapterNumber = 0

  function chapterChange(e) {
    chapterChangeAction(e)
    currentChapterNumber = e.detail.index
  }
</script>

<Meta
  title="Components/Chapter Menu"
  parameters={{layout: 'fullscreen'}}
  args={{
    showChapterNumbers: true,
    chapters: [
      {
        heading: 'Formål',
        index: 0
      },
      {
        heading: 'Virkeområde',
        index: 1
      },
      {
        heading: 'Grenseverdier',
        index: 2
      },
      {
        heading: 'Registrering',
        index: 3
      },
      {
        heading: 'Distribusjonssystem og internt fordelingsnett',
        index: 4
      }
    ],
    disableCss: false
  }}
  argTypes={{
    showChapterNumbers: {control: 'boolean'},
    chapters: {control: 'array'},
    disableCss: {control: 'boolean'},
    chapterChange: {action: 'chapterChange'}
  }} />

<Story name="Normal" let:showChapterNumbers let:disableCss let:chapters>
  <div use:wrapInShadowDom={disableCss}>
    <div class="chapter-menu-wrapper">
      <ChapterMenu
        {chapters}
        {showChapterNumbers}
        basePath="/#"
        menuTitle="Innhold"
        {currentChapterNumber}
        on:chapterChange={chapterChange} />
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
