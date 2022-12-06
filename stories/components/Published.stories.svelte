<script lang="ts">
  import {Meta, Story} from '@storybook/addon-svelte-csf'
  import Published from '../../src/svelte/Published.svelte'
  import Status from '../../src/svelte/Status.svelte'
  import {wrapInShadowDom} from '../utils'
</script>

<Meta
  title="Components/Publisert"
  args={{
    intro: `<p>Paragraf med tekst. Paragraf med tekst.`,
    statusTitle: `Status tittel`,
    text: `<p>Status tekst</p>`,
    publishFrom: '2021-06-24T11:40:02.889Z',
    professionallyUpdated: '2021-06-24T11:32:22Z',
    disableCss: false
  }}
  argTypes={{
    intro: {control: 'text'},
    publishFrom: {control: 'text'},
    professionallyUpdated: {control: 'text'},
    disableCss: {control: 'boolean'}
  }} />

<Story
  name="Normal"
  let:publishFrom
  let:professionallyUpdated
  let:intro
  let:text
  let:statusTitle
  let:disableCss>
  <div use:wrapInShadowDom={disableCss} class="container layout-grid layout-grid--column-12">
    <article class="article-page col-3-span-8">
      <h1>Publisert og faglig oppdatert er samme dato</h1>
      <div class="intro">
        {@html intro}
      </div>
      <Published {publishFrom} {professionallyUpdated} />
      <hr />
      <h2>Faglig oppdatert er etter publisert</h2>
      <div class="intro">
        {@html intro}
      </div>
      <Published {publishFrom} professionallyUpdated="2021-07-24T11:32:22Z" />
      <hr />
      <h2>Status viser alltid oppdatert</h2>
      <Status statusType={'important'} updatedDate={publishFrom} {text}>
        <h3 slot="heading">{statusTitle}</h3>
      </Status>
    </article>
  </div>
</Story>
