/**
 * @jest-environment jsdom
 */

import {fireEvent, render} from '@testing-library/svelte'
import MultiSelect from './MultiSelect.svelte'

describe('MultiSelect', () => {
  const componentOptions = {
    name: 'country',
    label: 'Velg land',
    labelId: undefined,
    error: undefined,
    helpText: 'Hjelpetekst her',
    isRequired: true,
    preferredOptions: [
      {value: 'NO', text: 'Norge', ariaLabel: 'Fjern Norge fra listen'},
      {value: 'SE', text: 'Sverige', ariaLabel: 'Fjern Sverig fra listen'},
      {value: 'FI', text: 'Finland', ariaLabel: 'Fjern Finland fra listen'}
    ],
    options: [
      {value: 'DA', text: 'Danmark', ariaLabel: 'Fjern Danmark fra listen'},
      {value: 'FI', text: 'Finland', ariaLabel: 'Fjern Finland fra listen'},
      {value: 'FR', text: 'Frankrike', ariaLabel: 'Fjern Frankrike fra listen'},
      {value: 'NO', text: 'Norge', ariaLabel: 'Fjern Norge fra listen'},
      {value: 'PT', text: 'Portugal', ariaLabel: 'Fjern Portugal fra listen'},
      {value: 'ES', text: 'Spania', ariaLabel: 'Fjern Spania fra listen'},
      {value: 'SE', text: 'Sverige', ariaLabel: 'Fjern Sverige fra listen'},
      {value: 'KR', text: 'Sør Korea', ariaLabel: 'Fjern Sør Korea fra listen'},
      {value: 'DE', text: 'Tyskland', ariaLabel: 'Fjern Tyskland fra listen'}
    ],
    values: []
  }

  test('Renders', () => {
    const {getByText} = render(MultiSelect, {props: componentOptions})
    const byText = getByText('Velg land')
    expect(byText).toBeInTheDocument()
  })

  test('Interact with multiselect', async () => {
    const {getByLabelText, getAllByText} = render(MultiSelect, {
      props: componentOptions
    })
    const select = getByLabelText('Velg land')
    expect(select).toBeInTheDocument()

    //select Portugal
    await fireEvent.change(select, {target: {value: 'PT'}})
    const selected = getAllByText('Portugal')
    expect(selected[0].tagName).toEqual('BUTTON')
    expect(selected[1].tagName).toEqual('OPTION')

    //select Norge
    await fireEvent.change(select, {target: {value: 'NO'}})
    const selected2 = getAllByText('Norge')
    expect(selected2[0].tagName).toEqual('BUTTON')

    //select Frankrike
    await fireEvent.change(select, {target: {value: 'FR'}})
    const selected3 = getAllByText('Frankrike')
    expect(selected3[0].tagName).toEqual('BUTTON')

    //remove Norge
    await fireEvent.click(selected2[0])
    const norge = getAllByText('Norge')
    expect(norge[0].tagName).toEqual('OPTION')
    expect(getAllByText('Frankrike')[0].tagName).toEqual('BUTTON')
    expect(getAllByText('Portugal')[0].tagName).toEqual('BUTTON')
  })
})
