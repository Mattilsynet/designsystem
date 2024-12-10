<script lang="ts">
  import { Meta, Story } from '@storybook/addon-svelte-csf'
  import CardArticle from '$lib/svelte/components/CardArticle.svelte'
  import { wrapInShadowDom } from '../storybook-utils/utils'
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
    formLinkUrl: 'http://www.mattilsynet.no',
    formLinkText: 'Lenke til skjema',
    disableCss: false
  }}
  argTypes={{
    title: { control: 'text' },
    intro: { control: 'text' },
    text: { control: 'text' },
    moreText: { control: 'text' },
    formLinkUrl: { control: 'text' },
    formLinkText: { control: 'text' },
    disableCss: { control: 'boolean' }
  }}
/>

<Story name="Normal">
  {#snippet children({ title, intro, text, moreText, formLinkUrl, formLinkText, disableCss })}
    <div use:wrapInShadowDom={disableCss} class="container layout-grid layout-grid--column-12">
      <article class="article-page col-1-span-12">
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
          <p>
            <a href={formLinkUrl} class="mt-link link--transport link--transport--primary">
              {formLinkText}
            </a>
          </p>
        {/if}
      </article>
    </div>
  {/snippet}
</Story>

<Story name="Modul - normal">
  {#snippet children({ title, intro, text, moreText, formLinkUrl, formLinkText, disableCss })}
    <div use:wrapInShadowDom={disableCss} class="container">
      <CardArticle
        type="form-intro-module"
        linkText={formLinkText}
        linkUrl={formLinkUrl}
        {intro}
        {title}
        {text}
        id={title}
      />
    </div>
  {/snippet}
</Story>

<Story name="Modul - H2 heading">
  {#snippet children({ title, intro, text, moreText, formLinkUrl, formLinkText, disableCss })}
    <div use:wrapInShadowDom={disableCss} class="container">
      <CardArticle
        type="form-intro-module"
        linkText={formLinkText}
        linkUrl={formLinkUrl}
        {intro}
        {title}
        {text}
        headerTag="h2"
        id={title}
      />
    </div>
  {/snippet}
</Story>
