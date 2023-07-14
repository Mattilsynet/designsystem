<script lang="ts">
  import { Meta, Story } from '@storybook/addon-svelte-csf'
  import { wrapInShadowDom } from '../storybook-utils/utils'
  import CurrentIssues from '../../svelte/content/CurrentIssues.svelte'
</script>

<Meta
  title="Innhold/Aktuelle saker"
  args={{
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
  }}
  argTypes={{
    title: { control: 'text' },
    issues: { control: 'array' },
    disableJs: { control: 'boolean' },
    disableCss: { control: 'boolean' }
  }}
/>

<Story name="Normal" let:title let:issues let:disableCss>
  <main use:wrapInShadowDom={disableCss} class="container layout-flex-col">
    <h1>Aktuelle saker</h1>
    <h3 class="m-t-m">1 sak</h3>
    <CurrentIssues {title} issues={issues.slice(1)} />
    <h3 class="m-t-m">2 saker</h3>
    <CurrentIssues {title} {issues} />
  </main>
</Story>
