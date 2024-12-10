<script lang="ts" module>
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import { wrapInShadowDom } from '../storybook-utils/utils'
  import CurrentIssues from '$lib/svelte/content/CurrentIssues.svelte'

  const { Story } = defineMeta({
    title: 'Innhold/Aktuelle saker',
    args: {
      title: 'Aktuelle saker',
      issues: [
        {
          title: 'Ukraina',
          text: '<p>Kjæledyr fra Ukraina, radioaktivitet, eksport, atomberedskap.</p>',
          href: '#'
        },
        {
          title: 'Utbrudd av fugleinfluensa ',
          text: '<p>Informasjon om utbrudd, om sykdommen, råd og anbefalninger.</p>',
          href: '#'
        }
      ],
      disableJs: false,
      disableCss: false
    },
    argTypes: {
      title: { control: 'text' },
      issues: { control: 'array' },
      disableJs: { control: 'boolean' },
      disableCss: { control: 'boolean' }
    }
  })
</script>

<Story name="Normal">
  {#snippet children({ title, issues, disableCss })}
    <main use:wrapInShadowDom={disableCss} class="mt-main container layout-flex-col">
      <h1 class="mt-h1">Aktuelle saker</h1>
      <h3 class="mt-h3 m-t-m">1 sak</h3>
      <CurrentIssues {title} issues={issues.slice(1)} />
      <h3 class="mt-h3 m-t-m">2 saker</h3>
      <CurrentIssues {title} {issues} />
    </main>
  {/snippet}
</Story>
