<script lang="ts">
  import {Meta, Story} from '@storybook/addon-svelte-csf';
  import SummaryDetail from '../../src/svelte/SummaryDetail.svelte';
</script>

<Meta
  title="Components/Summary Detail"
  args={{
    title:'Eksempel på summary details',
  }}
/>

<Story name="Normal" let:args >
  <main class="container layout-flex-col">
    <h1>Detail summary</h1>
    <SummaryDetail title={args.title}>
      <p>
        For at meldingen skal kunne følges opp, må den inneholde opplysninger som tyder på alvorlig brudd på
        dyrevelferdsregelverket. For eksempel mishandling av dyr, alvorlig svikt i levemiljø, tilsyn og stell, syke
        og skadde dyr som ikke følges opp.
      </p>
      <p>
        Det er viktig med konkrete beskrivelser. Vage og generelle beskrivelser basert på antagelser er ikke
        ønskelig.
      </p>
      <p>Skriv gjerne</p>
      <ul>
        <li>Hvor skjedde det?</li>
        <li>Her er andre punkt i listen</li>
      </ul>
      <p>Så er det noe tekst på bunnen av summary</p>
    </SummaryDetail>
  </main>
</Story>
