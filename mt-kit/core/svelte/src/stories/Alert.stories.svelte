<script lang="ts">
  import { Meta, Story } from '@storybook/addon-svelte-csf'
  import { wrapInShadowDom } from './storybook-utils/utils'
  import Alert from '../lib/svelte/components/Alert.svelte'
</script>

<Meta
  title="Components/Alert"
  args={{
    alerts: [
      {
        severity: 'info',
        text: `<h1 class="mt-h4">Skal ha en heading her</h1><p>Paragrafen kommer under. Det skal være en <a href="www.mattilsynet.no">leneke til en side</a></p><p>Andre paragraphen. Det skal være en <a href="www.mattilsynet.no">leneke til en side</a></p>`
      },
      {
        severity: 'success',
        text: `<p>Paragrafen kommer under. Det skal være en <a href="www.mattilsynet.no">leneke til en side</a></p>`
      },
      {
        severity: 'warning',
        text: `<p>Paragrafen kommer under. Det skal være en <a href="www.mattilsynet.no">leneke til en side</a>. Paragrafen kommer under. Det skal være en <a href="www.mattilsynet.no">leneke til en side</a> Paragrafen kommer under. Det skal være en <a href="www.mattilsynet.no">leneke til en side</a></p>`
      },
      {
        severity: 'danger',
        text: `<p>Paragrafen kommer under. Det skal være en <a href="www.mattilsynet.no">leneke til en side</a></p><p>Paragrafen kommer under. Det skal være en <a href="www.mattilsynet.no">leneke til en side</a></p>`
      }
    ],
    disableCss: false
  }}
  argTypes={{
    disableCss: { control: 'boolean' }
  }} />

<Story name="Normal" let:alerts let:disableCss>
  <div use:wrapInShadowDom={disableCss} class="wrapper">
    <Alert severity={alerts[0].severity}>
      {@html alerts[0].text}
    </Alert>
  </div>
</Story>
<Story name="Information" let:alerts let:disableCss>
  <div use:wrapInShadowDom={disableCss} class="wrapper">
    <Alert severity={alerts[0].severity}>
      {@html alerts[0].text}
    </Alert>
  </div>
</Story>
<Story name="Success" let:alerts let:disableCss>
  <div use:wrapInShadowDom={disableCss} class="wrapper">
    <Alert severity={alerts[1].severity}>
      {@html alerts[1].text}
    </Alert>
  </div>
</Story>
<Story name="Warning" let:alerts let:disableCss>
  <div use:wrapInShadowDom={disableCss} class="wrapper">
    <Alert severity={alerts[2].severity}>
      {@html alerts[2].text}
    </Alert>
  </div>
</Story>
<Story name="Danger" let:alerts let:disableCss>
  <div use:wrapInShadowDom={disableCss} class="wrapper">
    <Alert severity={alerts[3].severity}>
      {@html alerts[3].text}
    </Alert>
  </div>
</Story>

<style lang="scss">
  .wrapper {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .box {
    border: 2px solid red;
    padding: var(--spacer-xx-small);
    width: 40rem;
  }
</style>
