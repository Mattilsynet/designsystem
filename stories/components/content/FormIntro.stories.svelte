<script lang="ts">
  import {Meta, Story} from '@storybook/addon-svelte-csf';
  import CardArticle from '../CardArticle.svelte';
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
    <CardArticle type="form-intro" linkText={formLinkText} linkUrl={formLinkUrl} {intro} {title} {text} id={title} />
  </div>
</Story>

<style lang="scss">
  @use 'src/scss/app';
</style>
