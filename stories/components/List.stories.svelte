<script lang="ts">
  import {Meta, Story} from '@storybook/addon-svelte-csf'

  import Tags from '../../src/svelte/components/Tags.svelte'
</script>

<Meta
  title="Components/List"
  args={{
    title: 'A two coloured modern document list with hyper text links.',
    colorScheme: {
      PDF: 'lightblue',
      Word: 'lightblue',
      Altinn: 'yellowgreen',
      'Matilsynets skjema': 'beige'
    },
    content: [
      {
        url: '?content=1',
        displayName: 'Rekvisisjon, meieri',
        type: 'Matilsynets skjema'
      },
      {
        url: '?content=2',
        displayName:
          'Ny matbedrift og/eller import, produksjon og engrossalg av matkontaktmaterialer',
        type: 'PDF'
      },
      {
        url: '?content=3',
        displayName: 'Ny importør av næringsmidler',
        type: 'Altinn'
      },
      {
        url: '?content=5',
        displayName: 'Vannkvalitet'
      },
      {
        url: '?content=4',
        displayName:
          'Endre informasjon om Ny matbedrift og/eller import, produksjon og engrossalg av matkontaktmaterialer',
        type: 'Word'
      }
    ],
    disableCss: false
  }}
  argTypes={{
    title: {control: 'text'},
    content: {control: 'array'},
    disableCss: {control: 'boolean'}
  }} />

<Story name="Normal" let:args let:disableCss let:disabled let:secondary let:colorScheme>
  <h1>Dokument liste</h1>
  <ol class="list list-unstyled">
    {#each args.content as item}
      <li class="layout-flex layout-flex--no-wrap layout-flex--space-between">
        <a href={item.url}>{item.displayName}</a>
        {#if item.type}
          <Tags
            tags={[
              {
                text: item.type,
                color: colorScheme[item.type]
              }
            ]} />
        {/if}
      </li>
    {/each}
  </ol>
</Story>
