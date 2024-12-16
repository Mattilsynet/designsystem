<script context="module" lang="ts">
  let counter = 0
</script>

<script lang="ts">
  import { onMount } from 'svelte'
  import { slide } from 'svelte/transition'
  import { clickOutside } from '$lib/ts'
  import { focusOutside } from '$lib/ts'

  export let title = ''
  export let titleWhenOpen = ''
  export let loadJs = false
  export let icon = ''
  export let isOpen = true
  const bodyId = `ui-dropdown-${counter++}`
  export let titleId = `${bodyId}-title`
  let className = ''
  export { className as class }

  const LINK_TAG: Readonly<string> = 'A'

  let onServer = true
  $: hasDynamicTitleAndIsOpen = titleWhenOpen && isOpen

  onMount(() => {
    if (loadJs) {
      isOpen = false
      onServer = false
    }
  })

  function closeDropdownOnNavigation(e: MouseEvent & { target: HTMLElement }): void {
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
        <slot loadJs={false} />
      </div>
    </details>
  {:else}
    <button
      id={titleId}
      class="mt-button mt-button--link {icon}"
      aria-haspopup="true"
      aria-expanded={isOpen}
      aria-controls={bodyId}
      on:click={toggleOpen}>
      {@html hasDynamicTitleAndIsOpen ? titleWhenOpen : title}
    </button>
    {#if isOpen}
      <div
        class="dropdown-content"
        id={bodyId}
        on:click={closeDropdownOnNavigation}
        use:focusOutside={titleId}
        use:clickOutside={titleId}
        on:clickOutside={() => (isOpen = false)}
        on:focusOutside={() => (isOpen = false)}
        in:slide={{ duration: 650 }}
        out:slide={{ duration: 500 }}>
        <slot {isOpen} />
      </div>
    {/if}
  {/if}
</div>
