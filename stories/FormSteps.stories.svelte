<script lang="ts">
  import {Meta, Story} from '@storybook/addon-svelte-csf';

  const steps = ['Om bekymringen', 'Info om deg', 'Oppsummering', 'Bekreftelse'];
</script>

<Meta
  title="Components/Steps"
  args={{
    completed: 2
  }}
  argTypes={{
    completed: {control: 'number'}
  }}
/>

<Story name="Normal" let:completed>
  <ol class="steps">
    {#each steps as step, index (step)}
      <li class:steps__complete={index < completed}>
        {#if index < completed}
          <span class="inclusively-hidden">Ferdig: </span>
        {/if}

        {step}
      </li>
    {/each}
  </ol>
</Story>
