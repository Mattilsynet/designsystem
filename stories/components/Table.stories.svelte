<script lang="ts">
  import {Meta, Story} from '@storybook/addon-svelte-csf'
  import Published from '../../src/svelte/Published.svelte'
</script>

<Meta
  title="Components/Tabell"
  args={{
    intro: `<p>Paragraf med tekst. Paragraf med tekst.`,
    statusTitle: `Status tittel`,
    text: `<p>Status tekst</p>
<table role="table">
<caption>Dette er tittlen til tabelleb</caption>
<thead>
<tr role="row">
<th role="columnheader" scope="col">Tittel 1</th>
<th role="columnheader" scope="col">Tittel 2</th>
<th role="columnheader" scope="col">Tittel 3</th>
<th role="columnheader" scope="col">Tittel 4</th>
<th role="columnheader" scope="col">Tittel 5</th>
<th role="columnheader" scope="col">Tittel 6</th>
</tr>
</thead>
<tbody>
<tr role="row">
<td role="cell"><span class="responsive-table__heading" aria-hidden="true">Tittel 1:</span>en</td>
<td role="cell"><span class="responsive-table__heading" aria-hidden="true">Tittel 2:</span>en asdf asdf asdf asdfsadf dsf asdfdsdaffdaf asdfasf</td>
<td role="cell"><span class="responsive-table__heading" aria-hidden="true">Tittel 3:</span>en asf a dfasd adsffas a</td>
<td role="cell"><span class="responsive-table__heading" aria-hidden="true">Tittel 4:</span>en</td>
<td role="cell"><span class="responsive-table__heading" aria-hidden="true">Tittel 5:</span>en asdfasd fadsfasd fasdf asdf asdf asd fasd fasdf </td>
<td role="cell"><span class="responsive-table__heading" aria-hidden="true">Tittel 6:</span>en</td>
</tr>
<tr role="row">
<td role="cell"><span class="responsive-table__heading" aria-hidden="true">Tittel 1:</span>to</th>
<td role="cell"><span class="responsive-table__heading" aria-hidden="true">Tittel 2:</span>to</td>
<td role="cell"><span class="responsive-table__heading" aria-hidden="true">Tittel 3:</span>to asdfasdf asdf asdf asdffds adsf</td>
<td role="cell"><span class="responsive-table__heading" aria-hidden="true">Tittel 4:</span>to asdf adsfads fasdf asdf asfd asdf asf asdf e4awfsdfvasd sfv er</td>
<td role="cell"><span class="responsive-table__heading" aria-hidden="true">Tittel 5:</span>to</td>
<td role="cell"><span class="responsive-table__heading" aria-hidden="true">Tittel 6:</span>toa sdfasdf aerf wasdf asdf RFAEGSDFGA SDFDAsdf gafd ss</td>
</tr>
<tr>
<td role="cell"><span class="responsive-table__heading" aria-hidden="true">Tittel 1:</span>to</td>
<td role="cell"><span class="responsive-table__heading" aria-hidden="true">Tittel 2:</span>to</td>
<td role="cell"><span class="responsive-table__heading" aria-hidden="true">Tittel 3:</span>to asdfasdf asdf asdf asdffds adsf</td>
<td role="cell"><span class="responsive-table__heading" aria-hidden="true">Tittel 4:</span>to asdf adsfads fasdf asdf asfd asdf asf asdf e4awfsdfvasd sfv er</td>
<td role="cell"><span class="responsive-table__heading" aria-hidden="true">Tittel 5:</span>to</td>
<td role="cell"><span class="responsive-table__heading" aria-hidden="true">Tittel 6:</span>toa sdfasdf aerf wasdf asdf RFAEGSDFGA SDFDAsdf gafd ss</td>
</tr>
</tbody>
</table>`,
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

<Story name="Normal" let:publishFrom let:professionallyUpdated let:intro let:text let:statusTitle>
  <div class="container layout-grid layout-grid--column-12">
    <article class="article-page new-thing col-1-span-12">
      <h1>Publisert og faglig oppdatert er samme dato</h1>
      <div class="intro">
        {@html intro}
      </div>
      <Published {publishFrom} {professionallyUpdated} />
      {@html text}
    </article>
  </div>
</Story>
