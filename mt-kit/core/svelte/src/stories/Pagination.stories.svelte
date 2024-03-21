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
      { url: '1', index: 0 },
      { url: '2', index: 1 },
      { url: '3', index: 2 },
      { url: '4', index: 3 },
      { url: '5', index: 4 },
      { url: '6', index: 5 },
      { url: '7', index: 6 },
      { url: '8', index: 7 },
      { url: '9', index: 8 }
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
