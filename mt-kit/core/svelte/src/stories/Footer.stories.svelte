<script lang="ts" module>
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import { styles } from '@mattilsynet/design'

  const { Story } = defineMeta({
    title: 'Components/Footer',
    parameters: { layout: 'fullscreen' },
    args: {
      disableCss: false
    },
    argTypes: {
      disableCss: { control: 'boolean' }
    }
  })
</script>

<Story name="Normal">
  {#snippet children({ disableCss })}
    <header class="mt-header">
      <div class="container mt-header-wrapper mt-header-wrapper--regular">
        <a
          class="{styles.logo} width-fit-content"
          href="https://mattilsynet.no/"
          aria-label="Gå til forsiden"></a>
      </div>
    </header>
    <main class="mt-main container content">
      <h1 class="mt-h1">Bekymringsmelding til Mattilsynet</h1>
    </main>
    <footer class="mt-footer">
      <div class="container footer-wrapper footer-regular">
        <h2 id="footer-title" class="mt-h2 inclusively-hidden">Footer</h2>
        <span class={styles.logo}></span>
        <div class="col">
          <h2 class="mt-h2">Om nettstedet</h2>
          <p>
            <a class="mt-link" href="/nyhetsbrev">Nyhetsbrev</a>
          </p>
          <p>
            <a class="mt-link" href="/personvern-og-informasjonskapsler"
              >Personvernerklæring og informasjonskapsler</a>
          </p>
          <p>
            <a class="mt-link" href="https://www.uustatus.no"
              >Tilgjengeligheitserklæring (uustatus.no)</a>
          </p>
          <p>
            <a class="mt-link" href="/våre-api">Åpne data (API)</a>
          </p>
        </div>
        <div class="col">
          <h2 class="mt-h2">Om Mattilsynet</h2>
          <p>
            <a class="mt-link" href="/kontakt-oss">Kontakt oss</a>
          </p>
          <p>
            <a class="mt-link" href="/se-ledige-stillinger">Ledige stillinger</a>
          </p>
          <p>
            <a class="mt-link" href="/om-mattilsynet">Om oss</a>
          </p>
          <p>
            <a class="mt-link" href="/varsle">Varsle oss</a>
          </p>
        </div>
      </div>
    </footer>
  {/snippet}
</Story>

<style lang="scss">
</style>
