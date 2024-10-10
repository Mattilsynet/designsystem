<script context="module" lang="ts">
  let instanceCounter = 0
</script>

<script lang="ts">
  import { onMount } from 'svelte'
  import { fly } from 'svelte/transition'
  import type { ErrorDetail, MultiSelectOption } from '../../../ts/types'
  import Label from './Label.svelte'
  import InputError from './InputErrorMessage.svelte'
  import SummaryDetail from '../SummaryDetail.svelte'
  import { createInputAriaDescribedby, toKebabCase } from '../../../ts/utils'
  import { forceArray } from '$lib/ts/utils.js'

  export let name: string
  export let label: string
  export let values: string | Array<string> = []
  export let readonly = false
  export let placeholder = ''
  export let options: Array<MultiSelectOption> = []
  export let preferredOptions = []
  export let isRequired: boolean | undefined = undefined
  export let error: ErrorDetail | undefined
  export let helpText: string | undefined
  export let textOptional: string | undefined
  export let hiddenErrorText: string | undefined
  export let tagsLabel = ''
  export let loadJs = true

  let input: HTMLInputElement
  let inputValue: string
  let allOptions: Array<MultiSelectOption> = []
  let activeOption: undefined | MultiSelectOption
  let showOptions = false
  let first = true
  let selected: MultiSelectOption | object = {}
  let listBox: HTMLUListElement

  const ENTER: Readonly<string> = 'Enter'
  const ESCAPE: Readonly<string> = 'Escape'
  const END: Readonly<string> = 'End'
  const HOME: Readonly<string> = 'Home'
  const UP_ARROW: Readonly<string> = 'ArrowUp'
  const DOWN_ARROW: Readonly<string> = 'ArrowDown'
  const selectId = `ui-select-${instanceCounter++}`

  onMount(() => {
    allOptions = [...preferredOptions, ...options]
    if (values) {
      selected = allOptions.reduce((obj, option) => {
        if (forceArray(values).includes(option.value)) {
          return { ...obj, [option.value]: option }
        }
        return obj
      }, {})
    }
    first = false
  })

  $: if (!first) {
    values = Object.values(selected).map(o => o.value)
  }
  $: filtered = allOptions.filter(option => {
    return inputValue ? option.text.toLowerCase().includes(inputValue.toLowerCase()) : option
  })
  $: if ((activeOption && !filtered.includes(activeOption)) || (!activeOption && inputValue)) {
    activeOption = filtered[0]
  }
  $: activeOptionIndex = filtered.indexOf(activeOption)

  function add(token: MultiSelectOption): void {
    if (!readonly) {
      selected[token.value] = token
    }
  }

  function remove(value: string): void {
    if (!readonly) {
      const { [value]: val, ...rest } = selected
      selected = rest
    }
  }

  function optionsVisibility(show: boolean | undefined): void {
    if (readonly) return
    if (typeof show === 'boolean') {
      showOptions = show
      show && input.focus()
    } else {
      showOptions = !showOptions
    }
    if (!showOptions) {
      activeOption = undefined
    }
  }

  function maintainScrollVisibility(activeElement: HTMLElement, scrollParent: HTMLElement): void {
    const { offsetHeight, offsetTop } = activeElement
    const { offsetHeight: parentOffsetHeight, scrollTop } = scrollParent

    const isAbove = offsetTop < scrollTop
    const isBelow = offsetTop + offsetHeight > scrollTop + parentOffsetHeight

    if (isAbove) {
      scrollParent.scrollTo(0, offsetTop)
    } else if (isBelow) {
      scrollParent.scrollTo(0, offsetTop - parentOffsetHeight + offsetHeight)
    }
  }

  function calcActiveIndex(calcIndex: number, numberOfOptions: number): number {
    if (calcIndex < 0) {
      return numberOfOptions - 1
    } else if (calcIndex === numberOfOptions) {
      return 0
    }
    return calcIndex
  }

  function calculateActiveOption(
    calcIndex: number,
    filtered: Array<MultiSelectOption>
  ): MultiSelectOption {
    if (calcIndex < 0) {
      return filtered[filtered.length - 1]
    } else if (calcIndex === filtered.length) {
      return filtered[0]
    }
    return filtered[calcIndex]
  }

  function handleKeyup(e: KeyboardEvent): void {
    e.stopPropagation()
    optionsVisibility(true)
    switch (e.key) {
      case ENTER: {
        if (!activeOption) {
          break
        }
        if (Object.keys(selected).includes(activeOption.value)) {
          remove(activeOption.value)
        } else {
          add(activeOption)
        }
        inputValue = ''
        break
      }
      case ESCAPE: {
        optionsVisibility(false)
        inputValue = ''
        break
      }
      case DOWN_ARROW:
      case UP_ARROW: {
        // up and down arrows
        const increment = e.key === UP_ARROW ? -1 : 1
        const calcIndex = filtered.indexOf(activeOption) + increment

        activeOption = calculateActiveOption(calcIndex, filtered)

        const activeIndex = calcActiveIndex(calcIndex, filtered.length)
        maintainScrollVisibility(listBox.children[activeIndex], listBox)
        break
      }
      case END:
      case HOME: {
        const index = e.key === HOME ? 0 : filtered.length - 1
        activeOption = filtered[index]
        maintainScrollVisibility(listBox.children[index], listBox)
        break
      }
    }
  }

  function handleBlur(): void {
    optionsVisibility(false)
  }

  function handleTokenClick(): void {
    optionsVisibility(true)
  }

  function handleRemoveItem(e: Event, value): void {
    remove(value)
  }

  function handleRemoveItemKeyDown(e: KeyboardEvent, value): void {
    if (e.key === ENTER) {
      remove(value)
    }
  }

  function handleOptionMouseup(e: MouseEvent): void {
    const value = (e.target as HTMLInputElement).dataset.value
    if (selected[value]) {
      remove(value)
    } else {
      add(allOptions.filter(o => o.value === value)[0])
      input.focus()
    }
  }
