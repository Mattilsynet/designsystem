<script lang="ts">
  import { slide } from 'svelte/transition'
  import { onMount } from 'svelte'
  import type { CheckboxWithSubSectionsOptions } from '../../../ts/types'
  import { interpolate } from '../../../ts/utils'

  let className = ''
  export { className as class }
  export let level1Legend: string
  export let variation: 'primary' | 'secondary' = 'primary'
  export let options: CheckboxWithSubSectionsOptions
  export let optionsName = 'kategori'
  export let hasCheckAll = false
  export let checkAllLabel = 'Velg alle'
  export let level2Legend = ``
  export let level3Legend = ``
  export let helpText: string | undefined
  export let border: boolean = true

  $: fieldsetClass =
    variation === 'primary' ? 'checkbox-subsets--primary' : 'checkbox-subsets--secondary'

  let hasJS = false

  onMount(() => {
    hasJS = true
  })

  function mainCategory(mainIndex: number): void {
    // Uncheck all subcategories if parent main category is unchecked
    if (!options.children[mainIndex].checked) {
      options.children[mainIndex].children.forEach(subCategory => {
        subCategory.checked = false
      })
    }
    if (options.children?.length > 0) {
      options.checked = options.children?.filter(s => s.checked).length === options.children?.length
    }
  }

  function formatLabel(displayName: string, docCount?: number): string {
    return `${displayName} ${docCount ? `(${docCount})` : ''}`
  }

  function toggleCheckedAll(e: Event): void {
    options.children = options.children?.map(state => {
      return {
        ...state,
        checked: e.target.checked
      }
    })
  }
</script>

<fieldset class={`mt-fieldset layout-flex checkbox layout-flex-col ${className}`} style="--gap: 0">
  <legend
    id="legend"
    class="mt-legend form-legend"
    class:border
    class:inclusively-hidden={variation === 'secondary'}>
    {level1Legend}
  </legend>
  {#if helpText}
    <p class="hint">{helpText}</p>
  {/if}
  {#if hasJS && hasCheckAll}
    <div class="form-control checkbox-subsets">
      <input
        id={options.key}
        type="checkbox"
        class="input__control"
        name={optionsName}
        value={options.key}
        bind:checked={options.checked}
        on:change={toggleCheckedAll} />
      <label class="mt-label" for={options.key}>
        {checkAllLabel}
      </label>
    </div>
  {/if}
  {#each options.children || [] as listItem, mainIndex}
    <div class="form-control narrow checkbox-subsets" class:m-t-xxs={mainIndex > 0}>
      <input
        id={listItem.key}
        type="checkbox"
        class="input__control"
        name={optionsName}
        value={listItem.key}
        bind:checked={listItem.checked}
        aria-checked={listItem.checked}
        on:change={() => mainCategory(mainIndex)} />
      <label class="mt-label" for={listItem.key}>
        {formatLabel(listItem.displayName, listItem.docCount)}
      </label>
    </div>
    {#if (!hasJS || listItem.checked) && listItem.children && listItem.children.length > 0}
      <fieldset
        class={`mt-fieldset checkbox checkbox-subsets ${fieldsetClass}`}
        transition:slide|local={{ y: 200, duration: 200 }}>
        {#if level2Legend}
          <legend class="mt-legend">
            {interpolate(level2Legend, [listItem.displayName.toLowerCase()])}
          </legend>
        {/if}
        {#each listItem.children as subListItem, subListIndex}
          <div class="form-control narrow" class:m-t-0={!level2Legend && subListIndex === 0}>
            <input
              id={subListItem.key}
              type="checkbox"
              name={optionsName}
              class="input__control"
              value={subListItem.key}
              bind:checked={subListItem.checked}
              aria-checked={subListItem.checked} />
            <label class="mt-label" for={subListItem.key}>
              {formatLabel(subListItem.displayName, subListItem.docCount)}
            </label>
          </div>
          {#if subListItem.checked && subListItem.children && subListItem.children.length > 0}
            <fieldset
              class={'mt-fieldset checkbox checkbox-subsets--secondary'}
              transition:slide|local={{ y: 200, duration: 200 }}>
              {#if level3Legend}
                <legend class="mt-legend">
                  {interpolate(level3Legend, [subListItem.displayName.toLowerCase()])}
                </legend>
              {/if}
              {#each subListItem.children as subSubListItem, subSubListIndex}
                <div
                  class="form-control narrow"
                  class:m-t-0={!level3Legend && subSubListIndex === 0}>
                  <input
                    id={subSubListItem.key}
                    type="checkbox"
                    name={optionsName}
                    class="input__control"
                    value={subSubListItem.key}
                    bind:checked={subSubListItem.checked}
                    aria-checked={subSubListItem.checked} />
                  <label class="mt-label" for={subSubListItem.key}>
                    {formatLabel(subSubListItem.displayName, subSubListItem.docCount)}
                  </label>
                </div>
              {/each}
            </fieldset>
          {/if}
        {/each}
      </fieldset>
    {/if}
  {/each}
</fieldset>
