<script lang="ts">
  import Label from './Label.svelte'
  import {createInputAriaDescribedby} from '../../../ts/utils'

  export let value
  export let legend: string
  export let name: string
  export let label: string
  export let labelClass: string
  export let error: undefined
  export let helpText: string | undefined
  export let textOptional: string | undefined
  export let hiddenErrorText: string | undefined
  export let searchButtonText: string | undefined

  export let placeholder: string | undefined
  export let inputmode: undefined
  export let autocomplete: undefined

  const showOptionalText = false

  export let inputClass = ''
</script>

<fieldset class="input-wrapper">
  {#if legend}
    <legend>{legend}</legend>
  {/if}

  <div class="layout-flex layout-flex-col justify-content-center x" style="--gap: 0">
    <Label class={labelClass} for={name} {showOptionalText}>
      {label}
    </Label>

    {#if helpText}
      <div id={`${name}-hint`} class="hint">
        {@html helpText}
      </div>
    {/if}
  </div>

  <input
    id={name}
    {name}
    class="form-field {inputClass}"
    bind:value
    aria-describedby={createInputAriaDescribedby(helpText ? name : undefined, error)}
    aria-invalid={!!error}
    type="search"
    {placeholder} />
  <button type="submit" class="search icon-search-before">{searchButtonText}</button>
</fieldset>
