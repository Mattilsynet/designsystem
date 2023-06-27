/**
 * @jest-environment jsdom
 */
import {render} from '@testing-library/svelte'
import Fieldset from './Fieldset.svelte'

describe('Fieldset', () => {
  const legend = 'Velg noe'
  const error = {
    key: 'fieldname-id',
    message: 'This is the errormessage'
  }

  const hiddenErrorText = false

  test('Renders', () => {
    const {getByText, getByTestId} = render(Fieldset, {
      legend,
      error,
      hiddenErrorText
    })
    const legendElement = getByText(legend)
    expect(legendElement).toBeInTheDocument()
    expect(legendElement?.getAttribute('class')).toEqual(`h2`)
    expect(getByText(error.message)).toBeInTheDocument()
    const fieldSet = getByTestId('fieldset')
    expect(fieldSet?.getAttribute('aria-describedby')).toEqual(`${error.key}-error`)
  })
})
