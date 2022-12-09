<script lang="ts">
  import {Meta, Story} from '@storybook/addon-svelte-csf'
  import {wrapInShadowDom} from '../utils'
  import CardArticle from '../../src/svelte/components/CardArticle.svelte'
</script>

<Meta
  title="Innhold/Fremhevet lenke"
  args={{
    tasks: [
      {
        title: 'Tittel med ingen ikon',
        text: `<p>Norge får nytt regelverk om dyrehelse i form av tolv nye forskrifter.
        Forskriftene ble fastsatt 6. april og vil tre i kraft i slutten av april.
        Samtidig vil en rekke gjeldende forskrifter på dyrehelseområdet oppheves.</p>`,
        nextActionUrl: 'http://',
        nextActionLinkText: 'Mer informasjon om nytt regelverk',
        headerTag: 'h3',
        iconClass: ''
      },
      {
        title: 'Tittel med info ikon',
        text: `<p>Noe tekst</p>`,
        nextActionUrl: 'http://',
        nextActionLinkText: 'En lenke',
        iconClass: 'info-icon'
      },
      {
        title: 'Tittel med advarsel ikon',
        text: `<p>Noe tekst</p>`,
        nextActionUrl: 'http://',
        nextActionLinkText: 'En lenke',
        iconClass: 'warning-icon'
      },
      {
        title: 'Manglende lenke',
        text: `<p>Noe tekst</p>`,
        nextActionLinkText: 'En lenke'
      }
    ],
    disableCss: false
  }}
  argTypes={{
    tasks: {control: 'array'},
    disableCss: {control: 'boolean'}
  }} />

<Story name="Normal" let:tasks let:disableCss>
  <div use:wrapInShadowDom={disableCss} class="container layout-flex-col layout-flex-col--x-small">
    {#each tasks as task}
      <CardArticle
        type="highlighted-link"
        linkText={task.nextActionLinkText}
        linkUrl={task.nextActionUrl}
        title={task.title}
        text={task.text}
        id={task.title}
        headerTag={task.headerTag}
        iconClass={task.iconClass} />
    {/each}
  </div>
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
