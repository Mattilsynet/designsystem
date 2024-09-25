<script lang="ts">
  import { Meta, Story, Template } from '@storybook/addon-svelte-csf'
  import { splitIntoParagraphs, wrapInShadowDom } from './storybook-utils/utils'
  import Disclosure from '../lib/svelte/components/Disclosure.svelte'
  import HeadingLevel from '../lib/svelte/components/HeadingLevel.svelte'

  const disclosures = [
    {
      title: 'Smittsomme dyre&shy;sykdommer',
      body: splitIntoParagraphs(
        'Norge er i stor grad forskånet for de aller mest alvorlige smittsomme dyresykdommene.\nHvis smitte av disse sykdommene kommer inn i landet kan de spre seg uhyre og gjøre dyr, og i noen tilfeller mennesker, alvorlig syke. Noen av sykdommene kan også gjøre mennesker syke i ulik grad. Et utbrudd av slike dyresykdommer kan innebære svært store konsekvenser, både for produsenter, myndigheter, industrien og befolkningen.'
      ),
      headerTag: 'h2'
    },
    {
      title: 'Ansvar for forebygging og bekjempelse',
      body:
        splitIntoParagraphs(
          `Alle har plikt til å vise nødvendig aktsomhet for å hindre at det oppstår fare for at smittsom dyresykdom utvikler seg eller sprer seg. Alle har også har plikt til å varsle Mattilsynet dersom de mistenker alvorlig smittsom dyresykdom.\nVi har en rekke regler for å forebygge alvorlige, smittsomme dyresykdommer. Disse reglene gjelder alle som driver virksomhet som kan bidra til at smitte spres til dyr. Dette gjelder en rekke virksomheter som dyreeiere, slakterier, importører, transportvirksomheter, veterinærer og mange andre.\nMattilsynet har ansvar for å føre tilsyn med at regelverket følges, sørge for forebyggende tiltak og overvåke sykdomstilstanden i landet. I tillegg har Mattilsynet ansvar for å ha beredskap for å bekjempe utbrudd av alvorlige smittsomme dyresykdommer. En rekke private og offentlige aktører har ansvar for å bistå Mattilsynet ved bekjempelsesarbeidet ved slike utbrudd.`
        ) +
        `<a class="mt-link forward-arrow fit-content s-Bsk4fvxPVqY0" href="https://lovdata.no/dokument/SF/forskrift/2004-08-20-1204">Se hele forskriften</a> <p class="text-small s-Bsk4fvxPVqY0">Kilde: Lovdata.no</p>`,
      headerTag: 'h3'
    },
    {
      title: 'Slik gjør du',
      body: splitIntoParagraphs(
        `Alle har plikt til å vise nødvendig aktsomhet for å hindre at det oppstår fare for at smittsom dyresykdom utvikler seg eller sprer seg. Alle har også har plikt til å varsle Mattilsynet dersom de mistenker alvorlig smittsom dyresykdom.\nVi har en rekke regler for å forebygge alvorlige, smittsomme dyresykdommer. Disse reglene gjelder alle som driver virksomhet som kan bidra til at smitte spres til dyr. Dette gjelder en rekke virksomheter som dyreeiere, slakterier, importører, transportvirksomheter, veterinærer og mange andre.\nMattilsynet har ansvar for å føre tilsyn med at regelverket følges, sørge for forebyggende tiltak og overvåke sykdomstilstanden i landet. I tillegg har Mattilsynet ansvar for å ha beredskap for å bekjempe utbrudd av alvorlige smittsomme dyresykdommer. En rekke private og offentlige aktører har ansvar for å bistå Mattilsynet ved bekjempelsesarbeidet ved slike utbrudd.`
      ),
      headerTag: 'h4'
    }
  ]
  const icon = `<svg width="30" height="30" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="15" cy="15" r="15" fill="#3F3E3E"/><path d="M11.934 12.514c-.209-.144-.433-.404-.674-.782a3.295 3.295 0 0 1-.371-1.562c0-.97.345-1.807 1.035-2.51.696-.703 1.709-1.055 3.037-1.055 1.588 0 2.715.521 3.379 1.563.358.56.566 1.26.625 2.1h-2.52c-.045-.391-.143-.7-.293-.928-.267-.404-.706-.606-1.318-.606-.41 0-.745.101-1.006.303-.26.195-.39.485-.39.87 0 .442.227.774.683.995.456.222 1.292.612 2.51 1.172 2.122 1.003 3.183 2.165 3.183 3.486 0 .827-.24 1.511-.722 2.051-.267.3-.658.583-1.172.85.364.312.631.605.8.879.3.475.45 1.035.45 1.68 0 1.243-.43 2.19-1.29 2.841a4.638 4.638 0 0 1-2.89.987c-1.159 0-2.145-.29-2.959-.87-.807-.579-1.266-1.54-1.377-2.88h2.637c.091.481.221.83.39 1.045.28.364.74.546 1.378.546.39 0 .726-.12 1.005-.36.28-.242.42-.554.42-.938 0-.345-.146-.648-.44-.909-.292-.26-1.122-.735-2.49-1.425-1.19-.586-2.005-1.068-2.44-1.446-.697-.605-1.046-1.34-1.046-2.207 0-.813.235-1.487.704-2.021.273-.32.66-.609 1.162-.87Zm5.449 3.73c0-.293-.156-.573-.469-.84a4.333 4.333 0 0 0-.703-.44l-2.92-1.484c-.338.144-.58.355-.723.635a1.292 1.292 0 0 0-.136.586c0 .32.14.602.42.85.162.15.449.332.859.547l2.773 1.455c.215-.091.397-.225.547-.4.235-.255.352-.557.352-.909Z" fill="#fff"/></svg>`
  const title = 'Tittel for trekkspill'
