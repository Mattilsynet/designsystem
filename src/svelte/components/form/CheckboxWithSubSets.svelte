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
  export let helpText: string
  export let tabIndex = 0

  let mainValues = ((params[categoryName] && params[categoryName].split(',')) ??
    []) as Array<string>
  let subSectionValues = ((params[subCategoryName] && params[subCategoryName].split(',')) ??
    []) as Array<string>

  $: stringifiedCategories = mainValues.length > 0 ? mainValues.join(',') : []
  $: stringifiedSubCategories = subSectionValues.length ? subSectionValues.join(',') : []
  $: states = []
  let checkboxDOMElements = []

  $: if (options) {
    states = mapOptionsToState(options)
  }

  onMount(() => {
    states = mapOptionsToState(options)
  })

  function mapOptionsToState(opts) {
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
    !states[mainIndex].checked &&
      states[mainIndex].children.forEach(child => {
        subSectionValues = subSectionValues.filter(value => !child.key.includes(value))
      })
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
      stringifiedCategories = ''
      stringifiedSubCategories = ''
    }
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
            bind:this={checkboxDOMElements[mainIndex]}
            bind:group={mainValues}
            value={listItem.key}
            aria-describedby={createInputAriaDescribedby(helpText ? name : undefined)}
            on:change={() => mainCategory(mainIndex)} />
          <label for={listItem.key}>{`${listItem.displayName} (${listItem.docCount})`}</label>
        </div>

        {#if states[mainIndex].checked && listItem.children && listItem.children.length > 0}
          <ol class="list-unstyled" transition:slide={{y: 200, duration: 200}}>
            {#each listItem.children as subListItem}
              <li class="p-l-xs">
                <div class="form-control checkbox narrow">
                  <input
                    id={subListItem.key}
                    type="checkbox"
                    class="input__control"
                    value={subListItem.key}
                    aria-describedby={createInputAriaDescribedby(helpText ? name : undefined)}
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
  <input type="hidden" name={categoryName} bind:value={stringifiedCategories} />
  <input type="hidden" name={subCategoryName} bind:value={stringifiedSubCategories} />
</fieldset>
