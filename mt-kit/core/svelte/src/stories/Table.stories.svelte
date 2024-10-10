<script lang="ts">
  import { Meta, Story } from '@storybook/addon-svelte-csf'
  import Published from '$lib/svelte/components/Published.svelte'
  import { wrapInShadowDom } from './storybook-utils/utils'
  import Table from '$lib/svelte/components/Table.svelte'
  import TableCol from '$lib/svelte/components/TableCol.svelte'
</script>

<Meta
  title="Components/Tabell"
  args={{
    intro: `<p>Paragraf med tekst. Paragraf med tekst.`,
    statusTitle: `Status tittel`,
    text: `<p>Status tekst</p>
<table role="table" class="mt-table" style='--spacer-large: 0'>
<caption class="mt-caption">Dette er tittelen til tabellen</caption>
<thead class="mt-thead">
<tr role="row" class="mt-tr">
<th role="columnheader" scope="col" class="mt-th">Kolonne 1</th>
<th role="columnheader" scope="col" class="mt-th">Kolonne 2</th>
<th role="columnheader" scope="col" class="mt-th">Kolonne 3</th>
<th role="columnheader" scope="col" class="mt-th">Kolonne 4</th>
<th role="columnheader" scope="col" class="mt-th">Kolonne 5</th>
<th role="columnheader" scope="col" class="mt-th">Kolonne 6</th>
</tr>
</thead>
<tbody class="mt-tbody">
<tr role="row" class="mt-tr">
<td class="mt-td text" role="cell"><span class="responsive-table__heading" aria-hidden="true">Rad 1 tittel 1:</span>Rad 1</td>
<td class="mt-td text" role="cell"><span class="responsive-table__heading" aria-hidden="true">Rad 1 tittel 2:</span><p>Rad 1 - med beskrivende tekst</p></td>
<td class="mt-td text" role="cell"><span class="responsive-table__heading" aria-hidden="true">Rad 1 tittel 3:</span>Rad 1 - med mer beskrivende tekst</td>
<td class="mt-td text" role="cell"><span class="responsive-table__heading" aria-hidden="true">Rad 1 tittel 4:</span>Rad 1</td>
<td class="mt-td text" role="cell"><span class="responsive-table__heading" aria-hidden="true">Rad 1 tittel 5:</span><p>Rad 1 med en lang beskrivende og status tekst</p></td>
<td class="mt-td text" role="cell"><span class="responsive-table__heading" aria-hidden="true">Rad 1 tittel 6:</span>Rad 1</td>
</tr>
<tr role="row" class="mt-tr">
<td class="mt-td text" role="cell"><span class="responsive-table__heading" aria-hidden="true">Rad 2 tittel 1:</span>Rad 2</td>
<td class="mt-td text" role="cell"><span class="responsive-table__heading" aria-hidden="true">Rad 2 tittel 2:</span>Rad 2 - med beskrivende tekst</td>
<td class="mt-td text" role="cell"><span class="responsive-table__heading" aria-hidden="true">Rad 2 tittel 3:</span>Rad 2 - med mer beskrivende tekst</td>
<td class="mt-td text" role="cell"><span class="responsive-table__heading" aria-hidden="true">Rad 2 tittel 4:</span><p>Rad 2</p> <ul><li>liste item 1</li><li>liste item 2</li></ul></td>
<td class="mt-td text" role="cell"><span class="responsive-table__heading" aria-hidden="true">Rad 2 tittel 5:</span>Rad 2 med en lang beskrivende og status tekst </td>
<td class="mt-td text" role="cell"><span class="responsive-table__heading" aria-hidden="true">Rad 2 tittel 6:</span>Rad 2</td>
</tr>
</tr>
<tr role="row" class="mt-tr">
<td class="mt-td text" role="cell"><span class="responsive-table__heading" aria-hidden="true">Rad 3 tittel 1:</span>Rad 3</td>
<td class="mt-td text" role="cell"><span class="responsive-table__heading" aria-hidden="true">Rad 3 tittel 2:</span>Rad 3 - med beskrivende tekst</td>
<td class="mt-td text" role="cell"><span class="responsive-table__heading" aria-hidden="true">Rad 3 tittel 3:</span>Rad 3 - med mer beskrivende tekst</td>
<td class="mt-td text" role="cell"><span class="responsive-table__heading" aria-hidden="true">Rad 3 tittel 4:</span>Rad 3</td>
<td class="mt-td text" role="cell"><span class="responsive-table__heading" aria-hidden="true">Rad 3 tittel 5:</span>Rad 3 med en lang beskrivende og status tekst </td>
<td class="mt-td text" role="cell"><span class="responsive-table__heading" aria-hidden="true">Rad 3 tittel 6:</span>Rad 3</td>
</tr>
</tbody>
</table>`,
    headers: [
      { text: 'Kolonne 1', class: 'width-20' },
      { text: 'Kolonne 2', class: '' },
      { text: 'Kolonne 3', class: 'width-20' }
    ],
    rows: [
      {
        tittel1: 'Rad 1 kolonne 1',
        tittel2: 'Rad 1 kolonne 2 - med beskrivende tekst',
        tittel3: 'Rad 1 kolonne 3 - med mer beskrivende tekst'
      },
      {
        tittel1: 'Rad 2 kolonne 1',
        tittel2: 'Rad 2 kolonne 2 - med beskrivende tekst',
        tittel3: 'Rad 2 kolonne 3 - med mer beskrivende tekst'
      },
      {
        tittel1: 'Rad 3 kolonne 1',
        tittel2:
          'Rad 3 kolonne 2 - <p>Rad 2</p> <ul><li>liste item 1</li><li>liste item 2</li></ul>',
        tittel3: 'Rad 3 kolonne 3 - med mer beskrivende tekst'
      }
    ],
    publishFrom: '2021-06-24T11:40:02.889Z',
    professionallyUpdated: '2021-06-24T11:32:22Z',
    disableCss: false
  }}
  argTypes={{
    intro: { control: 'text' },
    publishFrom: { control: 'text' },
    professionallyUpdated: { control: 'text' },
    disableCss: { control: 'boolean' }
  }} />

<Story
  name="Normal"
  let:publishFrom
  let:professionallyUpdated
  let:intro
  let:text
  let:statusTitle
  let:headers
  let:rows
  let:disableCss>
  <div use:wrapInShadowDom={disableCss} class="container layout-grid layout-grid--column-12">
    <article class="article-page new-thing col-1-span-12">
      <h1 class="mt-h1">Publisert og faglig oppdatert er samme dato</h1>
      <div class="intro">
        {@html intro}
      </div>
      <Published {publishFrom} {professionallyUpdated} />
      <div class="m-t-m" id="list-title" role="status" aria-live="polite">
        {statusTitle}
      </div>
      <Table {headers} {rows} style="--spacer-large: var(--spacer-x-small)">
        <th slot="headers" let:header role="columnheader" scope="col" class="mt-th {header.class}">
          {header.text}
        </th>
        <tr class="mt-tr" slot="row" let:row>
          <TableCol header={headers[0]?.text}>{row.tittel1}</TableCol>
          <TableCol header={headers[1]?.text}>{@html row.tittel2}</TableCol>
          <TableCol header={headers[2]?.text}>{row.tittel3}</TableCol>
        </tr>
      </Table>
      <h2 class="p-t-s mt-h2">Tabell uten bruk av komponenter</h2>
      {@html text}
    </article>
  </div>
</Story>
