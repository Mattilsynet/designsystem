<script lang="ts" module>
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import Dropdown from '$lib/svelte/components/Dropdown.svelte'
  import ChapterMenu from '$lib/svelte/components/ChapterMenu.svelte'
  import Disclosure from '$lib/svelte/components/Disclosure.svelte'
  import { styles } from '@mattilsynet/design'

  const BREAKPOINT_XL = 1200
  let isExpanded = $state(false)
  let currentChapterNumber = $state(0)
  let innerWidth = $state(window?.innerWidth)
  let isMobile = $derived(innerWidth <= BREAKPOINT_XL)

  function handleClickClose() {
    isExpanded = !isExpanded
  }

  const body = `<p>Innhold i underkapittel</p>
<ul>
<li>liste 1</li>
<li>liste 2</li>
</ul>
<section class='layout-flex-col layout-flex-col--x-small'>
  <p>Innhold i section</p>
  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
     industry's standard dummy text ever since the 1500s
  </p>
</section>`

  const { Story } = defineMeta({
    title: 'Innhold/Veileder',
    parameters: { layout: 'fullscreen' },
    args: {
      menu: { title: 'Meny' },
      chapters: [
        {
          heading: 'Innledning',
          body,
          subchapters: [
            {
              heading: 'Påstanden skal ikke brukes slik at den villeder forbrukern (artikkel 3)',
              body,
              subchapters: [
                { heading: 'Under under kapitel', body },
                { heading: 'Under under kapitel', body },
                { heading: 'Under under kapitel', body },
                { heading: 'Under under kapitel', body },
                { heading: 'Under under kapitel', body },
                { heading: 'Under under kapitel', body },
                { heading: 'Under under kapitel', body },
                { heading: 'Under under kapitel', body },
                { heading: 'Under under kapitel', body },
                { heading: 'Under under kapitel 2', body }
              ]
            },
            {
              heading:
                'Krav til gunstig virkning og til sammmensetning av produktet (artikkel 5(1))',
              body: `<p>Innhold i underkapittel</p>
<section class='layout-flex-col layout-flex-col--x-small'>
  <p>Innhold i section</p>
</section>`,
              subchapters: [
                { heading: 'Virkningen påstanden viser til må være gunstig', body },
                {
                  heading: 'Produktet må være sammensat slik at den gunstige virkningen kan oppnås',
                  body
                }
              ]
            },
            {
              heading: 'Innledning - underkapittel 3',
              body: `<p>Innhold i underkapittel</p>
<section class='layout-flex-col layout-flex-col--x-small'>
  <p>Innhold i section</p>
</section>`,
              subchapters: [
                { heading: 'Innledning - under 3 under kapitel' },
                { heading: 'Innledning - under 3 under kapitel 2' }
              ]
            }
          ]
        },
        {
          heading: 'Virkeområde',
          body,
          subchapters: [
            { heading: 'Virkeområde - underkapittel' },
            { heading: 'Virkeområde - underkapittel 2' },
            { heading: 'Virkeområde - underkapittel 3' }
          ]
        },
        {
          heading: 'Definisjoner',
          body,
          subchapters: [
            { heading: 'Definisjoner - underkapittel' },
            { heading: 'Definisjoner - underkapittel 2' },
            { heading: 'Definisjoner - underkapittel 3' }
          ]
        }
      ],
      showChapterNumbers: true,
      disableJs: false
    },
    argTypes: {
      menu: { control: 'object' },
      chapters: { control: 'object' },
      showChapterNumbers: { control: 'boolean' },
      disableJs: { control: 'boolean' }
    }
  })
</script>

<svelte:window bind:innerWidth />

