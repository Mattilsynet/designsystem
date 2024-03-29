<script lang="ts">
  import { Meta, Story } from '@storybook/addon-svelte-csf'
  import Link from '../lib/svelte/components/Link.svelte'
  import ChapterNavigation from '../lib/svelte/components/ChapterNavigation.svelte'
  import { wrapInShadowDom } from './storybook-utils/utils'
  import SearchResult from '../lib/svelte/components/SearchResult.svelte'

  function getColSpanClass(twoColumns, index) {
    if (!twoColumns) {
      return 'col-3-span-6'
    }
    return index % 2 === 0 ? 'col-1-span-5' : 'col-7-span-5'
  }
  const links = [
    { href: '', type: 'info', title: 'Hvaler - Utgårdskilen', additionalInfo: 'Kan spises' },
    { href: '', type: 'neutral', title: 'Hvaler - Utgårdskilen', additionalInfo: 'Kan spises' },
    { href: '', type: 'success', title: 'Hvaler - Utgårdskilen', additionalInfo: 'Kan spises' },
    { href: '', type: 'warning', title: 'Hvaler - Utgårdskilen', additionalInfo: 'Kan spises' },
    { href: '', type: 'danger', title: 'Hvaler - Utgårdskilen', additionalInfo: 'Kan spises' }
  ]
</script>

<Meta
  title="Components/Links"
  args={{
    primary: 'mattilsynet.no',
    cards: [
      { href: '#', text: 'Dyr og dyrehold' },
      { href: '#', text: 'Mat og vann' },
      { href: '#', text: 'Fisk og akvakultur' },
      { href: '#', text: 'Planter og dyrking' },
      { href: '#', text: 'Kosmetikk' },
      { href: '#', text: 'Kritikk&shy;verdige forhold på arbeids&shy;plassen' },
      {
        href: '#',
        text: 'Kritikk&shy;verdige forhold på arbeids&shy;plassen hvor lenken går over flere linjer og samtidig skal ha animasjon'
      }
    ],

    smallLinks: [
      {
        url: '#',
        text: 'Dyr og dyrehold'
      },
      {
        url: '#',
        text: 'Hest'
      },
      {
        url: '#',
        text: 'Fisk og akvakultur'
      },
      {
        url: '#',
        text: 'Planter og dyrking'
      },
      {
        url: '#',
        text: 'Kosmetikk'
      },
      {
        url: '#',
        text: 'Kritikkverdige forhold på arbeids&shy;plassen'
      }
    ],
    searchResult: [
      {
        url: 'https://www.mattilsynet.no',
        title: 'Dyr',
        text: 'Temaside dyr.',
        breadcrumbs: []
      },
      {
        url: 'https://www.mattilsynet.no',
        title: 'En side uten ingress',
        text: undefined,
        breadcrumbs: []
      },
      {
        url: 'https://www.mattilsynet.no',
        title: 'Import av dyr',
        text: 'Reglene som gjelder når du skal importere eller innføre dyr til Norge.',
        breadcrumbs: ['Import']
      },
      {
        url: 'https://www.mattilsynet.no',
        title: 'Transport av dyr til beite',
        text: 'Transport av dyr i næringsmessig dyrehold til og fra beite, er å betrakte som næringsmessig transport. Reglene i forskrift om næringsmessig transport må de ...',
        breadcrumbs: ['Dyr', 'Dyretransport']
      },
      {
        url: 'https://www.mattilsynet.no',
        title: 'Krav til transportør og personell',
        text: 'Når dyreholder selv transporterer dyr til beite, gjelder ikke kravet om at transportøren skal være godkjent av Mattilsynet.',
        breadcrumbs: ['Dyr', 'Dyretransport', 'Transport av dyr til beite']
      }
    ],
    showChapterNumber: true,
    secondary: 'Avbryt',
    inText: 'mattilsynet',
    twoColumns: false,
    disabled: false,
    disableCss: false
  }}
  argTypes={{
    primary: { control: 'text' },
    inText: { control: 'text' },
    cards: { control: 'array' },
    smallLinks: { control: 'array' },
    searchResult: { control: 'array' },
    secondary: { control: 'string' },
    disabled: { control: 'boolean' },
    disableCss: { control: 'boolean' }
  }} />

