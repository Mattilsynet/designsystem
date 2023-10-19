<script lang="ts" context="module">
  let counter = 0
</script>

<script lang="ts">
  import type { InputProps, ErrorDetail } from '../../../ts/types'
  import { createInputAriaDescribedby, interpolate } from '../../../ts/utils'
  import TextInputHorizontal from './TextInputHorizontal.svelte'

  export let values = {}
  export let isRequired: boolean | undefined = undefined
  export let inputClass = ''
  export let inputList: Array<InputProps> = []
  export let numberOfInputOutside = 2
  export let fieldSetId // use to relate error to fieldset
  export let fieldSetLabel
  export let fieldSetErrorHeading = 'Feil oppstod'
  export let fieldSetError: Array<ErrorDetail> | undefined = undefined
  export let fieldSetHelpText: string | undefined = undefined
  export let expandableAriaLabel = '' //'{0}, viser {1} av {2}'
  export let expandableText = ''
  export let collapsableText = ''
  export let showOptionalText = false
  export let loadJs = true

  $: outsides = inputList.slice(0, numberOfInputOutside)
  $: insides = inputList.slice(numberOfInputOutside, inputList.length)
  $: showMore = insides.some(({ name }) => {
    return values[name]
  })
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
    fieldSetError
  )}>
  <legend class="form-legend">{fieldSetLabel}</legend>

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
      <h2 id="error-summary-heading" class="inclusively-hidden">
        {fieldSetErrorHeading}
      </h2>
      <ul class="list-unstyled">
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
        inputmode={outside.inputmode}
        isRequired={outside.isRequired}
        placeholder={outside.placeholder}
        autocomplete={outside.autocomplete}
        error={outside.error}
        {showOptionalText}
        labelClass="text-body"
        inputClass="form-field--small form-field--small-width" />
    {/each}

    {#if loadJs}
      {#if insides.length > 0}
        <button
          type="button"
          class="mt-button mt-button--flat mt-button--small expandable self-start"
          class:m-t-xxs={showMore}
          aria-expanded={showMore}
          aria-controls={bodyId}
          aria-label={createAriaLabel(showMore)}
          on:click|preventDefault={() => (showMore = !showMore)}
          style="order: {insides.length + outsides.length};">
          {#if showMore}
            {@html collapsableText}
          {:else}
            {@html expandableText}
          {/if}
        </button>
        {#if showMore}
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
              inputClass="form-field--small form-field--small-width" />
          {/each}
        {/if}
      {/if}
    {:else}
      <details bind:open={showMore}>
        <summary>
          {@html expandableText}
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
              inputClass="form-field--small form-field--small-width" />
          {/each}
        </div>
      </details>
    {/if}
  </div>
</fieldset>
