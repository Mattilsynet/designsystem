import { render, screen, fireEvent } from '@testing-library/svelte'
import Combobox from './Combobox.test.svelte'

describe('Combobox', () => {
  const props = {
    options: {
      inputLabel: 'Velg et tall',
      inputName: 'input-test',
      inputIsRequired: false,
      inputError: undefined,
      inputHelpText: 'Hjelpetekst',
      inputInputClass: '',
      inputFallbackLabel: 'Gateadressse',
      hiddenErrorText: 'Feilmelding',
      formInProgressAriaLabel: 'Søker'
    }
  }
  test('Renders - select', async () => {
    const { getByLabelText, getByText } = render(Combobox, props)
    const combobox = getByLabelText(/Velg et tall/)
    expect(combobox).toBeInTheDocument()
    const optional = getByText('Valgfritt')
    expect(optional).toBeInTheDocument()
    const helpText = getByText('Hjelpetekst')
    expect(helpText).toBeInTheDocument()
    await fireEvent.focus(combobox)
    expect(combobox.getAttribute('aria-expanded')).toBe('true')
    await fireEvent.click(screen.getByText('en'))
    expect(combobox.value).toEqual('en')
    expect(combobox.getAttribute('aria-expanded')).toBe('false')
  })

  test('Renders - show error', async () => {
    const { getByText } = render(Combobox, {
      options: {
        ...props.options,
        inputError: { key: 'input-test', message: 'Du må velge et tall' }
      }
    })
    const error = getByText('Du må velge et tall')
    expect(error).toBeInTheDocument()
    const hidden = getByText(/Feilmelding/)
    expect(hidden).toBeInTheDocument()
  })

  test('Renders - loading', async () => {
    const { getByLabelText } = render(Combobox, {
      options: {
        ...props.options,
        isLoading: true
      }
    })
    const loading = getByLabelText('Søker')
    expect(loading).toBeInTheDocument()
  })
})
