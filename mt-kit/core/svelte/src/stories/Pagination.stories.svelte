<script lang="ts" module>
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import { wrapInShadowDom } from './storybook-utils/utils'
  import { action } from '@storybook/addon-actions'
  import Pagination from '$lib/svelte/components/pagination/Pagination.svelte'

  const pageChangeAction = action('pageChange')
  let currentPageNumber = $state(0)

  function handlePageChange(e) {
    e.preventDefault()
    pageChangeAction(e)
    currentPageNumber = e.detail.index
  }

  const { Story } = defineMeta({
    title: 'Components/Pagination',
    args: {
      disableCss: false,
      pages: [
        { url: '?0' },
        { url: '?1' },
        { url: '?2' },
        { url: '?3' },
        { url: '?4' },
        { url: '?5' },
        { url: '?6' },
        { url: '?7' },
        { url: '?8' },
        { url: '?9' },
        { url: '?10' },
        { url: '?11' }
      ]
    },
    argTypes: {
      disableCss: { control: 'boolean' },
      pages: { control: 'array' }
    }
  })
</script>

<Story name="Normal">
  {#snippet children({ disableCss, args })}
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
          toPageTitle={`Gå til side {0} av {1}`}
          class="" />
      </article>
    </div>
  {/snippet}
</Story>

<style lang="scss">
</style>