<Story name="Normal">
  {#snippet children({ showChapterNumbers, menu, disableJs, chapters })}
    <header class="mt-header">
      <div class="container mt-header-wrapper mt-header-wrapper--regular">
        <a
          class="{styles.logo} width-fit-content"
          href="https://mattilsynet.no/"
          aria-label="Gå til forside">
        </a>
        <Dropdown
          title="Språk/language"
          loadJs={!disableJs}
          class="dropdown mt-button__small-text responsive-hide" />
        <Dropdown
          title={menu.title}
          class="dropdown mt-button__small-text full-menu"
          loadJs={!disableJs} />
      </div>
    </header>
    <div class="layout-with-sidebar has-js">
      <aside class={`mt-aside ${isExpanded ? 'expanded' : ''}`}>
        {#if (!isMobile && isExpanded) || isMobile}
          <div class="mobile-menu" aria-expanded={isExpanded}>
            <a onclick={() => (isExpanded = false)} class="mt-link" href="#"
              >{chapters[0].heading}</a>
            {#if isMobile || (!isMobile && isExpanded)}
              <button
                class="mt-button--unstyled show-menu icon--arrow-down-menu-on-dark-before"
                aria-haspopup="true"
                aria-expanded={isExpanded}
                onclick={handleClickClose}></button>
            {/if}
          </div>
        {/if}
        {#if !isMobile && !isExpanded}
          <button class="mt-button--unstyled btn-open" onclick={handleClickClose}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9.99996 0.158691L8.26544 1.89321L15.1297 8.7698H0.158691V11.2301H15.1297L8.26544 18.1067L9.99996 19.8412L19.8412 9.99996L9.99996 0.158691Z"
                fill="#F9F6F1" />
              <title>Open</title>
            </svg>
            <span class="closed-label">Innhold</span>
          </button>
        {/if}

        {#if isExpanded}
          <div class="guide-menu">
            <ChapterMenu
              {chapters}
              {showChapterNumbers}
              {currentChapterNumber}
              menuTitle={'Innhold'} />
          </div>
        {/if}
      </aside>

      <div class="container content {isExpanded ? 'menu-is-expanded' : ''}">
        <main id="main" class="mt-main">
          <div data-portal-region="main">
            <div>
              {#each chapters as chapter, chapterIndex}
                {#if chapterIndex === currentChapterNumber}
                  <div class="layout-grid layout-grid--column-12">
                    <article class="article-page col-1-span-12 in-other-content">
                      <h1
                        class="mt-h1 {showChapterNumbers
                          ? 'heading-with-chapter col-2-span-9'
                          : ''}">
                        {#if showChapterNumbers}
                          <span class="chapter-number">
                            {chapterIndex + 1}.
                          </span>
                        {/if}
                        <span class="title">
                          {chapter.heading}
                        </span>
                      </h1>
                      {@html chapter.body}
                    </article>
                  </div>
                  <section class="layout-grid layout-grid--column-12 m-t-s">
                    {#each chapter.subchapters || [] as subChapter, subChapterIndex}
                      <Disclosure
                        title={subChapter.heading}
                        headerTag="h2"
                        chapter={showChapterNumbers
                          ? `${chapterIndex + 1}.${subChapterIndex + 1}`
                          : undefined}
                        class="layout-grid layout-grid--column-12 col-3-span-8 {showChapterNumbers
                          ? 'disclosure-with-number'
                          : ''}"
                        headerClass={'col-1-span-12 text-h3'}
                        panelClass={'col-1-span-12'}>
                        <div class="layout-grid layout-grid--column-12">
                          <article class="article-page col-1-span-12 children-full-width">
                            {@html subChapter.body}
                          </article>
                        </div>
                        {#each subChapter.subchapters || [] as subSubChapter, subSubIndex}
                          <Disclosure
                            title={subSubChapter.heading}
                            headerTag="h3"
                            class="layout-grid layout-grid--column-12 col-1-span-12 {showChapterNumbers
                              ? 'disclosure-with-number'
                              : ''}"
                            chapter={showChapterNumbers
                              ? `${chapterIndex + 1}.${subChapterIndex + 1}.${subSubIndex + 1}`
                              : undefined}
                            headerClass={'col-1-span-12 text-h4'}
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
                  </section>
                {/if}
              {/each}
            </div>
          </div>
        </main>
      </div>
    </div>
    <footer class="mt-footer footer--regular" aria-labelledby="footer-title">
      <h2 id="footer-title" class="mt-h2 inclusively-hidden">Footer</h2>
      <div class="col">Col 1</div>
      <div class="col">Col 2</div>
      <div class="col">Col 3</div>
    </footer>
  {/snippet}
</Story>

<style>
  footer {
    margin-left: auto;
    margin-right: auto;
  }
</style>
