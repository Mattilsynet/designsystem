<script lang="ts">
  import {Meta, Story} from '@storybook/addon-svelte-csf'
  import AnimalDisease from '../../../src/svelte/content/AnimalDisease.svelte'
  import imageFile from '../../../.static/testbilde.jpg'
</script>

<Meta
  title="Innhold/Dyresykdom"
  args={{
    title: 'Om sykdommen',
    intro:
      '<p>Å anskaffe seg et dyr er et stort ansvar og det er tid- og ressurskrevende å sørge for at dyrene får et fullverdig liv.</p><p>Det gjelder alle typer dyr, også små kjæledyr som hamster, marsvin, kanin, ilder, fugler eller akvariefisk</p>',
    symptoms: `<p>Dette beskriver symptomene for sykdommen</p>`,
    routesOfInfection: `<p>Dette beskriver symptomene for sykdommen</p>`,
    infectionToHumans: `<p>Dette beskriver symptomene for sykdommen</p>`,
    publishFrom: '2021-06-24T11:40:02.889Z',
    professionallyUpdated: '2021-06-24T11:32:22Z',
    disableCss: false
  }}
  argTypes={{
    label: {control: 'text'},
    helpText: {control: 'text'},
    errorMessage: {control: 'text'},
    disableCss: {control: 'boolean'}
  }} />

<Story
  name="Normal"
  let:title
  let:intro
  let:symptoms
  let:routesOfInfection
  let:infectionToHumans
  let:disableCss
  let:publishFrom
  let:professionallyUpdated>
  <div class="container layout-grid layout-grid--column-12">
    <article class="col-7-span-6 animal-disease">
      <AnimalDisease
        text={intro}
        {symptoms}
        {routesOfInfection}
        {infectionToHumans}
        infectionToHumansHeading="Kan sykdommen smitte til mennesker?"
        symptomsHeading="Symptomer"
        imageUrl={imageFile}
        imageAltText="Alternative text"
        caption="This is the caption"
        routesOfInfectionHeading="Hvordan smitter sykdommen?"
        disclosureHeadClass="text-body">
        <h2>{title}</h2>
      </AnimalDisease>
    </article>
  </div>
</Story>
