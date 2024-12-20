<script module lang="ts">
  let counter = 0
</script>

<script lang="ts">
  import { onMount } from 'svelte'
  import { slide } from 'svelte/transition'
  import { clickOutside } from '$lib/ts'
  import { focusOutside } from '$lib/ts'

  const bodyId = `ui-dropdown-${counter++}`
  interface Props {
    title?: string
    titleWhenOpen?: string
    loadJs?: boolean
    icon?: string
    isOpen?: boolean
    titleId?: string
    class?: string
    children?: import('svelte').Snippet<[{ isOpen?: boolean; loadJs?: boolean; titleId?: string }]>
  }

  let {
    title = '',
    titleWhenOpen = '',
    loadJs = false,
    icon = '',
    isOpen = $bindable(true),
    titleId = `${bodyId}-title`,
    class: className = '',
    children
  }: Props = $props()

  const LINK_TAG: Readonly<string> = 'A'

  let onServer = $state(true)
  let hasDynamicTitleAndIsOpen = $derived(titleWhenOpen && isOpen)

  onMount(() => {
    if (loadJs) {
      isOpen = false
      onServer = false
    }
  })

  function closeDropdownOnNavigation(e: MouseEvent & { target: HTMLDivElement }): void {
    if (isOpen && e.target?.tagName === LINK_TAG) {
      isOpen = !isOpen
    }
  }

  function toggleOpen(): void {
    isOpen = !isOpen
  }
</script>

<div class="dropdown {className} {onServer ? 'on-server' : ''}" class:visible={isOpen || onServer}>
  {#if onServer}
    <details class="mt-details">
      <summary class="mt-summary mt-button mt-button--link {icon}">
        {@html title}
      </summary>
      <div id={bodyId} class="dropdown-content">
        {@render children?.({ loadJs: false, isOpen, titleId })}
      </div>
    </details>
  {:else}
    <button
      id={titleId}
      class="mt-button mt-button--link {icon}"
      aria-haspopup="true"
      aria-expanded={isOpen}
      aria-controls={bodyId}
      onclick={toggleOpen}>
      {@html hasDynamicTitleAndIsOpen ? titleWhenOpen : title}
    </button>
    {#if isOpen}
      <div
        class="dropdown-content"
        id={bodyId}
        onclick={closeDropdownOnNavigation}
        use:focusOutside={titleId}
        use:clickOutside={titleId}
        onclickOutside={() => (isOpen = false)}
        onfocusOutside={() => (isOpen = false)}
        in:slide={{ duration: 650 }}
        out:slide={{ duration: 500 }}>
        {@render children?.({ isOpen, titleId })}
      </div>
    {/if}
  {/if}
</div>
