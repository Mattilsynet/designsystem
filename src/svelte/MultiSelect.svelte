<script context="module" lang="ts">
  let instanceCounter = 0
</script>

<script lang="ts">
  import Tags from './Tags.svelte'
  import {createInputAriaDescribedby} from '../ts/utils'
  import Label from './form/Label.svelte'
  import InputError from './form/InputErrorMessage.svelte'
  import type {ErrorDetail} from '../ts/types'

  export let name: string
  export let label: string
  export let labelId: string
  export let error: ErrorDetail | undefined
  export let helpText: string | undefined
  export let isRequired: boolean | undefined = undefined
  export let options: Array<{value: string; text: string}> = []
  export let preferredOptions: Array<{value: string; text: string}> = []
  export let textOptional: string | undefined
  export let hiddenErrorText: string | undefined
  export let tagButtonClass = ''
  export let defaultOption = 'Velg fra listen'
  export let values = []

  const selectId = `ui-select-${instanceCounter++}`

  let selected
  let allOptions = options.concat(preferredOptions)

  function handleChange() {
    const currentSelected = allOptions.find(o => o.value === selected)
    values = [...new Set(values.concat(currentSelected))]
    selected = undefined
  }
</script>

<Label for={selectId} {isRequired} {textOptional}>{label}</Label>

{#if helpText}
  <div id={`${name}-hint`} class="hint">
    {@html helpText}
  </div>
{/if}

{#if error}
  <InputError {...error} {hiddenErrorText} />
{/if}

<Tags bind:tags={values} isClosable="true" buttonClass={tagButtonClass} />

<select
  {name}
  id={selectId}
  bind:value={selected}
  class="form-field"
  on:change|preventDefault={handleChange}
  aria-required={isRequired}
  aria-labelledby={labelId}
  aria-describedby={createInputAriaDescribedby(helpText ? name : undefined, error)}>
  <option disabled>{defaultOption}</option>
  {#each preferredOptions as prefOption (prefOption.value)}
    <option value={prefOption.value}>
      {prefOption.text}
    </option>
  {/each}
  {#if preferredOptions.length}
    <option disabled aria-hidden={true}>──────────</option>
  {/if}
  {#each options as option (option.value)}
    <option value={option.value}>
      {option.text}
    </option>
  {/each}
</select>
