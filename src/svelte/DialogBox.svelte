<script context="module" lang="ts">
  let instanceCounter = 0
</script>

<script lang="ts">
  import {fade} from 'svelte/transition'
  export let isOpen = true
  export let title = ''
  export let ariaTitle = ''
  export let closeBtnAriaLabel = 'Lukk'
  const dialogBoxHeadingId = `ui-dialog-box-${instanceCounter++}`
  const dialogCloseButton = `dialog-close-button-${instanceCounter++}`

  function handleClose() {
    isOpen = false
  }
</script>

{#if isOpen}
  <div
    class={isOpen ? 'dialog-box' : 'dialog-box--closed'}
    data-testid="dialog-box"
    role="dialog"
    tabindex="0"
    transition:fade
    aria-hidden={!isOpen}
    aria-labelledby={dialogBoxHeadingId}>
    <div class="dialog-box--header" aria-flowto={`${dialogBoxHeadingId} ${dialogCloseButton}`}>
      <button
        id={dialogCloseButton}
        data-testid="dialog-box-close"
        class="button button--link dialog-box--button"
        on:click={handleClose}
        aria-label={closeBtnAriaLabel} />
      <h2
        id={dialogBoxHeadingId}
        class={`h4 dialog-box--title ${!title ? 'inclusively-hidden' : ''}`}>
        {title ? title : ariaTitle}
      </h2>
    </div>

    <div class="dialog-box--content">
      <slot />
    </div>
  </div>
{/if}
