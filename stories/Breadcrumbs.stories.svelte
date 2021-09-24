<script lang="ts">
  import {Meta, Story} from '@storybook/addon-svelte-csf';
  import Breadcrumbs from '../src/svelte/Breadcrumbs.svelte';
</script>

<Meta
  title="Components/Breadcrumbs"
  args={{
    breadcrumbs: {
      ariaLabel: 'breadcrumbs',
      items: [
        {
          title: 'Mattilsynet',
          text: 'Mattilsynet',
          active: false,
          url: '/site/default/draft/mattilsynet',
          type: 'portal:site'
        },
        {
          title: 'Mat og vann',
          text: 'Mat og vann',
          active: false,
          url: '/site/default/draft/mattilsynet/mat-og-vann',
          type: 'base:folder'
        },
        {
          title: 'Artikkel test',
          text: 'Artikkel test',
          active: true,
          url: '/site/default/draft/mattilsynet/mat-og-vann/artikkel-test',
          type: 'no.mattilsynet.app:article'
        }
      ]
    }
  }}
/>

<Story name="Normal" let:breadcrumbs>
  <Breadcrumbs {breadcrumbs} />
</Story>

<style lang="scss" global>
  @import '../src/scss/app';
</style>
