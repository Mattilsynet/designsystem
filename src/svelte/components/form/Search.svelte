<script lang="ts">
  import Label from './Label.svelte'
  import {createInputAriaDescribedby} from '../../../ts/utils'

  export let value: string
  export let name: string
  export let label: string
  export let labelClass: string
  export let helpText: string | undefined
  export let searchButtonText: string | undefined
  export let placeholder: string | undefined
  export let inputClass = ''
  $: shareSpace = !!searchButtonText
</script>

<Label class={labelClass} for={name} showOptionalText={false}>
  {label}
</Label>

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
    class:shareSpace
    bind:value
    aria-describedby={createInputAriaDescribedby(helpText ? name : undefined)}
    type="search"
    {placeholder} />
  {#if searchButtonText}
    <button
      type="submit"
      class="button button--flat form-field button-search shareSpace icon-search-before"
      >{searchButtonText}</button>
  {/if}
</div>
