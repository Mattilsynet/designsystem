<script context="module" lang="ts">
  let instanceCounter = 0
</script>

<script lang="ts">
  export let isOpen: boolean = true
  export let title: string = ''
  export let ariaTitle: string = ''
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
  aria-hidden={!isOpen}
  aria-labelledby={dialogBoxHeadingId}>
  <div class="dialog-box--header" aria-flowto={`${dialogBoxHeadingId} ${dialogCloseButton}`}>
    <button
      id={dialogCloseButton}
      data-testid="dialog-box-close"
      class="button button--link dialog-box--button"
      on:click={handleClose}
      aria-label={closeBtnAriaLabel} />
    <h2 id={dialogBoxHeadingId} class={`h4 dialog-box--title ${!title && 'inclusively-hidden'}`}>
      {title ? title : ariaTitle}
    </h2>
  </div>

  <div class="dialog-box--content">
    <slot />
  </div>
</div>
