<script lang="ts">
  import Label from './Label.svelte'
  import {createInputAriaDescribedby} from '../../../ts/utils'

  export let value: string
  export let name: string | undefined
  export let label: string | undefined
  export let labelClass: string | undefined
  export let helpText: string | undefined
  export let searchButtonText: string | undefined
  export let placeholder: string | undefined
  export let ariaControls: string | undefined
  export let inputClass = ''
  export let primaryButton = false
</script>

{#if label}
  <Label class={labelClass} for={name} showOptionalText={false}>
    {label}
  </Label>
{/if}

{#if helpText}
  <div id={`${name}-hint`} class="hint">
    {@html helpText}
  </div>
{/if}

<div class="search-wrap">
  <input
    id={name}
    {name}
    class="form-field input-search {inputClass}"
    class:hasButton={!!searchButtonText}
    bind:value
    aria-describedby={createInputAriaDescribedby(helpText ? name : undefined)}
    type="search"
    {placeholder} />
  {#if searchButtonText}
    <button
      type="submit"
      class="button button--flat form-field"
      aria-controls={ariaControls}
      class:button-search={!primaryButton}
      class:icon--search-before={!primaryButton}
      class:button-search-primary={primaryButton}
      class:icon--search-before-beige={primaryButton}>
      {searchButtonText}
    </button>
  {/if}
</div>
