<script lang="ts">
  import { Meta, Story } from '@storybook/addon-svelte-csf'
  import Breadcrumbs from '$lib/svelte/components/Breadcrumbs.svelte'
  import { wrapInShadowDom } from './storybook-utils/utils'

  const breadcrumbsItems = [
    {
      text: 'Mattilsynet',
      active: false,
      url: '/site/default/draft/mattilsynet',
      type: 'portal:site'
    },
    {
      text: 'Planter og dyrking',
      active: false,
      url: '/site/default/draft/mattilsynet/planter-og-dyrking/',
      type: 'base:folder'
    },
    {
      text: 'Planter og dyrking',
      active: false,
      url: '/site/default/draft/mattilsynet/planter-og-dyrking/',
      type: 'base:folder'
    },
    {
      text: 'Planter og dyrking',
      active: false,
      url: '/site/default/draft/mattilsynet/planter-og-dyrking/',
      type: 'base:folder'
    },
    {
      text: 'Planter og dyrking',
      active: false,
      url: '/site/default/draft/mattilsynet/planter-og-dyrking/',
      type: 'base:folder'
    },
    {
      text: 'Planter og dyrking',
      active: false,
      url: '/site/default/draft/mattilsynet/planter-og-dyrking/',
      type: 'base:folder'
    },
    {
      text: 'Varsle om mishandling eller alvorlig vanstell av dyr',
      active: false,
      url: '/site/default/draft/mattilsynet/planter-og-dyrking/plantevernmidler',
      type: 'no.mattilsynet.app:article'
    },
    {
      text: 'Varsle om mishandling eller alvorlig vanstell av dyr',
      active: false,
      url: '/site/default/draft/mattilsynet/planter-og-dyrking/plantevernmidler/veileder-til-forskrift-om-plantevernmidler',
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
    <div class="layout-grid layout-grid--column-12">
      <div class="col-3-span-6">
        <p class="description">Brødsmuler med 4 eller fler elementer</p>
        <Breadcrumbs breadcrumbs={breadcrumbsLong} {loadJs} />
        <p class="description">Brødsmuler med 3 eller færre elementer</p>
        <Breadcrumbs breadcrumbs={breadcrumbsShort} {loadJs} />
      </div>
      <div class="col-1-span-12 space">
        <hr />
      </div>
      <div class="col-1-span-12">
        <p class="description">Brødsmuler med 4 eller fler elementer</p>
        <Breadcrumbs breadcrumbs={breadcrumbsLong} {loadJs} />
        <p class="description">Brødsmuler med 3 eller færre elementer</p>
        <Breadcrumbs breadcrumbs={breadcrumbsShort} {loadJs} />
      </div>
    </div>
  </div>
</Story>

<style>
  .space {
    padding: 3rem;
  }
</style>
