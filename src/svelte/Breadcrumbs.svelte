<script lang="ts">
  import {onMount} from 'svelte';
  import type {Breadcrumbs} from '../ts/types';
  import {useMachine} from '@xstate/svelte';
  import {createMachine} from 'xstate';

  const BUTTON_ELLIPSIS = Symbol();
  export let breadcrumbs: Breadcrumbs = {items: []};
  export let loadJs = false;
  const LIMIT_BEFORE_PARTIAL = 3;

  interface BreadcrumbsContext {
    breadcrumbsItems: Array<{url: string; title: string} | symbol>;
  }

  type BreadcrumbsEvent = {type: 'MOUNTED'} | {type: 'TOGGLE'};

  type BreadcrumbsState =
    | {value: 'serverRendered'; context: BreadcrumbsContext}
    | {value: 'partial'; context: BreadcrumbsContext}
    | {value: 'full'; context: BreadcrumbsContext};

  const breadcrumbsMachine = createMachine<BreadcrumbsContext, BreadcrumbsEvent, BreadcrumbsState>(
    {
      id: 'breadcrumbs',
      initial: 'serverRendered',
      context: {
        breadcrumbsItems: breadcrumbs.items
      },
      states: {
        serverRendered: {
          on: {
            MOUNTED: [
              {
                target: 'partial',
                cond: context => context.breadcrumbsItems.length > LIMIT_BEFORE_PARTIAL
              },
              {
                target: 'full'
              }
            ]
          }
        },
        partial: {
          entry: 'prepareCollapsedBreadcrumbs',
          on: {TOGGLE: 'full'}
        },
        full: {
          entry: 'expandBreadcrumbs',
          on: {TOGGLE: 'partial'}
        }
      }
    },
    {
      actions: {
        prepareCollapsedBreadcrumbs: context => {
          context.breadcrumbsItems = [
            breadcrumbs.items[0],
            breadcrumbs.items[1],
            BUTTON_ELLIPSIS,
            breadcrumbs.items[breadcrumbs.items.length - 1]
          ];
        },
        expandBreadcrumbs: context => {
          context.breadcrumbsItems = breadcrumbs.items;
        }
      }
    }
  );

  const {state, send} = useMachine(breadcrumbsMachine);

  let ariaLabel = breadcrumbs.ariaLabel ?? 'brødsmulesti';
  let showAllBreadCrumbsLabel = breadcrumbs.showAllAriaLabel ?? 'vis mer';
  let homeLabel = breadcrumbs.homeLabel ?? 'Hjem';

  $: isFull = $state.value !== 'partial';
  $: onServer = $state.value === 'serverRendered';
  $: preparedBreadCrumbs = $state.context.breadcrumbsItems;

  if (loadJs) {
    onMount(() => send('MOUNTED'));
  }
</script>

<nav class="breadcrumbs" aria-label={ariaLabel}>
  <ol class:expanded={isFull}>
    {#each preparedBreadCrumbs as item, index}
      <li class:ellipsis={!isFull && index + 1 === preparedBreadCrumbs.length}>
        {#if index === 0}
          <a href={item.url}>{homeLabel}</a>
        {:else if item === BUTTON_ELLIPSIS}
          <button
            type="button"
            aria-expanded="false"
            aria-label={showAllBreadCrumbsLabel}
            class="button button--link forward-arrow"
            on:click={() => send('TOGGLE')}
          >
            ...
          </button>
        {:else if index + 1 < preparedBreadCrumbs.length}
          <a class="forward-arrow" href={item.url}>{item.title}</a>
        {:else}
          <a class="forward-arrow" aria-current="page" href={item.url}>{item.title}</a>
        {/if}
      </li>
    {/each}
  </ol>
</nav>
