<script lang="ts">
  import type { ErrorDetail } from '../../../ts/types'

  export let errors: ErrorDetail[] = []
  export let heading: string
  export let linkToFields = true

  function setFocus(el: HTMLElement) {
    el.focus()
  }
</script>

{#if errors && errors.length !== 0}
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
{/if}
