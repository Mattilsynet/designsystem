<script lang="ts">
  import {Meta, Story} from '@storybook/addon-svelte-csf';
</script>

<Meta
  title="Components/Innhold/Oppgave"
  args={{
    tasks: [
      {
        title: 'Dette er første oppgave',
        intro: '',
        text: `<p>Kommer du over sjukt eller skadet storvilt for eksempel elg hjelper du som regel best ved å <strong>ringe politiet på telefon 02800</strong>. Det samme gjelder sjøpattedyr. Politiet kobler om nødvendig inn kommunens viltforvaltning (viltnemnda). Du skal derimot avlive dyret selv dersom &nbsp;</p>

<ol>
	<li>dyret er hardt skadet,&nbsp;</li>
	<li>politiet ikke kan yte hjelp innen rimelig tid, &nbsp;</li>
	<li>og du har skytevåpen og vet hvordan du skal avlive dyret forsvarlig.&nbsp;</li>
</ol>
`,
        nextAction: {nextActionUrl: 'http://', nextActionLinkText: 'Link til neste oppgave'}
      },
      {
        title: 'Dette er andre oppgave',
        intro: `<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it ha</p>`,
        text: `<p>It is a long established fact that a reader will</p>
          <p>
            be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum
            is that it ha
          </p>`,
        nextAction: {nextActionUrl: 'http://', nextActionLinkText: 'Link til tredje oppgave'}
      }
    ],
    disabled: false,
    disableCss: false
  }}
  argTypes={{
    disabled: {control: 'boolean'},
    disableCss: {control: 'boolean'}
  }}
/>

<Story name="Normal" let:tasks>
  <div class="container">
    <ul class="tasks list-unstyled">
      {#each tasks as task}
        <li class="task">
          <h3 class="title">{task.title}</h3>
          {#if task.intro}
            <div class="intro">
              {@html task.intro}
            </div>
          {/if}
          {#if task.text}
            <div class="text">
              {@html task.text}
            </div>
          {/if}
          {#if task.nextAction.nextActionUrl}
            <a href={task.nextAction.nextActionUrl} class="button button--primary">
              {task.nextAction.nextActionLinkText}
            </a>
          {/if}
        </li>
      {/each}
    </ul>
  </div>
</Story>

<style lang="scss">
  @use 'src/scss/app';
</style>
