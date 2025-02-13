<script lang="ts" module>
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import { wrapInShadowDom } from '../storybook-utils/utils'

  const { Story } = defineMeta({
    title: 'Visual Style/Ikoner',
    args: {
      disableCss: false
    },
    argTypes: {
      disableCss: { control: 'boolean' }
    }
  })
</script>

<Story name="All">
  {#snippet children({ disableCss })}
    <div use:wrapInShadowDom={disableCss} style="--wrap: wrap">
      <h1 class="mt-h1">Ikoner</h1>
      <section class="layout-flex layout-flex-col">
        <h2 class="mt-h2">Søk</h2>
        <span class="icon--search-after">Søk</span>

        <h2 class="mt-h2">Liste hake</h2>
        <ul class="mt-ul m-t-xxs list-unstyled">
          <li class="icon--list-checkmark-before">nummer en</li>
          <li class="icon--list-checkmark-before">dette er en lengre tekst over to linjer</li>
          <li><a href="#anchor" class="icon--list-checkmark-before">nummer to</a></li>
        </ul>
      </section>
      <section>
        <h2 class="mt-h2">Ikoner til alert icons</h2>
        <p class="icon--alert-filled-info-before">Info</p>
        <p class="icon--alert-filled-success-before">Success</p>
        <p class="icon--alert-filled-warning-before">Warning</p>
        <p class="icon--alert-filled-partial-before">Partial</p>
        <p class="icon--alert-filled-danger-before">Danger</p>
      </section>
      <section>
        <h2 class="mt-h2">Bjelleikon</h2>
        <p class="icon--newsletter-bell-before p-tb-xxs"></p>
      </section>
      <section>
        <h2 class="mt-h2">Historie</h2>
        <p class="icon--changelog-before p-tb-xxs"></p>
      </section>
      <section>
        <h2 class="mt-h2">Kalender</h2>
        <p class="icon--calendar-before p-tb-xxs">Høringsfrist: 13.05.2022</p>
      </section>
      <section>
        <h2 class="mt-h2">Caret down</h2>
        <div class="layout-flex layout-flex--no-wrap">
          <div class="box">
            <h2 class="mt-h4">Normal</h2>
            <p class="icon--caret-down-after">Text</p>
          </div>
          <div class="box background-primary">
            <h2 class="mt-h4">On primary</h2>
            <p class="icon--caret-down-after-on-primary">Text</p>
          </div>
        </div>
      </section>
      <section>
        <h2 class="mt-h2">Close (X)</h2>
        <p class="icon--x-before"></p>
      </section>
      <section>
        <h2 class="mt-h2">Ned- og opplasting</h2>
        <p class="icon--download-before"></p>
        <p class="icon--upload-before"></p>
      </section>
      <section>
        <h2 class="mt-h2">Pdf fil</h2>
        <p class="icon--pdf-before">icon--pdf-before</p>
      </section>
      <section>
        <h2 class="mt-h2">Ekstern lenke</h2>
        <p class="icon--external-link-before">icon--external-link-before</p>
      </section>
      <section>
        <h2 class="mt-h2">Piler</h2>
        <p class="icon--arrow-primary-after p-tb-xxs">icon--arrow-primary-after</p>
        <p class="icon--arrow-primary-hover-after p-tb-xxs">icon--arrow-primary-hover-after</p>
        <p class="icon--arrow-right-on-primary-after p-tb-xxs">
          icon--arrow-right-on-primary-after
        </p>
        <p class="icon--arrow-right-primary-after p-tb-xxs">icon--arrow-right-primary-after</p>
        <p class="icon--arrow-right-primary-small-after p-tb-xxs">
          icon--arrow-right-primary-small-after
        </p>
        <p class="icon--arrow-forward-x-small-after p-tb-xxs">icon--arrow-forward-x-small-after</p>
        <a class="mt-link forward-arrow-small p-tb-xxs">mt-link forward-arrow-small</a>
        <a class="mt-link forward-arrow-end-link p-tb-xxs">mt-link forward-arrow-end-link</a>
        <a class="mt-link forward-arrow-end p-tb-xxs">mt-link forward-arrow-end</a>
        <a class="mt-link forward-arrow-end blue-arrow p-tb-xxs"
          >mt-link forward-arrow-end blue-arrow</a>
        <a class="mt-link forward-arrow-after p-tb-xxs">mt-link forward-arrow-after</a>
      </section>
    </div>
  {/snippet}
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
