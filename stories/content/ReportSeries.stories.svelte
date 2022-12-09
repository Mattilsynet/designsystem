<script lang="ts">
  import {Meta, Story} from '@storybook/addon-svelte-csf'
  import Disclosure from '../../src/svelte/Disclosure.svelte'
  import Published from '../../src/svelte/Published.svelte'
  import Link from '../../src/svelte/Link.svelte'
  import {wrapInShadowDom} from '../utils'
</script>

<Meta
  title="Innhold/Rapportserie"
  args={{
    title: 'Hovedoverskrift',
    intro: 'Veterinær grensekontroll sjømat 2020',
    text: 'Veterinær grensekontroll sjømat 2020',
    publishFrom: '2021-06-24T11:40:02.889Z',
    professionallyUpdated: '2021-06-24T11:32:22Z',
    publications: [
      {
        title: 'Overskrift 1',
        text: 'Tekst 1',
        subjectToExamination: 'Dette undersøkte vi',
        timePeriod: 'Dette er tidsperioden',
        lookingForWhat: 'Dette så vi etter',
        organisationPerformingAssignment: 'Disse utførte oppdraget',
        findings: 'Dette fant vi',
        file: {text: 'Filrapporten.pdf', url: 'http://localhost/test.pdf'}
      },
      {
        title: 'Overskrift 2',
        subjectToExamination: 'Dette undersøkte vi',
        timePeriod: 'Dette er tidsperioden',
        lookingForWhat: 'Dette så vi etter',
        organisationPerformingAssignment: 'Disse utførte oppdraget',
        findings: 'Dette fant vi',
        file: {text: 'Filrapporten', url: 'http://localhost/test.pdf'}
      }
    ],
    disableCss: false
  }}
  argTypes={{
    title: {control: 'text'},
    intro: {control: 'text'},
    text: {control: 'text'},
    publishFrom: {control: 'text'},
    professionallyUpdated: {control: 'text'},
    publications: {control: 'array'},
    disableCss: {control: 'boolean'}
  }} />

<Story
  name="Normal"
  let:title
  let:intro
  let:text
  let:publishFrom
  let:professionallyUpdated
  let:publications
  let:disableCss>
  <div class="layout-grid layout-grid--column-12" use:wrapInShadowDom={disableCss}>
    <article class="article-page col-1-span-12 report">
      <span>Rapport</span>
      <h1>{@html title}</h1>
      {#if intro}
        <div class="intro">
          {@html intro}
        </div>
      {/if}
      <Published {publishFrom} {professionallyUpdated} />

      {#each publications as publication, index}
        <Disclosure
          title={publication.title}
          theme="no-border"
          class="background-mt-white col-3-span-8"
          startOpen={index === 0}
          headerTag="h2">
          {#if publication.text}
            <div class="text">
              {@html publication.text}
            </div>
          {/if}
          <dl class="report-list">
            {#if publication.subjectToExamination}
              <dt>Hva undersøkte vi?</dt>
              <dd class="text">{@html publication.subjectToExamination}</dd>
            {/if}
            {#if publication.timePeriod}
              <dt>Tidsrom</dt>
              <dd class="text">{@html publication.timePeriod}</dd>
            {/if}
            {#if publication.lookingForWhat}
              <dt>Hva lette vi etter?</dt>
              <dd class="text">{@html publication.lookingForWhat}</dd>
            {/if}
            {#if publication.findings}
              <dt>Hva fant vi?</dt>
              <dd class="text">{@html publication.findings}</dd>
            {/if}
            {#if publication.organisationPerformingAssignment}
              <dt>Hvem utførte oppdraget?</dt>
              <dd class="text">{@html publication.organisationPerformingAssignment}</dd>
            {/if}
            {#if publication.file.url}
              <dt>File</dt>
              <dd class="text">
                {#if publication.file.url}
                  <Link
                    class="document forward-arrow-end-link"
                    href={publication.file.url}
                    linkText={publication.title}
                    fileName={publication.file.text} />
                {/if}
              </dd>
            {/if}
          </dl>
        </Disclosure>
      {/each}
    </article>
  </div>
</Story>
