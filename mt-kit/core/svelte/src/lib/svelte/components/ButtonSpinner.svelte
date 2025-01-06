<script lang="ts">
  import type { Snippet } from 'svelte'

  interface Props {
    type?: 'button' | 'submit' | 'reset'
    formInProgressAriaLabel?: string
    spinnerPlacement?: 'start' | 'end'
    btnClassNames?: string
    inProgress?: boolean
    children?: Snippet
  }

  let {
    type = 'button',
    formInProgressAriaLabel = '',
    spinnerPlacement = 'end',
    btnClassNames = '',
    inProgress = $bindable(false),
    children
  }: Props = $props()

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
  onclick={setInProgress}
  class={`mt-button mt-button--spinner--${
    spinnerPlacement === 'end' ? 'end' : 'start'
  } ${btnClassNames}`}
  data-testid="spinner">
  <span
    role="status"
    aria-live="assertive"
    class:spinner={inProgress}
    aria-label={inProgress ? formInProgressAriaLabel : ''}></span>
  {@render children?.()}
</button>
