<script lang="ts">
  import {Meta, Story} from '@storybook/addon-svelte-csf'
  import CardArticle from '../../../src/svelte/CardArticle.svelte'
  import {wrapInShadowDom} from '../../utils'
</script>

<Meta
  title="Innhold/Skjemaforside (modul)"
  args={{
    title: 'Varsle om piggtrådgjerder',
    intro: '',
    text: `<p>Du bør varsle Mattilsynet hvis du oppdager</p>
           <ul>
             <li>at noen setter opp nye piggtrådgjerder</li>
             <li>eldre piggtrådgjerder som utgjør en risiko for at dyr blir skadet</li>
           </ul>`,
    formLinkUrl: 'http://',
    formLinkText: 'Lenke til skjema',
    disableCss: false
  }}
  argTypes={{
    disabled: {control: 'boolean'},
    disableCss: {control: 'boolean'}
  }} />

<Story
  name="Normal"
  let:title
  let:intro
  let:text
  let:moreText
  let:formLinkUrl
  let:formLinkText
  let:disableCss>
  <div use:wrapInShadowDom={disableCss} class="container">
    <CardArticle
      type="form-intro-module"
      linkText={formLinkText}
      linkUrl={formLinkUrl}
      {intro}
      {title}
      {text}
      id={title} />
  </div>
</Story>

<Story
  name="H2 heading"
  let:title
  let:intro
  let:text
  let:moreText
  let:formLinkUrl
  let:formLinkText
  let:disableCss>
  <div use:wrapInShadowDom={disableCss} class="container">
    <CardArticle
      type="form-intro-module"
      linkText={formLinkText}
      linkUrl={formLinkUrl}
      {intro}
      {title}
      {text}
      headerTag="h2"
      id={title} />
  </div>
</Story>
