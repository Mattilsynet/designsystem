import { fireEvent, render, waitFor } from '@testing-library/svelte'
import CheckboxWithSubSets from './CheckboxWithSubSets.svelte'
import type { CheckboxWithSubSectionsOptions } from '../../../ts/types'
import { vi } from 'vitest'

describe('Checkbox with subsets', () => {
  /**
   * Fix so svelte-transitions don´t get stuck in transition,
   * i.e. never completely hide element, when running tests
   * Ref: https://github.com/testing-library/svelte-testing-library/issues/206#issuecomment-1470158576
   */
  beforeEach(() => {
    vi.stubGlobal('requestAnimationFrame', fn => {
      return window.setTimeout(() => fn(Date.now()), 16)
    })
  })

  afterEach(() => {
    vi.unstubAllGlobals()
  })

  const level1Legend = 'Checkbox with subsets'
  const options = [
    {
      key: 'dyr',
      displayName: 'Dyr',
      docCount: 49,
      children: [
        {
          key: 'dyr/produksjonsdyr',
          displayName: 'Produksjonsdyr',
          docCount: 38,
          children: []
        },
        {
          key: 'dyr/dyresykdommer',
          displayName: 'Dyresykdommer',
          docCount: 2,
          children: []
        },
        {
          key: 'dyr/kjaeledyr',
          displayName: 'Kjæledyr',
          docCount: 1,
          children: []
        }
      ]
    },
    {
      key: 'fisk-og-akvakultur',
      displayName: 'Fisk og akvakultur',
      docCount: 1,
      children: [
        {
          key: 'fisk-og-akvakultur/fiskesykdommer',
          displayName: 'Fiskesykdommer',
          docCount: 1,
          children: []
        }
      ]
    },
    {
      key: 'mat',
      displayName: 'Mat',
      docCount: 3,
      children: [
        {
          key: 'mat/import-av-mat',
          displayName: 'Import av mat',
          docCount: 1,
          children: [
            {
              key: 'mat/import-av-mat/kommersiell-import',
              displayName: 'Kommersiell import',
              docCount: 1,
              children: []
            }
          ]
        }
      ]
    },
    {
      key: 'kosmetikk',
      displayName: 'Kosmetikk',
      docCount: 2,
      children: []
    }
  ]
  const optionsName = 'themes'

  test('Renders list of checkboxes with selected', async () => {
    const { getByText, getByLabelText, queryByText } = render(CheckboxWithSubSets, {
      options: { children: addChecked(['dyr'], options) },
      level1Legend,
      transitionSlide: { y: 200, duration: 0 }
    })
    expect(getByText(level1Legend)).toBeInTheDocument()
    expect(getByText(`${options[0].displayName} (${options[0].docCount})`)).toBeInTheDocument()
    expect(getByText(`${options[1].displayName} (${options[1].docCount})`)).toBeInTheDocument()

    expect(
      getByText(`${options[0].children[0].displayName} (${options[0].children[0].docCount})`)
    ).toBeInTheDocument()

    const animal = getByLabelText(`${options[0].displayName} (${options[0].docCount})`)
    expect(animal.checked).toEqual(true)
    const produksjonsdyr = getByLabelText(
      `${options[0].children[0].displayName} (${options[0].children[0].docCount})`
    )
    expect(produksjonsdyr).toBeVisible()
    await fireEvent.click(animal)
    expect(animal.checked).toEqual(false)

    await waitFor(async () => {
      const actual = queryByText(
        `${options[0].children[0].displayName} (${options[0].children[0].docCount})`
      )
      expect(actual).toBeNull()
    })
  })

  test('Renders subsets of checkboxes', async () => {
    const { getByText, getByLabelText, queryByText } = render(CheckboxWithSubSets, {
      options: { children: addChecked(['dyr'], options) },
      level1Legend
    })
    expect(getByText(`${options[0].displayName} (${options[0].docCount})`)).toBeInTheDocument()
    const animal = getByLabelText(`${options[0].displayName} (${options[0].docCount})`)
    expect(animal.checked).toEqual(true)
    await fireEvent.click(animal)
    expect(animal.checked).toEqual(false)

    await waitFor(() => {
      expect(
        queryByText(`${options[0].children[0].displayName} (${options[0].children[0].docCount})`)
      ).not.toBeInTheDocument()
    })
  })

  test('Check checked checkboxes', async () => {
    const { getByLabelText } = render(CheckboxWithSubSets, {
      options: { children: addChecked(['dyr', 'dyr/produksjonsdyr'], options) },
      level1Legend,
      optionsName
    })
    const mainCategory = getByLabelText(`${options[0].displayName} (${options[0].docCount})`)
    expect(mainCategory).toBeChecked()
    expect(mainCategory.getAttribute('id')).toContain(options[0].key)
    expect(mainCategory.getAttribute('id')).toContain(optionsName)

    const subCategory = getByLabelText(
      `${options[0].children[0].displayName} (${options[0].children[0].docCount})`
    )
    expect(subCategory).toBeChecked()
    expect(subCategory.getAttribute('id')).toContain(options[0].children[0].key)
    expect(subCategory.getAttribute('id')).toContain(optionsName)
    expect(subCategory.getAttribute('id')).not.toEqual(mainCategory.getAttribute('id'))
  })

  test('Test that subcategories are unchecked when main category is unchecked', async () => {
    const { getByLabelText, queryByLabelText } = render(CheckboxWithSubSets, {
      options: { children: addChecked(['dyr', 'dyr/produksjonsdyr'], options) },
      level1Legend
    })

    const mainCategoryCheckbox = getByLabelText(
      `${options[0].displayName} (${options[0].docCount})`
    )
    const subCategoryCheckbox = getByLabelText(
      `${options[0].children[0].displayName} (${options[0].children[0].docCount})`
    )

    expect(mainCategoryCheckbox).toBeChecked()
    expect(subCategoryCheckbox).toBeInTheDocument()
    expect(subCategoryCheckbox).toBeChecked()

    // close main category
    await fireEvent.click(mainCategoryCheckbox)

    expect(mainCategoryCheckbox).not.toBeChecked()

    await waitFor(() => {
      const actual = queryByLabelText(
        `${options[0].children[0].displayName} (${options[0].children[0].docCount})`
      )
      expect(actual).not.toBeInTheDocument()
    })

    const main = getByLabelText(`${options[0].displayName} (${options[0].docCount})`)
    // open main category
    await fireEvent.click(main)
    expect(main).toBeChecked()

    const sub = getByLabelText(
      `${options[0].children[0].displayName} (${options[0].children[0].docCount})`
    )
    expect(sub).toBeInTheDocument()
    expect(sub).not.toBeChecked()
  })

  test('Test variation: secondary ', async () => {
    // test that class is present in variation secondary
    const { queryAllByText } = render(CheckboxWithSubSets, {
      options: { children: addChecked(['dyr'], options) },
      level1Legend,
      level2Legend: 'Ønsker du å velge bare spesifikke tema?',
      variation: 'secondary'
    })
    const legendElement = queryAllByText('Ønsker du å velge bare spesifikke tema?')
    expect(legendElement.length > 0).toEqual(true)
    expect(legendElement[0].parentElement).toHaveClass('checkbox-subsets--secondary')
  })

  test('Checks all ', async () => {
    const { getByLabelText } = render(CheckboxWithSubSets, {
      options: { key: 'test', children: [...options] },
      level1Legend,
      level2Legend: 'Ønsker du å velge bare spesifikke tema?',
      variation: 'secondary',
      hasCheckAll: true,
      checkAllLabel: 'Velg alle'
    })
    const selectAll = getByLabelText('Velg alle')
    expect(selectAll).toBeInTheDocument()
    expect(selectAll).not.toBeChecked()
    const dyr = getByLabelText('Dyr (49)')
    expect(dyr).not.toBeChecked()

    await fireEvent.change(selectAll, { target: { checked: true } })
    const dyr1 = getByLabelText('Dyr (49)')
    expect(dyr1).toBeInTheDocument()
    expect(dyr1).toBeChecked()
    const food = getByLabelText('Mat (3)')
    expect(food).toBeInTheDocument()
    expect(food).toBeChecked()
    const fish = getByLabelText('Fisk og akvakultur (1)')
    expect(fish).toBeInTheDocument()
    expect(fish).toBeChecked()

    await fireEvent.change(selectAll, { target: { checked: false } })
    const dyr2 = getByLabelText('Dyr (49)')
    expect(dyr2).toBeInTheDocument()
    expect(dyr2).not.toBeChecked()
    const food1 = getByLabelText('Mat (3)')
    expect(food1).toBeInTheDocument()
    expect(food1).not.toBeChecked()
    const fish1 = getByLabelText('Fisk og akvakultur (1)')
    expect(fish1).toBeInTheDocument()
    expect(fish1).not.toBeChecked()
  })

  test('Checks sub theme', async () => {
    const { getByLabelText } = render(CheckboxWithSubSets, {
      options: { key: 'all', children: [...options] },
      level1Legend,
      level2Legend: 'Ønsker du å velge bare spesifikke tema?',
      variation: 'secondary',
      hasCheckAll: true,
      checkAllLabel: 'Velg alle'
    })

    const checkAll = getByLabelText('Velg alle')
    expect(checkAll).not.toBeChecked()
    await fireEvent.change(checkAll, { target: { checked: true } })
    expect(checkAll).toBeChecked()
    const produksjonsdyr = getByLabelText('Produksjonsdyr (38)')
    expect(produksjonsdyr).toBeInTheDocument()
    expect(produksjonsdyr).not.toBeChecked()
    await fireEvent.change(produksjonsdyr, { target: { checked: true } })
    const produksjonsdyr1 = getByLabelText('Produksjonsdyr (38)')
    expect(produksjonsdyr1).toBeChecked()
    const dyr1 = getByLabelText('Dyr (49)')
    expect(dyr1).toBeInTheDocument()
    expect(dyr1).toBeChecked()
  })

  test('Uncheck theme', async () => {
    const { getByLabelText } = render(CheckboxWithSubSets, {
      options: { key: 'all', checked: false, children: [...options] },
      level1Legend,
      level2Legend: 'Ønsker du å velge bare spesifikke tema?',
      variation: 'secondary',
      hasCheckAll: true,
      checkAllLabel: 'Velg alle'
    })

    const checkAll = getByLabelText('Velg alle')
    expect(checkAll).not.toBeChecked()
    await fireEvent.change(checkAll, { target: { checked: true } })
    expect(checkAll).toBeChecked()

    const dyr1 = getByLabelText('Dyr (49)')
    expect(dyr1).toBeInTheDocument()
    expect(dyr1).toBeChecked()

    await fireEvent.change(dyr1, { target: { checked: false } })
    expect(getByLabelText('Dyr (49)')).not.toBeChecked()
    expect(getByLabelText('Velg alle')).not.toBeChecked()
    expect(getByLabelText('Fisk og akvakultur (1)')).toBeChecked()
    expect(getByLabelText('Mat (3)')).toBeChecked()
  })

  test('Initital all checked', async () => {
    const { getByLabelText } = render(CheckboxWithSubSets, {
      options: {
        key: 'all',
        checked: true,
        children: options.map(o => {
          return {
            ...o,
            checked: true
          }
        })
      },
      level1Legend,
      level2Legend: 'Ønsker du å velge bare spesifikke tema?',
      variation: 'secondary',
      hasCheckAll: true,
      checkAllLabel: 'Velg alle'
    })

    const checkAll = getByLabelText('Velg alle')
    expect(checkAll).toBeChecked()

    const dyr1 = getByLabelText('Dyr (49)')
    expect(dyr1).toBeInTheDocument()
    expect(dyr1).toBeChecked()
    expect(getByLabelText('Fisk og akvakultur (1)')).toBeChecked()
    expect(getByLabelText('Mat (3)')).toBeChecked()
  })

  test('not initial check when no children', async () => {
    const { getByLabelText } = render(CheckboxWithSubSets, {
      options: { key: 'test', checked: false, children: [] },
      level1Legend,
      level2Legend: 'Ønsker du å velge bare spesifikke tema?',
      variation: 'secondary',
      hasCheckAll: true,
      checkAllLabel: 'Velg alle',
      checkAllValue: 'all'
    })
    const checkAll = getByLabelText('Velg alle')
    expect(checkAll).not.toBeChecked()
    await fireEvent.change(checkAll, { target: { checked: true } })
    expect(checkAll).toBeChecked()
  })
})
function addChecked(keys: Array<string>, options: Array<CheckboxWithSubSectionsOptions>) {
  return options.map(opt => {
    const mappedChildren = opt.children?.map(child => {
      if (keys.indexOf(child.key) > -1) {
        return {
          ...child,
          checked: true
        }
      }
      return child
    })
    const filtered = keys.filter(key => key === opt.key)
    if (filtered[0]) {
      return {
        ...opt,
        checked: true,
        children: mappedChildren
      }
    }
    return { ...opt, children: mappedChildren }
  })
}
