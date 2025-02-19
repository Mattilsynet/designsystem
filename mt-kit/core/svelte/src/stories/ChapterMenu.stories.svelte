<script lang="ts" module>
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import ChapterMenu from '$lib/svelte/components/ChapterMenu.svelte'
  import { wrapInShadowDom } from './storybook-utils/utils'
  import { action } from '@storybook/addon-actions'

  const chapterChangeAction = action('chapterChange')
  let currentChapterNumber = $state(0)

  function chapterChange(index: number) {
    chapterChangeAction('index', index)
    currentChapterNumber = index
  }

  const { Story } = defineMeta({
    title: 'Components/Chapter Menu',
    parameters: { layout: 'fullscreen' },
    args: {
      showChapterNumbers: true,
      chapters: [
        {
          heading: 'Formål',
          url: '?0',
          index: 0
        },
        {
          heading: 'Virkeområde',
          url: '?1',
          index: 1,
          subChapters: [
            { heading: 'Subchapter', url: '', index: 0 },
            { heading: 'Another chapter', url: '', index: 1 }
          ]
        },
        {
          heading: 'Grenseverdier',
          url: '?2',
          index: 2
        },
        {
          heading: 'Registrering',
          url: '?3',
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
          url: '?4',
          index: 4,
          subChapters: [
            { heading: 'Subchapter', url: '', index: 0 },
            { heading: 'Another chapter', url: '', index: 1 }
          ]
        }
      ],
      disableJs: false,
      disableCss: false
    },
    argTypes: {
      showChapterNumbers: {
        control: 'boolean'
      },
      chapters: {
        control: 'object'
      },
      disableCss: {
        control: 'boolean'
      },
      disableJs: {
        control: 'boolean'
      },
      chapterChange: {
        action: 'chapterChange'
      }
    }
  })
</script>

<Story name="Normal">
  {#snippet children({ showChapterNumbers, disableCss, disableJs, chapters })}
    <div use:wrapInShadowDom={disableCss}>
      <div class="chapter-menu-wrapper">
        <ChapterMenu
          {chapters}
          {showChapterNumbers}
          loadJs={!disableJs}
          menuTitle="Innhold"
          {currentChapterNumber}
          onChapterChange={chapterChange} />
      </div>
    </div>
  {/snippet}
</Story>

<style lang="scss">
  .chapter-menu-wrapper {
    display: inline-block;
    margin: 2rem;
    max-width: 375px;
    background-color: var(--color-mt-blue);
  }
</style>
