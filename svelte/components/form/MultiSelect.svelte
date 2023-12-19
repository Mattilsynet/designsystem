<script context="module">let instanceCounter = 0;
</script>

<script>import { onMount } from "svelte";
import { fly } from "svelte/transition";
import Label from "./Label.svelte";
import InputError from "./InputErrorMessage.svelte";
export let name;
export let label;
export let values = [];
export let readonly = false;
export let placeholder = "";
export let options = [];
export let preferredOptions = [];
export let isRequired = void 0;
export let error;
export let helpText;
export let textOptional;
export let hiddenErrorText;
export let tagsLabel = "";
let input;
let inputValue;
let allOptions = [];
let activeOption;
let showOptions = false;
let first = true;
let selected = {};
let listBox;
const ENTER = "Enter";
const ESCAPE = "Escape";
const END = "End";
const HOME = "Home";
const UP_ARROW = "ArrowUp";
const DOWN_ARROW = "ArrowDown";
const selectId = `ui-select-${instanceCounter++}`;
onMount(() => {
  allOptions = [...preferredOptions, ...options];
  if (values) {
    selected = allOptions.reduce((obj, option) => {
      if (values.includes(option.value)) {
        return { ...obj, [option.value]: option };
      }
      return obj;
    }, {});
  }
  first = false;
});
$:
  if (!first) {
    values = Object.values(selected).map((o) => o.value);
  }
$:
  filtered = allOptions.filter((option) => {
    return inputValue ? option.text.toLowerCase().includes(inputValue.toLowerCase()) : option;
  });
$:
  if (activeOption && !filtered.includes(activeOption) || !activeOption && inputValue) {
    activeOption = filtered[0];
  }
$:
  activeOptionIndex = filtered.indexOf(activeOption);
function add(token) {
  if (!readonly) {
    selected[token.value] = token;
  }
}
function remove(value) {
  if (!readonly) {
    const { [value]: val, ...rest } = selected;
    selected = rest;
  }
}
function optionsVisibility(show) {
  if (readonly)
    return;
  if (typeof show === "boolean") {
    showOptions = show;
    show && input.focus();
  } else {
    showOptions = !showOptions;
  }
  if (!showOptions) {
    activeOption = void 0;
  }
}
function maintainScrollVisibility(activeElement, scrollParent) {
  const { offsetHeight, offsetTop } = activeElement;
  const { offsetHeight: parentOffsetHeight, scrollTop } = scrollParent;
  const isAbove = offsetTop < scrollTop;
  const isBelow = offsetTop + offsetHeight > scrollTop + parentOffsetHeight;
  if (isAbove) {
    scrollParent.scrollTo(0, offsetTop);
  } else if (isBelow) {
    scrollParent.scrollTo(0, offsetTop - parentOffsetHeight + offsetHeight);
  }
}
function calcActiveIndex(calcIndex, numberOfOptions) {
  if (calcIndex < 0) {
    return numberOfOptions - 1;
  } else if (calcIndex === numberOfOptions) {
    return 0;
  }
  return calcIndex;
}
function calculateActiveOption(calcIndex, filtered2) {
  if (calcIndex < 0) {
    return filtered2[filtered2.length - 1];
  } else if (calcIndex === filtered2.length) {
    return filtered2[0];
  }
  return filtered2[calcIndex];
}
function handleKeyup(e) {
  e.stopPropagation();
  optionsVisibility(true);
  switch (e.key) {
    case ENTER: {
      if (!activeOption) {
        break;
      }
      if (Object.keys(selected).includes(activeOption.value)) {
        remove(activeOption.value);
      } else {
        add(activeOption);
      }
      inputValue = "";
      break;
    }
    case ESCAPE: {
      optionsVisibility(false);
      inputValue = "";
      break;
    }
    case DOWN_ARROW:
    case UP_ARROW: {
      const increment = e.key === UP_ARROW ? -1 : 1;
      const calcIndex = filtered.indexOf(activeOption) + increment;
      activeOption = calculateActiveOption(calcIndex, filtered);
      const activeIndex = calcActiveIndex(calcIndex, filtered.length);
      maintainScrollVisibility(listBox.children[activeIndex], listBox);
      break;
    }
    case END:
    case HOME: {
      const index = e.key === HOME ? 0 : filtered.length - 1;
      activeOption = filtered[index];
      maintainScrollVisibility(listBox.children[index], listBox);
      break;
    }
  }
}
function handleBlur() {
  optionsVisibility(false);
}
function handleTokenClick() {
  optionsVisibility(true);
}
function handleRemoveItem(e, value) {
  remove(value);
}
function handleRemoveItemKeyDown(e, value) {
  if (e.key === ENTER) {
    remove(value);
  }
}
function handleOptionMouseup(e) {
  const value = e.target.dataset.value;
  if (selected[value]) {
    remove(value);
  } else {
    add(allOptions.filter((o) => o.value === value)[0]);
    input.focus();
  }
}
</script>

<Label for={`${name}-input`} {isRequired} {textOptional}>{label}</Label>

<div
  id="{selectId}-selected-label"
  class="text-small token-label"
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

{#if helpText}
  <div id={`${name}-hint`} class="hint m-t-xxs">
    {@html helpText}
  </div>
{/if}

{#if error}
  <InputError {...error} {hiddenErrorText} class="m-t-xxs" />
{/if}

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
    class="mt-ul options"
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
