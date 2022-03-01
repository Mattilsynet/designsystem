<script lang="ts">
  import {splitIntoParagraphs} from './../utils'
  import {Meta, Story} from '@storybook/addon-svelte-csf';
  import SummaryDetail from '../../src/svelte/SummaryDetail.svelte';
</script>

<Meta
  title="Components/Oppsummering og Detaljer"
  args={{
    title:'Eksempel på oppsummering og detaljer',
    content: splitIntoParagraphs(
      `For at meldingen skal kunne følges opp, må den inneholde opplysninger som tyder på alvorlig brudd på dyrevelferdsregelverket. For eksempel mishandling av dyr, alvorlig svikt i levemiljø, tilsyn og stell, syke og skadde dyr som ikke følges opp.\n Det er viktig med konkrete beskrivelser. Vage og generelle beskrivelser basert på antagelser er ikke ønskelig.\n Skriv gjerne\n Hvor skjedde det?\n
      Her er andre punkt i listen\n Så er det noe tekst på bunnen av summary`)
  }}
  argTypes={{
    title: {control: 'text'},
    content: {control: 'text'},
  }}
/>

<Story name="Normal" let:args >
  <p>Oppsummering og detaljer</p>
  <main class="container layout-flex-col">
    <SummaryDetail title={args.title}>
      {@html args.content}
    </SummaryDetail>
  </main>
</Story>

<Story name="Med linje på venstre side" let:args >
  <p>Oppsummering og detaljer med linje på venstre side</p>
  <main class="container layout-flex-col">
    <SummaryDetail title={args.title} detailsClass="with-border">
      {@html args.content}
    </SummaryDetail>
  </main>
</Story>

<Story name="Med ikon" let:args >
  <p>Oppsummering og detaljer med ikon</p>
  <main class="container layout-flex-col">
    <SummaryDetail title={args.title} detailsClass="with-icon">
      {@html args.content}
    </SummaryDetail>
  </main>
</Story>

<Story name="Med fet skrift" let:args >
  <p>Oppsummering og detaljer med fet skrift</p>
  <main class="container layout-flex-col">
    <SummaryDetail title={args.title} detailsClass="with-bold">
      {@html args.content}
    </SummaryDetail>
  </main>
</Story>
