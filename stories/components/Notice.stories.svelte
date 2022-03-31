<script lang="ts">
  import {Meta, Story} from '@storybook/addon-svelte-csf'
  import Notice from '../../src/svelte/Notice.svelte'
</script>

<Meta
  title="Components/Notice"
  args={{
    text: `<p>Haster det? Er det fare for at dyr dør eller blir påført store belastninger. Ring mattilsynet på tlf. <a href="tel:22400000">22 40 00 00</a> eller politiet <a href="tel:02800">02800</a></p>`,
    text2: `<p><strong>Ring politiet på tlf. 02800 hvis du</strong></p>
<ul >
  <li >har kjørt på et dyr</li>
  <li >har funnet et sykt, skadd eller hjelpeløst dyr</li>
  <li >vil varsle om farlige eller ulovlige hunder</li>
  <li >vil varsle om dyr som forstyrrer ro og orden</li>
</ul>`,
    disabled: false,
    disableJs: false,
    disableCss: false
  }}
  argTypes={{
    disabled: {control: 'boolean'},
    disableJs: {control: 'boolean'},
    disableCss: {control: 'boolean'}
  }} />

<Story name="Normal" let:text let:text2 let:disableCss>
  <main class="container layout-flex-col">
    <h1>Varseltekst</h1>
    <section class="layout-flex-col">
      <h2>Med varsel icon</h2>
      <Notice infoType="important" {text} />
      <Notice infoType="important" text={text2} />
    </section>
    <section class="layout-flex-col">
      <h2>Uten icon</h2>
      <Notice infoType="none" {text} />
    </section>
  </main>
</Story>

<style lang="scss">
  main {
    --gap: var(--spacer-medium);
  }
  section {
    --gap: var(--spacer-xx-small);
  }
</style>
