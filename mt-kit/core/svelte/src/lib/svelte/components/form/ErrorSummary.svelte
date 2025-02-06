<script lang="ts">
  import type { ErrorDetail } from '$lib/ts'
  import { styles } from '@mattilsynet/design'

  interface Props {
    errors?: ErrorDetail[]
    heading: string
    linkToFields?: boolean
  }

  let { errors = [], heading, linkToFields = true }: Props = $props()

  function setFocus(el: HTMLElement) {
    el.focus()
  }
</script>

{#if errors && errors.length !== 0}
  <div
    use:setFocus
    class={styles.errorsummary}
    role="alert"
    aria-labelledby="error-summary-heading">
    <h2 id="error-summary-heading">
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
