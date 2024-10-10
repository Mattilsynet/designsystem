<script lang="ts">
  import { Meta, Story } from '@storybook/addon-svelte-csf'
  import HighlightedContentLink from '$lib/svelte/content/HighlightedContentLink.svelte'
  import imageFile from '../assets/testbilde.jpg'
  import { wrapInShadowDom } from '../storybook-utils/utils'
</script>

<Meta
  title="Innhold/Fremhevet innhold"
  args={{
    text: `<p>Haster det? Er det fare for at dyr dør eller blir påført store belastninger. Ring mattilsynet på tlf. <a class="mt-link" href="tel:22400000">22 40 00 00</a> eller politiet <a class="mt-link" href="tel:02800">02800</a></p>`,
    title: `<h3 class="mt-h3 heading">Tilsyn med småfe</h3>`,
    shortTitle: `<h3 class="heading">Tilsyn med småfe</h3>`,
    disableJs: false,
    disableCss: false
  }}
  argTypes={{
    text: { control: 'string' },
    title: { control: 'string' },
    shortTitle: { control: 'string' },
    disableJs: { control: 'boolean' },
    disableCss: { control: 'boolean' }
  }} />

<Story name="Normal" let:text let:disableCss let:title let:shortTitle let:date>
  <main use:wrapInShadowDom={disableCss} class="mt-main container layout-flex-col">
    <h1 class="mt-h1">Fremhevet innhold med bilde</h1>
    <section class="layout-flex-col">
      <HighlightedContentLink
        displayType="normal"
        href="https://www.mattilsynet.no"
        image={{ src: imageFile, alt: 'Her er alt tekst til bildet' }}
        headingClass="mt-h3"
        title="Dette er tittelen"
        shortTitle="Dette er kort tittel">
        {@html text}
      </HighlightedContentLink>
    </section>

    <h2 class="mt-h2">Fremhevet innhold uten bilde</h2>
    <section class="layout-flex-col">
      <HighlightedContentLink
        displayType="normal"
        href="https://www.mattilsynet.no"
        headingClass="mt-h3"
        title="Dette er tittelen"
        shortTitle="Dette er kort tittel">
        {@html text}
      </HighlightedContentLink>
    </section>
  </main>
</Story>

<Story name="CTA type" let:text let:disableCss let:title let:shortTitle let:date>
  <main use:wrapInShadowDom={disableCss} class="mt-main container layout-flex-col">
    <h1 class="mt-h1">Fremhevet innhold CTA type</h1>
    <section class="layout-flex-col">
      <HighlightedContentLink
        displayType="cta"
        href="https://www.mattilsynet.no"
        image={{ src: imageFile, alt: 'Her er alt tekst til bildet' }}
        headingClass="mt-h3"
        title="Dette er tittelen"
        shortTitle="Dette er kort tittel">
        {@html text}
      </HighlightedContentLink>
    </section>
  </main>
</Story>
<br />
<Story name="CTA type" let:text let:disableCss let:title let:shortTitle let:date>
  <main use:wrapInShadowDom={disableCss} class="mt-main container layout-flex-col">
    <h1 class="mt-h1">Fremhevet innhold CTA type med ekstern lenke</h1>
    <section class="layout-flex-col">
      <HighlightedContentLink
        displayType="cta"
        href="https://www.nav.no"
        image={{ src: imageFile, alt: 'Her er alt tekst til bildet' }}
        headingClass="mt-h3"
        title="Dette er tittelen"
        shortTitle="Dette er kort tittel">
        {@html text}
      </HighlightedContentLink>
    </section>
  </main>
</Story>
<Story name="Campaign" let:text let:disableCss let:title let:shortTitle let:date>
  <h2 class="mt-h2">Fremhevet innhold - promotion</h2>
  <main
    use:wrapInShadowDom={disableCss}
    class="mt-main container layout-grid layout-grid--column-12">
    <section class="col-1-span-12 layout-grid layout-grid--column-12 highlighted">
      <HighlightedContentLink
        displayType="campaign"
        href="https://www.mattilsynet.no"
        class="col-1-span-12 layout-grid layout-grid--column-12"
        image={{ src: imageFile, alt: 'Her er alt tekst til bildet' }}
        headingClass="mt-h3"
        title="Dette er tittelen"
        shortTitle="Dette er kort tittel">
        {@html text}
      </HighlightedContentLink>
    </section>
  </main>
</Story>

<style lang="scss">
  main {
    --gap: var(--spacer-x-small);
  }
  h2 {
    margin-top: var(--spacer-small);
  }
  section {
    --gap: var(--spacer-xx-small);
  }
</style>
