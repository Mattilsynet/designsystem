<script lang="ts">
  import type { ErrorDetail } from '$lib/ts'
  import { styles } from '@mattilsynet/design'

  interface Props {
    errors?: ErrorDetail[]
    heading: string
    linkToFields?: boolean
    hasFocusOnLoad: boolean
  }

  let { errors = [], heading, linkToFields = true, hasFocusOnLoad = false }: Props = $props()

  function setFocus(el: HTMLElement) {
    if (hasFocusOnLoad) {
      el.focus()
    }
  }
</script>

{#if errors && errors.length !== 0}
  <div class={styles.errorsummary} role="alert" aria-labelledby="error-summary-heading">
    <h2 id="error-summary-heading" tabindex={hasFocusOnLoad ? '-1' : undefined} use:setFocus>
      {heading}
    </h2>
    <ul>
      {#each errors as error}
        {#if linkToFields}
          <li>
            <a href={`#${error.key}`} rel="external">{error.message}</a>
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
