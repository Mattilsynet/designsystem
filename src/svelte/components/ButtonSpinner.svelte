<script lang="ts">
  export let formInProgressAriaLabel = '';
  export let spinnerPlacement: 'start' | 'end' = 'end';
  export let btnClassNames = '';

  let inProgress = false;
  let formInProgressLabel = '';

  function setInProgress(e) {
    if (inProgress) {
      e.preventDefault();
    } else {
      inProgress = true;
      e.target.blur();
      formInProgressLabel = formInProgressAriaLabel;
      e.target.focus();
    }
  }
</script>

<button on:click={setInProgress} class="button button--spinner {btnClassNames}" aria-label={formInProgressLabel}>
  {#if inProgress && spinnerPlacement === 'start'}
    <span class="spinner spinner--start" />
  {/if}
  <slot />
  {#if inProgress && spinnerPlacement === 'end'}
    <span class="spinner spinner--end" />
  {/if}
</button>
