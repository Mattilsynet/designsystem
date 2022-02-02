<script lang="ts">
  import {Meta, Story} from '@storybook/addon-svelte-csf'
</script>

<Meta
  title="Innhold/Toppoppgaver"
  args={{
    title: 'Dette er tittelen til toppoppgavene',
    intro: 'Her kommer introen til oppgavene',
    topTasks: [
      {href: '#', heading: 'Dyr og dyrehold', text: 'Dette er innholdsteksten for dyr og dyrehold'},
      {href: '#', heading: 'Mat og vann', text: 'Dette er innholdsteksten for mat og vann'},
      {
        href: '#',
        heading: 'Fisk og akvakultur',
        text: 'Dette er innholdsteksten for fisk og akvakultur'
      },
      {
        href: '#',
        heading: 'Planter og dyrking',
        text: 'Dette er innholdsteksten for planter og dyrking'
      },
      {href: '#', heading: 'Kosmetikk', text: 'Dette er innholdsteksten for kosmetikk'},
      {
        href: '#',
        heading: 'Kritikkverdige forhold på arbeids&shy;plassen',
        text: 'Dette er innholdsteksten kritikkverdige forhold på arbeidsplassen'
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

<Story name="Normal" let:topTasks let:icon let:disableCss let:title let:intro>
  <h1>Toppoppgaver</h1>
  <div class="container bg-light-light-blue top-tasks-container">
    <h2 class="top-tasks-text" id="toptask">{title}</h2>
    <p class="top-tasks-text">{intro}</p>
    {#each topTasks as task, index}
      <section
        class="layout-flex layout-flex--centered tasks-layout"
        class:layout-flex--basis-3={index === 0 || index === 1 || index === 3}
        class:layout-flex--basis-2={index !== 0 && index !== 1 && index !== 3}
        aria-labelledby={'toptask'}
        style="gap: var(--spacer-x-small);">
        {#each topTasks.slice(0, 6 - index) as link}
          <a href={link.href} class="button button--primary top-task">
            <h3 class="heading">{@html link.heading}</h3>
            <span class="text">{link.text}</span>
          </a>
        {/each}
      </section>
      <hr />
    {/each}
  </div>
</Story>

<style lang="scss">
  .top-tasks-container {
    margin-top: var(--spacer-small);
  }
</style>
