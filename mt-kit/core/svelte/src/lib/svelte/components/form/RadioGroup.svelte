<script lang="ts">
  import Tag from '../Tag.svelte'
  import type { ErrorDetail } from '$lib/ts'
  import { toKebabCase } from '$lib/ts'
  import { tick } from 'svelte'
  import { styles } from '@mattilsynet/design'

  interface Props {
    value?: string
    name: string
    label: string
    helpText?: string
    error?: ErrorDetail
    class?: string
    options?: Array<{ value: string; text: string }>
    isRequired?: boolean
    textOptional?: string
    showOptionalText?: boolean
    hiddenErrorText?: string
  }

  let {
    value = $bindable(),
    name,
    label,
    helpText,
    error,
    class: className = '',
    options = [],
    isRequired,
    textOptional = '(valgfritt felt)',
    showOptionalText = true
  }: Props = $props()
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

<fieldset class="{styles.fieldset} {className}" data-size="md" data-required="hidden">
  <legend>
    {label}
    {#if !isRequired && showOptionalText}
      <Tag data-icon={false} data-color="info">{textOptional}</Tag>
    {/if}
  </legend>

  {#if helpText}
    <p>
      {@html helpText}
    </p>
  {/if}

  {#if error}
    <div class={styles.validation}>{error.message}</div>
  {/if}

  {#each options as radio (radio.value)}
    <div class={styles.field}>
      <input
        type="radio"
        id={`${name}-${toKebabCase(radio.value)}`}
        {name}
        class={styles.input}
        bind:group={value}
        value={radio.value}
        aria-required={isRequired}
        checked={value === radio.value} />
      <label for={`${name}-${toKebabCase(radio.value)}`}>
        {radio.text}
      </label>
    </div>
  {/each}
</fieldset>
