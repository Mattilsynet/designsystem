<script lang="ts">
  import {Meta, Story} from '@storybook/addon-svelte-csf';
  import Breadcrumbs from '../../src/svelte/Breadcrumbs.svelte';
  import Disclosure from '../../src/svelte/Disclosure.svelte';
</script>

<Meta
  title="Visual Style/Spacing"
  parameters={{layout: 'fullscreen'}}
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
      {href: '', text: 'Dyr og dyrehold'},
      {href: '', text: 'Mat og vann'},
      {href: '', text: 'Fisk og akvakultur'},
      {href: '', text: 'Planter og dyrking'},
      {href: '', text: 'Kosmetikk'},
      {href: '', text: 'Kritikkverdige forhold på arbeidsplassen'}
    ],
    disableCss: false
  }}
  argTypes={{
    title: {control: 'text'},
    disableCss: {control: 'boolean'}
  }}
/>

<Story
  name="Normal"
  let:transportCards
  let:breadcrumbs
  let:paragraph
  let:intro
  let:small
  let:label
  let:link
  let:disableCss
>
  <body>
    <header class="header header--regular" />
    <main class="container content">
      <Breadcrumbs {breadcrumbs} />
      <div class="layout-flex-col">
        <div class="layout-flex-col">
          <section class="content">
            <h1>Varsle Mattilsynet</h1>
          </section>
        </div>
        <div class="layout-flex-col">
          <div class="layout-grid layout-grid--column-3">
            {#each transportCards as card}
              <a href={card.href} class="button button--primary transport-card">{card.text}</a>
            {/each}
          </div>
        </div>
        <div class="layout-flex-col">
          <section class="content">
            <h2>Nyttig å vite</h2>
            <Disclosure title={'Kan jeg være anonym?'}>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s
              </p>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              <ul>
                <li>Lorem Ipsum is simply dummy text of the dummy text of the dummy text of the</li>
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
        <div class="layout-flex-col">
          <section class="content">
            <p>
              <strong>Takk for at du meldte fra til oss!</strong>
            </p>
            <ul>
              <li>
                Melder du&nbsp;anonymt har vi ikke noen måte å kontakte deg på for å følge opp saken med deg direkte.
              </li>
              <li>
                Vi er likevel glad for at du meldte fra til oss. Det du melder vil kunne&nbsp;bedre forholdene for
                dyrene.
              </li>
              <li>
                Bekymringsmeldingen sendes til teamet som vurderer slike meldinger. Teamet avgjør om og hvordan saken
                følges opp. Dette avhenger av hvor informativ og alvorlig bekymringsmeldingen&nbsp;er.
              </li>
              <li>
                Vi behandler mange saker, og i mange av sakene har vi taushetsplikt. Du vil derfor ikke få noen
                informasjon om den videre saksgangen og hva vi gjør med saken.
              </li>
            </ul>
            <p><strong>Ditt referansenummer i saken er: 109920</strong></p>
            <p>Hilsen oss i Mattilsynet</p>
          </section>
        </div>
      </div>
    </main>
    <footer class="footer" />
  </body>
</Story>
