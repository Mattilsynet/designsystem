<script lang="ts">
  import { Meta, Story } from '@storybook/addon-svelte-csf'
  import HighlightedContentLink from '../../lib/svelte/content/HighlightedContentLink.svelte'
  import imageFile from '../assets/testbilde.jpg'
  import { wrapInShadowDom } from '../storybook-utils/utils'
</script>

<Meta
  title="Innhold/Fremhevet innhold"
  args={{
    text: `<p>Haster det? Er det fare for at dyr dør eller blir påført store belastninger. Ring mattilsynet på tlf. <a href="tel:22400000">22 40 00 00</a> eller politiet <a href="tel:02800">02800</a></p>`,
    title: `<h3 class="heading">Tilsyn med småfe</h3>`,
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
  }}
/>

<Story name="Normal" let:text let:disableCss let:title let:shortTitle let:date>
  <main use:wrapInShadowDom={disableCss} class="container layout-flex-col">
    <h1>Fremhevet innhold med bilde</h1>
    <section class="layout-flex-col">
      <HighlightedContentLink
        href="https://www.mattilsyent.no"
        image={{ src: imageFile, alt: 'Her er alt tekst til bildet' }}
        headingClass="h3"
        title="Dette er tittelen"
        shortTitle="Dette er kort tittel"
      >
        {@html text}
      </HighlightedContentLink>
    </section>

    <h2>Fremhevet innhold uten bilde</h2>
    <section class="layout-flex-col">
      <HighlightedContentLink
        href="https://www.mattilsyent.no"
        headingClass="h3"
        title="Dette er tittelen"
        shortTitle="Dette er kort tittel"
      >
        {@html text}
      </HighlightedContentLink>
    </section>
  </main>
</Story>

<Story name="Blå type" let:text let:disableCss let:title let:shortTitle let:date>
  <main use:wrapInShadowDom={disableCss} class="container layout-flex-col">
    <h1>Fremhevet innhold blå type</h1>
    <section class="layout-flex-col">
      <HighlightedContentLink
        displayType="blue"
        href="https://www.mattilsyent.no"
        image={{ src: imageFile, alt: 'Her er alt tekst til bildet' }}
        headingClass="h3"
        title="Dette er tittelen"
        shortTitle="Dette er kort tittel"
      >
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
