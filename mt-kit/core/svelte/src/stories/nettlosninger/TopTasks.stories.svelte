<script lang="ts" module>
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import { wrapInShadowDom } from '../storybook-utils/utils'

  const { Story } = defineMeta({
    title: 'Innhold/Toppoppgaver',
    args: {
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
          title: 'Hest',
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
        },
        {
          url: 'https://www.barentswatch.no/fiskehelse',
          title: 'Restriksjoner for ILA',
          intro: 'Lenkes til utenfor Mattilsynet'
        }
      ],
      disabled: false,
      disableCss: false
    },
    argTypes: {
      title: { control: 'text' },
      intro: { control: 'text' },
      topTasks: { control: 'object' },
      disabled: { control: 'boolean' },
      disableCss: { control: 'boolean' }
    }
  })
</script>

<Story name="Normal">
  {#snippet children({ topTasks, disableCss, title, intro, path })}
    <div
      use:wrapInShadowDom={disableCss}
      class="layout-grid layout-grid--column-12 top-tasks-container">
      <h2 id={path} class="mt-h2 top-tasks-text col-1-span-12">
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
        {#each topTasks as task}
          {#if task && task.url}
            <a href={task.url} class="mt-link mt-button top-task">
              <h3 class="mt-h3 heading">{@html task.title}</h3>
              <span class="text">{@html task.intro}</span>
            </a>
          {/if}
        {/each}
      </section>
    </div>
  {/snippet}
</Story>

<style lang="scss">
  .top-tasks-container {
    margin-top: var(--spacer-small);
  }
</style>
