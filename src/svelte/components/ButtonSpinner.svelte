<script lang="ts">
  export let formInProgressAriaLabel = ''
  export let spinnerPlacement: 'start' | 'end' = 'end'
  export let btnClassNames = ''

  let inProgress = false

  function setInProgress(e) {
    if (inProgress) {
      e.preventDefault();
    } else {
      inProgress = true
    }
  }
</script>

<button on:click={setInProgress} class="button button--spinner {btnClassNames}">
  {#if inProgress && spinnerPlacement === 'start'}
    <span
      role="status"
      aria-live="assertive"
      class="spinner spinner--start"
      aria-label={formInProgressAriaLabel} />
  {/if}
  <slot />
  {#if inProgress && spinnerPlacement === 'end'}
    <span
      role="status"
      aria-live="assertive"
      class="spinner spinner--end"
      aria-label={formInProgressAriaLabel} />
  {/if}
</button>