</script>

<Meta
  title="Components/Trekkspill"
  parameters={{ xstate: true, inspectUrl: 'https://stately.ai/viz?inspect' }}
  argTypes={{
    title: { control: 'text' },
    body: { control: 'text' },
    headerTag: { control: 'text' },
    disableJs: { control: 'boolean' },
    disableCss: { control: 'boolean' }
  }} />

<Template let:args>
  <section class="content" use:wrapInShadowDom={args.disableCss}>
    <Disclosure
      title={args.title}
      loadJs={!args.disableJs}
      headerTag={args.headerTag}
      headerClass={args.headerClass}
      theme={args.theme}
      class={args.class}>
      {@html args.body}
      <ul class="mt-ul">
        <li>Punkt 1</li>
        <li>Punkt 2</li>
      </ul>
    </Disclosure>
  </section>
</Template>

<Story
  name="Normal"
  args={{
    title: disclosures[0].title,
    body: disclosures[0].body,
    headerClass: 'text-body',
    disableJs: false,
    disableCss: false
  }} />

<Story
  name="Endringslogg"
  args={{
    title: disclosures[0].title,
    body: disclosures,
    headerClass: 'text-body icon--changelog-before',
    disableJs: false,
    disableCss: false,
    class: 'changelog'
  }}
  let:args>
  <section class="content" use:wrapInShadowDom={args.disableCss} aria-labelledby="heading">
    <Disclosure
      title={'Se endringer'}
      loadJs={!args.disableJs}
      headerTag={args.headerTag}
      headerClass={args.headerClass}
      class={args.class}>
      {#each args.body as log, index}
        <article
          class:border-b-secondary={index < args.body.length - 1}
          class:p-b-xs={index < args.body.length - 1}
          class:m-b-xxs={index < args.body.length - 1}>
          <span class="text-small">01.01.2021</span>
          <HeadingLevel headingLevel={3} class="mt-h5 m-b-xs">
            {@html log.title}
          </HeadingLevel>
          <div class="text">
            {@html log.body}
          </div>
        </article>
      {/each}
    </Disclosure>
  </section>
</Story>

<Story
  name="Flere"
  args={{
    headerClass: 'text-body',
    icon,
    title,
    disableJs: false,
    disableCss: false
  }}
  let:args>
  <section class="content" use:wrapInShadowDom={args.disableCss} aria-labelledby="heading">
    <h2 id="heading" class="mt-h2">{title}</h2>
    {#each disclosures as disclosure, i}
      <Disclosure
        title={disclosure.title}
        loadJs={!args.disableJs}
        headerTag={disclosure.headerTag}
        icon={i === 2 ? icon : undefined}
        headerClass={args.headerClass}>
        {@html disclosure.body}
      </Disclosure>
    {/each}
  </section>
</Story>

<Story
  name="Lyseblå"
  args={{
    icon,
    disableJs: false,
    disableCss: false
  }}
  let:args>
  <section class="content" use:wrapInShadowDom={args.disableCss} aria-labelledby="heading2">
    <h2 id="heading2" class="mt-h2">Tittel for lyseblått trekkspill</h2>
    {#each disclosures as disclosure, i}
      <Disclosure
        title={disclosure.title}
        loadJs={!args.disableJs}
        theme="no-border"
        class="background-mt-rationale-blue"
        headerTag={disclosure.headerTag}
        icon={i !== 2 ? icon : undefined}>
        {@html disclosure.body}
      </Disclosure>
    {/each}
  </section>
</Story>

<Story
  name="Hvit"
  args={{
    icon,
    disableJs: false,
    disableCss: false
  }}
  let:args>
  <section class="content" use:wrapInShadowDom={args.disableCss} aria-labelledby="heading2">
    <h2 id="heading2" class="mt-h2">Tittel for hvit trekkspill</h2>
    {#each disclosures as disclosure, i}
      <Disclosure
        title={disclosure.title}
        loadJs={!args.disableJs}
        theme="no-border"
        class="background-mt-white"
        startOpen={i === 1}
        headerTag={disclosure.headerTag}
        icon={i !== 2 ? icon : undefined}>
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
    headerTag: disclosures[1].headerTag,
    disableJs: true,
    disableCss: true
  }} />

<Story
  name="Large size"
  args={{
    title: disclosures[0].title,
    body: disclosures[0].body,
    headerTag: disclosures[0].headerTag,
    disableJs: false,
    disableCss: false
  }} />

<Story
  name="I Grid"
  args={{
    title,
    showNr: true,
    disableJs: false,
    disableCss: false
  }}
  let:args>
  <section class="content" use:wrapInShadowDom={args.disableCss} aria-labelledby="heading2">
    <h2 id="heading3" class="mt-h2">{title}</h2>
    <section class="layout-grid layout-grid--column-12">
      {#each disclosures as disclosure}
        <Disclosure
          title={disclosure.title}
          loadJs={!args.disableJs}
          headerTag={disclosure.headerTag}
          class="layout-grid layout-grid--column-12 col-3-span-8"
          headerClass="col-1-span-12 text-h3"
          panelClass="col-1-span-12">
          {@html disclosure.body}
        </Disclosure>
      {/each}
    </section>
    <h2 class="mt-h2">Trekkspill med kapittel nr</h2>
    <section class="layout-grid layout-grid--column-12">
      {#each disclosures as disclosure, i}
        <Disclosure
          title={disclosure.title}
          loadJs={!args.disableJs}
          headerTag={disclosure.headerTag}
          chapter={i + 1 + '.' + 10 + '.' + i}
          class="{args.showNr
            ? 'disclosure-with-number'
            : ''} layout-grid layout-grid--column-12 col-3-span-8"
          headerClass={'text-h3'}
          panelClass="col-1-span-12">
          {@html disclosure.body}
        </Disclosure>
      {/each}
    </section>
  </section>
</Story>

<Story
  name="On open/close"
  args={{
    headerClass: 'text-body',
    icon,
    title,
    disableJs: false,
    disableCss: false
  }}
  let:args
  ><section class="content" use:wrapInShadowDom={args.disableCss} aria-labelledby="heading">
    <h2 id="heading" class="mt-h2">{title}</h2>
    {#each disclosures as disclosure, i}
      <Disclosure
        title={disclosure.title}
        loadJs={!args.disableJs}
        headerTag={disclosure.headerTag}
        icon={i === 2 ? icon : undefined}
        on:open={() => alert('opening')}
        on:close={() => alert('closing')}
        headerClass={args.headerClass}>
        {@html disclosure.body}
      </Disclosure>
    {/each}
  </section>
</Story>
