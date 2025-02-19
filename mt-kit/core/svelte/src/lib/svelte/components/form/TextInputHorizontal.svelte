<script lang="ts">
  import type { AutocompleteType, ErrorDetail, InputModeType } from '$lib/ts'
  import { slide } from 'svelte/transition'
  import { tick } from 'svelte'
  import { styles } from '@mattilsynet/design'
  import Tag from '$lib/svelte/components/Tag.svelte'

  interface Props {
    value?: string
    name: string
    label: string
    labelClass?: string
    error?: ErrorDetail
    helpText?: string | undefined
    textOptional?: string
    showOptionalText?: boolean
    hiddenErrorText?: string
    maxlength?: number
    placeholder?: string
    isRequired?: boolean
    inputmode?: InputModeType
    autocomplete?: AutocompleteType
    hasTransition?: boolean
    inputClass?: string
  }

  let {
    value = $bindable(),
    name,
    label,
    labelClass,
    error,
    helpText,
    textOptional,
    showOptionalText,
    hiddenErrorText,
    maxlength,
    placeholder,
    isRequired,
    inputmode,
    autocomplete,
    hasTransition = false,
    inputClass = ''
  }: Props = $props()

  let isInitialized = false

  $effect.pre(() => {
    tick().then(() => {
      if (value === undefined && !isInitialized && document) {
        value = document?.querySelector<HTMLInputElement>(`input[name="${name}"]`)?.value
        isInitialized = true
      }
    })
  })
</script>

<div
  class="{styles.field} input-horizontal"
  data-size="md"
  data-required="hidden"
  in:slide={{ duration: hasTransition ? 300 : 0 }}
  out:slide={{ duration: hasTransition ? 300 : 0 }}>
  {#if error}
    <!-- TODO change to p when fixing spacing. Also change _form.scss div.validation:first-child-->
    <div class="{styles.validation} validation">
      {error.message}
    </div>
  {/if}

  <div class="{styles.flex} layout-flex-col justify-content-center">
    <label for={name}>
      {label}
      {#if !isRequired && showOptionalText}
        <Tag data-icon={false} data-color="info">{textOptional}</Tag>
      {/if}
    </label>

    {#if helpText}
      <p>
        {@html helpText}
      </p>
    {/if}
  </div>

  <input
    id={name}
    {name}
    class="{styles.input} {inputClass}"
    bind:value
    aria-required={isRequired || undefined}
    {inputmode}
    {placeholder}
    {autocomplete} />
</div>