<Story name="Normal" let:primary let:disableCss let:args let:disabled let:secondary>
  <div use:wrapInShadowDom={disableCss}>
    <h1 class="mt-h1">Normale lenker</h1>
    <article>
      <h2 class="mt-h2">Bruk alene:</h2>
      <p>
        <Link linkText={primary} href="https://mattilsynet.no/" />
      </p>
    </article>
    <article>
      <h2 class="mt-h2">Bruk i text:</h2>
      <p>Les mer om <Link href="https://mattilsynet.no/" linkText={args.inText} /> her.</p>
    </article>
    <article>
      <h2 class="mt-h2">Tilbakelenke</h2>
      <p>
        <Link href="https://mattilsynet.no/" class="back-arrow" linkText="Tilbake" />
      </p>
    </article>
    <article>
      <h2 class="mt-h2">Ankerlenke</h2>
      <p>
        <Link
          href="https://mattilsynet.no/"
          class="down-arrow"
          linkText="Til innhold der nede ett sted" />
      </p>
    </article>
    <article>
      <h2 class="mt-h2">Pdf lenke</h2>
      <p>
        <Link href="https://mattilsynet.no/some.pdf" class="document" linkText="thisIsAPdf" />
        <Link
          href="https://mattilsynet.no/some.pdf"
          class="document"
          linkText="thisIsAPdf"
          fileName="thisIsAPdf.pdf" />
      </p>
    </article>
    <article>
      <h2 class="mt-h2">Flere linjer</h2>
      <div class="wrapper">
        <Link href="#" class="inline-flex" linkText={args.cards[5].text} />
      </div>
    </article>
  </div>
</Story>

