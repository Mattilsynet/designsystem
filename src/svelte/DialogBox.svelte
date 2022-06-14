<script lang="ts">
  export let dialogBoxClosed: boolean = false
  export let closeBtnLabel: string = ''

  function handleClose() {
    dialogBoxClosed = true
  }
</script>

<div class={dialogBoxClosed ? 'dialog-box--closed' : 'dialog-box'} data-testid="dialog-box">
  <button
    data-testid="dialog-box-close"
    class="button button--link dialog-box--button"
    on:click={handleClose}
    aria-label={closeBtnLabel} />
  <div class="dialog-box--content">
    <slot />
  </div>
</div>
