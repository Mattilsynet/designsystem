<script lang="ts">
  import { Meta, Story } from '@storybook/addon-svelte-csf'
  import Breadcrumbs from '../../lib/svelte/components/Breadcrumbs.svelte'
  import Disclosure from '../../lib/svelte/components/Disclosure.svelte'

  import imageFile from '../assets/testbilde.jpg'
</script>

<Meta
  title="Visual Style/Spacing"
  parameters={{ layout: 'fullscreen' }}
  args={{
    h1: 'h1 - Overskrift',
    h2: 'h2 - Overskrift',
    h3: 'h3 - Overskrift',
    h4: 'h4 - Overskrift',
    paragraph: 'p - Denne teksten er den vanlige/paragraph (body/p) tekst størrelsen',
    intro: '.intro - Denne teksten skal brukes til ingress',
    small: '.text-small - Dette en en liten tekst størrelse. Skal ikke brukes som "vanlig" tekst',
    label: 'label - label tekst størrelse',
    link: 'a - link tekst størrelse',
    breadcrumbs: {
      ariaLabel: 'breadcrumbs',
      items: [
        {
          title: 'Mattilsynet',
          text: 'Mattilsynet',
          active: false,
          url: '/site/default/draft/mattilsynet',
          type: 'portal:site'
        },
        {
          title: 'Mat og vann',
          text: 'Mat og vann',
          active: false,
          url: '/site/default/draft/mattilsynet/mat-og-vann',
          type: 'base:folder'
        },
        {
          title: 'Artikkel test',
          text: 'Artikkel test',
          active: true,
          url: '/site/default/draft/mattilsynet/mat-og-vann/artikkel-test',
          type: 'no.mattilsynet.app:article'
        }
      ]
    },
    transportCards: [
      { href: '', text: 'Dyr og dyrehold' },
      { href: '', text: 'Mat og vann' },
      { href: '', text: 'Fisk og akvakultur' },
      { href: '', text: 'Planter og dyrking' },
      { href: '', text: 'Kosmetikk' },
      { href: '', text: 'Kritikkverdige forhold på arbeidsplassen' }
    ],
    disableCss: false
  }}
  argTypes={{
    title: { control: 'text' },
    disableCss: { control: 'boolean' }
  }} />

<Story
  name="Normal"
  let:transportCards
  let:breadcrumbs
  let:paragraph
  let:intro
  let:small
  let:label
  let:link
  let:disableCss>
  <body>
    <header class="header header--regular" />
    <div class="container content layout-grid layout-grid--column-12">
      <Breadcrumbs {breadcrumbs} class="col-3-span-8" />
      <main id="main" class="layout-grid layout-grid--column-12 col-1-span-12">
        <div
          data-portal-region="main"
          class="layout-grid layout-grid--column-12 col-1-span-12 row-gap">
          <div class="layout-grid layout-grid--column-12 col-1-span-12">
            <section class="content col-3-span-8">
              <h1>Varsle Mattilsynet</h1>
            </section>
          </div>
          <div class="card-grid col-2-span-10">
            <div class="layout-grid layout-grid--column-3">
              {#each transportCards as card}
                <a href={card.href} class="mt-link mt-button mt-button--primary transport-card">
                  <svg
                    width="61"
                    height="61"
                    viewBox="0 0 61 61"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M11.4382 30.5001C14.9475 30.5001 17.7923 27.6552 17.7923 24.1459C17.7923 20.6366 14.9475 17.7917 11.4382 17.7917C7.92884 17.7917 5.08398 20.6366 5.08398 24.1459C5.08398 27.6552 7.92884 30.5001 11.4382 30.5001Z"
                      fill="white" />
                    <path
                      d="M22.8757 20.3333C26.385 20.3333 29.2298 17.4885 29.2298 13.9792C29.2298 10.4699 26.385 7.625 22.8757 7.625C19.3663 7.625 16.5215 10.4699 16.5215 13.9792C16.5215 17.4885 19.3663 20.3333 22.8757 20.3333Z"
                      fill="white" />
                    <path
                      d="M38.1257 20.3333C41.635 20.3333 44.4798 17.4885 44.4798 13.9792C44.4798 10.4699 41.635 7.625 38.1257 7.625C34.6163 7.625 31.7715 10.4699 31.7715 13.9792C31.7715 17.4885 34.6163 20.3333 38.1257 20.3333Z"
                      fill="white" />
                    <path
                      d="M49.5632 30.5001C53.0725 30.5001 55.9173 27.6552 55.9173 24.1459C55.9173 20.6366 53.0725 17.7917 49.5632 17.7917C46.0538 17.7917 43.209 20.6366 43.209 24.1459C43.209 27.6552 46.0538 30.5001 49.5632 30.5001Z"
                      fill="white" />
                    <path
                      d="M44.0727 37.7692C41.8615 35.1767 40.006 32.9654 37.7694 30.3729C36.6002 29.0004 35.1006 27.6279 33.3215 27.0179C33.0419 26.9163 32.7623 26.84 32.4827 26.7892C31.8473 26.6875 31.1611 26.6875 30.5002 26.6875C29.8394 26.6875 29.1531 26.6875 28.4923 26.8146C28.2127 26.8654 27.9331 26.9417 27.6536 27.0433C25.8744 27.6533 24.4002 29.0258 23.2056 30.3983C20.9944 32.9908 19.139 35.2021 16.9023 37.7946C13.5727 41.1242 9.48064 44.8096 10.2431 49.9692C10.9802 52.5617 12.8356 55.1287 16.1652 55.8658C18.0206 56.2471 23.9427 54.7475 30.246 54.7475H30.7036C37.0069 54.7475 42.929 56.2217 44.7844 55.8658C48.114 55.1287 49.9694 52.5362 50.7065 49.9692C51.4944 44.7842 47.4023 41.0987 44.0727 37.7692Z"
                      fill="white" />
                  </svg>
                  <span class="text">
                    {card.text}
                  </span>
                </a>
              {/each}
            </div>
          </div>
          <div class="layout-grid layout-grid--column-12 col-1-span-12">
            <section class="content col-3-span-8">
              <h2>Nyttig å vite</h2>
              <Disclosure title={'Kan jeg være anonym?'}>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since the 1500s
                </p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <ul>
                  <li>
                    Lorem Ipsum is simply dummy text of the dummy text of the dummy text of the
                  </li>
                  <li>Lorem Ipsum is simply dummy</li>
                  <li>Lorem Ipsum is simply dummy text of the dummy text of the</li>
                  <li>
                    Lorem Ipsum is simply dummy text of the dummy text of the
                    <ul>
                      <li>Lorem Ipsum is simply dummy</li>
                      <li>Lorem Ipsum is simply dummy</li>
                    </ul>
                  </li>
                </ul>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </Disclosure>
            </section>
          </div>
          <div class="article-view layout-grid layout-grid--column-12 col-1-span-12">
            <article class="article-page col-1-span-12">
              <p>
                <strong>Takk for at du meldte fra til oss!</strong>
              </p>
              <figure>
                <img src={imageFile} alt="Alternativ bildetekst" />
                <figcaption>Bildetekst</figcaption>
              </figure>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s
              </p>
            </article>
          </div>
        </div>
      </main>
    </div>
    <footer class="footer" />
  </body>
</Story>

<style>
  img {
    width: 100%;
  }
</style>
