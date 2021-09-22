<script lang="ts">
  import {Meta, Template, Story} from '@storybook/addon-svelte-csf';
  import {splitIntoParagraphs, wrapInShadowDom} from './utils';
  import Disclosure from '../src/svelte/Disclosure';

  const disclosures = [
    {
      title: 'Smittsomme dyresykdommer',
      body: splitIntoParagraphs(
        'Norge er i stor grad forskånet for de aller mest alvorlige smittsomme dyresykdommene.\nHvis smitte av disse sykdommene kommer inn i landet kan de spre seg uhyre og gjøre dyr, og i noen tilfeller mennesker, alvorlig syke. Noen av sykdommene kan også gjøre mennesker syke i ulik grad. Et utbrudd av slike dyresykdommer kan innebære svært store konsekvenser, både for produsenter, myndigheter, industrien og befolkningen.'
      )
    },
    {
      title: 'Ansvar for forebygging og bekjempelse',
      body: splitIntoParagraphs(
        `Alle har plikt til å vise nødvendig aktsomhet for å hindre at det oppstår fare for at smittsom dyresykdom utvikler seg eller sprer seg. Alle har også har plikt til å varsle Mattilsynet dersom de mistenker alvorlig smittsom dyresykdom.\nVi har en rekke regler for å forebygge alvorlige, smittsomme dyresykdommer. Disse reglene gjelder alle som driver virksomhet som kan bidra til at smitte spres til dyr. Dette gjelder en rekke virksomheter som dyreeiere, slakterier, importører, transportvirksomheter, veterinærer og mange andre.\nMattilsynet har ansvar for å føre tilsyn med at regelverket følges, sørge for forebyggende tiltak og overvåke sykdomstilstanden i landet. I tillegg har Mattilsynet ansvar for å ha beredskap for å bekjempe utbrudd av alvorlige smittsomme dyresykdommer. En rekke private og offentlige aktører har ansvar for å bistå Mattilsynet ved bekjempelsesarbeidet ved slike utbrudd.`
      )
    }
  ];
</script>

<Meta
  title="Components/Disclosure"
  parameters={{xstate: true}}
  argTypes={{
    title: {control: 'text'},
    body: {control: 'text'},
    disableJs: {control: 'boolean'},
    disableCss: {control: 'boolean'}
  }}
/>

<Template let:args>
  <section class="content" use:wrapInShadowDom={args.disableCss}>
    <Disclosure title={args.title} loadJs={!args.disableJs}>
      {@html args.body}
    </Disclosure>
  </section>
</Template>

<Story
  name="Normal"
  args={{
    title: disclosures[0].title,
    body: disclosures[0].body,
    disableJs: false,
    disableCss: false
  }}
/>

<Story
  name="Multiple"
  args={{
    disableJs: false,
    disableCss: false
  }}
  let:args
>
  <section class="content" use:wrapInShadowDom={args.disableCss} aria-labelledby="heading">
    <h2 id="heading">Heading for accordion</h2>
    {#each disclosures as disclosure}
      <Disclosure title={disclosure.title} loadJs={!args.disableJs}>
        {@html disclosure.body}
      </Disclosure>
    {/each}
  </section>
</Story>

<Story
  name="Server rendered"
  args={{
    title: disclosures[1].title,
    body: disclosures[1].body,
    disableJs: true,
    disableCss: true
  }}
/>

<style lang="scss" global>
  @import '../src/scss/app';
</style>
