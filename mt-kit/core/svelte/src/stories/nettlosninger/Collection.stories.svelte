<script lang="ts" module>
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import CardArticle from '$lib/svelte/components/CardArticle.svelte'
  import SummaryDetail from '$lib/svelte/components/SummaryDetail.svelte'
  import { toKebabCase } from '$lib/ts/utils'
  import { wrapInShadowDom } from '../storybook-utils/utils'
  import { styles } from '@mattilsynet/design'

  const { Story } = defineMeta({
    title: 'Innhold/Samleside',
    args: {
      title: 'Regelveiledning samleside overskrift',
      intro: 'Regelveiledning samleside ingress',
      tableOfContents: 'Innhold på siden',
      text: `<h2 class='mt-h2'>Andre overskrift</h2>
      <p>Paragraf med tekst. Paragraf med tekst. <a class='mt-link' href=''>Paragraf med tekst.</a> Paragraf med tekst</p>
      <ul >
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
          text: `<h2 class='mt-h2'>Andre overskrift</h2>
          <p>Paragraf med tekst. Paragraf med tekst. <a class='mt-link' href=''>Paragraf med tekst.</a> Paragraf med tekst</p>
          <ul >
            <li>Valget om å skaffe dyr må være godt gjennomtenkt. Er hele familien enige og innstilt på det?</li>
            <li>
              En voksen person må være hovedansvarlig for dyret. I følge dyrevelferdsloven kan barn under 16 år ikke ha et
              selvstendig ansvar for dyr.
            </li>
          </ul>
          <table class='${styles.table} col-2-span-10' data-fixed data-mobile='stacked' data-size='sm'>
          <caption>Merkeregler for flaskevann</caption>
          <thead>
          <tr><th>Produkt/merking med</th>
          <th>Handelsnavn/varenavn/varemerke</th>
          <th>Kilde/utvinningssted for kilden (for naturlig mineralvann/kildevann)</th>
          <th>Varebetegnelse</th></tr></thead>
          <tbody><tr role='row'>
          <td>Naturlig mineralvann/kildevann</td>
          <td>Skal ikke frambys under mer enn ett handelsnavn/varenavn.</td>
          <td>Navnet på kilden/utvinningsstedet skal være dominerende.</td>
          <td>Naturlig mineralvann eller kildevann.<br><br>Varebetegnelsen naturlig mineralvann tillates bare på vann som har et naturlig mineralinnhold som avviker fra kildevann og drikkevann.</td></tr>
          </tbody></table>

          `,
          howToDoItTitle: 'Slik gjør du',
          howToDoIt: `<p>Slik gjør du beskrivelse</p>`
        },
        {
          title: 'Andre regelveiledning',
          intro: 'Andre regelveiledning intro tekst.',
          text: `<h2 class='mt-h2'>Andre overskrift</h2>
          <p>Paragraf med tekst. Paragraf med tekst. <a class='mt-link' href=''>Paragraf med tekst.</a> Paragraf med tekst</p>
          <ul >
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
    },
    argTypes: {
      label: { control: 'text' },
      helpText: { control: 'text' },
      errorMessage: { control: 'text' },
      disableCss: { control: 'boolean' }
    }
  })
</script>

<Story name="Normal">
  {#snippet children({ title, intro, legalItems, text, tableOfContents, disableCss })}
    <div use:wrapInShadowDom={disableCss} class="container layout-grid layout-grid--column-12">
      <article class="article-page col-1-span-12 legal-guidance">
        <h1 class="mt-h1">{title}</h1>
        <div class="intro">
          <p>{intro}</p>
        </div>

        <section class="table-of-contents" aria-labelledby="table-of-contents">
          <h2 id="table-of-contents" class="mt-h4">
            {tableOfContents}
          </h2>
          <ol class="mt-ol m-t-xxs list-unstyled">
            {#each legalItems as legal}
              <li>
                <a href="#{toKebabCase(legal.title)}" class="mt-link down-arrow">{legal.title}</a>
              </li>
            {/each}
          </ol>
        </section>

        {@html text}

        {#each legalItems as legal}
          <article
            id={toKebabCase(legal.title)}
            class="legal-collection legal-collection__border-top col-1-span-12"
            aria-labelledby="collection-title-1">
            <h2 id="collection-title-1" class="mt-h2">{legal.title}</h2>

            <div class="intro">
              {legal.intro}
            </div>

            {@html legal.text}

            <section class="article-page children-full-width" aria-labelledby="how-to-heading-1">
              <h3 id="how-to-heading-1" class="mt-h3">
                {legal.howToDoItTitle}
              </h3>
              {@html legal.howToDoIt}
              <CardArticle
                type="task"
                class="background-mt-white"
                title="Dette er tittelen"
                text="Noe tekst i kroppen"
                linkUrl="http://"
                linkText="Last ned mal for internkontroll"
                headerTag="h4" />
            </section>

            <section class="layout-flex-col layout-flex-col--x-small">
              <SummaryDetail
                title="Regelverk"
                detailsClass="color-neutral border-neutral"
                summaryWrapperClass="background-mt-white layout-flex-col gap-13">
                <CardArticle
                  type="legal-text"
                  title="Dette er tittelen"
                  text="Noe tekst i kroppen"
                  linkUrl="http://"
                  linkText="Last ned mal for internkontroll" />
                <CardArticle
                  type="legal-text"
                  title="Dette er tittelen"
                  text="Noe tekst i kroppen"
                  linkUrl="http://"
                  linkText="Last ned mal for internkontroll" />
              </SummaryDetail>
            </section>
          </article>
        {/each}
      </article>
    </div>
  {/snippet}
</Story>
