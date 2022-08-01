<script lang="ts">
  import {Meta, Story} from '@storybook/addon-svelte-csf'
  import Dropdown from '../../../src/svelte/Dropdown.svelte'
  import ChapterMenu from '../../../src/svelte/ChapterMenu.svelte'
  import {toKebabCase} from '../../../src/ts/utils'
  import {action} from '@storybook/addon-actions'
  import Disclosure from '../../../src/svelte/Disclosure.svelte'

  let chapters = [
    {index: 0, url: '?kapittel=0-innledning', heading: 'Inneldning'},
    {index: 1, url: '?kapittel=1-virkeomrde', heading: 'Virkeområde'},
    {index: 2, url: '?kapittel=2-definisjoner', heading: 'Definisjoner'},
    {index: 3, url: '?kapittel=3-forurrensning', heading: 'Forurensning'}
  ]
  //
  let chapterChangeAction = action('chapterChange')
  let currentChapterNumber = 0
  let isExpanded = false

  function chapterChange(e) {
    //   chapterChangeAction(e)
    //   currentChapterNumber = e.detail.index
  }
  //
  function resolveChapterQueryParams(chapter) {
    return `?kapittel=${chapter.index}-${toKebabCase(chapter.heading)}`
  }

  function handleClickClose() {
    isExpanded = !isExpanded
  }
  let body = `<p>Innhold i underkapittel</p>
<ul>
<li>liste 1</li>
<li>liste 2</li>
</ul>
<section class="layout-flex-col layout-flex-col--x-small">
  <p>Innhold i section</p>
  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
     industry's standard dummy text ever since the 1500s
  </p>
</section>`
</script>

<Meta
  title="Innhold/Veileder"
  parameters={{layout: 'fullscreen'}}
  args={{
    menu: {title: 'Meny'},
    chapters: [
      {
        heading: 'Innledning',
        body,
        subchapters: [
          {
            heading: 'Påstanden skal ikke brukes slik at den villeder forbrukern (artikkle 3)',
            body,
            subchapters: [
              {heading: 'Under under kapitel', body},
              {heading: 'Under under kapitel 2', body}
            ]
          },
          {
            heading: 'Krav til gunstig virkning og til sammmensetning av produktet (artikkel 5(1))',
            body: `<p>Innhold i underkapittel</p>
<section class="layout-flex-col layout-flex-col--x-small">
  <p>Innhold i section</p>
</section>`,
            subchapters: [
              {heading: 'Virkningen påstanden viser til må være gunstig', body},
              {
                heading: 'Produktet må være sammensat slik at den gunstige virkningen kan oppnås',
                body
              }
            ]
          },
          {
            heading: 'Innledning - underkapittel 3',
            body: `<p>Innhold i underkapittel</p>
<section class="layout-flex-col layout-flex-col--x-small">
  <p>Innhold i section</p>
</section>`,
            subchapters: [
              {heading: 'Innledning - under 3 under kapitel'},
              {heading: 'Innledning - under 3 under kapitel 2'}
            ]
          }
        ]
      },
      {
        heading: 'Virkeområde',
        body,
        subchapters: [
          {heading: 'Virkeområde - underkapittel'},
          {heading: 'Virkeområde - underkapittel 2'},
          {heading: 'Virkeområde - underkapittel 3'}
        ]
      },
      {
        heading: 'Definisjoner',
        body,
        subchapters: [
          {heading: 'Definisjoner - underkapittel'},
          {heading: 'Definisjoner - underkapittel 2'},
          {heading: 'Definisjoner - underkapittel 3'}
        ]
      }
    ],
    showChapterNumbers: true,
    disableJs: false
  }}
  argTypes={{
    menu: {control: 'object'},
    chapters: {control: 'array'},
    showChapterNumbers: {control: 'boolean'},
    disableJs: {control: 'boolean'}
  }} />

