<!--suppress XmlDuplicatedId -->
<script lang="ts">
  import InputError from './InputErrorMessage.svelte'
  import type { AutocompleteType, ErrorDetail, InputModeType } from '../../../ts/types'
  import { createInputAriaDescribedby } from '../../../ts/utils'
  import Label from './Label.svelte'
  import { slide } from 'svelte/transition'
  import { beforeUpdate } from 'svelte'

  export let value
  export let name: string
  export let label: string
  export let labelClass: string
  export let error: ErrorDetail | undefined
  export let helpText: string | undefined
  export let textOptional: string | undefined
  export let showOptionalText: boolean
  export let hiddenErrorText: string | undefined
  export let maxlength: number | undefined
  export let placeholder: string | undefined
  export let isRequired: boolean | undefined = undefined
  export let inputmode: InputModeType | undefined
  export let autocomplete: AutocompleteType | undefined
  export let hasTransition = false

  export let inputClass = ''
  let isInitialized = false

  beforeUpdate(() => {
    if (value === undefined && !isInitialized && document) {
      value = document?.querySelector(`input[name="${name}"]`)?.value
      isInitialized = true
    }
  })
</script>

<div
  class="input-horizontal"
  style="--gap:var(--spacer-xxx-small)"
  in:slide={{ duration: hasTransition ? 300 : 0 }}
  out:slide={{ duration: hasTransition ? 300 : 0 }}>
  {#if error}
    <InputError {...error} {hiddenErrorText} />
  {/if}

  <div class="layout-flex layout-flex-col justify-content-center" style="--gap: 0">
    <Label for={name} {isRequired} {textOptional} {showOptionalText} class={labelClass}>
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
    class="mt-input form-field {inputClass}"
    bind:value
    class:error
    aria-required={isRequired || undefined}
    aria-describedby={createInputAriaDescribedby(helpText ? name : undefined, error, maxlength)}
    aria-invalid={!!error}
    {inputmode}
    {placeholder}
    {autocomplete} />
</div>
