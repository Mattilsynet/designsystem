<script lang="ts" module>
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import CardArticle from '$lib/svelte/components/CardArticle.svelte'
  import Disclosure from '$lib/svelte/components/Disclosure.svelte'
  import Published from '$lib/svelte/components/Published.svelte'
  import { wrapInShadowDom } from '../storybook-utils/utils'

  const { Story } = defineMeta({
    title: 'Innhold/Faglig råd',
    args: {
      title: 'Dette er det viktig at du vet før du får kjæledyr',
      intro: 'Å anskaffe seg et dyr er et stort ansvar og det er tid- og ',
      text: `<h2 class='mt-h2'>Andre overskrift</h2>
      <p>Paragraf med tekst. Paragraf med tekst. <a class='mt-link' href=''>Paragraf med tekst.</a> Paragraf med tekst</p>
      <ul >
        <li>Valget om å skaffe dyr må være godt gjennomtenkt. Er hele familien enige og innstilt på det?</li>
        <li>
          En voksen person må være hovedansvarlig for dyret. I følge dyrevelferdsloven kan barn under 16 år ikke ha et
          selvstendig ansvar for dyr.
        </li>
      </ul>
      <p>Paragraf med tekst</p>
      <h3 class='mt-h3'>Underoverskrift</h3>
      <p>Paragraf med tekst</p>
      <p>Paragraf med tekst</p>`,
      publishFrom: '2021-06-24T11:40:02.889Z',
      professionallyUpdated: '2021-06-24T11:32:22Z',
      disableCss: false,
      loadJs: true
    },
    argTypes: {
      label: { control: 'text' },
      helpText: { control: 'text' },
      errorMessage: { control: 'text' },
      disableCss: { control: 'boolean' },
      loadJs: { control: 'boolean' }
    }
  })
</script>

<Story name="Normal">
  {#snippet children({
    title,
    intro,
    disableCss,
    loadJs,
    publishFrom,
    professionallyUpdated,
    text
  })}
    <div use:wrapInShadowDom={disableCss} class="container">
      <article class="article-page">
        <h1 class="mt-h1">{title}</h1>
        <div class="intro">
          <p>{intro}</p>
        </div>
        <Published {publishFrom} {professionallyUpdated} />

        {@html text}

        <section class="layout-flex-col layout-flex-col--x-small" aria-labelledby="how-to-heading">
          <h2 id="how-to-heading" class="mt-h2">Dette gjør du</h2>
          <p>Litt tekst her</p>
          <CardArticle
            type="task"
            class="background-mt-white"
            title="Dette er en h2 tittel"
            text="Noe tekst i kroppen"
            linkUrl="http://"
            linkText="Neste handling"
            headerTag="h2" />
          <CardArticle
            type="task"
            class="background-mt-white"
            title="Dette er en h3 tittel"
            text="Noe tekst i kroppen"
            linkUrl="http://"
            linkText="Neste handling" />
        </section>

        <Disclosure title={'Begrunnelse'} headerTag="h2" {loadJs}>
          <p>Her kommer begrunnelsen</p>
        </Disclosure>
      </article>
    </div>
  {/snippet}
</Story>
