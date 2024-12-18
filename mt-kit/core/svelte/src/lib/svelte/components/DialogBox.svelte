<script module lang="ts">
  let instanceCounter = 0
</script>

<script lang="ts">
  interface Props {
    isOpen?: boolean
    title?: string
    ariaTitle?: string
    closeBtnAriaLabel?: string
    onClosingDialog?: (shouldReappear: boolean) => void
    dialogRef?: HTMLDivElement
    children?: import('svelte').Snippet
  }

  let {
    isOpen = $bindable(true),
    title = '',
    ariaTitle = '',
    closeBtnAriaLabel = 'Lukk',
    onClosingDialog = _ => {},
    // @ts-expect-error value is never read, but it's bound
    dialogRef = $bindable(),
    children
  }: Props = $props()

  const dialogBoxHeadingId = `ui-dialog-box-${instanceCounter++}`
  const dialogCloseButtonId = `dialog-close-button-${instanceCounter++}`

  function handleClose(): void {
    isOpen = false
    onClosingDialog(false)
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
      onclick={handleClose}
      aria-label={closeBtnAriaLabel}></button>

    <div class="dialog-box--content">
      {@render children?.()}
    </div>
  </div>
{/if}
