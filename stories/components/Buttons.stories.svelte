<script lang="ts">
  import {Meta, Story} from '@storybook/addon-svelte-csf';
</script>

<Meta
  title="Components/Buttons"
  args={{
    primary: 'Gå videre',
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
  <h1>Knapper</h1>
  <p class="description">Hovedknapp</p>
  <button class="button button--primary" {disabled}>{primary}</button>

  <p class="description">Sekundær</p>
  <button class="button button--secondary" {disabled}>{secondary}</button>
</Story>

<style lang="scss" global>
  @import 'src/scss/app';

  button {
    margin-top: 0.5rem;
  }
  .description {
    margin-top: 2rem;
  }
</style>
