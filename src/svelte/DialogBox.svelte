<script context="module" lang="ts">
  let instanceCounter = 0
</script>

<script lang="ts">
  import {fade} from 'svelte/transition'
  export let isOpen: boolean = true
  export let title: string = ''
  export let ariaTitle: string = ''
  export let closeBtnAriaLabel: string = 'Lukk'
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
    transition:fade
    aria-hidden={!isOpen}
    aria-labelledby={dialogBoxHeadingId}>
    <h2 id={dialogBoxHeadingId} class="h4 dialog-box--title {title ? '' : 'inclusively-hidden'}">
      {title ? title : ariaTitle}
    </h2>
    <button
      type="button"
      class="button button--link dialog-box--close-button "
      aria-label={closeBtnAriaLabel} />

    <div class="dialog-box--content">
      <slot />
    </div>
  </div>
{/if}
