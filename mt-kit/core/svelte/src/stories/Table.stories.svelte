<script lang="ts" module>
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import Published from '$lib/svelte/components/Published.svelte'
  import { wrapInShadowDom } from './storybook-utils/utils'
  import Table from '$lib/svelte/components/Table.svelte'
  import { styles } from '@mattilsynet/design'

  const { Story } = defineMeta({
    title: 'Components/Tabell',
    args: {
      intro: `<p>Paragraf med tekst. Paragraf med tekst.`,
      statusTitle: `Status tittel`,
      text: `<p>Status tekst</p>
<table class="${styles.table}" data-fixed data-mobile="stacked" data-size="sm" style='--spacer-large: 0'>
<caption>Dette er tittelen til tabellen</caption>
<thead>
<tr>
<th>Kolonne 1</th>
<th>Kolonne 2</th>
<th>Kolonne 3</th>
<th>Kolonne 4</th>
<th>Kolonne 5</th>
<th>Kolonne 6</th>
</tr>
</thead>
<tbody>
<tr>
<td>Rad 1</td>
<td><p>Rad 1 - med beskrivende tekst</p></td>
<td>Rad 1 - med mer beskrivende tekst</td>
<td>Rad 1</td>
<td><p>Rad 1 med en lang beskrivende og status tekst</p></td>
<td>Rad 1</td>
</tr>
<tr>
<td>Rad 2</td>
<td>Rad 2 - med beskrivende tekst</td>
<td>Rad 2 - med mer beskrivende tekst</td>
<td><p>Rad 2</p> <ul><li>liste item 1</li><li>liste item 2</li></ul></td>
<td>Rad 2 med en lang beskrivende og status tekst </td>
<td>Rad 2</td>
</tr>
</tr>
<tr>
<td>Rad 3</td>
<td>Rad 3 - med beskrivende tekst</td>
<td>Rad 3 - med mer beskrivende tekst</td>
<td>Rad 3</td>
<td>Rad 3 med en lang beskrivende og status tekst </td>
<td>Rad 3</td>
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
    },
    argTypes: {
      intro: { control: 'text' },
      publishFrom: { control: 'text' },
      professionallyUpdated: { control: 'text' },
      disableCss: { control: 'boolean' }
    }
  })
</script>

<Story name="Normal">
  {#snippet children({
    publishFrom,
    professionallyUpdated,
    intro,
    text,
    statusTitle,
    headers,
    rows,
    disableCss
  })}
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
        <Table
          class="testClass"
          caption="Testcaption"
          captionClass="testCaptionClass"
          {headers}
          {rows}
          style="--spacer-large: var(--spacer-x-small)">
          {#snippet headersSlot(header)}
            <th class={`${header.class || ''}`}>
              {header.text}
            </th>
          {/snippet}
          {#snippet rowSlot(row)}
            <tr>
              <td>{row.tittel1}</td>
              <td>{@html row.tittel2}</td>
              <td>{row.tittel3}</td>
            </tr>
          {/snippet}
        </Table>
        <h2 class="p-t-s mt-h2">Tabell uten bruk av komponenter</h2>
        {@html text}
      </article>
    </div>
  {/snippet}
</Story>
