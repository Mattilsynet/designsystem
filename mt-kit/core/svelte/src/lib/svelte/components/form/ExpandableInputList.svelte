<script lang="ts" module>
  let counter = 0
</script>

<script lang="ts">
  import type { InputProps, ErrorDetail, InputModeType } from '$lib/ts'
  import { createInputAriaDescribedby, interpolate } from '$lib/ts'
  import TextInputHorizontal from './TextInputHorizontal.svelte'
  import { styles } from '@mattilsynet/design'
  import CaretDown from 'phosphor-svelte/lib/CaretDown'
  import CaretUp from 'phosphor-svelte/lib/CaretUp'

  interface Props {
    values?: Record<string, string>
    inputClass?: string
    inputList?: Array<InputProps>
    numberOfInputOutside?: number
    fieldSetId: string // use to relate error to fieldset
    fieldSetLabel: string
    fieldSetErrorHeading?: string
    fieldSetError?: Array<ErrorDetail>
    fieldSetHelpText?: string
    expandableAriaLabel?: string //'{0}, viser {1} av {2}'
    expandableText?: string
    collapsableText?: string
    showOptionalText?: boolean
    loadJs?: boolean
    inputMode?: InputModeType
  }

  let {
    values = $bindable({}),
    inputClass = '',
    inputList = [],
    numberOfInputOutside = 2,
    fieldSetId,
    fieldSetLabel,
    fieldSetErrorHeading = 'Feil oppstod',
    fieldSetError,
    fieldSetHelpText,
    expandableAriaLabel = '',
    expandableText = '',
    collapsableText = '',
    showOptionalText = false,
    loadJs = true,
    inputMode
  }: Props = $props()

  let outsides = $derived(inputList.slice(0, numberOfInputOutside))
  let insides = $derived(inputList.slice(numberOfInputOutside, inputList.length))
  let showMore = $state(
    inputList.slice(numberOfInputOutside, inputList.length).some(({ name }) => {
      return values[name]
    })
  )

  const bodyId = `ui-expandable-list-${counter++}`

  function createAriaLabel(showMore: boolean) {
    if (showMore) {
      return interpolate(expandableAriaLabel, [
        collapsableText,
        `${inputList.length}`,
        `${inputList.length}`
      ])
    } else {
      return interpolate(expandableAriaLabel, [
        expandableText,
        `${numberOfInputOutside}`,
        `${inputList.length}`
      ])
    }
  }
</script>

<fieldset
  id={fieldSetId}
  class="mt-fieldset expandable-input-list"
  aria-describedby={createInputAriaDescribedby(
    fieldSetHelpText ? fieldSetId : undefined,
    fieldSetError?.find(() => true)
  )}>
  <legend class="mt-legend form-legend">{fieldSetLabel}</legend>

  {#if fieldSetHelpText}
    <div id={`${fieldSetId}-hint`} class="hint">
      {@html fieldSetHelpText}
    </div>
  {/if}

  {#if fieldSetError}
    <div
      id={`${fieldSetId}-error`}
      class=""
      role="alert"
      tabindex="-1"
      aria-labelledby="error-summary-heading">
      <h2 id="error-summary-heading" class="mt-h2 inclusively-hidden">
        {fieldSetErrorHeading}
      </h2>
      <ul class="mt-ul m-t-xxs list-unstyled">
        {#each fieldSetError as error}
          <li class="form-error">
            {error.message}
          </li>
        {/each}
      </ul>
    </div>
  {/if}

  <div class="collapsable-input-list">
    {#each outsides as outside}
      <TextInputHorizontal
        name={outside.name}
        bind:value={values[outside.name]}
        label={outside.label}
        helpText={outside.helpText}
        inputmode={outside.inputmode ?? inputMode}
        isRequired={outside.isRequired}
        placeholder={outside.placeholder}
        autocomplete={outside.autocomplete}
        error={outside.error}
        {showOptionalText}
        labelClass="text-body"
        inputClass="form-field--small form-field--small-width {inputClass}" />
    {/each}

    {#if loadJs}
      {#if insides.length > 0}
        <button
          type="button"
          data-variant="tertiary"
          class={styles.button}
          class:m-t-xxs={showMore}
          aria-expanded={showMore}
          aria-controls={bodyId}
          aria-label={createAriaLabel(showMore)}
          onclick={e => {
            e.preventDefault()
            showMore = !showMore
          }}
          style="order: {insides.length + outsides.length};">
          {#if showMore}
            {@html collapsableText} <CaretUp />
          {:else}
            {@html expandableText} <CaretDown />
          {/if}
        </button>
        {#if showMore}
          {#each insides as inside}
            <TextInputHorizontal
              name={inside.name}
              label={inside.label}
              bind:value={values[inside.name]}
              helpText={inside.helpText}
              inputmode={inside.inputmode ?? inputMode}
              isRequired={inside.isRequired}
              placeholder={inside.placeholder}
              autocomplete={inside.autocomplete}
              error={inside.error}
              hasTransition={true}
              {showOptionalText}
              labelClass="text-body"
              inputClass="form-field--small form-field--small-width {inputClass}" />
          {/each}
        {/if}
      {/if}
    {:else}
      <details bind:open={showMore} class="mt-details">
        <summary class="mt-summary">
          {#if showMore}
            {@html collapsableText}
          {:else}
            {@html expandableText}
          {/if}
        </summary>
        <div class="collapsable-input-list">
          {#each insides as inside}
            <TextInputHorizontal
              name={inside.name}
              label={inside.label}
              bind:value={values[inside.name]}
              helpText={inside.helpText}
              inputmode={inside.inputmode}
              isRequired={inside.isRequired}
              placeholder={inside.placeholder}
              autocomplete={inside.autocomplete}
              error={inside.error}
              hasTransition={true}
              {showOptionalText}
              labelClass="text-body"
              inputClass="form-field--small form-field--small-width {inputClass}" />
          {/each}
        </div>
      </details>
    {/if}
  </div>
</fieldset>
