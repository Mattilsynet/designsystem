<script lang="ts">
  import {Meta, Story} from '@storybook/addon-svelte-csf'
  import Status from '../../../src/svelte/Status.svelte'
  import CardArticle from '../../../src/svelte/CardArticle.svelte'
  import SummaryDetail from '../../../src/svelte/SummaryDetail.svelte'
  import {toKebabCase} from '../../../src/ts/utils'
</script>

<Meta
  title="Innhold/Tilbakemeldingsboks"
  args={{
    title: 'Regelveiledning samleside overskrift',
    intro: 'Regelveiledning samleside ingress',
    tableOfContents: 'Innhold på siden',
    text: `<h2>Andre overskrift</h2>
      <p>Paragraf med tekst. Paragraf med tekst. <a href="">Paragraf med tekst.</a> Paragraf med tekst</p>
      <ul>
        <li>Valget om å skaffe dyr må være godt gjennomtenkt. Er hele familien enige og innstilt på det?</li>
        <li>
          En voksen person må være hovedansvarlig for dyret. I følge dyrevelferdsloven kan barn under 16 år ikke ha et
          selvstendig ansvar for dyr.
        </li>
      </ul>`,
    disableCss: false,
    legalItems: [
      {
        title: 'Første regelveiledning',
        intro: 'Første regelveiledning intro tekst.',
        text: `<h2>Andre overskrift</h2>
          <p>Paragraf med tekst. Paragraf med tekst. <a href="">Paragraf med tekst.</a> Paragraf med tekst</p>
          <ul>
            <li>Valget om å skaffe dyr må være godt gjennomtenkt. Er hele familien enige og innstilt på det?</li>
            <li>
              En voksen person må være hovedansvarlig for dyret. I følge dyrevelferdsloven kan barn under 16 år ikke ha et
              selvstendig ansvar for dyr.
            </li>
          </ul>`,
        howToDoItTitle: 'Slik gjør du',
        howToDoIt: `<p>Slik gjør du beskrivelse</p>`
      },
      {
        title: 'Andre regelveiledning',
        intro: 'Andre regelveiledning intro tekst.',
        text: `<h2>Andre overskrift</h2>
          <p>Paragraf med tekst. Paragraf med tekst. <a href="">Paragraf med tekst.</a> Paragraf med tekst</p>
          <ul>
            <li>Valget om å skaffe dyr må være godt gjennomtenkt. Er hele familien enige og innstilt på det?</li>
            <li>
              En voksen person må være hovedansvarlig for dyret. I følge dyrevelferdsloven kan barn under 16 år ikke ha et
              selvstendig ansvar for dyr.
            </li>
          </ul>`,
        howToDoItTitle: 'Slik gjør du',
        howToDoIt: `<p>Slik gjør du beskrivelse</p>`
      }
    ]
  }}
  argTypes={{
    title: {control: 'text'},
    intro: {control: 'text'},
    text: {control: 'text'},
    tableOfContents: {control: 'text'},
    label: {control: 'text'},
    helpText: {control: 'text'},
    errorMessage: {control: 'text'},
    disableCss: {control: 'boolean'}
  }} />

<Story name="Normal" let:title let:intro let:legalItems let:text>
  <div class="container layout-grid layout-grid--column-12">
    <article class="article-page col-1-span-12 legal-guidance">
      <h1>{title}</h1>
      <div class="intro">
        <p>{intro}</p>
      </div>

      {@html text}

      {#each legalItems as legal}
        <article
          id={toKebabCase(legal.title)}
          class="legal-collection legal-collection__border-top col-3-span-6"
          aria-labelledby="collection-title-1">
          <h2 id="collection-title-1">{legal.title}</h2>

          <div class="intro">
            {legal.intro}
          </div>

          {@html legal.text}
        </article>
      {/each}
    </article>
  </div>
  <div class="feedback-container">
    <div class="feedback-container--left">
      <div class="feedback-box">Placeholder text for feature component box</div>
    </div>
  </div>
</Story>
