<script context="module">
  let counter = 0;
</script>

<script lang="ts">
  import {assign, createMachine} from 'xstate';
  import {useMachine} from '@xstate/svelte';
  import {onMount, tick} from 'svelte';
  import {slide} from 'svelte/transition';
  import {sineIn} from 'svelte/easing';
  import {HtmlTag, HtmlTagHydration} from 'svelte/internal';

  export let title = '';
  const bodyId = `ui-dropdown-${counter++}`;
  export let loadJs = false;
  export let titleId = `${bodyId}-title`;

  interface DropdownContext {
    isFirstRenderFinished: boolean;
  }

  type DropdownEvent = {type: 'MOUNT'} | {type: 'TOGGLE'};

  type DropdownState =
    | {value: 'serverRendered'; context: DropdownContext}
    | {value: 'open'; context: DropdownContext}
    | {value: 'closed'; context: DropdownContext};

  const DropdownMachine = createMachine<DropdownContext, DropdownEvent, DropdownState>({
    id: 'dropdown',
    initial: 'serverRendered',
    context: {
      isFirstRenderFinished: false
    },
    states: {
      serverRendered: {
        on: {MOUNT: 'closed'}
      },
      closed: {
        exit: assign({isFirstRenderFinished: true}),
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

<div aria-label={title} class="dropdown" class:visible={isOpen}>
  {#if onServer}
    {title}
  {:else}
    <button
      id={titleId}
      class="button button--link"
      aria-haspopup="true"
      aria-expanded={isOpen}
      aria-controls={bodyId}
      on:click={() => send('TOGGLE')}
    >
      {title}
    </button>
  {/if}

  {#if isOpen || onServer}
    <div class="dropdown-content" id={bodyId} in:slide={{duration: 300, easing: sineIn}}>
      <button
        class="button button--link"
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-controls={bodyId}
        on:click={() => send('TOGGLE')}
      >
        {title}
      </button>
      <slot />
    </div>
  {/if}
</div>
