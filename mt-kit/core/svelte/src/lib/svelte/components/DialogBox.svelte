<script context="module" lang="ts">
  let instanceCounter = 0
</script>

<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import type { CloseDialogEvent } from '../../ts'

  const dispatch = createEventDispatcher<CustomEvent<CloseDialogEvent>>()

  export let isOpen = true
  export let title = ''
  export let ariaTitle = ''
  export let closeBtnAriaLabel = 'Lukk'
  export let dialogRef = undefined

  const dialogBoxHeadingId = `ui-dialog-box-${instanceCounter++}`
  const dialogCloseButtonId = `dialog-close-button-${instanceCounter++}`

  function handleClose(): void {
    isOpen = false
    dispatch<CustomEvent<CloseDialogEvent>>('closingDialog', {
      shouldReappear: false
    })
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
    <h2 id={dialogBoxHeadingId} class="mt-h4 dialog-box--title {title ? '' : 'inclusively-hidden'}">
      {title ? title : ariaTitle}
    </h2>
    <button
      id={dialogCloseButtonId}
      data-testid="dialog-box-close"
      type="button"
      class="mt-button mt-button--link dialog-box--close-button"
      on:click={handleClose}
      aria-label={closeBtnAriaLabel} />

    <div class="dialog-box--content">
      <slot />
    </div>
  </div>
{/if}
