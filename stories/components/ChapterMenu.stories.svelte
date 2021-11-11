<script lang="ts">
  import {Meta, Story} from '@storybook/addon-svelte-csf';
  import ChapterMenu from '../../src/svelte/ChapterMenu.svelte';
  import {action} from '@storybook/addon-actions';

  const chapters = [
    {
      heading: '§ 1 Formål',
      index: 0
    },
    {
      heading: '§ 2 Virkeområde',
      index: 1
    },
    {
      heading: '§ 5 Grenseverdier',
      index: 2
    },
    {
      heading: '§17 Registrering',
      index: 3
    },
    {
      heading: '§ 15 Distribusjonssystem og internt fordelingsnett',
      index: 4
    }
  ];

  const chapterChangeAction = action('chapterChange');
  let currentChapterNumber = 0;

  function chapterChange(e) {
    chapterChangeAction(e);
    currentChapterNumber = e.detail.index;
  }
</script>

<Meta
  title="Components/Chapter Menu"
  parameters={{layout: 'fullscreen'}}
  args={{
    disableCss: false
  }}
  argTypes={{
    disableCss: {control: 'boolean'},
    chapterChange: {action: 'chapterChange'}
  }}
/>

<Story name="Normal">
  <div class="chapter-menu-wrapper">
    <ChapterMenu {chapters} basePath="/#" menuTitle="Innhold" {currentChapterNumber} on:chapterChange={chapterChange} />
  </div>
</Story>

<style lang="scss" global>
  @import 'src/scss/app';

  .chapter-menu-wrapper {
    display: inline-block;
    margin: 2rem;
    max-width: 375px;
    background-color: var(--color-mt-blue);
  }
</style>
