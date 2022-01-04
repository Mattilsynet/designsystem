<script lang="ts">
  import {Meta, Story} from '@storybook/addon-svelte-csf';
  import HighlightedContentLink from '../../src/svelte/HighlightedContentLink.svelte';
  import imageFile from '../../.static/testbilde.jpg';
</script>

<Meta
  title="Components/Fremhevet innhold"
  args={{
    text: `<p>Haster det? Er det fare for at dyr dør eller blir påført store belastninger. Ring mattilsynet på tlf. <a href="tel:22400000">22 40 00 00</a> eller politiet <a href="tel:02800">02800</a></p>`,
    heading: `<h3 class="heading">Tilsyn med småfe</h3>`,
    disableJs: false,
    disableCss: false
  }}
  argTypes={{
    text: {control: 'string'},
    heading: {control: 'string'},
    disableJs: {control: 'boolean'},
    disableCss: {control: 'boolean'}
  }}
/>

<Story name="Normal" let:text let:disableCss let:heading let:date>
  <main class="container layout-flex-col">
    <h1>Fremhevet innhold med bilde</h1>
    <section class="layout-flex-col">
      <HighlightedContentLink
        href="https://www.mattilsyent.no"
        image={{src: imageFile, alt: 'Her er alt tekst til bildet'}}
        headingClass="h3"
        heading="Dette er tittelen"
      >
        {@html text}
      </HighlightedContentLink>
    </section>

    <h2>Fremhevet innhold uten bilde</h2>
    <section class="layout-flex-col">
      <HighlightedContentLink href="https://www.mattilsyent.no" headingClass="h3" heading="Dette er tittelen">
        {@html text}
      </HighlightedContentLink>
    </section>
  </main>
</Story>

<style lang="scss">
  main {
    --gap: var(--spacer-small);
  }
  h2 {
    margin-top: var(--spacer-medium);
  }
  section {
    --gap: var(--spacer-xx-small);
  }
</style>
