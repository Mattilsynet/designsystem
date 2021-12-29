<script lang="ts">
  import {Meta, Story} from '@storybook/addon-svelte-csf'
  import Status from '../../../src/svelte/Status.svelte'
</script>

<Meta
  title="Innhold/Status"
  args={{
    title: 'Dette er viktig',
    text: 'Dette er en melding om at det har skjedd noe',
    actionsTakenByMattilsynet: 'Dette er gjør Mattilsynet',
    statusType: 'important',
    linkUrl: 'https://www.mattilsynet.no',
    linkText: 'Mattilsynet',
    linkIsExternal: true,
    publishFrom: '2021-06-24T11:40:02.889Z',
    professionallyUpdated: '2021-06-24T11:32:22Z',
    disableCss: false
  }}
  argTypes={{
    title: {control: 'text'},
    text: {control: 'text'},
    actionsTakenByMattilsynet: {control: 'text'},
    statusType: 'important',
    linkUrl: {control: 'text'},
    linkText: {control: 'text'},
    linkIsExternal: {control: 'boolean'},
    disableCss: {control: 'boolean'}
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
    <article class="article-page col-1-span-12">
      <h1>Status med tekst, "hva gjør Mattilsynet" og link</h1>
      <Status
        {text}
        {actionsTakenByMattilsynet}
        {linkUrl}
        {linkText}
        {linkIsExternal}
        statusType="important">
        <h2 slot="heading">{title}</h2>
      </Status>
      <h1 class="margin-top">Status med tekst og link</h1>
      <Status {text} {linkUrl} {linkText} {linkIsExternal} statusType="none">
        <h2 slot="heading">{title}</h2>
      </Status>
    </article>
  </div>
</Story>

<style lang="scss">
  .margin-top {
    margin-top: var(--spacer-large);
  }
</style>
