<script lang="ts">
  import {Meta, Story} from '@storybook/addon-svelte-csf';
</script>

<Meta
  title="Components/Innhold/Skjemaforside (modul)"
  args={{
    title: 'Varsle om piggtrådgjerder',
    intro: '',
    text: `<p>Du bør varsle Mattilsynet hvis du oppdager</p>
<ul>
 <li>at noen setter opp nye piggtrådgjerder</li>
 <li>eldre piggtrådgjerder som utgjør en risiko for at dyr blir skadet</li>
 </ul>`,
    moreText: `<p>Kommer du over sjukt eller skadet storvilt for eksempel elg hjelper du som regel best ved å <strong>ringe politiet på telefon 02800</strong>. Det samme gjelder sjøpattedyr. Politiet kobler om nødvendig inn kommunens viltforvaltning (viltnemnda). Du skal derimot avlive dyret selv dersom </p>
<ol>
 <li>dyret er hardt skadet</li>
 <li>politiet ikke kan yte hjelp innen rimelig tid,</li>
 <li>og du har skytevåpen og vet hvordan du skal avlive dyret forsvarlig.</li>
 </ol>`,
    formLinkUrl: 'http://',
    formLinkText: 'Lenke til skjema',
    disableCss: false
  }}
  argTypes={{
    disabled: {control: 'boolean'},
    disableCss: {control: 'boolean'}
  }}
/>

<Story name="Normal" let:title let:intro let:text let:moreText let:formLinkUrl let:formLinkText>
  <div class="container">
    <article class="form-intro">
      <h3>{title}</h3>

      {#if intro}
        <div class="intro">
          {@html intro}
        </div>
      {/if}

      {#if text}
        <div class="text">
          {@html text}
        </div>
      {/if}

      {#if moreText}
        <div class="text">
          {@html moreText}
        </div>
      {/if}

      {#if formLinkUrl && formLinkText}
        <a href={formLinkUrl} class="button button--primary self-start">
          {formLinkText}
        </a>
      {/if}
    </article>
  </div>
</Story>

<style lang="scss">
  @use 'src/scss/app';
</style>
