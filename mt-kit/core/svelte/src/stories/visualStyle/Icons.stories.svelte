<script lang="ts">
  import { Meta, Story } from '@storybook/addon-svelte-csf'
  import { wrapInShadowDom } from '../storybook-utils/utils'
</script>

<Meta
  title="Visual Style/Ikoner"
  args={{
    disableCss: false
  }}
  argTypes={{
    disableCss: { control: 'boolean' }
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
        <li><a href="" class="mt-link icon--list-checkmark-before fit-content">nummer to</a></li>
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
    <section>
      <h2>Kalender</h2>
      <p class="icon--calendar-before p-tb-xxs">Høringsfrist: 13.05.2022</p>
    </section>
    <section>
      <h2>Caret down</h2>
      <div class="layout-flex layout-flex--no-wrap">
        <div class="box">
          <h2 class="h4">Normal</h2>
          <p class="icon--caret-down-after">Text</p>
        </div>
        <div class="box background-primary">
          <h2 class="h4">On primary</h2>
          <p class="icon--caret-down-after-on-primary">Text</p>
        </div>
      </div>
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
  .box {
    padding: var(--spacer-xx-small);
  }
  .icon--caret-down-after-on-primary {
    &:hover {
      background-color: var(--color-mt-white);
      color: var(--color-primary);
    }
  }
</style>
