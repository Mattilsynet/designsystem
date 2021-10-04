<script lang="ts">
  import {Meta, Story} from '@storybook/addon-svelte-csf';
</script>

<Meta
  title="Components/Innhold/Begrunnelse"
  args={{
    title: `<h3>Forskrift om omsetning og midlertidig hold av dyr, § 5 andre ledd</h3>`,
    text: `<p>
        Det skal utarbeides skriftlige rutiner for etterlevelse av forskriftsfestede krav om å ivareta dyrenes velferd,
        blant annet om
      </p>
      <ul>
        <li>Kompetanse</li>
        <li>fôring og stell</li>
        <li>aktivisering og mosjon</li>
        <li>tilrettelegging for utøvelse av naturlig atferd</li>
      </ul>
      <p>Utformingen av rutinene skal være tilpasset virksomhetens egenart.</p>`,
    disableCss: false
  }}
  argTypes={{
    disableCss: {control: 'boolean'}
  }}
/>

<Story name="Normal" let:disableCss let:title let:text>
  <div class="container">
    <div class="rationale">
      {@html title}
      {@html text}
    </div>
  </div>
</Story>

<style lang="scss">
  @import '../src/scss/app';
</style>
