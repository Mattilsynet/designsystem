<script lang="ts">
  import { Meta, Story } from '@storybook/addon-svelte-csf'
  import Published from '../../lib/svelte/components/Published.svelte'
  import Link from '../../lib/svelte/components/Link.svelte'
  import { wrapInShadowDom } from '../storybook-utils/utils'
</script>

<Meta
  title="Innhold/Rapport"
  args={{
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
    file: { text: 'Filrapporten.pdf', url: 'http://localhost/test.pdf' },
    disableCss: false
  }}
  argTypes={{
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
  }} />

<Story
  name="Normal"
  let:title
  let:intro
  let:text
  let:publishFrom
  let:professionallyUpdated
  let:subjectToExamination
  let:timePeriod
  let:lookingForWhat
  let:findings
  let:reportType
  let:organisationPerformingAssignment
  let:file
  let:linkGroups
  let:disableCss>
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
        <dl class="report-list">
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
                <Link
                  class="document forward-arrow-end-link"
                  href={file.url}
                  linkText={title}
                  fileName={file.text} />
              {/if}
            </dd>
          {/if}
        </dl>
      </section>
    </article>
  </div>
</Story>
