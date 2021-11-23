<script lang="ts">
  import {Meta, Story} from '@storybook/addon-svelte-csf';
</script>

<Meta
  title="Innhold/Skjemaforside"
  args={{
    title: 'Varsle om piggtrådgjerder',
    intro: `<p>Dette er introen</p>`,
    text: `<p>Du bør varsle Mattilsynet hvis du oppdager</p>
           <ul>
            <li>at noen setter opp nye piggtrådgjerder</li>
            <li>eldre piggtrådgjerder som utgjør en risiko for at dyr blir skadet</li>
           </ul>`,
    moreText: `<h2>Du bør varsle</h2>
               <p>At noen setter opp nye piggtrådgjerder</p>
               <p>Eldre piggtrådgjerder som utgjør en risiko for at dyr blir skadet</p>`,
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
  <div class="container layout-grid layout-grid--column-12">
    <div class="layout-flex-col form-intro col-3-span-8">
      <article class="content">
        <h1>{title}</h1>

        {#if intro}
          <div class="intro">
            {@html intro}
          </div>
        {/if}

        {#if text}
          {@html text}
        {/if}

        {#if moreText}
          {@html moreText}
        {/if}

        {#if formLinkUrl && formLinkText}
          <a href={formLinkUrl} class="button button--primary self-start">
            {formLinkText}
          </a>
        {/if}
      </article>
    </div>
  </div>
</Story>
