<script lang="ts">
  import {Meta, Story} from '@storybook/addon-svelte-csf'
  import List from '../../src/svelte/components/List.svelte'
</script>

<Meta
  title="Components/List"
  args={{
    title: 'A two coloured modern document list with hyper text links.',
    content: [
      {
        url: '?content=1',
        title: 'Rekvisisjon, meieri',
        type: 'Matilsynets skjema'
      },
      {
        url: '?content=2',
        title: 'Ny matbedrift og/eller import, produksjon og engrossalg av matkontaktmaterialer',
        type: 'PDF'
      },
      {
        url: '?content=3',
        title: 'Ny importør av næringsmidler',
        type: 'Altinn'
      },
      {
        url: '?content=4',
        title:
          'Endre informasjon om Ny matbedrift og/eller import, produksjon og engrossalg av matkontaktmaterialer',
        type: 'Word'
      }
    ],
    showChapterNumber: true,
    disabled: false,
    disableCss: false
  }}
  argTypes={{
    title: {control: 'text'},
    content: {control: 'array'},
    showChapterNumber: {control: 'boolean'},
    disabled: {control: 'boolean'},
    disableCss: {control: 'boolean'}
  }} />

<Story name="Normal" let:args let:disableCss let:disabled let:secondary>
  <h1>Dokument liste</h1>
  <List listContent={args.content} title={args.title} />
</Story>
