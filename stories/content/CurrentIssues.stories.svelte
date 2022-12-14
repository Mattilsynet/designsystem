<script lang="ts">
  import {Meta, Story} from '@storybook/addon-svelte-csf'
  import {wrapInShadowDom} from '../utils'
  import CurrentIssues from '../../src/svelte/content/CurrentIssues.svelte'
</script>

<Meta
  title="Innhold/Aktuelle saker"
  args={{
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
    issues: {control: 'array'},
    disableJs: {control: 'boolean'},
    disableCss: {control: 'boolean'}
  }} />

<Story name="Normal" let:issues let:disableCss>
  <main use:wrapInShadowDom={disableCss} class="container layout-flex-col">
    <h1>Aktuelle saker</h1>
    <CurrentIssues {issues} />
  </main>
</Story>
