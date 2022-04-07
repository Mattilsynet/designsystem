<script lang="ts">
  import {Meta, Story} from '@storybook/addon-svelte-csf'
  import Status from '../../../src/svelte/Status.svelte'
  import RelatedLinksList from '../../../src/svelte/content/RelatedLinksList.svelte'
</script>

<Meta
  title="Innhold/Relatert innhold lenke liste"
  args={{
    title: 'Hovedoverskrift',
    linkGroups: [
      {
        title: 'Overskrift 1',
        links: [
          {url: 'https://www.mattilsynet.no', text: 'mattilsynet.no'},
          {url: 'https://www.mattilsynet.no', text: 'Annen link'}
        ]
      },
      {
        title: 'Overskrift 2',
        links: [
          {url: 'https://www.mattilsynet.no', text: 'mattilsynet.no'},
          {url: 'https://www.mattilsynet.no', text: 'Annen link'}
        ]
      },
      {
        title: 'Overskrift 3',
        links: []
      }
    ],
    disableCss: false
  }}
  argTypes={{
    title: {control: 'text'},
    linkGroups: {control: 'array'},
    disableCss: {control: 'boolean'}
  }} />

<Story name="Normal" let:title let:linkGroups let:disableCss>
  <div class="container layout-grid layout-grid--column-12">
    <RelatedLinksList
      {title}
      {linkGroups}
      leftColClass="col-1-span-5"
      rightColClass="col-7-span-6" />
  </div>
</Story>

<style lang="scss">
  .margin-top {
    margin-top: var(--spacer-medium);
  }
</style>
