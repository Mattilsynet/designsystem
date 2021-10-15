<script lang="ts">
  import {Meta, Story} from '@storybook/addon-svelte-csf';
  import CardArticle from '../../../src/svelte/CardArticle.svelte';
  import Disclosure from '../../../src/svelte/Disclosure.svelte';
  import Published from '../../../src/svelte/Published.svelte';
</script>

<Meta
  title="Innhold/Regelveiledning"
  args={{
    title: 'Dette er det viktig at du vet før du får kjæledyr',
    intro: 'Å anskaffe seg et dyr er et stort ansvar og det er tid- og ',
    text: `<h2>Andre overskrift</h2>
      <p>Paragraf med tekst. Paragraf med tekst. <a href="">Paragraf med tekst.</a> Paragraf med tekst</p>
      <ul>
        <li>Valget om å skaffe dyr må være godt gjennomtenkt. Er hele familien enige og innstilt på det?</li>
        <li>
          En voksen person må være hovedansvarlig for dyret. I følge dyrevelferdsloven kan barn under 16 år ikke ha et
          selvstendig ansvar for dyr.
        </li>
      </ul>`,
    publishFrom: '2021-06-24T11:40:02.889Z',
    professionallyUpdated: '2021-06-24T11:32:22Z',
    disableCss: false
  }}
  argTypes={{
    label: {control: 'text'},
    helpText: {control: 'text'},
    errorMessage: {control: 'text'},
    disableCss: {control: 'boolean'}
  }}
/>

<Story name="Normal" let:title let:intro let:disableCss let:publishFrom let:professionallyUpdated let:text>
  <div class="container">
    <article class="article-page">
      <h1>{title}</h1>
      <div class="intro">
        <p>{intro}</p>
      </div>

      {@html text}

      <section class="layout-flex-col layout-flex-col--x-small" aria-labelledby="how-to-heading">
        <h2 id="how-to-heading">Dette gjør du</h2>
        <p>Litt tekst her</p>
        <CardArticle
          type="task"
          title="Dette er tittelen"
          text="Noe tekst i kroppen"
          linkUrl="http://"
          linkText="Neste handling"
        />
        <CardArticle
          type="form-intro-module"
          title="Dette er tittelen"
          text="Noe tekst i kroppen"
          linkUrl="http://"
          linkText="Neste handling"
        />
      </section>

      <Disclosure title="Dispensasjon" headerTag="h2">
        <p>Dispensasjonstekst</p>
        <div class="layout-flex-col layout-flex-col--x-small">
          <CardArticle
            id={'en-id'}
            type="task"
            title="Tittel for dispensasjonoppgaven"
            text={'Dispensasjonsoppgave'}
            linkUrl={'http://'}
            linkText={'Link til oppgave'}
          />
          <CardArticle
            id={'en-id'}
            type="task"
            title="Tittel for dispensasjonoppgaven"
            text={'Dispensasjonsoppgave'}
            linkUrl={'http://'}
            linkText={'Link til oppgave'}
          />
        </div>
      </Disclosure>

      <Disclosure title={'Begrunnelse'} headerTag="h2">
        <p>Begrunnelsen kommer her</p>
        <ul>
          <li>Punkt 1</li>
          <li>Punkt 2</li>
        </ul>
      </Disclosure>

      <Disclosure title="Mattilsynets oppgaver" headerTag="h2">
        <p>Tekst for mattilsynets oppgaver</p>
      </Disclosure>

      <Disclosure title="Varsle Mattilsynet" headerTag="h2">
        <p>Tekst for varsle Mattilsynet</p>
      </Disclosure>

      <Published {publishFrom} {professionallyUpdated} />
    </article>
  </div>
</Story>

<style lang="scss">
  @import '../src/scss/app';
</style>
