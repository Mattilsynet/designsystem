<script lang="ts">
  import {Meta, Story} from '@storybook/addon-svelte-csf'
  import FileUploadButton from '../../src/svelte/FileUploadButton.svelte'
</script>

<Meta
  title="Components/Summary Detail"
  args={{
    disabled: false,
    disableJs: false,
    disableCss: false
  }}
  argTypes={{
    disabled: {control: 'boolean'},
    disableJs: {control: 'boolean'},
    disableCss: {control: 'boolean'}
  }} />

<Story name="Normal" let:primary let:primaryLong let:disableCss let:disabled let:secondary>
  <main class="container layout-flex-col">
    <h1>Detail summary</h1>
    <div class="wrapper">
      <details>
        <summary>Eksempel på summary details kompo&shy;nenten</summary>
        <div class="summary-wrapper">
          <p>
            For at meldingen skal kunne følges opp, må den inneholde opplysninger som tyder på
            alvorlig brudd på dyrevelferdsregelverket. For eksempel mishandling av dyr, alvorlig
            svikt i levemiljø, tilsyn og stell, syke og skadde dyr som ikke følges opp.
          </p>
          <p>
            Det er viktig med konkrete beskrivelser. Vage og generelle beskrivelser basert på
            antagelser er ikke ønskelig.
          </p>
          <p>Skriv gjerne</p>
          <ul>
            <li>Hvor skjedde det?</li>
            <li>Her er andre punkt i listen</li>
          </ul>
          <p>Så er det noe tekst på bunnen av summary</p>
        </div>
      </details>
    </div>
  </main>
</Story>
