<script lang="ts">
  import {createMachine} from 'xstate';
  import {useMachine} from '@xstate/svelte';
  import {onMount} from 'svelte';
  import {slide} from 'svelte/transition';

  export let title = '';
  export let bodyId = '';
  export let loadJs = false;

  interface DropdownContext {}

  type DropdownEvent = {type: 'MOUNT'} | {type: 'TOGGLE'};

  type DropdownState =
    | {value: 'serverRendered'; context: DropdownContext}
    | {value: 'open'; context: DropdownContext}
    | {value: 'closed'; context: DropdownContext};

  const DropdownMachine = createMachine<DropdownContext, DropdownEvent, DropdownState>({
    id: 'dropdown',
    initial: 'serverRendered',
    states: {
      serverRendered: {
        on: {MOUNT: 'closed'}
      },
      closed: {
        on: {TOGGLE: 'open'}
      },
      open: {
        on: {TOGGLE: 'closed'}
      }
    }
  });

  const {state, send} = useMachine(DropdownMachine);
  $: isOpen = $state.value === 'open';
  $: onServer = $state.value === 'serverRendered';

  if (loadJs) {
    onMount(() => send('MOUNT'));
  }
</script>

<nav aria-label={title} class="dropdown" class:visible={isOpen}>
  {#if onServer}
    {title}
  {:else}
    <button
      class="button button--link chevron"
      aria-haspopup="true"
      aria-expanded={isOpen}
      aria-controls={bodyId}
      on:click={() => send('TOGGLE')}
    >
      {title}
    </button>
  {/if}

  {#if isOpen || onServer}
    <div id={bodyId} transition:slide|local={{duration: $state.context.isFirstRenderFinished ? 300 : 0}}>
      <slot />
    </div>
  {/if}
</nav>
