<script context="module" lang="ts">
  let counter = 0
</script>

<script lang="ts">
  import { onMount } from 'svelte'
  import { slide } from 'svelte/transition'
  import { clickOutside } from '../../ts/click-outside'
  import { focusOutside } from '../../ts/focus-outside'

  export let title = ''
  export let titleWhenOpen = ''
  const bodyId = `ui-dropdown-${counter++}`
  export let loadJs = false
  export let titleId = `${bodyId}-title`
  export let icon = ''
  let className = ''
  export { className as class }

  const LINK_TAG: Readonly<string> = 'A'

  let isOpen = true
  let onServer = true
  $: hasDynamicTitleAndIsOpen = titleWhenOpen && isOpen

  if (loadJs) {
    onMount(() => {
      isOpen = false
      onServer = false
    })
  }

  function handleClickWhileOpen(e: PointerEvent) {
    if (isOpen && e.target?.tagName === LINK_TAG) {
      isOpen = !isOpen
    }
  }

  function handleClick(): void {
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
      on:click={handleClick}>
      {@html hasDynamicTitleAndIsOpen ? titleWhenOpen : title}
    </button>
    {#if isOpen}
      <div
        use:focusOutside={() => (isOpen = false)}
        class="dropdown-content"
        id={bodyId}
        use:clickOutside={titleId}
        on:click={handleClickWhileOpen}
        on:clickOutside={() => isOpen && handleClick()}
        in:slide={{ duration: 650 }}
        out:slide={{ duration: 500 }}>
        <slot {isOpen} />
      </div>
    {/if}
  {/if}
</div>
