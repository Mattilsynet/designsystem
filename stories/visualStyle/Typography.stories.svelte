<script lang="ts">
  import {Meta, Story} from '@storybook/addon-svelte-csf';
  import {wrapInShadowDom} from '../utils';
</script>

<Meta
  title="Visual Style/Typography"
  args={{
    h1: 'h1 - Overskrift',
    h2: 'h2 - Overskrift',
    h3: 'h3 - Overskrift',
    h4: 'h4 - Overskrift',
    paragraph: 'p - Denne teksten er den vanlige/paragraph (body/p) tekst størrelsen',
    intro: '.intro - Denne teksten skal brukes til ingress',
    small: '.text-small - Dette en en liten tekst størrelse. Skal ikke brukes som "vanlig" tekst',
    label: 'label - label tekst størrelse',
    link: 'a - link tekst størrelse',
    disableCss: false
  }}
  argTypes={{
    title: {control: 'text'},
    disableCss: {control: 'boolean'}
  }}
/>
<Story name="All" let:h1 let:h2 let:h3 let:h4 let:intro let:link let:paragraph let:small let:label let:disableCss>
  <div use:wrapInShadowDom={disableCss} class="layout-flex-col">
    <h1>{h1}</h1>
    <h2>{h2}</h2>
    <h3>{h3}</h3>
    <h4>{h4}</h4>
    <p class="intro">{intro}</p>
    <p>{paragraph}</p>
    <p class="text-small">{small}</p>
    <form action="">
      <label for="input">{label}</label>
      <input id="input" class="form-field" type="text" />
    </form>
    <a href="">{link}</a>
  </div>
</Story>

<Story name="Headings" let:h1 let:h2 let:h3 let:h4 let:disableCss>
  <div use:wrapInShadowDom={disableCss} class="layout-flex-col">
    <h1>{h1}</h1>
    <h2>{h2}</h2>
    <h3>{h3}</h3>
    <h4>{h4}</h4>
  </div>
</Story>

<Story name="Main" let:paragraph let:intro let:small let:label let:link let:disableCss>
  <div use:wrapInShadowDom={disableCss} class="layout-flex-col">
    <p class="intro">{intro}</p>

    <p>{paragraph}</p>

    <p class="text-small">{small}</p>
    <form action="">
      <label for="input">{label}</label>
      <input id="input" class="form-field" type="text" />
    </form>
    <a href="">{link}</a>
  </div>
</Story>

<style lang="scss" global>
  @import 'src/scss/app';
  .layout-flex-col {
    --gap: var(--spacer-2);
  }
</style>
