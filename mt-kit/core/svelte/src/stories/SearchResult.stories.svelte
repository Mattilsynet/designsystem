<script lang="ts">
  import { Meta, Story } from '@storybook/addon-svelte-csf'
  import { wrapInShadowDom } from './storybook-utils/utils'
  import SearchResult from '../lib/svelte/components/SearchResult.svelte'
</script>

<Meta
  title="Components/Søkeresultat"
  args={{
    disableCss: false,
    searchResult: [
      {
        url: 'https://www.mattilsynet.no',
        title: 'Dyr',
        text: 'Temaside dyr.',
        breadcrumbs: []
      },
      {
        url: 'https://www.mattilsynet.no',
        title: 'En side uten ingress',
        text: undefined,
        breadcrumbs: []
      },
      {
        url: 'https://www.mattilsynet.no',
        title: 'Import av dyr',
        text: 'Reglene som gjelder når du skal importere eller innføre dyr til Norge.',
        breadcrumbs: ['Import']
      },
      {
        url: 'https://www.mattilsynet.no',
        title: 'Transport av dyr til beite',
        text: 'Transport av dyr i næringsmessig dyrehold til og fra beite, er å betrakte som næringsmessig transport. Reglene i forskrift om næringsmessig transport må de ...',
        breadcrumbs: ['Dyr', 'Dyretransport']
      },
      {
        url: 'https://www.mattilsynet.no',
        title: 'Krav til transportør og personell',
        text: 'Når dyreholder selv transporterer dyr til beite, gjelder ikke kravet om at transportøren skal være godkjent av Mattilsynet.',
        breadcrumbs: ['Dyr', 'Dyretransport', 'Transport av dyr til beite']
      }
    ]
  }}
  argTypes={{
    disableCss: { control: 'boolean' },
    searchResult: { control: 'object' }
  }} />

<Story name="Normal" let:searchResult let:disableCss>
  <div use:wrapInShadowDom={disableCss} class="container layout-grid layout-grid--column-12">
    <SearchResult {searchResult} />
  </div>
</Story>
