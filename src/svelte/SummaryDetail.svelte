<script lang="ts">
  export let title: string
  export let detailsClass = ''
  export let testId = ''
  let isOpen = false

  function beforePrint() {
    isOpen = true
  }
  function afterPrint() {
    isOpen = false
  }
</script>

<svelte:window on:beforeprint={beforePrint} on:afterPrint={afterPrint} />

<details class={detailsClass} data-test-id={testId} bind:open={isOpen}>
  <summary>{@html title}</summary>
  <div class="summary-wrapper">
    <slot />
  </div>
</details>
