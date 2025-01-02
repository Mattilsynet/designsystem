<script lang="ts" module>
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import { wrapInShadowDom } from './storybook-utils/utils'
  import Alert from '$lib/svelte/components/Alert.svelte'

  const { Story } = defineMeta({
    title: 'Components/Alert',
    component: Alert,
    argTypes: {
      disableCss: { control: 'boolean' }
    },
    args: {
      alerts: [
        {
          severity: 'info',
          text: `<h1 class="mt-h4">Kan legge inn tittel</h1><p>Paragrafen kommer under. Det skal være en <a href="https://www.mattilsynet.no">lenke til en side</a></p><p>Andre paragrafen. Det skal være en <a href="https://www.mattilsynet.no">lenke til en side</a></p>`,
          rightText: `<span style="text-wrap: nowrap">Text til høyre</span>`
        },
        {
          severity: 'success',
          text: `<p>Paragrafen kommer under. Det skal være en <a href="https://www.mattilsynet.no">lenke til en side</a></p>`
        },
        {
          severity: 'warning',
          text: `<p>Paragrafen kommer under. Det skal være en <a href="https://www.mattilsynet.no">lenke til en side</a>. Paragrafen kommer under. Det skal være en <a href="https://www.mattilsynet.no">lenke til en side</a> Paragrafen kommer under. Det skal være en <a href="https://www.mattilsynet.no">lenke til en side</a></p>`
        },
        {
          severity: 'danger',
          text: `<p>Paragrafen kommer under. Det skal være en <a href="https://www.mattilsynet.no">lenke til en side</a></p><p>Paragrafen kommer under. Det skal være en <a href="https://www.mattilsynet.no">lenke til en side</a></p>`
        }
      ],
      disableCss: false
    }
  })
</script>

<Story name="Normal">
  {#snippet children({ alerts, disableCss })}
    <div use:wrapInShadowDom={disableCss} class="wrapper">
      <Alert severity={alerts[0].severity}>
        <p>Informasjon som kommer på en linje</p>
      </Alert>
      <Alert severity={alerts[0].severity}>
        {@html alerts[0].text}
      </Alert>
    </div>
  {/snippet}
</Story>
<Story name="Information">
  {#snippet children({ alerts, disableCss })}
    <div use:wrapInShadowDom={disableCss} class="wrapper">
      <Alert severity={alerts[0].severity} class="test" aria-hidden="false">
        {@html alerts[0].text}
        {#snippet right()}
          {@html alerts[0].rightText}
        {/snippet}
      </Alert>
    </div>
  {/snippet}
</Story>
<Story name="Success">
  {#snippet children({ alerts, disableCss })}
    <div use:wrapInShadowDom={disableCss} class="wrapper">
      <Alert severity={alerts[1].severity}>
        {@html alerts[1].text}
      </Alert>
    </div>
  {/snippet}
</Story>
<Story name="Warning">
  {#snippet children({ alerts, disableCss })}
    <div use:wrapInShadowDom={disableCss} class="wrapper">
      <Alert severity={alerts[2].severity}>
        {@html alerts[2].text}
      </Alert>
    </div>
  {/snippet}
</Story>
<Story name="Danger">
  {#snippet children({ alerts, disableCss })}
    <div use:wrapInShadowDom={disableCss} class="wrapper">
      <Alert severity={alerts[3].severity}>
        {@html alerts[3].text}
      </Alert>
    </div>
  {/snippet}
</Story>

<style lang="scss">
  .wrapper {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
</style>
