<script lang="ts">
  import {Meta, Story} from '@storybook/addon-svelte-csf';
  import {wrapInShadowDom} from './utils';
</script>

<Meta
  title="Typography/Heading"
  args={{
    title: "Overskrift",
    disableCss: false
  }}
  argTypes={{
    title: {control: 'text'},
    disableCss: {control: 'boolean'}
  }}
/>

<Story name="H1" let:title let:disableCss>
  <div use:wrapInShadowDom={disableCss}>
    <h1>{title}</h1>
  </div>
</Story>

<Story name="H2" let:title let:disableCss>
  <div use:wrapInShadowDom={disableCss}>
    <h2>{title}</h2>
  </div>
</Story>

<Story name="H3" let:title let:disableCss>
  <div use:wrapInShadowDom={disableCss}>
    <h3>{title}</h3>
  </div>
</Story>

<Story name="All" let:title let:disableCss>
  <div use:wrapInShadowDom={disableCss}>
    <h1>{title}</h1>
    <h2>{title}</h2>
    <h3>{title}</h3>
  </div>
</Story>

<style lang='scss' global>
  @import "../src/scss/app";
</style>
