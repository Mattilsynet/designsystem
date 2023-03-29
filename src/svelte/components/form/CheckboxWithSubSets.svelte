<script lang="ts">
  import {slide} from 'svelte/transition'
  import {createInputAriaDescribedby} from '../../../ts/utils'
  import {onMount} from 'svelte'
  import type {CheckboxWithSubSectionsOptions} from '../../../ts/types'

  export let params: Record<string, string> = {}
  export let name: string
  export let legend: string
  export let options: Array<CheckboxWithSubSectionsOptions>
  export let categoryName = 'kategori'
  export let subCategoryName = 'underkategori'
  export let helpText: string | undefined
  export let tabIndex = 0
  let hasJS = false
  let mainValues = params[categoryName] as Array<string>
  let subSectionValues = params[subCategoryName] as Array<string>

  $: states = []
  let checkboxDOMElements = []

  $: if (options) {
    states = mapOptionsToState(options)
  }

  onMount(() => {
    states = mapOptionsToState(options)
    hasJS = true
  })

  function mapOptionsToState(
    opts: Array<CheckboxWithSubSectionsOptions>
  ): Array<CheckboxWithSubSectionsStates> {
    return opts.map(option => {
      return {
        key: option.key,
        docCount: option.docCount,
        displayName: option.displayName,
        checked: mainValues ? mainValues.filter(val => val === option.key).length > 0 : false,
        children: option.children?.map(child => ({
          key: child.key,
          docCount: child.docCount,
          displayName: child.displayName,
          checked: subSectionValues.indexOf(child.key) >= 0 ?? false
        }))
      }
    })
  }

  function mainCategory(mainIndex: number): void {
    states[mainIndex].checked = !states[mainIndex].checked
    if (!states[mainIndex].checked) {
      states[mainIndex].children.forEach(child => {
        subSectionValues = subSectionValues.filter(value => !child.key.includes(value))
      })
    }
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

  export const checkboxes = {
    reset() {
      mainValues = []
      subSectionValues = []
    }
  }

  interface CheckboxWithSubSectionsStates {
    key: string
    docCount: number
    displayName: string
    checked: boolean
    children?: Array<CheckboxWithSubSectionsStates>
  }
</script>

<fieldset>
  <legend class="border">{legend}</legend>
  {#if helpText}
    <p>{helpText}</p>
  {/if}
  <ol class="list-unstyled">
    {#each states as listItem, mainIndex}
      <li>
        <div class="form-control checkbox narrow">
          <input
            id={listItem.key}
            type="checkbox"
            class="input__control"
            name={categoryName}
            bind:this={checkboxDOMElements[mainIndex]}
            bind:group={mainValues}
            value={listItem.key}
            aria-describedby={createInputAriaDescribedby(helpText ? name : undefined)}
            aria-checked={listItem.checked}
            on:change={() => mainCategory(mainIndex)} />
          <label for={listItem.key}>{`${listItem.displayName} (${listItem.docCount})`}</label>
        </div>

        {#if !hasJS || (states[mainIndex].checked && listItem.children && listItem.children.length > 0)}
          <ol class="list-unstyled" transition:slide={{y: 200, duration: 200}}>
            {#each listItem.children as subListItem}
              <li class="p-l-xs">
                <div class="form-control checkbox narrow">
                  <input
                    id={subListItem.key}
                    type="checkbox"
                    name={subCategoryName}
                    class="input__control"
                    value="{listItem.key}/{subListItem.key}"
                    aria-describedby={createInputAriaDescribedby(helpText ? name : undefined)}
                    aria-checked={subListItem.checked}
                    bind:group={subSectionValues}
                    on:change={() => subCategory(mainIndex, subListItem.key)} />
                  <label for={subListItem.key}>
                    {`${subListItem.displayName} (${subListItem.docCount})`}
                  </label>
                </div>
              </li>
            {/each}
          </ol>
        {/if}
      </li>
    {/each}
  </ol>
</fieldset>
