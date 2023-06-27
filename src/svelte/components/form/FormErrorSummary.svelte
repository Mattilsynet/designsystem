<script lang="ts">
  export let errors: UIError[] = []
  export let heading: string
  export let linkToFields = true

  function setFocus(el: HTMLElement) {
    el.focus()
  }

  export interface UIError {
    key: string
    message: string
  }
</script>

<div
  use:setFocus
  class="error-summary layout-flex-col"
  style="--gap: var(--spacer-x-small)"
  role="alert"
  tabindex="-1"
  aria-labelledby="error-summary-heading">
  <h2 id="error-summary-heading">
    {heading}
  </h2>
  <ul>
    {#each errors as error}
      {#if linkToFields}
        <li class="error-summary__list--link">
          <a href={`#${error.key}`} rel="external" class="inline-flex">{error.message}</a>
        </li>
      {:else}
        <li>
          {@html error.message}
        </li>
      {/if}
    {/each}
  </ul>
</div>
