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
<caption>Dette er tittelen til tabellen</caption>
<thead>
<tr role="row">
<th role="columnheader" scope="col">Kolonne 1</th>
<th role="columnheader" scope="col">Kolonne 2</th>
<th role="columnheader" scope="col">Kolonne 3</th>
<th role="columnheader" scope="col">Kolonne 4</th>
<th role="columnheader" scope="col">Kolonne 5</th>
<th role="columnheader" scope="col">Kolonne 6</th>
</tr>
</thead>
<tbody>
<tr role="row">
<td role="cell"><span class="responsive-table__heading" aria-hidden="true">Rad 1 tittel 1:</span>Rad 1</td>
<td role="cell"><span class="responsive-table__heading" aria-hidden="true">Rad 1 tittel 2:</span>Rad 1 - med beskrivende tekst</td>
<td role="cell"><span class="responsive-table__heading" aria-hidden="true">Rad 1 tittel 3:</span>Rad 1 - med mer beskrivende tekst</td>
<td role="cell"><span class="responsive-table__heading" aria-hidden="true">Rad 1 tittel 4:</span>Rad 1</td>
<td role="cell"><span class="responsive-table__heading" aria-hidden="true">Rad 1 tittel 5:</span>Rad 1 med en lang beskrivende og status tekst </td>
<td role="cell"><span class="responsive-table__heading" aria-hidden="true">Rad 1 tittel 6:</span>Rad 1</td>
</tr>
<tr role="row">
<td role="cell"><span class="responsive-table__heading" aria-hidden="true">Rad 2 tittel 1:</span>Rad 2</td>
<td role="cell"><span class="responsive-table__heading" aria-hidden="true">Rad 2 tittel 2:</span>Rad 2 - med beskrivende tekst</td>
<td role="cell"><span class="responsive-table__heading" aria-hidden="true">Rad 2 tittel 3:</span>Rad 2 - med mer beskrivende tekst</td>
<td role="cell"><span class="responsive-table__heading" aria-hidden="true">Rad 2 tittel 4:</span>Rad 2</td>
<td role="cell"><span class="responsive-table__heading" aria-hidden="true">Rad 2 tittel 5:</span>Rad 2 med en lang beskrivende og status tekst </td>
<td role="cell"><span class="responsive-table__heading" aria-hidden="true">Rad 2 tittel 6:</span>Rad 2</td>
</tr>
</tr>
<tr role="row">
<td role="cell"><span class="responsive-table__heading" aria-hidden="true">Rad 3 tittel 1:</span>Rad 3</td>
<td role="cell"><span class="responsive-table__heading" aria-hidden="true">Rad 3 tittel 2:</span>Rad 3 - med beskrivende tekst</td>
<td role="cell"><span class="responsive-table__heading" aria-hidden="true">Rad 3 tittel 3:</span>Rad 3 - med mer beskrivende tekst</td>
<td role="cell"><span class="responsive-table__heading" aria-hidden="true">Rad 3 tittel 4:</span>Rad 3</td>
<td role="cell"><span class="responsive-table__heading" aria-hidden="true">Rad 3 tittel 5:</span>Rad 3 med en lang beskrivende og status tekst </td>
<td role="cell"><span class="responsive-table__heading" aria-hidden="true">Rad 3 tittel 6:</span>Rad 3</td>
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
