/**
 * @jest-environment jsdom
 */
import {render} from '@testing-library/svelte'
import CheckboxWithSubSets from './CheckboxWithSubSets.svelte'

describe('Checkbox with subsets', () => {
  const title = 'Checkbox with subsets'
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

  test('Renders', () => {
    const {getByText} = render(CheckboxWithSubSets, {
      options,
      title
    })
    expect(getByText(title)).toBeInTheDocument()
    expect(getByText(`${options[0].displayName} (${options[0].docCount})`)).toBeInTheDocument()
    expect(getByText(`${options[1].displayName} (${options[1].docCount})`)).toBeInTheDocument()
    /*expect(
      getByText(`${options[1].children[0].displayName} (${options[1].children[0].docCount})`)
    ).toBeInTheDocument()*/
    //const fieldSet = getByRole('checkbox', {value: 'dyr'})
    //expect(fieldSet?.getAttribute('aria-required')).toEqual('true')
    //expect(fieldSet?.getAttribute('aria-describedby')).toEqual('name-hint')
  })

  /*test('Renders optional in label if not required', () => {
    const err = {fieldName: name, message: 'This is the errormessage'}
    const {getByText} = render(Checkbox, {
      value,
      error: err,
      name,
      label,
      helpText,
      options
    })
    expect(getByText(/valgfitt felt/)).toBeInTheDocument()
  })

  test('Renders error', () => {
    const err = {fieldName: name, message: 'This is the errormessage'}
    const {getByText, getByRole} = render(Checkbox, {
      value,
      error: err,
      name,
      label,
      helpText,
      options
    })
    expect(getByText(/This is the errormessage/)).toBeInTheDocument()
    const fieldSet = getByRole('checkbox', {name: 'Ja'})
    expect(fieldSet.getAttribute('aria-describedby')).toEqual('name-hint name-error')
  })

  test('Renders without helptext', () => {
    const {getByRole} = render(Checkbox, {
      value,
      error: undefined,
      name,
      label,
      helpText: undefined,
      options
    })
    const fieldSet = getByRole('checkbox', {name: 'Ja'})
    expect(fieldSet.getAttribute('aria-describedby')).toBeNull()
  })*/
})
