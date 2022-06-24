<script context="module" lang="ts">
  let instanceCounter = 0
</script>

<script lang="ts">
  export let isOpen: boolean = false
  export let title: string = ''
  export let closeBtnAriaLabel: string = 'Lukk'

  const dialogBoxHeadingId = `ui-dialog-box-${instanceCounter++}`

  function handleClose() {
    isOpen = true
  }
</script>

<div
  class={isOpen ? 'dialog-box--closed' : 'dialog-box'}
  data-testid="dialog-box"
  role="dialog"
  tabindex="0"
  aria-labelledby={dialogBoxHeadingId}>
  <h2 id={dialogBoxHeadingId} class="h4">
    {title}
    <button
      data-testid="dialog-box-close"
      class="button button--link dialog-box--button"
      on:click={handleClose}
      aria-label={closeBtnAriaLabel} />
  </h2>

  <div class="dialog-box--content">
    <slot />
  </div>
</div>
