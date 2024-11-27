<script lang="ts">
  export let title: string
  export let detailsClass = ''
  export let summaryClass = ''
  export let summaryWrapperClass = ''
  export let testId = ''
  export let ariaLabelledBy = undefined
  export let summaryId = ''

  let isOpen = false

  function beforePrint(): void {
    isOpen = true
  }
  function afterPrint(): void {
    isOpen = false
  }
</script>

<svelte:window on:beforeprint={beforePrint} on:afterPrint={afterPrint} />

<details
  class="mt-details {detailsClass}"
  aria-labelledby={ariaLabelledBy}
  data-test-id={testId}
  bind:open={isOpen}>
  <summary id={summaryId} class="mt-summary mt-summary-icon {summaryClass}">
    {@html title}
  </summary>
  <div class="summary-wrapper {summaryWrapperClass}">
    <slot />
  </div>
</details>
