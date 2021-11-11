<script lang="ts">
  import {Meta, Story} from '@storybook/addon-svelte-csf';
  import Published from '../../../src/svelte/Published.svelte';
</script>

<Meta
  title="Innhold/Artikkel"
  args={{
    title: 'Dette er det viktig at du vet før du får kjæledyr',
    intro:
      'Å anskaffe seg et dyr er et stort ansvar og det er tid- og ressurskrevende å sørge for at dyrene får et fullverdig liv. Det gjelder alle typer dyr, også små kjæledyr som hamster, marsvin, kanin, ilder, fugler eller akvariefisk',
    content: '',
    publishFrom: '2021-06-24T11:40:02.889Z',
    professionallyUpdated: '2021-06-24T11:32:22Z',
    disableCss: false
  }}
  argTypes={{
    label: {control: 'text'},
    helpText: {control: 'text'},
    errorMessage: {control: 'text'},
    disableCss: {control: 'boolean'}
  }}
/>

<Story name="Normal" let:title let:intro let:disableCss let:publishFrom let:professionallyUpdated>
  <div class="container">
    <article class="article-page">
      <h1>{title}</h1>
      <div class="intro">
        <p>{intro}</p>
      </div>
      <figure>
        <img src="" alt="Alternativ bildetekst" />
        <figcaption>Bildetekst</figcaption>
      </figure>

      <h2>Andre overskrift</h2>
      <p>Paragraf med tekst. Paragraf med tekst. <a href="">Paragraf med tekst.</a> Paragraf med tekst</p>
      <ul>
        <li>Valget om å skaffe dyr må være godt gjennomtenkt. Er hele familien enige og innstilt på det?</li>
        <li>
          En voksen person må være hovedansvarlig for dyret. I følge dyrevelferdsloven kan barn under 16 år ikke ha et
          selvstendig ansvar for dyr.
        </li>
        <li>
          Barn kan miste interessen og dyr lever i mange år.
          <ul>
            <li>Under punkt</li>
            <li>Under punkt</li>
          </ul>
        </li>
      </ul>
      <p>Paragraf med tekst</p>

      <h2>Enda en overskrift</h2>
      <p>Paragraf med tekst</p>
      <p>Paragraf med tekst</p>

      <h3>Underoverskrift</h3>
      <p>Paragraf med tekst</p>
      <p>Paragraf med tekst</p>

      <Published {publishFrom} {professionallyUpdated} />
    </article>
  </div>
</Story>
