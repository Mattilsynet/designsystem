<script lang="ts" module>
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import Published from '$lib/svelte/components/Published.svelte'
  import Link from '$lib/svelte/components/Link.svelte'
  import { wrapInShadowDom } from '../storybook-utils/utils'

  const { Story } = defineMeta({
    title: 'Innhold/Rapport',
    args: {
      reportType: 'Rapport',
      title: 'Veterinær grensekontroll sjømat 2020',
      intro: 'Intro til grensekontroll',
      text: 'Teksten til grensekontrollen',
      publishFrom: '2021-06-24T11:40:02.889Z',
      professionallyUpdated: '2021-06-24T11:32:22Z',
      subjectToExamination: 'Dette undersøkte vi',
      timePeriod: 'Dette er tidsperioden',
      lookingForWhat: 'Dette så vi etter',
      organisationPerformingAssignment: 'Disse utførte oppdraget',
      findings: 'Dette fant vi',
      file: {
        text: 'Filrapporten.pdf',
        url: 'http://www.mattilsynet-xp7prod.enonic.cloud/test.pdf'
      },
      disableCss: false
    },
    argTypes: {
      title: { control: 'text' },
      reportType: { control: 'text' },
      publishFrom: { control: 'text' },
      professionallyUpdated: { control: 'text' },
      subjectToExamination: { control: 'text' },
      timePeriod: { control: 'text' },
      lookingForWhat: { control: 'text' },
      organisationPerformingAssignment: { control: 'text' },
      findings: { control: 'text' },
      file: { control: 'object' },
      disableCss: { control: 'boolean' }
    }
  })
</script>

<Story name="Normal">
  {#snippet children({
    title,
    intro,
    text,
    publishFrom,
    professionallyUpdated,
    subjectToExamination,
    timePeriod,
    lookingForWhat,
    findings,
    reportType,
    organisationPerformingAssignment,
    file,
    disableCss
  })}
    <div class="layout-grid layout-grid--column-12" use:wrapInShadowDom={disableCss}>
      <article class="article-page col-1-span-12 report">
        <span>{reportType}</span>
        <h1 class="mt-h1">{@html title}</h1>

        {#if intro}
          <div class="intro">
            {@html intro}
          </div>
        {/if}

        <Published {publishFrom} {professionallyUpdated} />

        <section class="background-mt-white col-3-span-8 p-xs m-t-m">
          {#if text}
            <div class="text">
              {@html text}
            </div>
          {/if}
          <dl class="mt-dl report-list">
            {#if subjectToExamination}
              <dt>Hva undersøkte vi?</dt>
              <dd class="text">{@html subjectToExamination}</dd>
            {/if}
            {#if timePeriod}
              <dt>Tidsrom</dt>
              <dd class="text">{@html timePeriod}</dd>
            {/if}
            {#if lookingForWhat}
              <dt>Hva lette vi etter?</dt>
              <dd class="text">{@html lookingForWhat}</dd>
            {/if}
            {#if findings}
              <dt>Hva fant vi?</dt>
              <dd class="text">{@html findings}</dd>
            {/if}
            {#if organisationPerformingAssignment}
              <dt>Hvem utførte oppdraget?</dt>
              <dd class="text">{@html organisationPerformingAssignment}</dd>
            {/if}
            {#if file.url}
              <dt>File</dt>
              <dd class="text">
                {#if file.url}
                  <Link class="document" href={file.url} linkText={title} fileName={file.text} />
                {/if}
              </dd>
            {/if}
          </dl>
        </section>
      </article>
    </div>
  {/snippet}
</Story>
