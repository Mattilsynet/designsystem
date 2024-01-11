<script lang="ts">
  import { Meta, Story } from '@storybook/addon-svelte-csf'
  import Breadcrumbs from '../lib/svelte/components/Breadcrumbs.svelte'
  import { wrapInShadowDom } from './storybook-utils/utils'

  const breadcrumbsItems = [
    {
      text: 'Mattilsynet',
      active: false,
      url: '/site/default/draft/mattilsynet',
      type: 'portal:site'
    },
    {
      text: 'Varsle',
      active: false,
      url: '/site/default/draft/mattilsynet/varsle',
      type: 'base:folder'
    },
    {
      text: 'Dyr',
      active: false,
      url: '/site/default/draft/mattilsynet/mat-og-vann/dyr/',
      type: 'no.mattilsynet.app:article'
    },
    {
      text: 'Mishandling eller vannstell',
      active: false,
      url: '/site/default/draft/mattilsynet/mat-og-vann/dyr/mishandling-eller-vanstell',
      type: 'no.mattilsynet.app:article'
    },
    {
      text: 'Varsel om mishandling eller vannstell',
      active: false,
      url: '/site/default/draft/mattilsynet/mat-og-vann/dyr/mishandling-eller-vanstell/varsel-om-mishandling-eller-vannstell',
      type: 'no.mattilsynet.app:article'
    }
  ]
</script>

<Meta
  title="Components/Breadcrumbs"
  parameters={{ xstate: true, inspectUrl: 'https://stately.ai/viz?inspect' }}
  args={{
    loadJs: true,
    breadcrumbsLong: {
      ariaLabel: 'breadcrumbs',
      showAllAriaLabel: 'show all',
      items: breadcrumbsItems
    },
    breadcrumbsShort: {
      ariaLabel: 'breadcrumbs',
      showAllLabel: 'show all',
      items: breadcrumbsItems.slice(0, 3)
    },
    disableCss: false
  }} />

<Story name="Normal" let:breadcrumbsLong let:breadcrumbsShort let:loadJs let:disableCss>
  <div use:wrapInShadowDom={disableCss}>
    <p class="description">Brødsmuler med 4 eller fler elementer</p>
    <Breadcrumbs breadcrumbs={breadcrumbsLong} {loadJs} />
    <p class="description">Brødsmuler med 3 eller færre elementer</p>
    <Breadcrumbs breadcrumbs={breadcrumbsShort} {loadJs} />
  </div>
</Story>
