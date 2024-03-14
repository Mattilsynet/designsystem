<script lang="ts">
  import Label from './Label.svelte'
  import { createInputAriaDescribedby } from '../../../ts/utils'
  import { beforeUpdate } from 'svelte'

  export let searchString: string
  export let name: string | undefined
  export let shouldFocus: boolean = false
  export let label: string | undefined = undefined
  export let labelClass: string = ''
  export let helpText: string | undefined = undefined
  export let searchButtonText: string | undefined = undefined
  export let placeholder: string | undefined = undefined
  export let ariaControls: string | undefined = undefined
  export let ariaRemoveTextLabel = 'Tøm'
  export let inputClass = ''

  let isInitialized = false
  let className = ''
  export { className as class }

  let searchInput: HTMLInputElement

  $: shouldFocus && searchInput?.focus()

  beforeUpdate(() => {
    if (!searchString && !isInitialized && document) {
      searchString = document?.querySelector(`input[name="${name}"]`)?.value
      isInitialized = true
    }
  })
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
  <div class="search-wrap-inner">
    <input
      bind:this={searchInput}
      id={name}
      type="search"
      {name}
      class="mt-input form-field {inputClass}"
      class:hasButton={!!searchButtonText}
      bind:value={searchString}
      aria-labelledby={!label && searchButtonText ? 'search-button' : undefined}
      aria-describedby={createInputAriaDescribedby(helpText ? name : undefined)}
      {placeholder} />
    {#if searchString}
      <button
        type="reset"
        class="mt-button mt-button--search-clear"
        on:click={() => (searchString = '')}
        data-testid="search-clear">
        <span class="inclusively-hidden">{ariaRemoveTextLabel}</span>
      </button>
    {/if}
  </div>
  {#if searchButtonText}
    <button
      id="search-button"
      type="submit"
      class="mt-button mt-button--primary icon--search-after-primary"
      aria-controls={ariaControls}>
      {searchButtonText}
    </button>
  {/if}
</div>
