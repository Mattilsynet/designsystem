/**
 * @jest-environment jsdom
 */
import {act, fireEvent, render} from '@testing-library/svelte'
import CheckboxWithSubSets from './CheckboxWithSubSets.svelte'
import {tick} from 'svelte'

describe('Checkbox with subsets', () => {
  const legend = 'Checkbox with subsets'
  const options = [
    {
      key: 'dyr',
      displayName: 'Dyr',
      docCount: 49,
      children: [
        {
          key: 'produksjonsdyr',
          displayName: 'Produksjonsdyr',
          docCount: 38,
          children: []
        },
        {
          key: 'dyresykdommer',
          displayName: 'Dyresykdommer',
          docCount: 2,
          children: []
        },
        {
          key: 'kjaeledyr',
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
          key: 'fiskesykdommer',
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
          key: 'import-av-mat',
          displayName: 'Import av mat',
          docCount: 1,
          children: [
            {
              key: 'kommersiell-import',
              displayName: 'Kommersiell import',
              docCount: 1,
              children: []
            }
          ]
        }
      ]
    }
  ]

  const params = {
    kategori: ['dyr'],
    underkategori: []
  }

  const paramsForCheckedTest = {
    kategori: ['dyr'],
    underkategori: ['dyr/produksjonsdyr']
  }

  test('Renders list of checkboxes.', async () => {
    const {getByText} = render(CheckboxWithSubSets, {
      options,
      params,
      legend
    })
    expect(getByText(legend)).toBeInTheDocument()
    expect(getByText(`${options[0].displayName} (${options[0].docCount})`)).toBeInTheDocument()
    expect(getByText(`${options[1].displayName} (${options[1].docCount})`)).toBeInTheDocument()
    const animal = getByText(`${options[0].displayName} (${options[0].docCount})`)
    await fireEvent.click(animal)
    expect(
      getByText(`${options[0].children[0].displayName} (${options[0].children[0].docCount})`)
    ).toBeInTheDocument()
  })

  test('Renders subsets of checkboxes', async () => {
    const {getByText} = render(CheckboxWithSubSets, {
      options,
      params,
      legend
    })
    expect(getByText(`${options[0].displayName} (${options[0].docCount})`)).toBeInTheDocument()
    //const animal = getByText(`${options[0].displayName} (${options[0].docCount})`)
    //await fireEvent.click(animal)
    expect(
      getByText(`${options[0].children[0].displayName} (${options[0].children[0].docCount})`)
    ).toBeInTheDocument()
  })

  test('Check checked checkboxes', async () => {
    const {getByLabelText} = render(CheckboxWithSubSets, {
      options,
      params: paramsForCheckedTest,
      legend
    })
    const mainCategory = getByLabelText(`${options[0].displayName} (${options[0].docCount})`)
    expect(mainCategory).toBeChecked()

    const subCategory = getByLabelText(
      `${options[0].children[0].displayName} (${options[0].children[0].docCount})`
    )
    expect(subCategory).toBeChecked()
  })

  test('Test that subcategories are unchecked when main category is unchecked', async () => {
    const {getByLabelText} = render(CheckboxWithSubSets, {
      options,
      params: paramsForCheckedTest,
      legend
    })

    const mainCategoryCheckbox = getByLabelText(
      `${options[0].displayName} (${options[0].docCount})`
    )
    const subCategoryCheckbox = getByLabelText(
      `${options[0].children[0].displayName} (${options[0].children[0].docCount})`
    )
    expect(mainCategoryCheckbox).toBeChecked()
    expect(subCategoryCheckbox).toBeInTheDocument()

    // close main category
    await fireEvent.click(mainCategoryCheckbox)
    expect(mainCategoryCheckbox).not.toBeChecked()
    expect(mainCategoryCheckbox.getAttribute('aria-checked')).toEqual('false')

    expect(subCategoryCheckbox).not.toBeInTheDocument()
    expect(subCategoryCheckbox.getAttribute('aria-checked')).toEqual('false')

    // open main category
    await fireEvent.click(mainCategoryCheckbox)
    expect(mainCategoryCheckbox).toBeChecked()
    expect(subCategoryCheckbox.getAttribute('aria-checked')).toEqual('false')
  })
})
