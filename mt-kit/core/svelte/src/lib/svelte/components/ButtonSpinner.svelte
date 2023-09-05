<script lang="ts">
  export let type: 'button' | 'submit' | 'reset' = 'button'
  export let formInProgressAriaLabel = ''
  export let spinnerPlacement: 'start' | 'end' = 'end'
  export let btnClassNames = ''
  export let inProgress = false

  function setInProgress(e: Event): void {
    if (inProgress) {
      e.preventDefault()
    } else {
      inProgress = true
    }
  }
</script>

<button
  {type}
  on:click={setInProgress}
  class={`button button--spinner--${spinnerPlacement === 'end' ? 'end' : 'start'} ${btnClassNames}`}
  data-testid="spinner">
  <span
    role="status"
    aria-live="assertive"
    class:spinner={inProgress}
    aria-label={inProgress ? formInProgressAriaLabel : ''} />
  <slot />
</button>
