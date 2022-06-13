<script lang="ts">
  export let closeable: boolean = true

  export let dialogBoxClosed: boolean = false

  function handleClose() {
    dialogBoxClosed = true
  }
</script>

<div class={dialogBoxClosed ? 'dialog-box--closed' : 'dialog-box'}>
  {#if closeable}
    <div class="dialog-box--actions">
      <button class="button button--link" on:click={handleClose} aria-label="tag.ariaLabel" />
    </div>
  {/if}

  <div class="dialog-box--content">
    <slot />
  </div>
</div>
