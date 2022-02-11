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
  <main class="container layout-flex-col">
    <h1>Oppsummering og detaljer</h1>
    <SummaryDetail title={args.title}>
      {@html args.content}
    </SummaryDetail>
  </main>
</Story>
