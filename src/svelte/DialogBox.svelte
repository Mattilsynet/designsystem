<script context="module" lang="ts">
  let instanceCounter = 0
</script>

<script lang="ts">
  export let isOpen = true
  export let title = ''
  export let ariaTitle = ''
  export let closeBtnAriaLabel = 'Lukk'
  export let dialogRef = undefined

  const dialogBoxHeadingId = `ui-dialog-box-${instanceCounter++}`
  const dialogCloseButtonId = `dialog-close-button-${instanceCounter++}`

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
    aria-hidden={!isOpen}
    bind:this={dialogRef}
    aria-labelledby={dialogBoxHeadingId}>
    <h2 id={dialogBoxHeadingId} class="h4 dialog-box--title {title ? '' : 'inclusively-hidden'}">
      {title ? title : ariaTitle}
    </h2>
    <button
      id={dialogCloseButtonId}
      data-testid="dialog-box-close"
      type="button"
      class="button button--link dialog-box--close-button "
      on:click={handleClose}
      aria-label={closeBtnAriaLabel} />

    <div class="dialog-box--content">
      <slot />
    </div>
  </div>
{/if}
