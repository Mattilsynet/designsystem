<script lang="ts">
  import type { ErrorDetail } from '../../../ts/types'

  interface Props {
    errors?: ErrorDetail[];
    heading: string;
    linkToFields?: boolean;
  }

  let { errors = [], heading, linkToFields = true }: Props = $props();

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
    <h2 id="error-summary-heading" class="mt-h2">
      {heading}
    </h2>
    <ul class="mt-ul">
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