<Story name="Lenkeknapper">
  <div class="link--button-wrapper">
    {#each links as link}
      <a
        href={link.href}
        class="mt-link link--button link--button-icon-title-description icon--alert-filled-{link.type}-before surface-{link.type}">
        <span class="title">{link.title}</span>
        <span class="text-small description">{link.additionalInfo}</span>
      </a>
    {/each}
  </div>
</Story>

<Story name="Små lenker" let:smallLinks let:disableCss let:path>
  <div use:wrapInShadowDom={disableCss}>
    <h1 id="small-1" class="mt-h1">Mange lenker</h1>
    <section
      class="layout-grid layout-grid--auto-fill-desktop m-t-xxs"
      style="--gap: var(--spacer-small)"
      aria-labelledby="small-1">
      {#each smallLinks as link, index}
        {#if link && link.url}
          <a href={link.url} class="mt-link no-underline">
            <h3 class="mt-h4 forward-arrow-after">{@html link.text}</h3>
          </a>
        {/if}
      {/each}
    </section>
    <h2 id="small-2" class="mt-h2 m-t-xs">Få lenker</h2>
    <section class="layout-grid layout-grid--auto-fill-desktop m-t-xxs" aria-labelledby="small-2">
      {#each smallLinks.slice(0, 2) as link, index}
        {#if link && link.url}
          <a href={link.url} class="mt-link no-underline">
            <h4 class="mt-h4 forward-arrow-after">{@html link.text}</h4>
          </a>
        {/if}
      {/each}
    </section>
  </div>
</Story>

<Story name="Lenkeliste" let:cards let:disableCss let:disabled let:secondary>
  <div use:wrapInShadowDom={disableCss}>
    <h1 class="mt-h1">Lenkeliste</h1>
    <ul class="mt-ul m-t-xxs layout-grid list-unstyled">
      {#each cards as link}
        <li>
          <Link href={link.href} class="forward-arrow-end-link" linkText={link.text} />
        </li>
      {/each}
    </ul>
  </div>
</Story>

<Story name="Dokumentlenke" let:cards let:disableCss let:disabled let:secondary>
  <div use:wrapInShadowDom={disableCss}>
    <h1 class="mt-h1">Dokumentlenker</h1>
    <ul class="mt-ul m-t-xxs layout-grid list-unstyled">
      <li>
        <Link
          href={cards[3].href}
          class="document forward-arrow-end-link"
          linkText={cards[3].text} />
      </li>
      <li>
        <Link
          href={cards[6].href}
          class="document forward-arrow-end-link"
          linkText={cards[6].text} />
      </li>
    </ul>
  </div>
</Story>

<Story name="Transportlenker" let:disableCss let:smallLinks let:twoColumns let:cards let:disabled>
  <div use:wrapInShadowDom={disableCss}>
    <h1 class="mt-h1">Transportlenker</h1>

    <ul class="mt-ul m-t-xxs list-unstyled col-1-span-3">
      <li>
        <h3 class="mt-h3">Default</h3>
        <a href="#" class="mt-link link--transport"> Dyr og dyrehold </a>
      </li>

      <br />

      <li>
        <h3 class="mt-h3">Primary</h3>
        <a href="#" class="mt-link link--transport link--transport--primary"> Mat og vann </a>
      </li>

      <br />

      <li>
        <h3 class="mt-h3">Primary Large</h3>
        <a href="#" class="mt-link link--transport link--transport--primary-large">
          Fisk og akvakultur
        </a>
      </li>

      <br />

      <li>
        <h3 class="mt-h3">Secondary</h3>
        <a href="#" class="mt-link link--transport link--transport--secondary">
          Planter og dyrking
        </a>
      </li>

      <br />

      <li>
        <h3 class="mt-h3">Secondary Large</h3>
        <ul
          class="mt-ul list-unstyled no-space-between no-space-top gap-small lines-top lines-between gap-small"
          class:two-col={twoColumns}
          style="--space-section: var(--spacer-x-small);">
          {#each cards as link, index}
            <li class={getColSpanClass(twoColumns, index)}>
              <a href={link.href} class="mt-link link--transport link--transport--secondary-large"
                >{link.text}</a>
            </li>
          {/each}
        </ul>
      </li>
    </ul>
  </div>
</Story>

<Story name="Transportliste" let:cards let:disableCss let:disabled let:secondary>
  <div use:wrapInShadowDom={disableCss}>
    <h1 class="mt-h1">Transportlenkeliste</h1>
    <ul class="mt-ul m-t-xxs layout-grid list-unstyled transport-list">
      {#each cards as link}
        <li>
          <Link
            href={link.href}
            class="link--transport link--transport--primary-large"
            linkText={link.text} />
        </li>
      {/each}
    </ul>
  </div>
</Story>

<Story name="Transportliste sekundær" let:cards let:twoColumns let:disableCss>
  <h1 class="mt-h1 p-b-xs">Transportlenkeliste sekundær</h1>
  <ul
    class="mt-ul list-unstyled no-space-between no-space-top gap-small lines-top lines-between gap-small"
    class:two-col={twoColumns}
    style="--space-section: var(--spacer-x-small);">
    {#each cards as link, index}
      <li class={getColSpanClass(twoColumns, index)}>
        <Link
          href={link.href}
          class="link--transport link--transport--secondary-large"
          style="--hover-padding: var(--spacer-xx-small);"
          linkText={link.text} />
      </li>
    {/each}
  </ul>
</Story>

<Story name="Transportkort" let:cards let:icon let:disableCss let:disabled let:secondary>
  <div use:wrapInShadowDom={disableCss} class="container">
    <h1 class="mt-h1">Transportkort</h1>
    {#each cards as card, index}
      <section
        class="layout-flex layout-flex--centered"
        class:layout-flex--basis-3={index === 0 || index === 1 || index === 3}
        class:layout-flex--basis-2={index !== 0 && index !== 1 && index !== 3}
        aria-labelledby={''}
        style="gap: var(--spacer-x-small);">
        {#each cards.slice(0, 6 - index) as link}
          <a href={link.href} class="mt-link mt-button mt-button--primary transport-card">
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
            <span class="text">{@html link.text}</span>
          </a>
        {/each}
      </section>
      <hr />
    {/each}
  </div>
</Story>

<Story name="Søkeresultat" let:searchResult let:disableCss>
  <div use:wrapInShadowDom={disableCss} class="container layout-grid layout-grid--column-12">
    <SearchResult {searchResult} />
  </div>
</Story>

<style>
  .wrapper {
    padding: 1rem;
    width: 20rem;
    border: 1px solid var(--color-mt-text-dark);
  }
  article {
    margin: 1rem 0 3rem;
  }
  .link--button-wrapper {
    width: 30rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
</style>
