<script>
  import '../src/css/components/collapsible.css';
  import {Meta, Template, Story} from '@storybook/addon-svelte-csf';
  import { useMachine } from '@xstate/svelte';
  import { createMachine } from 'xstate';

  const toggleMachine = createMachine({
    id: 'toggle',
    initial: 'inactive',
    states: {
      inactive: {
        on: { TOGGLE: 'active' }
      },
      active: {
        on: { TOGGLE: 'inactive' }
      }
    }
  });

  const { state, send } = useMachine(toggleMachine);
</script>

<Meta
  title="Components/Xstate"
  parameters={{
    xstate: true,
  }}
/>

<Template let:args>
  <button on:click={() => send('TOGGLE')}>
    {$state.value === 'inactive'
      ? 'Click to activate'
      : 'Active! Click to deactivate'}
  </button>
</Template>

<Story
  name="Normal"
  parameters={{
    xstate: true,
  }}
/>
