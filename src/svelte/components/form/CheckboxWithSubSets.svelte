<script lang="ts">
  import {slide} from 'svelte/transition'
  import {onMount} from 'svelte'
  import type {CheckboxWithSubSectionsOptions} from '../../../ts/types'
  import {interpolate} from '../../../ts/utils'

  export let params: Record<string, string> = {}
  export let name: string
  let className = ''
  export {className as class}
  export let legend: string
  export let variation: 'primary' | 'secondary' = 'primary'
  export let options: Array<CheckboxWithSubSectionsOptions>
  export let categoryName = 'kategori'
  export let subCategoryName = 'underkategori'
  export let subCategoryLegend = `${legend} i`
  export let helpText: string | undefined
  export const checkboxes = {
    reset() {
      selectedCategoryValues = []
      selectedSubCategoryValues = []
    }
  }

  $: fieldsetClass =
    variation === 'primary' ? 'checkbox-subsets--primary' : 'checkbox-subsets--secondary'

  interface CheckboxWithSubSectionsStates {
    key: string
    docCount: number
    displayName: string
    checked: boolean
    children?: Array<CheckboxWithSubSectionsStates>
  }

  let hasJS = false
  // selectedCategoryValues and selectedSubCategoryValues are the values from the checked checkboxes.
  // When binding the variables to the checkboxes, the checkboxes will be checked if the value is in the array.
  let selectedCategoryValues = params[categoryName] ? (params[categoryName] as Array<string>) : []
  let selectedSubCategoryValues = params[subCategoryName]
    ? (params[subCategoryName] as Array<string>)
    : []

  $: states = []
  let checkboxDOMElements = []

  $: if (options) {
    states = mapOptionsToState(options)
  }
  onMount(() => {
    states = mapOptionsToState(options)
    hasJS = true
  })

  /*
   * */
  function mapOptionsToState(
    opts: Array<CheckboxWithSubSectionsOptions>
  ): Array<CheckboxWithSubSectionsStates> {
    return opts.map(option => {
      return {
        key: option.key,
        docCount: option.docCount,
        displayName: option.displayName,
        checked: selectedCategoryValues
          ? selectedCategoryValues.filter(val => val === option.key).length > 0
          : false,
        children: option.children?.map(child => {
          const childKey = `${option.key}/${child.key}`
          return {
            key: childKey,
            docCount: child.docCount,
            displayName: child.displayName,
            checked:
              (selectedSubCategoryValues && selectedSubCategoryValues.indexOf(child.key) >= 0) ??
              false
          }
        })
      }
    })
  }

  function mainCategory(mainIndex: number): void {
    states[mainIndex].checked = !states[mainIndex].checked
    // Uncheck all subcategories if parent main category is unchecked
    if (!states[mainIndex].checked) {
      // To uncheck a checkbox, remove the value from the selectedSubCategoryValues array
      states[mainIndex].children.forEach(subCategory => {
        subCategory.checked = false
        selectedSubCategoryValues = selectedSubCategoryValues.filter(value => {
          return value !== subCategory.key
        })
      })
    }
  }
  function formatLabel(displayName: string, docCount?: number): string {
    return `${displayName} ${docCount ? `(${docCount})` : ''}`
  }

  function subCategory(mainIndex: number, subCategoryKey: string): void {
    // uncheck subcategory in the state list
    states[mainIndex].children = states[mainIndex].children.map(child => {
      if (child.key === subCategoryKey) {
        return {
          ...child,
          checked: !child.checked
        }
      }
      return child
    })
  }
</script>

<fieldset class={className}>
  <legend id="legend" class="border" class:inclusively-hidden={variation === 'secondary'}>
    {legend}
  </legend>
  {#if helpText}
    <p class="hint">{helpText}</p>
  {/if}
  {#each states as listItem, mainIndex}
    <div class="form-control checkbox narrow" class:m-t-xxs={mainIndex > 0}>
      <input
        id={listItem.key}
        type="checkbox"
        class="input__control"
        name={categoryName}
        bind:this={checkboxDOMElements[mainIndex]}
        bind:group={selectedCategoryValues}
        value={listItem.key}
        aria-checked={listItem.checked}
        on:change={() => mainCategory(mainIndex)} />
      <label for={listItem.key}>
        {formatLabel(listItem.displayName, listItem.docCount)}
      </label>
    </div>
    {#if (!hasJS || listItem.checked) && listItem.children && listItem.children.length > 0}
      <fieldset class={fieldsetClass} transition:slide|local={{y: 200, duration: 200}}>
        <legend>
          {interpolate(subCategoryLegend, [listItem.displayName.toLowerCase()])}
        </legend>
        {#each listItem.children as subListItem, subListIndex}
          <div
            class="form-control checkbox narrow"
            class:m-t-xs={subListIndex === 0}
            class:m-t-xxs={subListIndex > 0}>
            <input
              id={subListItem.key}
              type="checkbox"
              name={subCategoryName}
              class="input__control"
              value={subListItem.key}
              aria-checked={subListItem.checked}
              bind:group={selectedSubCategoryValues}
              on:change={() => subCategory(mainIndex, subListItem.key)} />
            <label for={subListItem.key}>
              {formatLabel(subListItem.displayName, subListItem.docCount)}
            </label>
          </div>
        {/each}
      </fieldset>
    {/if}
  {/each}
</fieldset>
