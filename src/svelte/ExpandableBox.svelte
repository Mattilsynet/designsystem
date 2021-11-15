<script lang="ts">
  import {createMachine} from "xstate";
  import {useMachine} from "@xstate/svelte";
  import {onMount} from "svelte";

  export let title = ''
  export let loadJs = false

  interface ExpandableBoxContext {
    isOpen: boolean
  }

  type ExpandableBoxEvent = {type: 'MOUNT'} | {type: 'TOGGLE'}

  type ExpandableState =
    | {value: 'serverRendered'; context: ExpandableBoxContext}
    | {value: 'open'; context: ExpandableBoxContext}
    | {value: 'closed'; context: ExpandableBoxContext}

  const expandableBoxMachine = createMachine<ExpandableBoxContext, ExpandableBoxEvent, ExpandableState>({
    id: 'expandableBox',
    initial: 'serverRendered',
    context: {
      isOpen: false
    },
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
  })

  const {state, send} = useMachine(expandableBoxMachine)
  $: isOpen = $state.value === 'open'
  $: onServer = $state.value === 'serverRendered'

  if(loadJs){
    onMount(() => send('MOUNT'))
  }

</script>

<div class="expandableBox" class:visible={isOpen} >
  {#if onServer}
    {title}
  {:else}
   <button class="button button--link"
          class:chevron-down={!isOpen}
          class:chevron-up={isOpen}
          type="button" on:click={() => send('TOGGLE')}>
      {title}
    </button>
  {/if}

  {#if isOpen || onServer}
      <slot />
  {/if}
</div>
