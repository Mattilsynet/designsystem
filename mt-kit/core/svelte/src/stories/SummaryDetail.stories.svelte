<script lang="ts">
  import { splitIntoParagraphs } from './storybook-utils/utils'
  import { Meta, Story } from '@storybook/addon-svelte-csf'
  import SummaryDetail from '$lib/svelte/components/SummaryDetail.svelte'
</script>

<Meta
  title="Components/Oppsummering og Detaljer"
  args={{
    title: 'Eksempel på oppsummering og detaljer',
    content: splitIntoParagraphs(
      `For at meldingen skal kunne følges opp, må den inneholde opplysninger som tyder på alvorlig brudd på dyrevelferdsregelverket. For eksempel mishandling av dyr, alvorlig svikt i levemiljø, tilsyn og stell, syke og skadde dyr som ikke følges opp.\n Det er viktig med konkrete beskrivelser. Vage og generelle beskrivelser basert på antagelser er ikke ønskelig.\n Skriv gjerne\n Hvor skjedde det?\n
      Her er andre punkt i listen\n Så er det noe tekst på bunnen av summary`
    )
  }}
  argTypes={{
    title: { control: 'text' },
    content: { control: 'text' }
  }} />

<Story name="Normal" let:args>
  <h1 class="mt-h1">Oppsummering og detaljer</h1>
  <main class="mt-main container layout-flex-col">
    <h2 class="mt-h2 m-t-s">Default</h2>
    <SummaryDetail title={args.title}>
      {@html args.content}
    </SummaryDetail>
    <h2 class="mt-h2 m-t-s">With color-neutral</h2>
    <SummaryDetail title={args.title} detailsClass="color-neutral">
      {@html args.content}
    </SummaryDetail>
    <h2 class="mt-h2 m-t-s">With color-neutral border-neutral</h2>
    <SummaryDetail
      title={args.title}
      detailsClass="color-neutral border-neutral"
      summaryClass=""
      summaryWrapperClass="background-mt-white">
      {@html args.content}
    </SummaryDetail>
  </main>
</Story>

<Story name="Med linje på venstre side" let:args>
  <p>Oppsummering og detaljer med linje på venstre side</p>
  <main class="mt-main container layout-flex-col">
    <SummaryDetail title={args.title} detailsClass="with-border">
      {@html args.content}
    </SummaryDetail>
  </main>
</Story>

<Story name="Med ikon" let:args>
  <p>Oppsummering og detaljer med ikon</p>
  <main class="mt-main container layout-flex-col">
    <SummaryDetail title={args.title} detailsClass="with-icon">
      {@html args.content}
    </SummaryDetail>
  </main>
</Story>

<Story name="Med fet skrift" let:args>
  <p>Oppsummering og detaljer neutral</p>
  <main class="mt-main container layout-flex-col">
    <SummaryDetail title={args.title} detailsClass="color-neutral">
      {@html args.content}
    </SummaryDetail>
    <hr />
    <h2 class="mt-h2">Med heading-tag i oppsummeringen</h2>
    <SummaryDetail
      title={`<h2 class="mt-h2">${args.title}</h2>`}
      detailsClass="color-neutral"
      summaryClass="adjusted-heading">
      {@html args.content}
    </SummaryDetail>
  </main>
</Story>
