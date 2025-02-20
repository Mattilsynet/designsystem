<script lang="ts">
  import { slide } from 'svelte/transition'
  import type { CheckboxWithSubSectionsOptions } from '$lib/ts'
  import { interpolate } from '$lib/ts'
  import { styles } from '@mattilsynet/design'

  interface Props {
    class?: string
    level1Legend: string
    variation?: 'primary' | 'secondary'
    options: CheckboxWithSubSectionsOptions
    optionsName?: string
    hasCheckAll?: boolean
    forceCheckAll?: boolean
    checkAllLabel?: string
    level2Legend?: string
    level3Legend?: string
    helpText?: string
    border?: boolean
    loadJs?: boolean
  }

  let {
    class: className = '',
    level1Legend,
    variation = 'primary',
    options = $bindable(),
    optionsName = 'kategori',
    hasCheckAll = false,
    forceCheckAll = false,
    checkAllLabel = 'Velg alle',
    level2Legend = ``,
    level3Legend = ``,
    helpText,
    loadJs = false
  }: Props = $props()

  let subsetFieldsetClass = $derived(
    variation === 'primary' ? 'checkbox-subsets--primary' : 'checkbox-subsets--secondary'
  )

  function mainCategory(mainIndex: number): void {
    // Uncheck all subcategories if parent main category is unchecked
    if (!options.children?.[mainIndex].checked) {
      options.children?.[mainIndex].children?.forEach(subCategory => {
        subCategory.checked = false
      })
    }
    if (options.children?.length ?? 0 > 0) {
      options.checked = options.children?.filter(s => s.checked).length === options.children?.length
    }
  }

  function formatLabel(displayName: string, docCount?: number): string {
    return `${displayName} ${docCount ? `(${docCount})` : ''}`
  }

  function toggleCheckedAll(e: Event): void {
    const target = e.target as HTMLInputElement
    options.children = options.children?.map(state => {
      return {
        ...state,
        checked: target?.checked
      }
    })
  }
</script>

<fieldset class="{styles.fieldset} {className}">
  <legend id="legend" class:inclusively-hidden={variation === 'secondary'}>
    {level1Legend}
  </legend>
  {#if helpText}
    <p>{helpText}</p>
  {/if}
  {#if (loadJs && hasCheckAll) || forceCheckAll}
    <div class={styles.field}>
      <input
        id={`${optionsName}-${options.key}`}
        type="checkbox"
        class={styles.input}
        name={optionsName}
        value={options.key}
        bind:checked={options.checked}
        onchange={toggleCheckedAll} />
      <label for={`${optionsName}-${options.key}`}>
        {checkAllLabel}
      </label>
    </div>
  {/if}
  {#each options.children || [] as listItem, mainIndex}
    <div class={styles.field} class:m-t-xxs={mainIndex > 0}>
      <input
        id={`${optionsName}-${listItem.key}`}
        type="checkbox"
        class={styles.input}
        name={optionsName}
        value={listItem.key}
        bind:checked={listItem.checked}
        onchange={() => mainCategory(mainIndex)} />
      <label for={`${optionsName}-${listItem.key}`}>
        {formatLabel(listItem.displayName, listItem.docCount)}
      </label>
    </div>
    {#if (!loadJs || listItem.checked) && listItem.children && listItem.children.length > 0}
      <fieldset
        class="{styles.fieldset} checkbox-subsets {subsetFieldsetClass}"
        transition:slide={{ axis: 'y', duration: 200 }}>
        {#if level2Legend}
          <legend>
            {interpolate(level2Legend, [listItem.displayName.toLowerCase()])}
          </legend>
        {/if}
        {#each listItem.children as subListItem, subListIndex}
          <div class={styles.field} class:m-t-xs={level2Legend && subListIndex === 0}>
            <input
              id={`${optionsName}-${subListItem.key}`}
              type="checkbox"
              name={optionsName}
              class={styles.input}
              value={subListItem.key}
              bind:checked={subListItem.checked} />
            <label for={`${optionsName}-${subListItem.key}`}>
              {formatLabel(subListItem.displayName, subListItem.docCount)}
            </label>
          </div>
          {#if (!loadJs || subListItem.checked) && subListItem.children && subListItem.children.length > 0}
            <fieldset
              class="{styles.fieldset} checkbox-subsets--secondary"
              transition:slide={{ axis: 'y', duration: 200 }}>
              {#if level3Legend}
                <legend>
                  {interpolate(level3Legend, [subListItem.displayName.toLowerCase()])}
                </legend>
              {/if}
              {#each subListItem.children as subSubListItem, subSubListIndex}
                <div class={styles.field} class:m-t-xs={level3Legend && subSubListIndex === 0}>
                  <input
                    id={`${optionsName}-${subSubListItem.key}`}
                    type="checkbox"
                    name={optionsName}
                    class={styles.input}
                    value={subSubListItem.key}
                    bind:checked={subSubListItem.checked} />
                  <label for={`${optionsName}-${subSubListItem.key}`}>
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
