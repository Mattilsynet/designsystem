<script lang='ts'>
  import {Meta, Story} from '@storybook/addon-svelte-csf';
</script>

<Meta
  title='Components/Breadcrumbs'
  args={{
   breadcrumbs: {
      "ariaLabel": "breadcrumbs",
      "items": [
        {
          "title": "Mattilsynet",
          "text": "Mattilsynet",
          "active": false,
          "url": "/site/default/draft/mattilsynet",
          "type": "portal:site"
        },
        {
          "title": "Mat og vann",
          "text": "Mat og vann",
          "active": false,
          "url": "/site/default/draft/mattilsynet/mat-og-vann",
          "type": "base:folder"
        },
        {
          "title": "Artikkel test",
          "text": "Artikkel test",
          "active": true,
          "url": "/site/default/draft/mattilsynet/mat-og-vann/artikkel-test",
          "type": "no.mattilsynet.app:article"
        }
      ]
    }
  }}
/>

<Story name='Normal' let:breadcrumbs>
  <nav class='breadcrumbs'>
    {#each breadcrumbs.items as item, index }
      {#if index + 1 < breadcrumbs.items.length}
        <a href={item.url}>{item.title}</a>
      {:else}
        {item.title}
      {/if}
    {/each}
  </nav>
</Story>

<style lang='scss' global>
  @import "../src/scss/app";
</style>
