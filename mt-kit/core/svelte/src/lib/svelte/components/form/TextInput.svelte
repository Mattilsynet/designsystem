<script lang="ts">
  import type { AutocompleteType, ErrorDetail, InputModeType } from '$lib/ts'
  import { tick } from 'svelte'
  import { styles } from '@mattilsynet/design'
  import Tag from '$lib/svelte/components/Tag.svelte'

  interface Props {
    value?: string
    name: string
    label: string
    labelClass?: string
    countCharactersLeftLabel?: string
    countCharactersTooManyLabel?: string
    error?: ErrorDetail
    helpText?: string
    textOptional?: string
    showOptionalText?: boolean
    maxlength?: number
    placeholder?: string
    isRequired?: boolean
    inputmode?: InputModeType
    autocomplete?: AutocompleteType
    inputClass?: string
  }

  let {
    value = $bindable(),
    name,
    label,
    labelClass = '',
    countCharactersLeftLabel,
    countCharactersTooManyLabel,
    error = $bindable(),
    helpText,
    textOptional,
    showOptionalText = true,
    maxlength,
    placeholder,
    isRequired,
    inputmode,
    autocomplete,
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
  class={styles.field}
  data-size="md"
  data-required="hidden"
  style={`--mtds-text-count-under: '%d ${countCharactersLeftLabel}'; --mtds-text-count-over: '%d ${countCharactersTooManyLabel}';`}>
  <label for={name} class={labelClass}>
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

  {#if error}
    <div class={styles.validation}>
      {error.message}
    </div>
  {/if}

  <input
    id={name}
    {name}
    class="{styles.input} {inputClass}"
    bind:value
    aria-required={isRequired || undefined}
    {inputmode}
    {placeholder}
    {autocomplete} />

  {#if maxlength}
    <p data-count={maxlength}></p>
  {/if}
</div>
