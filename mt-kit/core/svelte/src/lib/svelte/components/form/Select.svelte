<script module lang="ts">
  let instanceCounter = 0
</script>

<script lang="ts">
  import InputError from './InputErrorMessage.svelte'
  import type { ErrorDetail } from '$lib/ts'
  import { createInputAriaDescribedby } from '$lib/ts'
  import Label from './Label.svelte'
  import { tick } from 'svelte'

  interface Props {
    name: string
    label: string
    value: string | undefined
    error: ErrorDetail | undefined
    helpText: string | undefined
    isRequired?: boolean | undefined
    options?: Array<{ value: string; text: string }>
    textOptional: string | undefined
    showOptionalText?: boolean
    hiddenErrorText: string | undefined
  }

  let {
    name,
    label,
    value = $bindable(),
    error,
    helpText,
    isRequired = undefined,
    options = [],
    textOptional,
    showOptionalText = true,
    hiddenErrorText
  }: Props = $props()

  const selectId = `ui-select-${instanceCounter++}`
  let isInitialized = false

  $effect.pre(() => {
    tick().then(() => {
      if (value === undefined && !isInitialized && document) {
        value = document?.querySelector<HTMLInputElement>(`input[name="${name}"]:checked`)?.value
        isInitialized = true
      }
    })
  })
</script>

<Label for={selectId} {isRequired} {textOptional} {showOptionalText}>{label}</Label>

{#if helpText}
  <div id={`${name}-hint`} class="hint">
    {@html helpText}
  </div>
{/if}

{#if error}
  <InputError {...error} {hiddenErrorText} />
{/if}

<select
  {name}
  id={selectId}
  bind:value
  class="form-field"
  aria-required={isRequired}
  aria-describedby={createInputAriaDescribedby(helpText ? name : undefined, error)}>
  {#each options as option (option.value)}
    <option value={option.value}>
      {option.text}
    </option>
  {/each}
</select>
