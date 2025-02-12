<script lang="ts" module>
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import CardArticle from '$lib/svelte/components/CardArticle.svelte'
  import Disclosure from '$lib/svelte/components/Disclosure.svelte'
  import Published from '$lib/svelte/components/Published.svelte'
  import { wrapInShadowDom } from '../storybook-utils/utils'

  const icon = `<svg width='30' height='30' fill='none' xmlns='http://www.w3.org/2000/svg'>
  <circle cx='15' cy='15' r='15' fill='#3F3E3E' />
  <path
    d='M11.934 12.514c-.209-.144-.433-.404-.674-.782a3.295 3.295 0 0 1-.371-1.562c0-.97.345-1.807 1.035-2.51.696-.703 1.709-1.055 3.037-1.055 1.588 0 2.715.521 3.379 1.563.358.56.566 1.26.625 2.1h-2.52c-.045-.391-.143-.7-.293-.928-.267-.404-.706-.606-1.318-.606-.41 0-.745.101-1.006.303-.26.195-.39.485-.39.87 0 .442.227.774.683.995.456.222 1.292.612 2.51 1.172 2.122 1.003 3.183 2.165 3.183 3.486 0 .827-.24 1.511-.722 2.051-.267.3-.658.583-1.172.85.364.312.631.605.8.879.3.475.45 1.035.45 1.68 0 1.243-.43 2.19-1.29 2.841a4.638 4.638 0 0 1-2.89.987c-1.159 0-2.145-.29-2.959-.87-.807-.579-1.266-1.54-1.377-2.88h2.637c.091.481.221.83.39 1.045.28.364.74.546 1.378.546.39 0 .726-.12 1.005-.36.28-.242.42-.554.42-.938 0-.345-.146-.648-.44-.909-.292-.26-1.122-.735-2.49-1.425-1.19-.586-2.005-1.068-2.44-1.446-.697-.605-1.046-1.34-1.046-2.207 0-.813.235-1.487.704-2.021.273-.32.66-.609 1.162-.87Zm5.449 3.73c0-.293-.156-.573-.469-.84a4.333 4.333 0 0 0-.703-.44l-2.92-1.484c-.338.144-.58.355-.723.635a1.292 1.292 0 0 0-.136.586c0 .32.14.602.42.85.162.15.449.332.859.547l2.773 1.455c.215-.091.397-.225.547-.4.235-.255.352-.557.352-.909Z'
    fill='#fff' />
</svg>
`

  const { Story } = defineMeta({
    title: 'Innhold/Regelveiledning',
    args: {
      title: 'Dette er det viktig at du vet før du får kjæledyr',
      intro: 'Å anskaffe seg et dyr er et stort ansvar og det er tid- og ',
      text: `<h2 class='mt-h2'>Andre overskrift</h2>
      <p>Paragraf med tekst. Paragraf med tekst. <a class='mt-link' href=''>Paragraf med tekst.</a> Paragraf med tekst</p>
      <ul>
        <li>Valget om å skaffe dyr må være godt gjennomtenkt. Er hele familien enige og innstilt på det?</li>
        <li>
          En voksen person må være hovedansvarlig for dyret. I følge dyrevelferdsloven kan barn under 16 år ikke ha et
          selvstendig ansvar for dyr.
        </li>
      </ul>`,
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
    publishFrom,
    professionallyUpdated,
    text,
    loadJs
  })}
    <div use:wrapInShadowDom={disableCss} class="container layout-grid layout-grid--column-12">
      <article class="article-page col-1-span-12 legal-guidance">
        <h1 class="mt-h1">{title}</h1>
        <div class="intro">
          <p>{intro}</p>
        </div>
        <Published {publishFrom} {professionallyUpdated} />

        {@html text}

        <section class="layout-flex-col layout-flex-col--x-small" aria-labelledby="how-to-heading">
          <h2 id="how-to-heading" class="mt-h2">Slik gjør du</h2>
          <p>Litt tekst her</p>
          <CardArticle
            type="task"
            class="background-mt-white"
            title="Dette er tittelen"
            text="Noe tekst i kroppen"
            linkUrl="http://"
            linkText="Neste handling" />
          <CardArticle
            headerTag="h4"
            class="testClass"
            type="form-intro-module"
            title="Dette er tittelen"
            text="Noe tekst i kroppen"
            linkUrl="http://"
            linkText="Neste handling" />
        </section>

        <section
          class="layout-flex-col layout-flex-col--x-small"
          aria-labelledby="regulations-heading">
          <h2 id="regulations-heading" class="mt-h2">Regelverk</h2>
          <Disclosure
            title="Næringsmiddelhygieneforordningens vedlegg II, kap. I nr. 3"
            headerTag="h3"
            theme="no-border"
            class="background-mt-rationale-blue"
            {loadJs}
            {icon}>
            <p>Begrunnelsen kommer her</p>
            <ul class="mt-ul">
              <li>Punkt 1</li>
              <li>Punkt 2</li>
            </ul>
          </Disclosure>
          <Disclosure
            title="Lov/Forskrift"
            headerTag="h3"
            theme="no-border"
            class="background-mt-rationale-blue"
            {loadJs}
            {icon}>
            <p>Begrunnelsen kommer her</p>
            <ul class="mt-ul">
              <li>Punkt 1</li>
              <li>Punkt 2</li>
            </ul>
          </Disclosure>
        </section>
      </article>
    </div>
  {/snippet}
</Story>
