<script lang="ts">
  export let dialogBoxClosed: boolean = false
  export let dialogBoxTitle: string = ''
  export let closeBtnLabel: string = 'Lukk'

  function handleClose() {
    dialogBoxClosed = true
  }
</script>

<div
  class={dialogBoxClosed ? 'dialog-box--closed' : 'dialog-box'}
  data-testid="dialog-box"
  role="dialog"
  tabindex="0"
  aria-labelledby="title">
  <button
    data-testid="dialog-box-close"
    class="button button--link dialog-box--button"
    on:click={handleClose}
    aria-label={closeBtnLabel} />
  <div class="dialog-box--content">
    <p id="title" class="dialog-box--title">{dialogBoxTitle}</p>
    <slot />
  </div>
</div>
