<script lang="ts">
  import Label from './Label.svelte'
  import { createInputAriaDescribedby } from '../../../ts/utils'
  import { beforeUpdate } from 'svelte'

  export let value: string
  export let name: string | undefined
  export let label: string | undefined = undefined
  export let labelClass: string = ''
  export let helpText: string | undefined = undefined
  export let searchButtonText: string | undefined = undefined
  export let placeholder: string | undefined = undefined
  export let ariaControls: string | undefined = undefined
  export let ariaRemoveTextLabel = 'Tøm'
  export let inputClass = ''
  let isInitialized = false

  beforeUpdate(() => {
    if (!value && !isInitialized && document) {
      value = document?.querySelector(`input[name="${name}"]`)?.value
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
      id={name}
      type="search"
      {name}
      class="form-field {inputClass}"
      class:hasButton={!!searchButtonText}
      bind:value
      aria-labelledby={!label && searchButtonText ? 'search-button' : undefined}
      aria-describedby={createInputAriaDescribedby(helpText ? name : undefined)}
      {placeholder} />
    {#if value}
      <button
        type="reset"
        class="mt-button mt-button--search-clear"
        on:click={() => (value = '')}
        data-testid="search-clear">
        <span class="inclusively-hidden">{ariaRemoveTextLabel}</span>
        <svg
          aria-hidden="true"
          width="20"
          height="20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10 0C4.47 0 0 4.47 0 10s4.47 10 10 10 10-4.47 10-10S15.53 0 10 0Zm5 13.59L13.59 15 10 11.41 6.41 15 5 13.59 8.59 10 5 6.41 6.41 5 10 8.59 13.59 5 15 6.41 11.41 10 15 13.59Z"
            fill="#464545" />
        </svg>
      </button>
    {/if}
  </div>
  {#if searchButtonText}
    <button
      id="search-button"
      type="submit"
      class="mt-button mt-button--primary icon--search-before-primary"
      aria-controls={ariaControls}>
      {searchButtonText}
    </button>
  {/if}
</div>