<Story name="Normal" let:showChapterNumbers let:menu let:disableJs let:chapters>
  <header>
    <div class="container header header--regular">
      <a href="https://mattilsynet.no/">
        <svg viewBox="0 0 184 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <title>Gå til forsiden</title>
          <path
            d="M14.1539 22.9053H11.2772L3.84106 5.97346L4.0039 26.4195H0.312988V0.116516H4.87235L12.7427 18.1665L20.5587 0.116516H25.1181V26.4195H21.4272L21.6443 5.97346L14.1539 22.9053Z"
            fill="#E23128" />
          <path
            d="M37.4935 11.7772C35.3766 11.7772 32.6627 12.3629 31.36 12.8421V9.48763C32.7713 8.84869 35.8108 8.42273 37.4935 8.42273C42.9755 8.42273 44.4411 10.872 44.4411 14.5459V26.4195H41.9985L41.6729 25.5143C40.2074 26.3663 38.2534 26.8987 36.6793 26.8987C31.74 26.8987 30.1659 23.9702 30.1659 20.882C30.1659 18.1133 31.4686 15.664 36.7878 15.2381L40.8044 14.9186V14.5459C40.7501 12.6823 40.0445 11.7772 37.4935 11.7772ZM36.6793 18.2198C34.4539 18.4328 33.8026 19.6574 33.8026 20.882C33.8026 22.0534 34.0739 23.5443 36.6793 23.5443C38.1991 23.5443 39.7731 23.0118 40.7501 22.4794V17.9003L36.6793 18.2198Z"
            fill="#E23128" />
          <path
            d="M59.3675 26.6857C58.4991 26.8987 57.4135 26.8987 57.1421 26.8987C54.2111 26.8987 51.2258 25.4078 51.2258 22.0002V11.9901H47.9148V9.80707L51.2258 8.90191V4.48258L54.8624 3.52417V8.90191H60.1274V11.9901H54.8624V21.6807C54.8624 23.1715 55.8394 23.5975 57.4135 23.5975C58.0648 23.5975 58.9876 23.5443 59.3675 23.4378V26.6857Z"
            fill="#E23128" />
          <path
            d="M73.7512 26.6857C73.2627 26.739 72.8285 26.7922 72.34 26.7922C69.3547 26.9519 66.5322 25.6208 66.4237 22.2132V10.8187H62.8413V9.75384L66.4237 8.74219V3.95015L68.9205 3.25797V8.84868H74.4568V10.7655H68.9205V22.0534C69.0833 24.1832 70.2231 24.7689 72.34 24.7689C72.8285 24.7689 73.2627 24.7157 73.7512 24.7157V26.6857Z"
            fill="#E23128" />
          <path
            d="M78.7991 2.40604C78.7991 3.47094 79.6676 4.32286 80.7531 4.32286C81.8387 4.32286 82.7072 3.47094 82.7072 2.40604C82.7072 1.34115 81.8387 0.489227 80.7531 0.489227C79.6133 0.489227 78.7991 1.2879 78.7991 2.40604ZM83.467 26.7922V24.7689C82.3815 24.7689 81.9473 24.3962 81.9473 23.1716V8.90192H79.5047V22.9053C79.5047 25.7273 80.8617 26.7922 83.467 26.7922Z"
            fill="#E23128" />
          <path
            d="M89.1662 22.9053V0.116516H91.6087V23.1716C91.6087 24.3962 91.9886 24.7689 93.1285 24.7689V26.7922C90.5231 26.7922 89.1662 25.7273 89.1662 22.9053Z"
            fill="#E23128" />
          <path
            d="M104.201 16.3562C109.249 16.8354 110.497 18.486 110.497 21.3612C110.497 24.0767 108.761 26.739 103.333 26.739C101.596 26.739 99.1533 26.313 98.0135 25.887V23.7572C99.099 24.13 100.836 24.5559 103.387 24.5559C107.078 24.5559 108.109 23.0118 108.109 21.3612C108.109 19.7639 107.621 18.6457 104.093 18.3263C98.9362 17.8471 97.8506 16.09 97.8506 13.6407C97.8506 11.1382 99.479 8.47595 104.527 8.47595C106.209 8.47595 108.109 8.68893 109.683 9.32787V11.4577C108.272 10.9785 106.915 10.659 104.473 10.659C100.944 10.659 100.185 11.9369 100.185 13.694C100.13 15.2913 100.782 16.09 104.201 16.3562Z"
            fill="#E23128" />
          <path
            d="M129.006 27.8039C129.006 32.1699 128.138 35.5776 121.679 35.5776C118.911 35.5776 117.065 35.2049 115.6 34.6192V32.3297C117.228 33.1283 119.291 33.5543 121.679 33.5543C126.455 33.5543 126.51 30.3064 126.51 27.8571L126.455 25.3546C124.935 26.313 123.307 26.7922 121.625 26.7922C117.391 26.7922 115.6 24.8754 115.6 21.521L115.545 8.90192H118.042L118.096 21.7339C118.096 24.0235 119.399 24.7157 121.625 24.7157C123.958 24.7157 125.153 24.3429 126.455 23.5975V8.90192H128.952L129.006 27.8039Z"
            fill="#E23128" />
          <path
            d="M145.615 13.694C145.615 11.4044 144.259 10.7123 142.033 10.7123C139.699 10.7123 138.505 11.085 137.202 11.8304V26.4195H134.706V8.90193H136.117L136.66 10.3928C138.342 9.16815 140.188 8.58246 142.033 8.58246C146.267 8.58246 148.112 10.4993 148.112 13.8537V26.4727H145.615V13.694Z"
            fill="#E23128" />
          <path
            d="M155.765 18.7522C155.928 21.7872 156.797 24.5559 160.868 24.5559C163.419 24.5559 164.993 24.2897 166.675 23.5975L166.73 25.7273C164.721 26.5792 162.496 26.7922 160.759 26.7922C154.734 26.7922 153.269 22.7456 153.323 17.6873C153.323 12.6291 154.788 8.58246 160.813 8.58246C165.644 8.58246 167.544 11.2447 167.49 14.2264C167.544 16.9419 166.187 18.8055 160.922 18.8055L155.765 18.7522ZM161.139 16.7289C164.179 16.7289 164.993 15.877 164.993 14.1732C165.047 12.5758 164.179 10.7123 160.759 10.7123C156.634 10.7123 155.874 13.6407 155.765 16.7822L161.139 16.7289Z"
            fill="#E23128" />
          <path
            d="M182.307 26.6857C181.819 26.739 181.385 26.7922 180.896 26.7922C177.911 26.9519 175.088 25.6208 174.98 22.2132V10.8187H171.397V9.75384L174.98 8.74219V3.95015L177.477 3.25797V8.84868H183.013V10.7655H177.477V22.0534C177.639 24.1832 178.779 24.7689 180.896 24.7689C181.385 24.7689 181.819 24.7157 182.307 24.7157V26.6857Z"
            fill="#E23128" />
        </svg>
      </a>
      <Dropdown
        title="Språk/language"
        loadJs={!disableJs}
        class="button__small-text responsive-hide"
        let:titleId />
      <Dropdown
        title={menu.title}
        class="button__small-text full-menu"
        loadJs={!disableJs}
        let:titleId />
    </div>
  </header>
  <div class="layout-with-sidebar has-js">
    <div class="mobile-menu" />
    <aside class={isExpanded ? 'expanded' : ''}>
      {#if !isExpanded}
        <button class="button--unstyled btn-open" on:click={handleClickClose}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M9.99996 0.158691L8.26544 1.89321L15.1297 8.7698H0.158691V11.2301H15.1297L8.26544 18.1067L9.99996 19.8412L19.8412 9.99996L9.99996 0.158691Z"
              fill="#F9F6F1" />
          </svg>

          <div class="closed-label">Innhold</div>
        </button>
      {:else}
        <div class="aside-header">
          <button class="button--unstyled float-right" on:click={handleClickClose}>
            <svg width="21.307" height="21.213" fill="none" xmlns="http://www.w3.org/2000/svg">
              <title>Close}</title>
              <path stroke="#fff" stroke-width="2" d="M20.6.707.801 20.506M20.506 20.506.707.707" />
            </svg>
          </button>
        </div>
        <div class="guide-menu">
          <ChapterMenu
            {chapters}
            {showChapterNumbers}
            {currentChapterNumber}
            menuTitle={'Innhold'}
            basePath="/#"
            on:chapterChange={chapterChange} />
        </div>
      {/if}
    </aside>
    <div class="container content {isExpanded ? 'menu-is-expanded' : ''}">
      <main id="main">
        <div data-portal-region="main">
          <div>
            {#each chapters as chapter, chapterIndex}
              {#if chapterIndex === currentChapterNumber}
                <div class="layout-grid layout-grid--column-12">
                  <article class="article-page col-1-span-12 in-other-content">
                    <h1 class={showChapterNumbers ? 'heading-with-chapter col-2-span-9' : ''}>
                      {#if showChapterNumbers}
                        <span class="chapter-number">
                          {chapterIndex + 1}.
                        </span>
                      {/if}
                      {chapter.heading}
                    </h1>
                    {@html chapter.body}
                  </article>
                </div>
                {#each chapter.subchapters || [] as subChapter, subChapterIndex}
                  <Disclosure
                    title={subChapter.heading}
                    headerTag="h2"
                    theme="links"
                    chapter={showChapterNumbers
                      ? `${chapterIndex + 1}.${subChapterIndex + 1}`
                      : undefined}
                    class="layout-grid layout-grid--column-12 {showChapterNumbers
                      ? 'disclosure-with-number'
                      : ''}"
                    headerClass={showChapterNumbers ? 'col-2-span-9' : 'col-3-span-8'}
                    panelClass={showChapterNumbers ? 'col-2-span-9' : 'col-3-span-8'}>
                    <div class="layout-grid layout-grid--column-12">
                      <article class="article-page col-1-span-12 children-full-width">
                        {@html subChapter.body}
                      </article>
                    </div>
                    {#each subChapter.subchapters || [] as subSubChapter, subSubIndex}
                      <Disclosure
                        title={subSubChapter.heading}
                        headerTag="h3"
                        theme="links"
                        class="layout-grid layout-grid--column-12 {showChapterNumbers
                          ? 'disclosure-with-number'
                          : ''}"
                        chapter={showChapterNumbers
                          ? `${chapterIndex + 1}.${subChapterIndex + 1}.${subSubIndex + 1}`
                          : undefined}
                        headerClass={'col-1-span-12'}
                        panelClass={'col-1-span-12'}>
                        <div class="layout-grid layout-grid--column-12">
                          <article class="article-page col-1-span-12 children-full-width">
                            {@html subSubChapter.body}
                          </article>
                        </div>
                      </Disclosure>
                    {/each}
                  </Disclosure>
                {/each}
              {/if}
            {/each}
          </div>
        </div>
      </main>
    </div>
  </div>
</Story>
