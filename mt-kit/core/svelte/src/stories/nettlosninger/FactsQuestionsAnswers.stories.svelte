<script lang="ts">
  import { Meta, Story } from '@storybook/addon-svelte-csf'
  import FactsQuestionsAnswers from '../../lib/svelte/content/FactsQuestionsAnswers.svelte'
  import { wrapInShadowDom } from '../storybook-utils/utils'
</script>

<Meta
  title="Innhold/Fakta, spørsmål og svar"
  args={{
    title: 'Om sykdommen',
    facts:
      '<p>Noe fakta om en sykdom.</p><p>Det gjelder alle typer dyr, også små kjæledyr som hamster, marsvin, kanin, ilder, fugler eller akvariefisk</p>',
    questionsAnswers: [
      {
        question: 'Symptomer',
        answer: '<p>Describing the symptoms</p>',
        imageUrl: 'http://localhost:3003',
        imageAltText: 'Alt text',
        caption: 'Figure caption'
      },
      {
        question: 'Hvordan smitter sykdommen?',
        answer:
          '<p>Describing the routes of the infaction. Describing the routes of the infaction. Describing the routes of the infaction</p> <p>loremipum loremipum loremipum loremipum loremipum loremipum loremipum loremipum loremipum loremipum loremipum loremipum loremipum </p> '
      },
      {
        question: 'Kan sykdommen smitte til mennesker?',
        answer: '<a href="https://www.mattilsynet.no">Mattilsynet</a>'
      }
    ],
    publishFrom: '2021-06-24T11:40:02.889Z',
    professionallyUpdated: '2021-06-24T11:32:22Z',
    disableCss: false,
    loadJs: true
  }} />

<Story name="Normal" let:title let:facts let:questionsAnswers let:disableCss let:loadJs>
  <div class="container layout-grid layout-grid--column-12" use:wrapInShadowDom={disableCss}>
    <article class="col-1-span-6 facts-questions-answers">
      <FactsQuestionsAnswers {facts} {title} {questionsAnswers} {loadJs} />
    </article>
  </div>
</Story>