</script>

<Label for={`${name}-input`} {isRequired} {textOptional}>{label}</Label>
{#if loadJs}
  <div
    id="{selectId}-selected-label"
    class="text-small token-label"
    data-testid="multiselect-selected-list"
    class:hidden={!Object.values(selected).length}>
    {tagsLabel}
  </div>
  <ul
    id="{selectId}-selected"
    class="mt-ul token-wrapper list-unstyled"
    aria-labelledby="{selectId}-selected-label">
    {#each Object.values(selected) as selectedOption, index}
      <li>
        <button
          id="{selectId}-remove-{index}"
          type="button"
          class="mt-button mt-button--flat mt-button--small closable token"
          data-id={selectedOption.value}
          aria-label={selectedOption.removeAriaLabel}
          on:keydown={e => handleRemoveItemKeyDown(e, selectedOption.value)}
          on:click|preventDefault={e => handleRemoveItem(e, selectedOption.value)}>
          <span>{selectedOption.text}</span>
        </button>
      </li>
    {/each}
  </ul>
  <input type="text" value={values} {name} class="mt-input hidden" />
{/if}

{#if helpText}
  <div id={`${name}-hint`} class="hint m-t-xxs">
    {@html helpText}
  </div>
{/if}

{#if error}
  <InputError {...error} {hiddenErrorText} class="m-t-xxs" />
{/if}

{#if loadJs}
  <div class="multiselect m-t-xxs" class:readonly>
    <div class="actions" on:click|preventDefault={handleTokenClick} on:blur={handleBlur}>
      {#if !readonly}
        <input
          id={`${name}-input`}
          class="mt-input"
          autocomplete="off"
          bind:value={inputValue}
          bind:this={input}
          on:keyup={handleKeyup}
          on:blur={handleBlur}
          type="text"
          role="combobox"
          data-testid="multiselect-input"
          aria-autocomplete="list"
          aria-expanded={showOptions}
          aria-controls="list"
          aria-activedescendant={activeOption
            ? `${selectId}-${activeOption.value}-${activeOptionIndex}`
            : undefined}
          {placeholder} />
        <span class="down-arrow" aria-hidden="true" />
      {/if}
    </div>
    <ul
      id="list"
      class="mt-ul options options-dropdown"
      role="listbox"
      data-testid="multiselect-list"
      aria-multiselectable="true"
      bind:this={listBox}
      class:hidden={!showOptions}
      transition:fly|local={{ duration: 200, y: 5 }}
      on:mousedown|preventDefault
      on:mouseup|preventDefault={handleOptionMouseup}>
      {#each filtered as option, index}
        <li
          id="{selectId}-{option.value}-{index}"
          role="option"
          class="option"
          class:divider={filtered.length === allOptions.length &&
            index === preferredOptions.length - 1}
          class:selected={selected[option.value]}
          class:active={activeOption === option}
          aria-selected={!!selected[option.value]}
          data-value={option.value}>
          {option.text}
        </li>
      {/each}
    </ul>
  </div>
{:else}
  <SummaryDetail
    title=""
    ariaLabelledBy="{`${name}-input`}-label"
    detailsClass="full-width multiselect--no-js"
    summaryWrapperClass="options-dropdown">
    {#each preferredOptions as option, index}
      <div class="form-control" class:divider={index === preferredOptions.length - 1}>
        <input
          type="checkbox"
          id={toKebabCase(option.value)}
          {name}
          class="mt-input input__control"
          class:error
          value={option.value}
          checked={values.includes(option.value)}
          aria-describedby={createInputAriaDescribedby(helpText ? name : undefined, error)} />
        <label class="mt-label" for={toKebabCase(option.value)}>
          {option.text}
        </label>
      </div>
    {/each}
    {#each options as option}
      <div class="form-control">
        <input
          type="checkbox"
          id={toKebabCase(option.value)}
          {name}
          class="mt-input input__control"
          class:error
          value={option.value}
          checked={values.includes(option.value)}
          aria-describedby={createInputAriaDescribedby(helpText ? name : undefined, error)} />
        <label class="mt-label" for={toKebabCase(option.value)}>
          {option.text}
        </label>
      </div>
    {/each}
  </SummaryDetail>
{/if}
