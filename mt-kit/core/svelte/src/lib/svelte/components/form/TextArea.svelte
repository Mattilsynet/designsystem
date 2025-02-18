<script lang="ts">
  import type { AutocompleteType, CountCharsParams, ErrorDetail, InputModeType } from '$lib/ts'
  import { tick } from 'svelte'
  import Tag from '../Tag.svelte'
  import { styles } from '@mattilsynet/design'

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
    helpTextClass?: string
    showOptionalText?: boolean
    hiddenErrorText?: string
    helpTextPlacement?: 'above' | 'below'
    textAreaRef?: HTMLElement
    textAreaClass?: string
    maxlength?: number
    placeholder?: string
    isRequired?: boolean
  }

  let {
    value = $bindable(),
    name,
    label,
    countCharactersLeftLabel,
    countCharactersTooManyLabel,
    error = $bindable(),
    helpText,
    textOptional,
    showOptionalText = true,
    hiddenErrorText,
    helpTextPlacement = 'above',
    // @ts-expect-error "is declared but its value is never read." textAreaRef is used as a binding to the textarea element
    textAreaRef = $bindable(),
    textAreaClass = '',
    maxlength,
    placeholder,
    isRequired
  }: Props = $props()
  let isInitialized = false

  let countCharsParams: CountCharsParams = {
    countCharacters: (maxlength && maxlength > 0) as boolean,
    maxlength: maxlength ?? 0,
    id: name,
    countCharactersLeftLabel: countCharactersLeftLabel,
    countCharactersTooManyLabel: countCharactersTooManyLabel
  }

  $effect.pre(() => {
    tick().then(() => {
      if (value === undefined && !isInitialized && document) {
        value = document?.querySelector<HTMLInputElement>(`input[name="${name}"]`)?.value
        isInitialized = true
      }
    })
  })
</script>

<div class={styles.field} data-size="md" data-required="hidden">
  <label for={name}
    >{label}
    {#if !isRequired && showOptionalText}
      <Tag data-icon={false} data-color="info">
        {textOptional}
      </Tag>
    {/if}
  </label>

  {#if helpText && helpTextPlacement === 'above'}
    <p>
      {@html helpText}
    </p>
  {/if}

  {#if error}
    <div class={styles.validation}>{error.message}</div>
  {/if}

  <textarea
    id={name}
    {name}
    class="{styles.input} {textAreaClass}"
    bind:value
    bind:this={textAreaRef}
    {placeholder}
    aria-required={isRequired}
    aria-invalid={!!error}></textarea>

  <p data-count={countCharsParams.maxlength}></p>

  {#if helpText && helpTextPlacement === 'below'}
    <p>
      {@html helpText}
    </p>
  {/if}
</div>
