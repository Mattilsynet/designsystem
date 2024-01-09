<script lang="ts">
  import { onMount } from 'svelte'
  import type { Breadcrumbs } from '../../ts/types'
  import { useMachine } from '@xstate/svelte'
  import { createMachine } from 'xstate'

  const BUTTON_ELLIPSIS = Symbol()
  export let breadcrumbs: Breadcrumbs = { items: [] }
  export let loadJs = true
  let classNames = ''
  export { classNames as class }
  const LIMIT_BEFORE_PARTIAL = 3

  interface BreadcrumbsContext {
    breadcrumbsItems: Array<{ url: string; text: string } | symbol>
  }

  type BreadcrumbsEvent = { type: 'MOUNTED' } | { type: 'TOGGLE' } | { type: 'RESET' }

  type BreadcrumbsState =
    | { value: 'serverRendered'; context: BreadcrumbsContext }
    | { value: 'partial'; context: BreadcrumbsContext }
    | { value: 'full'; context: BreadcrumbsContext }
    | { value: 'reset'; context: BreadcrumbsContext }

  const breadcrumbsMachine = createMachine<BreadcrumbsContext, BreadcrumbsEvent, BreadcrumbsState>(
    {
      predictableActionArguments: true,
      id: 'breadcrumbs',
      initial: 'serverRendered',
      context: {
        breadcrumbsItems: []
      },
      states: {
        serverRendered: {
          entry: 'expandBreadcrumbs',
          on: {
            MOUNTED: [
              {
                target: 'partial',
                cond: 'showPartial'
              },
              {
                target: 'full'
              }
            ]
          }
        },
        partial: {
          entry: 'prepareCollapsedBreadcrumbs',
          on: {
            TOGGLE: 'full',
            RESET: 'reset'
          }
        },
        full: {
          entry: 'expandBreadcrumbs',
          on: {
            RESET: 'reset'
          }
        },
        reset: {
          always: [
            {
              target: 'partial',
              cond: 'showPartial'
            },
            {
              target: 'full'
            }
          ]
        }
      }
    },
    {
      actions: {
        prepareCollapsedBreadcrumbs: context => {
          context.breadcrumbsItems = [
            breadcrumbs.items[0],
            BUTTON_ELLIPSIS,
            breadcrumbs.items[breadcrumbs.items.length - 2],
            breadcrumbs.items[breadcrumbs.items.length - 1]
          ]
        },
        expandBreadcrumbs: context => {
          context.breadcrumbsItems = breadcrumbs.items
        }
      },
      guards: {
        showPartial: () => breadcrumbs.items.length > LIMIT_BEFORE_PARTIAL
      }
    }
  )

  const { state, send } = useMachine(breadcrumbsMachine)

  let ariaLabel = breadcrumbs.ariaLabel ?? 'brødsmulesti'
  let showAllBreadCrumbsLabel = breadcrumbs.showAllAriaLabel ?? 'vis mer'
  let homeLabel = breadcrumbs.homeLabel ?? 'Hjem'

  $: isFull = $state.value !== 'partial'
  $: onServer = $state.value === 'serverRendered'
  $: breadcrumbs, send({ type: 'RESET' })

  if (loadJs) {
    onMount(() => send('MOUNTED'))
  }
</script>

<nav class="breadcrumbs {classNames}" aria-label={ariaLabel}>
  <ol class="mt-ol" class:expanded={isFull}>
    {#each $state.context.breadcrumbsItems as item, index}
      <li class:ellipsis={!isFull && index + 1 > 2}>
        {#if index === 0}
          <a href={item.url} rel="external">{homeLabel}</a>
        {:else if item === BUTTON_ELLIPSIS}
          <button
            type="button"
            aria-expanded="false"
            aria-label={showAllBreadCrumbsLabel}
            class="mt-button mt-button--link forward-arrow"
            on:click={() => send('TOGGLE')}>
            ...
          </button>
        {:else if index + 1 < $state.context.breadcrumbsItems.length}
          <a class="forward-arrow" href={item.url} rel="external">{@html item.text}</a>
        {:else}
          <span class="last-breadcrumb">
            {@html item.text}
          </span>
        {/if}
      </li>
    {/each}
  </ol>
</nav>
