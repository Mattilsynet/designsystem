<script lang="ts">
  import { Meta, Story } from '@storybook/addon-svelte-csf'
  import FormSteps from '../lib/svelte/components/FormSteps.svelte'
</script>

<Meta
  title="Components/Steps"
  args={{
    completed: 3,
    steps: [
      { index: 0, show: true, label: 'Om bekymringen' },
      { index: 1, show: true, label: 'Info om deg' },
      { index: 2, show: true, label: 'Om dyrene' },
      { index: 2, show: false, label: 'Storfe' },
      { index: 2, show: false, label: 'Småfe' },
      { index: 2, show: false, label: 'Hund' },
      { index: 2, show: false, label: 'Katt' },
      { index: 7, show: true, label: 'Test' },
      { index: 8, show: true, label: 'Dokumentasjon' },
      { index: 8, show: false, label: 'Test 2' },
      { index: 10, show: true, label: 'Oppsummering' },
      { index: 11, show: true, label: 'Bekreftelse' }
    ]
  }}
  argTypes={{
    completed: { control: 'number' },
    steps: { control: 'array' }
  }} />

<Story name="Normal" let:completed let:steps>
  <FormSteps
    completedText="Utført"
    currentText="Gjeldene side"
    {steps}
    {completed}
    ariaValueText={`${steps[completed]}: Steg ${completed + 1} av ${steps.length}`} />
  <hr />
  <FormSteps
    completedText="Utført"
    currentText="Gjeldene side"
    {steps}
    completed={3}
    ariaValueText={`${steps[completed]}: Steg ${completed + 1} av ${steps.length}`} />
</Story>
