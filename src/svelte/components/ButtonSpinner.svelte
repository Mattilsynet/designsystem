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

<button on:click={setInProgress} class={`button button--spinner--${spinnerPlacement === "end" ? 'end' : 'start'} ${btnClassNames}`}>
    <span
      role="status"
      aria-live="assertive"
      class:spinner={inProgress}
      aria-label={inProgress ? formInProgressAriaLabel : ''} />
  <slot />
</button>
