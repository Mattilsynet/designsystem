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
        <li class="icon--list-checkmark-before">dette er en lengre tekst over to linjer</li>
        <li><a href="" class="icon--list-checkmark-before fit-content">nummer to</a></li>
      </ul>
    </section>
    <section>
      <h2>Ikoner til alert icons</h2>
      <p class="icon--alert-filled-error-before">Avvist</p>
      <p class="icon--alert-filled-error-before">Ikke medhold</p>
      <p class="icon--alert-filled-success-before">Medhold</p>
      <p class="icon--alert-filled-warning-before">Delvis medhold</p>
    </section>
    <section>
      <h2>Bjelleikon</h2>
      <p class="icon--newsletter-bell-before p-tb-xxs" />
    </section>
    <section>
      <h2>Historie</h2>
      <p class="icon--changelog-before p-tb-xxs" />
    </section>
  </div>
</Story>

<style lang="scss">
  li:nth-child(2) {
    width: 10rem;
  }
  .layout-flex-col {
    --gap: none;
    margin-top: 2rem;
  }
  .icon--search-after {
    margin: 1rem;
  }
</style>
