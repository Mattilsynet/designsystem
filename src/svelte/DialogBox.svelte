<script lang="ts">
  export let dialogBoxClosed: boolean = false
  export let closeBtnLabel: string = ''

  function handleClose() {
    dialogBoxClosed = true
  }
</script>

<div class={dialogBoxClosed ? 'dialog-box--closed' : 'dialog-box'} data-testid="dialog-box">
  <div class="dialog-box--actions">
    <button class="button button--link" on:click={handleClose} aria-label={closeBtnLabel} />
  </div>
  <div class="dialog-box--content">
    <slot />
  </div>
</div>
