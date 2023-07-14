<script lang="ts">
  import { Meta, Story } from '@storybook/addon-svelte-csf'
  import CardArticle from '../../svelte/components/CardArticle.svelte'
  import { wrapInShadowDom } from '../storybook-utils/utils'
</script>

<Meta
  title="Innhold/Oppgave"
  args={{
    tasks: [
      {
        title: 'Dette er første oppgave',
        intro: '',
        text: `<p>
        Det skal utarbeides skriftlige rutiner for etterlevelse av forskriftsfestede krav om å ivareta dyrenes velferd,
        blant annet om
      </p>
      <ul>
        <li>Kompetanse</li>
        <li>fôring og stell</li>
        <li>aktivisering og mosjon</li>
        <li>tilrettelegging for utøvelse av naturlig atferd</li>
      </ul>
      <p>Utformingen av rutinene skal være tilpasset virksomhetens egenart.</p>`,
        nextActionUrl: 'http://',
        nextActionLinkText: 'Link til neste oppgave',
        headerTag: undefined
      },
      {
        title: 'Dette er andre oppgave',
        intro: `<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it ha</p>`,
        text: `<p>It is a long established fact that a reader will</p>
          <p>
            be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum
            is that it ha
          </p>`,
        nextActionUrl: 'http://',
        nextActionLinkText: 'Link til tredje oppgave',
        headerTag: undefined
      },
      {
        title: 'Næringsmiddelhygieneforordningens vedlegg II kap VIII',
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
        nextActionLinkText: 'Link til tredje oppgave',
        headerTag: undefined
      },
      {
        title: 'Fjerde oppgaven med headinger som ikke egentlig skal brukes',
        intro: ``,
        text: `<h3>Geiter</h3>

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
        nextActionLinkText: 'Link til tredje oppgave',
        headerTag: undefined
      },
      {
        title: 'Oppgave 5 med tittel inni en h4-tag',
        intro: ``,
        text: 'Noe tekst i kroppen',
        nextActionUrl: 'http://',
        nextActionLinkText: 'Last ned mal for internkontroll',
        headerTag: 'h4'
      }
    ],
    disabled: false,
    disableCss: false
  }}
  argTypes={{
    disabled: { control: 'boolean' },
    disableCss: { control: 'boolean' }
  }}
/>

<Story name="Normal" let:tasks let:disableCss>
  <div use:wrapInShadowDom={disableCss} class="container layout-flex-col layout-flex-col--x-small">
    {#each tasks as task}
      <CardArticle
        type="task"
        linkText={task.nextActionLinkText}
        linkUrl={task.nextActionUrl}
        intro={task.intro}
        title={task.title}
        text={task.text}
        id={task.title}
        headerTag={task.headerTag}
      />
    {/each}
  </div>
</Story>
