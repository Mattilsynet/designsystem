<script lang="ts" module>
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import { wrapInShadowDom } from '../storybook-utils/utils'
  import CardArticle from '$lib/svelte/components/CardArticle.svelte'

  const { Story } = defineMeta({
    title: 'Innhold/Fremhevet lenke',
    args: {
      tasks: [
        {
          title: 'Tittel med ingen ikon',
          text: `<p>Norge får nytt regelverk.</p>`,
          nextActionUrl: 'http://www.mattilsynet.no',
          nextActionLinkText: 'Mer informasjon om nytt regelverk',
          headerTag: 'h3',
          iconClass: '',
          linkTypeButton: false
        },
        {
          title: 'Link type knapp',
          text: `<p>Noe tekst</p>`,
          nextActionUrl: 'http://www.mattilsynet.no',
          nextActionLinkText: 'En lenke',
          linkTypeButton: true
        },
        {
          title: 'Tittel med info ikon',
          text: `<p>Noe tekst</p>`,
          nextActionUrl: 'http://www.nav.no',
          nextActionLinkText: 'En lenke',
          iconClass: 'info-icon',
          linkTypeButton: false
        },
        {
          title: 'Tittel med advarsel ikon',
          text: `<p>Noe tekst</p>`,
          nextActionUrl: 'http://www.mattilsynet.no',
          nextActionLinkText: 'En lenke',
          iconClass: 'warning-icon',
          linkTypeButton: false
        },
        {
          title: 'Tittel med oppgave ikon',
          text: `<p>Noe tekst</p>`,
          nextActionUrl: 'http://www.mattilsynet.no',
          nextActionLinkText: 'En lenke',
          iconClass: 'task-icon',
          linkTypeButton: false
        },
        {
          title: 'Manglende lenke',
          text: `<p>Noe tekst</p>`,
          nextActionLinkText: 'En lenke',
          linkTypeButton: false
        }
      ],
      disableCss: false
    },
    argTypes: {
      tasks: { control: 'object' },
      disableCss: { control: 'boolean' }
    }
  })
</script>

<Story name="Normal">
  {#snippet children({ tasks, disableCss })}
    <div
      use:wrapInShadowDom={disableCss}
      class="container layout-flex-col layout-flex-col--x-small">
      {#each tasks as task}
        <CardArticle
          type="highlighted-link"
          class="background-mt-white"
          linkText={task.nextActionLinkText}
          linkUrl={task.nextActionUrl}
          title={task.title}
          text={task.text}
          headingId={task.title}
          headerTag={task.headerTag}
          iconClass={task.iconClass} />
      {/each}
    </div>
  {/snippet}
</Story>

<style lang="scss">
  main {
    --gap: var(--spacer-x-small);
  }

  h2 {
    margin-top: var(--spacer-small);
  }

  section {
    --gap: var(--spacer-xx-small);
  }
</style>
