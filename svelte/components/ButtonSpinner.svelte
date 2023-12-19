<script>export let type = "button";
export let formInProgressAriaLabel = "";
export let spinnerPlacement = "end";
export let btnClassNames = "";
export let inProgress = false;
function setInProgress(e) {
  if (inProgress) {
    e.preventDefault();
  } else {
    inProgress = true;
  }
}
</script>

<button
  {type}
  on:click={setInProgress}
  class={`mt-button mt-button--spinner--${
    spinnerPlacement === 'end' ? 'end' : 'start'
  } ${btnClassNames}`}
  data-testid="spinner">
  <span
    role="status"
    aria-live="assertive"
    class:spinner={inProgress}
    aria-label={inProgress ? formInProgressAriaLabel : ''} />
  <slot />
</button>
