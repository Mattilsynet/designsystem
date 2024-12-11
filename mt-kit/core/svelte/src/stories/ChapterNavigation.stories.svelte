<script lang="ts" module>
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import { wrapInShadowDom } from './storybook-utils/utils'
  import { action } from '@storybook/addon-actions'
  import ChapterNavigation from '$lib/svelte/components/ChapterNavigation.svelte'

  const chapterChangeAction = action('chapterChange')

  const { Story } = defineMeta({
    title: 'Components/Chapter Navigation',
    args: {
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
    },
    argTypes: {
      disableCss: { control: 'boolean' },
      chapters: { control: 'array' },
      showChapterNumber: { control: 'boolean' }
    }
  })
</script>

<script lang="ts">
  let currentChapterIndex = $state(0)

  function chapterChange(index: number) {
    chapterChangeAction(index)
    currentChapterIndex = index
  }
</script>

<Story name="Normal">
  {#snippet children({ disableCss, showChapterNumber, chapters })}
    <div use:wrapInShadowDom={disableCss}>
      <article>
        <h1 class="mt-h2">Kapittelnavigering</h1>
        <ChapterNavigation
          {showChapterNumber}
          {chapters}
          {currentChapterIndex}
          {chapterChange}
          nextText="Neste"
          previousText="Forrige"
          class="chapter-navigation--bottom" />
      </article>
    </div>
  {/snippet}
</Story>

<style lang="scss">
</style>
