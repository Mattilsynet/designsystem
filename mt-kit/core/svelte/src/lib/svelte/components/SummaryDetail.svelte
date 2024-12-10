<script lang="ts">
  import { run } from 'svelte/legacy'

  interface Props {
    title: string
    detailsClass?: string
    summaryClass?: string
    summaryWrapperClass?: string
    testId?: string
    ariaLabelledBy?: any
    summaryId?: string
    children?: import('svelte').Snippet
  }

  let {
    title,
    detailsClass = '',
    summaryClass = '',
    summaryWrapperClass = '',
    testId = '',
    ariaLabelledBy = undefined,
    summaryId = '',
    children
  }: Props = $props()

  let isOpen = $state(false)
  run(() => {
    summaryId
    isOpen = false
  })

  function beforePrint(): void {
    isOpen = true
  }
  function afterPrint(): void {
    isOpen = false
  }
</script>

<svelte:window onbeforeprint={beforePrint} onafterprint={afterPrint} />

<details
  class="mt-details {detailsClass}"
  aria-labelledby={ariaLabelledBy}
  data-test-id={testId}
  bind:open={isOpen}
>
  <summary id={summaryId} class="mt-summary mt-summary-icon {summaryClass}">
    {@html title}
  </summary>
  <div class="summary-wrapper {summaryWrapperClass}">
    {@render children?.()}
  </div>
</details>
