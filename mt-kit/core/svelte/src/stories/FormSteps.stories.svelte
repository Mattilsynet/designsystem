<script lang="ts" module>
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import FormSteps from '$lib/svelte/components/FormSteps.svelte'

  const { Story } = defineMeta({
    title: 'Components/Steps',
    args: {
      currentPath: '/dokumentasjon',
      steps: [
        { index: 0, show: true, label: 'Om bekymringen', subPageUrl: '/om-bekymringen' },
        { index: 1, show: true, label: 'Info om deg', subPageUrl: '/info-om-deg' },
        { index: 2, show: true, label: 'Om dyrene', subPageUrl: '/om-dyrene' },
        { index: 2, show: false, label: 'Storfe', subPageUrl: '/storfe' },
        { index: 2, show: false, label: 'Småfe', subPageUrl: '/smaafe' },
        { index: 2, show: false, label: 'Hund', subPageUrl: '/hund' },
        { index: 2, show: false, label: 'Katt', subPageUrl: '/katt' },
        { index: 7, show: true, label: 'Test', subPageUrl: '/test' },
        { index: 8, show: true, label: 'Dokumentasjon', subPageUrl: '/dokumentasjon' },
        { index: 8, show: false, label: 'Test 2', subPageUrl: '/test-2' },
        { index: 10, show: true, label: 'Oppsummering', subPageUrl: '/oppsummering' },
        { index: 11, show: true, label: 'Bekreftelse', subPageUrl: '/bekreftelse' }
      ]
    },
    argTypes: {
      currentPath: { control: 'text' },
      steps: { control: 'object' }
    }
  })
</script>

<Story name="Normal">
  {#snippet children({ steps, currentPath })}
    <h1 class="h1">Form steps</h1>
    <hr />
    <FormSteps
      {steps}
      {currentPath}
      progressBarLabel={'Fremdriftslinje for skjema.'}
      ariaValueText={'Current: {0}, Step: {1} of {2}'}
      class="testClass" />
  {/snippet}
</Story>
