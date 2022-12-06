<script lang="ts">
  import {Meta, Story} from '@storybook/addon-svelte-csf'
  import {wrapInShadowDom} from '../../utils'
</script>

<Meta
  title="Innhold/Toppoppgaver"
  args={{
    path: '/dyr-og-dyrehold/sei-og-geit/flytting-av-sei',
    title: 'Flytting av sau og geit og høner og ørn og maur og bier og kuer.',
    intro:
      'Det er strenge regler for flytting av småfe for å unngå smitte mellom besetninger. ' +
      'Hovedregelen er forbud mot å flytte hunndyr mellom besetninger og forbud mot å flytte småfe mellom regioner.',
    topTasks: [
      {
        url: '#',
        title: 'Dyr og dyrehold',
        intro: 'Dette er innholdsteksten for dyr og dyrehold'
      },
      {
        url: '#',
        title: 'Mat og vann',
        intro: 'Dette er innholdsteksten for mat og vann'
      },
      {
        url: '#',
        title: 'Fisk og akvakultur',
        intro: 'Dette er innholdsteksten for fisk og akvakultur'
      },
      {
        url: '#',
        title: 'Planter og dyrking',
        intro: 'Dette er innholdsteksten for planter og dyrking'
      },
      {
        url: '#',
        title: 'Kosmetikk',
        intro: 'Dette er innholdsteksten for kosmetikk'
      },
      {
        url: '#',
        title: 'Kritikkverdige forhold på arbeids&shy;plassen',
        intro: 'Dette er innholdsteksten kritikkverdige forhold på arbeidsplassen'
      }
    ],
    disabled: false,
    disableCss: false
  }}
  argTypes={{
    title: {control: 'string'},
    intro: {control: 'string'},
    topTasks: {control: 'array'},
    disabled: {control: 'boolean'},
    disableCss: {control: 'boolean'}
  }} />

<Story name="Large" let:topTasks let:icon let:disableCss let:title let:intro let:path>
  <div
    use:wrapInShadowDom={disableCss}
    class="layout-grid layout-grid--column-12 top-tasks-container">
    <h2 id={path} class="top-tasks-text col-1-span-12">
      {@html title}
    </h2>
    {#if intro}
      <div class="top-tasks-text col-1-span-6">{@html intro}</div>
    {/if}
    <section
      class="layout-flex layout-flex--centered col-1-span-12 tasks-layout"
      class:layout-flex--basis-3={topTasks.length !== 2 && topTasks.length !== 4}
      class:layout-flex--basis-2={topTasks.length === 2 || topTasks.length === 4}
      aria-labelledby={path}
      style="gap: var(--spacer-x-small);">
      {#each topTasks as task, index}
        {#if task && task.url}
          <a href={task.url} class="button button--primary top-task">
            <h3 class="heading">{@html task.title}</h3>
            <span class="text">{@html task.intro}</span>
          </a>
        {/if}
      {/each}
    </section>
  </div>
</Story>

<Story name="Small" let:topTasks let:disableCss let:path>
  <div use:wrapInShadowDom={disableCss}>
    <h1>Toppoppgaver små</h1>
    <div class="layout-grid layout-grid--column-12 top-tasks-container">
      <section
        class="layout-flex layout-flex--space-between col-1-span-12 tasks-layout-small"
        aria-labelledby={path}
        style="--wrap: nowrap; --gap: var(--spacer-medium)">
        {#each topTasks as task, index}
          {#if task && task.url}
            <a href={task.url} class="no-underline">
              <h4 class="forward-arrow-after">{@html task.title}</h4>
            </a>
          {/if}
        {/each}
      </section>
    </div>
  </div>
</Story>

<style lang="scss">
  .top-tasks-container {
    margin-top: var(--spacer-small);
  }
</style>
