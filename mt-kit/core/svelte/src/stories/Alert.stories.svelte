<script lang="ts" module>
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import { wrapInShadowDom } from './storybook-utils/utils'
  import Alert from '$lib/svelte/components/Alert.svelte'

  const { Story } = defineMeta({
    title: 'Components/Alert',
    component: Alert,
    argTypes: {
      disableCss: { control: 'boolean' },
      alerts: { control: 'object' }
    },
    args: {
      alerts: [
        {
          severity: 'info',
          text: `<h1 class="mt-h4">Kan legge inn tittel</h1><p>Paragrafen kommer under. Det skal være en <a href="https://www.mattilsynet.no">lenke til en side</a></p><p>Andre paragrafen. Det skal være en <a href="https://www.mattilsynet.no">lenke til en side</a></p>`,
          hasClose: false
        },
        {
          severity: 'success',
          text: `<p>Paragrafen kommer under. Det skal være en <a href="https://www.mattilsynet.no">lenke til en side</a></p>`,
          hasClose: false
        },
        {
          severity: 'warning',
          text: `<p>Paragrafen kommer under. Det skal være en <a href="https://www.mattilsynet.no">lenke til en side</a>. Paragrafen kommer under. Det skal være en <a href="https://www.mattilsynet.no">lenke til en side</a> Paragrafen kommer under. Det skal være en <a href="https://www.mattilsynet.no">lenke til en side</a></p>`,
          hasClose: false
        },
        {
          severity: 'danger',
          text: `<p>Paragrafen kommer under. Det skal være en <a href="https://www.mattilsynet.no">lenke til en side</a></p><p>Paragrafen kommer under. Det skal være en <a href="https://www.mattilsynet.no">lenke til en side</a></p>`,
          hasClose: false
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
        {#if alerts[0].hasClose}
          <button type="button" aria-label="Lukk"></button>
        {/if}
      </Alert>
      <Alert severity={alerts[0].severity}>
        {@html alerts[0].text}
        {#if alerts[0].hasClose}
          <button type="button" aria-label="Lukk"></button>
        {/if}
      </Alert>
    </div>
  {/snippet}
</Story>
<Story name="Information">
  {#snippet children({ alerts, disableCss })}
    <div use:wrapInShadowDom={disableCss} class="wrapper">
      <Alert severity={alerts[0].severity}>
        {@html alerts[0].text}
        {#if alerts[0].hasClose}
          <button type="button" aria-label="Lukk"></button>
        {/if}
      </Alert>
    </div>
  {/snippet}
</Story>
<Story name="Success">
  {#snippet children({ alerts, disableCss })}
    <div use:wrapInShadowDom={disableCss} class="wrapper">
      <Alert severity={alerts[1].severity}>
        {@html alerts[1].text}
        {#if alerts[1].hasClose}
          <button type="button" aria-label="Lukk"></button>
        {/if}
      </Alert>
    </div>
  {/snippet}
</Story>
<Story name="Warning">
  {#snippet children({ alerts, disableCss })}
    <div use:wrapInShadowDom={disableCss} class="wrapper">
      <Alert severity={alerts[2].severity}>
        {@html alerts[2].text}
        {#if alerts[2].hasClose}
          <button type="button" aria-label="Lukk"></button>
        {/if}
      </Alert>
    </div>
  {/snippet}
</Story>
<Story name="Danger">
  {#snippet children({ alerts, disableCss })}
    <div use:wrapInShadowDom={disableCss} class="wrapper">
      <Alert severity={alerts[3].severity}>
        {@html alerts[3].text}
        {#if alerts[3].hasClose}
          <button type="button" aria-label="Lukk"></button>
        {/if}
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
