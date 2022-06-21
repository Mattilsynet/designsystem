<script context="module" lang="ts">
  let instanceCounter = 0
</script>

<script lang="ts">
  export let dialogBoxClosed: boolean = false
  export let dialogBoxTitle: string = ''
  export let closeBtnLabel: string = 'Lukk'

  const dialogBoxHeadingId = `ui-dialog-box-${instanceCounter++}`

  function handleClose() {
    dialogBoxClosed = true
  }
</script>

<div
  class={dialogBoxClosed ? 'dialog-box--closed' : 'dialog-box'}
  data-testid="dialog-box"
  role="dialog"
  tabindex="0"
  aria-labelledby={dialogBoxHeadingId}>
  <button
    data-testid="dialog-box-close"
    class="button button--link dialog-box--button"
    on:click={handleClose}
    aria-label={closeBtnLabel} />
  <div class="dialog-box--content">
    <h2 id={dialogBoxHeadingId} class="h4">{dialogBoxTitle}</h2>
    <slot />
  </div>
</div>
