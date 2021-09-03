<script lang="ts">
  import {Meta, Story} from '@storybook/addon-svelte-csf';
</script>

<Meta
  title="Components/Links"
  args={{
    primary: 'mattilsynet.no',
    secondary: 'Avbryt',
    disabled: false,
    disableCss: false
  }}
  argTypes={{
    primary: {control: 'text'},
    disabled: {control: 'boolean'},
    disableCss: {control: 'boolean'}
  }}
/>

<Story name="Normal" let:primary let:disableCss let:disabled let:secondary>
  <h1>Lenker</h1>
  <p>Bruk alene:</p>
  <a href="https://mattilsynet.no/">{primary}</a>
  <hr />
  <p>Bruk i text:</p>
  <p>Les mer om <a href="https://mattilsynet.no/">mattilsynet</a> her.</p>

  <hr />
  <p>Tilbakelenke</p>
  <a href="https://mattilsynet.no/" class="back-arrow">Tilbake</a>
</Story>

<style lang="scss" global>
  @import 'src/scss/app';
  hr {
    margin-top: var(--spacer-large);
  }
</style>
