<script lang="ts">
  import {Meta, Story} from '@storybook/addon-svelte-csf';
  import CardArticle from '../CardArticle.svelte';
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
      },
      {
        title: 'Tredde oppgaven med headinger',
        intro: ``,
        text: `<h4>Geiter</h4>

              <p>Når geiter flyttes til ei anna eller ny småfebesetning, skal dyreholderen sende med en attest fra en veterinær som har undersøkt dyra i avsenderbesetninga. Attesten skal bekrefte at dyra som flyttes,
                  ikke har symptomer på smittsomme dyresjukdommer. Attesten skal også bekrefte at
                  <a href="https://lovdata.no/dokument/SF/forskrift/2002-06-27-732#KAPITTEL_16">krava i Dyrehelseforskrifta,
                  vedlegg VII er oppfylt</a>.
              </p>

              <h4>Sauer</h4>

              <p>Kravet til veterinærattest gjelder også når sauer flyttes over fylkesgrenser til ei anna eller ny småfebesetning.</p>

              <p>Unntak: Dette gjelder ikke for sauer som flyttes mellom Oslo og Akershus og mellom Rogaland og kommunene Sveio eller Etne i Hordaland.</p>

              <p>Veterinærattestene skal ikke være eldre enn 7 dager når dyra flyttes. Attesten skal oppbevares i mottakerbesetninga i 5 år og legges fram når Mattilsynet ber om det.</p>

              <ul>
                <li>En eller to</li>
                <li>tre og fire og fem og seks</li>
                <li>sju</li>
                <li>Åtte ni og</li>
                <li>ti</li>
              </ul>`,
        nextActionUrl: 'http://',
        nextActionLinkText: 'Link til tredje oppgave'
      },
      {
        title: 'Fjerde oppgaven med headinger som ikke egentlig skal brukes',
        intro: ``,
        text: `<h2>Geiter</h2>

              <p>Når geiter flyttes til ei anna eller ny småfebesetning, skal dyreholderen sende med en attest fra en veterinær som har undersøkt dyra i avsenderbesetninga. Attesten skal bekrefte at dyra som flyttes,
                  ikke har symptomer på smittsomme dyresjukdommer. Attesten skal også bekrefte at
                  <a href="https://lovdata.no/dokument/SF/forskrift/2002-06-27-732#KAPITTEL_16">krava i Dyrehelseforskrifta,
                  vedlegg VII er oppfylt</a>.
              </p>

              <h3>Sauer</h3>

              <p>Kravet til veterinærattest gjelder også når sauer flyttes over fylkesgrenser til ei anna eller ny småfebesetning.</p>

              <p>Unntak: Dette gjelder ikke for sauer som flyttes mellom Oslo og Akershus og mellom Rogaland og kommunene Sveio eller Etne i Hordaland.</p>

              <p>Veterinærattestene skal ikke være eldre enn 7 dager når dyra flyttes. Attesten skal oppbevares i mottakerbesetninga i 5 år og legges fram når Mattilsynet ber om det.</p>

              <ul>
                <li>En eller to</li>
                <li>tre og fire og fem og seks</li>
                <li>sju</li>
                <li>Åtte ni og</li>
                <li>ti</li>
              </ul>`,
        nextActionUrl: 'http://',
        nextActionLinkText: 'Link til tredje oppgave'
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
  <div class="container layout-flex-col layout-flex-col--x-small">
    {#each tasks as task}
      <CardArticle
        type="task"
        linkText={task.nextActionLinkText}
        linkUrl={task.nextActionUrl}
        intro={task.intro}
        title={task.title}
        text={task.text}
        id={task.title}
      />
    {/each}
  </div>
</Story>

<style lang="scss">
  @use 'src/scss/app';
</style>
