<script lang="ts" module>
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import { wrapInShadowDom } from './storybook-utils/utils'

  const { Story } = defineMeta({
    title: 'Components/List',
    args: {
      title: 'A two coloured modern document list with hyper text links.',
      content: [
        {
          url: '?content=1',
          displayName: 'Rekvisisjon, meieri'
        },
        {
          url: '?content=2',
          displayName:
            'Ny matbedrift og/eller import, produksjon og engrossalg av matkontaktmaterialer'
        },
        {
          url: '?content=3',
          displayName: 'Ny importør av næringsmidler'
        },
        {
          url: '?content=5',
          displayName: 'Vannkvalitet'
        },
        {
          url: '?content=4',
          displayName:
            'Endre informasjon om Ny matbedrift og/eller import, produksjon og engrossalg av matkontaktmaterialer'
        }
      ],
      disableCss: false
    },
    argTypes: {
      title: { control: 'text' },
      content: { control: 'array' },
      disableCss: { control: 'boolean' }
    }
  })
</script>

<Story name="Normal">
  {#snippet children({ args, disableCss })}
    <div use:wrapInShadowDom={args.disableCss}>
      <h1 class="mt-h1">Dokument liste</h1>
      <ol class="mt-ol m-t-xxs list list-unstyled">
        {#each args.content as item}
          <li class="layout-flex layout-flex--no-wrap layout-flex--space-between">
            <a class="mt-link" href={item.url}>{item.displayName}</a>
          </li>
        {/each}
      </ol>
    </div>
  {/snippet}
</Story>
