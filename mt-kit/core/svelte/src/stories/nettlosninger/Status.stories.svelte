<script lang="ts">
  import { Meta, Story } from '@storybook/addon-svelte-csf'
  import Status from '../../lib/svelte/content/Status.svelte'
</script>

<Meta
  title="Innhold/Status"
  args={{
    title: 'Dette er viktig',
    text: '<p>Dette er en melding om at det har skjedd noe</p><h3 class="mt-h3">Overkrift</h3><p>Mer tekst kommer her</p>',
    actionsTakenByMattilsynet:
      '<p>Dette er gjør Mattilsynet</p><h3 class="mt-h3">Overkrift</h3><p>Mer tekst kommer her</p>',
    statusType: 'important',
    linkUrl: 'https://www.mattilsynet.no',
    linkText: 'Mattilsynet',
    linkIsExternal: true,
    publishFrom: '2021-06-24T11:40:02.889Z',
    professionallyUpdated: '2021-06-26T11:32:22Z',
    disableCss: false
  }}
  argTypes={{
    title: { control: 'text' },
    text: { control: 'text' },
    actionsTakenByMattilsynet: { control: 'text' },
    statusType: 'important',
    linkUrl: { control: 'text' },
    linkText: { control: 'text' },
    linkIsExternal: { control: 'boolean' },
    disableCss: { control: 'boolean' }
  }} />

<Story
  name="Normal"
  let:title
  let:text
  let:actionsTakenByMattilsynet
  let:linkUrl
  let:linkText
  let:linkIsExternal
  let:disableCss
  let:publishFrom
  let:professionallyUpdated>
  <div class="container layout-grid layout-grid--column-12">
    <article class="col-3-span-8">
      <h1 class="mt-h1">Status med tekst, "hva gjør Mattilsynet" og link</h1>
      <Status
        {text}
        {actionsTakenByMattilsynet}
        {linkUrl}
        {linkText}
        {linkIsExternal}
        updatedDate={professionallyUpdated}
        statusType="important">
        <h2 slot="heading" class="mt-h2">{title}</h2>
      </Status>

      <h1 class="mt-h1 margin-top">Status med tekst og link</h1>
      <Status {text} {linkUrl} {linkText} {linkIsExternal} statusType="none">
        <h2 slot="heading" class="mt-h2">{title}</h2>
      </Status>
    </article>
  </div>
</Story>

<style lang="scss">
  .margin-top {
    margin-top: var(--spacer-medium);
  }
</style>
