<script lang="ts">
  import {Meta, Story} from '@storybook/addon-svelte-csf'
  import FormSteps from '../../src/svelte/components/FormSteps.svelte'

  const steps = ['Om bekymringen', 'Info om deg', 'Oppsummering', 'Bekreftelse']
</script>

<Meta
  title="Components/Steps"
  args={{
    completed: 2
  }}
  argTypes={{
    completed: {control: 'number'}
  }} />

<Story name="Normal" let:completed>
  <FormSteps
    completedText="Utført"
    currentText="Gjeldene side"
    labels={steps}
    {completed}
    ariaValueText={`${steps[completed]}: Steg ${completed + 1} av ${steps.length}`} />
</Story>
