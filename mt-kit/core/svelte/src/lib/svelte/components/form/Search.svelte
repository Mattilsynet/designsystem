<script lang="ts">
  import Label from './Label.svelte'
  import { createInputAriaDescribedby } from '$lib/ts'
  import { tick } from 'svelte'

  interface Props {
    searchString?: string
    name: string
    shouldFocus?: boolean
    label?: string
    labelClass?: string
    helpText?: string
    searchButtonText?: string
    placeholder?: string
    ariaControls?: string
    ariaRemoveTextLabel?: string
    inputClass?: string
    class?: string
  }

  let {
    searchString = $bindable(),
    name,
    shouldFocus = false,
    label,
    labelClass = '',
    helpText,
    searchButtonText,
    placeholder,
    ariaControls,
    ariaRemoveTextLabel = 'Tøm',
    inputClass = '',
    class: className = ''
  }: Props = $props()

  let searchInput: HTMLInputElement | undefined = $state()
  $effect(() => {
    if (shouldFocus) {
      searchInput?.focus()
    }
  })

  let isInitialized = false
  $effect.pre(() => {
    tick().then(() => {
      if (!searchString && !isInitialized && document) {
        searchString =
          document?.querySelector<HTMLInputElement>(`input[name="${name}"]`)?.value ?? ''
        isInitialized = true
      }
    })
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

<div class="search-wrap {className}">
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
        onclick={() => (searchString = '')}
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
