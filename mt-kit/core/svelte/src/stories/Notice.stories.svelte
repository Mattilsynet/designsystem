<script lang="ts" module>
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import Notice from '$lib/svelte/components/Notice.svelte'
  import { wrapInShadowDom } from './storybook-utils/utils'

  const { Story } = defineMeta({
    title: 'Components/Notice',
    args: {
      text: `<p>Haster det? Er det fare for at dyr dør eller blir påført store belastninger. Ring mattilsynet på tlf. <a class='mt-link'href='tel:22400000'>22 40 00 00</a> eller politiet <a class='mt-link'href='tel:02800'>02800</a></p>`,
      text2: `<p><strong>Ring politiet på tlf. 02800 hvis du</strong></p>
<ul >
  <li >har kjørt på et dyr</li>
  <li >har funnet et sykt, skadd eller hjelpeløst dyr</li>
  <li >vil varsle om farlige eller ulovlige hunder</li>
  <li >vil varsle om dyr som forstyrrer ro og orden</li>
</ul>`,
      iconText: 'Denne teksten er skjult',
      disabled: false,
      disableJs: false,
      disableCss: false
    },
    argTypes: {
      disabled: { control: 'boolean' },
      disableJs: { control: 'boolean' },
      disableCss: { control: 'boolean' }
    }
  })
</script>

<Story name="Normal">
  {#snippet children({ text, text2, disableCss, iconText })}
    <main use:wrapInShadowDom={disableCss} class="mt-main container layout-flex-col">
      <h1 class="mt-h1">Varseltekst</h1>
      <section class="layout-flex-col">
        <h2 class="mt-h2">Med varsel icon</h2>
        <Notice infoType="important" {text} {iconText} />
        <Notice infoType="important" text={text2} />
      </section>
      <section class="layout-flex-col">
        <h2 class="mt-h2">Uten icon</h2>
        <Notice infoType="none" {text} />
      </section>
    </main>
  {/snippet}
</Story>

<style lang="scss">
  main {
    --gap: var(--spacer-medium);
  }

  section {
    --gap: var(--spacer-xx-small);
  }
</style>
