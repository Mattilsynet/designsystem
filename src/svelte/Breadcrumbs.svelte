<script lang="ts">
  import {onMount} from "svelte";
  import type {Breadcrumbs} from "../ts/types";
  import {useMachine} from '@xstate/svelte';
  import {createMachine} from 'xstate';

  const BUTTON_ELLIPSIS = Symbol()
  export let breadcrumbs: Breadcrumbs = {items: []};
  export let loadJs = false

  interface BreadcrumbsContext {
    breadcrumbsItems: Array<{url: string, title: string} | symbol>
  }

  type BreadcrumbsEvent = {type: 'MOUNTED'} | {type: 'TOGGLE'};

  type BreadcrumbsState =
    | {value: 'serverRendered'; context: BreadcrumbsContext}
    | {value: 'closed'; context: BreadcrumbsContext}
    | {value: 'open'; context: BreadcrumbsContext};

  const breadcrumbsMachine = createMachine<BreadcrumbsContext, BreadcrumbsEvent, BreadcrumbsState>({
    id: 'breadcrumbs',
    initial: 'serverRendered',
    context: {
      breadcrumbsItems: []
    },
    states: {
      serverRendered: {
        on: {
          MOUNTED: [
            {
              target: 'closed',
              cond: (() => breadcrumbs.items.length > 3)
            },
            {
              target: 'open'
            }
          ]}
      },
      closed: {
        entry: 'prepareCollapsedBreadcrumbs',
        on: { TOGGLE: 'open' }
      },
      open: {
        entry: 'expandBreadcrumbs',
        on: { TOGGLE: 'closed' }
      }
    }
  }, {
    actions: {
      prepareCollapsedBreadcrumbs: (context) => {
        context.breadcrumbsItems = [
          breadcrumbs.items[0],
          breadcrumbs.items[1],
          BUTTON_ELLIPSIS,
          breadcrumbs.items[breadcrumbs.items.length -1]]
      },
      expandBreadcrumbs: (context) => {
        context.breadcrumbsItems = breadcrumbs.items
      }
    }
  })

  const {state, send} = useMachine(breadcrumbsMachine)

  let ariaLabel = breadcrumbs.ariaLabel ?? 'brødsmulesti';
  let showAllBreadCrumbs = breadcrumbs.showAllAriaLabel ?? 'vis mer'

  $: isOpen = $state.value !== 'closed'
  $: onServer = $state.value === 'serverRendered'
  $: bredcrumbs = $state.context.breadcrumbsItems

  if(loadJs) {
    onMount(() => send('MOUNTED'))
  }
</script>

<nav class="breadcrumbs" aria-label={ariaLabel}>
  <ol class:expanded={isOpen}>
    {#each bredcrumbs as item, index}
      <li class:ellipsis={!isOpen && index +1 === bredcrumbs.length}>
        {#if index === 0}
          <a href={item.url}>Hjem</a>
        {:else if item === BUTTON_ELLIPSIS && !onServer}
          <button
            type="button"
            aria-expanded="false"
            aria-label={showAllBreadCrumbs}
            class="button button--link forward-arrow"
            on:click={() => send('TOGGLE')}
          > ... </button>
        {:else if index + 1 < bredcrumbs.length}
          <a class="forward-arrow" href={item.url}>{item.title}</a>
        {:else}
          <a class="forward-arrow" aria-current="page" href={item.url}>{item.title}</a>
        {/if}
      </li>
    {/each}
  </ol>
</nav>
