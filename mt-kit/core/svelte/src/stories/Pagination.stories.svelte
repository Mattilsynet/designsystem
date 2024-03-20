<script lang="ts">
  import { Meta, Story } from '@storybook/addon-svelte-csf'
  import { wrapInShadowDom } from './storybook-utils/utils'
  import { action } from '@storybook/addon-actions'
  import Pagination from '../lib/svelte/components/pagination/Pagination.svelte'

  const pageChangeAction = action('pageChange')
  let currentPageNumber = 0

  function handlePageChange(e) {
    e.preventDefault()
    pageChangeAction(e)
    currentPageNumber = e.detail.index
  }
</script>

<Meta
  title="Components/Pagination"
  args={{
    disableCss: false,
    pages: [
      { index: 0, url: '0', heading: 'Formål' },
      { index: 1, url: '1', heading: 'Virkeområde' },
      { index: 2, url: '2', heading: 'Definisjoner av dyr og dyrehold' },
      { index: 3, url: '3', heading: 'Forurensning av vann' },
      { index: 4, url: '4', heading: 'Kapittel 4' },
      { index: 5, url: '5', heading: 'Kapittel 5' },
      { index: 6, url: '6', heading: 'Kapittel 6' }
    ]
  }}
  argTypes={{
    disableCss: { control: 'boolean' },
    pages: { control: 'array' }
  }} />

<Story name="Normal" let:disableCss let:args>
  <div use:wrapInShadowDom={disableCss}>
    <article>
      <h2 class="mt-h2">Pagination</h2>
      <Pagination
        pages={args.pages}
        currentPageIndex={currentPageNumber}
        on:page-change={handlePageChange}
        nextText="Neste"
        previousText="Forrige"
        labelPage="Side"
        toPageTitle="Gå til side {0}"
        class="" />
    </article>
  </div>
</Story>

<style lang="scss">
</style>
