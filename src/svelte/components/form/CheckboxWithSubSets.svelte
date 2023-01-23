<script lang="ts">
  import {slide} from 'svelte/transition'
  import {createInputAriaDescribedby} from '../../../ts/utils'
  import {CheckboxWithSubSectionsOptions} from '../../../ts/types.d.ts'
  import {onMount} from 'svelte'

  export let params: Array<string> = []
  export let name: string
  export let legend: string
  export let options: Array<CheckboxWithSubSectionsOptions>
  export let categoryName: string = 'category'
  export let subCategoryName: string = 'subCategory'
  export let helpText: string

  let mainValues = (params[categoryName] && params[categoryName].split(',')) ?? []
  let subSectionValues = (params[subCategoryName] && params[subCategoryName].split(',')) ?? []

  $: stringifiedCategories = mainValues.length > 0 ? mainValues.join(',') : []
  $: stringifiedSubCategories = subSectionValues ?? subSectionValues.join(',')
  $: elements = []
  $: states = []

  onMount(() => {
    states = options.map(option => {
      return {
        key: option.key,
        docCount: option.docCount,
        displayName: option.displayName,
        element: {},
        children: option.children?.map(child => ({
          key: child.key,
          docCount: child.docCount,
          displayName: child.displayName,
          checked: subSectionValues.indexOf(child.key) >= 0 ?? false
        }))
      }
    })
  })

  $: if (states) {
    states.map(state => {
      if (state.element) {
        // group up children that is not checked
        const uncheckedChilds = state.children.filter(child => {
          return !child.checked
        })

        if (state.children.length > 0 && uncheckedChilds.length === state.children.length) {
          // if category has children, and they are all unchecked, uncheck the main category as well
          state.element.indeterminate = false
          state.element.checked = false
        } else if (uncheckedChilds.length > 0) {
          state.element.indeterminate = true
        } else {
          state.element.indeterminate = false
        }
      }
    })
  }

  function mainCategory(mainIndex: number): void {
    const childrenKeys = states[mainIndex].children.map(child => child.key)
    if (states[mainIndex].element.checked && childrenKeys.length > 0) {
      subSectionValues = [...subSectionValues, ...childrenKeys]
      states[mainIndex].children = states[mainIndex].children.map(child => ({
        ...child,
        checked: true
      }))
    } else if (childrenKeys.length > 0) {
      subSectionValues = subSectionValues.filter(value => !childrenKeys.includes(value))
      states[mainIndex].children = states[mainIndex].children.map(child => ({
        ...child,
        checked: false
      }))
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
</script>

<fieldset>
  <legend class="border">{legend}</legend>
  {#if helpText}
    <p id="">{helpText}</p>
  {/if}
  {#if states}
    <ol class="list-unstyled">
      {#each states as listItem, mainIndex}
        <li>
          <div class="form-control checkbox narrow">
            <input
              id={listItem.key}
              type="checkbox"
              class="input__control"
              bind:this={states[mainIndex].element}
              bind:group={mainValues}
              value={listItem.key}
              aria-describedby={createInputAriaDescribedby(helpText ? name : undefined)}
              on:change={() => mainCategory(mainIndex)} />
            <label for={listItem.key}>{`${listItem.displayName} (${listItem.docCount})`}</label>
          </div>

          {#if (states[mainIndex].element.checked || states[mainIndex].element.indeterminate) && listItem.children && listItem.children.length > 0}
            <ol
              class="list-unstyled"
              style="padding-left: 20px"
              transition:slide={{y: 200, duration: 200}}>
              {#each listItem.children as subListItem}
                <li>
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
  {/if}
</fieldset>
