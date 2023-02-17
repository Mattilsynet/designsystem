<script lang="ts">
  import {Meta, Story} from '@storybook/addon-svelte-csf'
  import {wrapInShadowDom} from '../utils'
</script>

<Meta
  title="Visual Style/Ikoner"
  args={{
    disableCss: false
  }}
  argTypes={{
    disableCss: {control: 'boolean'}
  }} />
<Story name="All" let:primary let:disableCss>
  <div use:wrapInShadowDom={disableCss} style="--wrap: wrap">
    <h1>Ikoner</h1>
    <section class="layout-flex layout-flex-col">
      <h2>Søk</h2>
      <span class="icon--search-after">Søk</span>

      <h2>Liste hake</h2>
      <ul class="list-unstyled">
        <li class="icon--list-checkmark-before">nummer en</li>
        <li><a href="" class="icon--list-checkmark-before">nummer to</a></li>
      </ul>
    </section>
  </div>
</Story>

<style lang="scss">
  .layout-flex-col {
    --gap: none;
    margin-top: 2rem;
  }
  .icon--search-after {
    margin: 1rem;
  }
</style>
