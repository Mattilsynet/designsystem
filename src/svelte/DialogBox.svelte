<script context="module" lang="ts">
  let instanceCounter = 0
</script>

<script lang="ts">
  export let isOpen: boolean = true
  export let title: string = ''
  export let closeBtnAriaLabel: string = 'Lukk'

  const dialogBoxHeadingId = `ui-dialog-box-${instanceCounter++}`
  const dialogCloseButton = `dialog-close-button-${instanceCounter++}`

  function handleClose() {
    isOpen = false
  }
</script>

<div
  class={isOpen ? 'dialog-box' : 'dialog-box--closed'}
  data-testid="dialog-box"
  role="dialog"
  tabindex="0"
  aria-label="dialog boks"
  aria-hidden={!isOpen}>
  <div class="" aria-flowto={`${dialogBoxHeadingId} ${dialogCloseButton}`}>
    <button
      id={dialogCloseButton}
      data-testid="dialog-box-close"
      class="button button--link dialog-box--button"
      on:click={handleClose}
      aria-label={closeBtnAriaLabel} />
    {#if title}
      <h2 id={dialogBoxHeadingId} class="h4 dialog-box--title" aria-label={title}>
        {title}
      </h2>
    {/if}
  </div>

  <div class="dialog-box--content">
    <slot />
  </div>
</div>
