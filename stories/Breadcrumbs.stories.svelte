<script lang="ts">
  import {Meta, Story} from '@storybook/addon-svelte-csf';
  import Breadcrumbs from '../src/svelte/Breadcrumbs.svelte';

  const breadcrumbsItems = [
    {
      title: 'Mattilsynet',
      text: 'Mattilsynet',
      active: false,
      url: '/site/default/draft/mattilsynet',
      type: 'portal:site'
    },
    {
      title: 'Varsle',
      text: 'Varsle',
      active: false,
      url: '/site/default/draft/mattilsynet/varsle',
      type: 'base:folder'
    },
    {
      title: 'Dyr',
      text: 'Dyr',
      active: false,
      url: '/site/default/draft/mattilsynet/mat-og-vann/dyr/',
      type: 'no.mattilsynet.app:article'
    },
    {
      title: 'Mishandling eller vannstell',
      text: 'Mishandling eller vannstell',
      active: false,
      url: '/site/default/draft/mattilsynet/mat-og-vann/dyr/mishandling-eller-vanstell',
      type: 'no.mattilsynet.app:article'
    },
    {
      title: 'Varsel om mishandling eller vannstell',
      text: 'Varsel om mishandling eller vannstell',
      active: false,
      url: '/site/default/draft/mattilsynet/mat-og-vann/dyr/mishandling-eller-vanstell/varsel-om-mishandling-eller-vannstell',
      type: 'no.mattilsynet.app:article'
    }
  ]
</script>

<Meta
  title="Components/Breadcrumbs"
  parameters={{xstate: true}}
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
      items: breadcrumbsItems.slice(0,3)
    }
  }}
/>

<Story name="Normal" let:breadcrumbsLong let:breadcrumbsShort let:loadJs>
  <p class="description">Brødsmuler med 4 eller fler elementer</p>
  <Breadcrumbs breadcrumbs={breadcrumbsLong} loadJs={loadJs}/>
  <p class="description">Brødsmuler med 3 eller færre elementer</p>
  <Breadcrumbs breadcrumbs={breadcrumbsShort} loadJs={loadJs}/>
</Story>
