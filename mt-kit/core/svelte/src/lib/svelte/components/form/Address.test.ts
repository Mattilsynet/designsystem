import { render, screen, fireEvent } from '@testing-library/svelte'
import userEvent from '@testing-library/user-event'
import Address from './Address.svelte'
import { http, HttpResponse } from 'msw'
import { setupServer } from 'msw/node'

const addressUrl = 'https://ws.geonorge.no/adresser/v1/sok'
const server = setupServer(
  http.get(addressUrl, () => {
    return HttpResponse.json({
      adresser: [
        { adressetekst: 'Testveien 123', postnummer: '0190', poststed: 'Oslo' },
        { adressetekst: 'Testveien 321', postnummer: '0190', poststed: 'Oslo' }
      ]
    })
  })
)
beforeAll(() => {
  server.listen()
})
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe('Addresss', () => {
  const props = {
    streetLabel: 'Søk i gateadresse',
    streetName: 'owner-street',
    streetIsRequired: true,
    streetError: undefined,
    streetHelpText: 'Hjelpetekst',
    streetInputClass: '',
    streetFallbackLabel: 'Gateadressse',
    postalCodeLabel: 'Postnummer',
    postalCodeName: 'owner-postal-code',
    postalCodeIsRequired: true,
    postalCodeError: undefined,
    postalCodeHelpText: 'Hjelpetekst',
    postalCodeInputClass: '',
    loadJs: true,
    hiddenErrorText: 'Feilmelding: ',
    formInProgressAriaLabel: 'Søker...'
  }
  test('Renders - typing', async () => {
    const user = userEvent.setup()
    const { getByLabelText, queryByLabelText } = render(Address, props)
    const street = getByLabelText('Søk i gateadresse')
    expect(street).toBeInTheDocument()
    expect(queryByLabelText('Postnummer')).not.toBeInTheDocument()
    await user.type(street, 'Test')
    await screen.findByLabelText(/Søker/)
    await screen.findByText(/Testveien 123/)
    await fireEvent.click(screen.getByText(/Testveien 123/))
    expect(screen.getByTestId('hidden-street')).toHaveValue('Testveien 123')
    expect(screen.getByTestId('hidden-postal-code')).toHaveValue('0190')
    //resets when user types again
    await user.type(street, 'H')
    expect(screen.getByTestId('hidden-street')).toHaveValue(undefined)
    expect(screen.getByTestId('hidden-postal-code')).toHaveValue(undefined)
    //search again
    await user.type(street, 'Test')
    await screen.findByText(/Testveien 123/)
    await fireEvent.click(screen.getByText(/Testveien 123/))
    expect(screen.getByTestId('hidden-street')).toHaveValue('Testveien 123')
    expect(screen.getByTestId('hidden-postal-code')).toHaveValue('0190')
  })

  test('Renders - error', async () => {
    const { queryByText, getByText } = render(Address, {
      ...props,
      inputError: { key: 'owner-street-input', message: 'Adresse er påkrevd. Skriv inn under' },
      streetError: { key: 'owner-street', message: 'Adresse er påkrevd' },
      postalCodeError: { key: 'owner-postal-code', message: 'Postnummer er påkrevd' }
    })
    const streetError = queryByText('Adresse er påkrevd')
    expect(streetError).not.toBeInTheDocument()
    expect(queryByText('Postnummer er påkrevd')).not.toBeInTheDocument()
    const inputError = getByText('Adresse er påkrevd. Skriv inn under')
    expect(inputError).toBeInTheDocument()
  })

  test('Renders - no results', async () => {
    server.use(
      http.get(addressUrl, () => {
        return HttpResponse.json({
          adresser: []
        })
      })
    )
    const user = userEvent.setup()
    const { getByLabelText, queryByLabelText } = render(Address, props)
    const street = getByLabelText('Søk i gateadresse')
    expect(street).toBeInTheDocument()
    expect(queryByLabelText('Postnummer')).not.toBeInTheDocument()
    await user.type(street, 'Test')
    await screen.findByText(/Ingen resultater/)
  })

  test('Renders - fetch fails', async () => {
    server.use(
      http.get(addressUrl, () => {
        return new HttpResponse(null, { status: 500 })
      })
    )
    const user = userEvent.setup()
    const { getByLabelText, queryByLabelText, getByRole } = render(Address, props)
    const street = getByLabelText('Søk i gateadresse')
    expect(street).toBeInTheDocument()
    expect(queryByLabelText('Postnummer')).not.toBeInTheDocument()
    await user.type(street, 'Test')
    await screen.findByText(/Skriv inn manuelt under/)

    const fallbackStreet = getByLabelText('Gateadressse')
    expect(fallbackStreet).toBeInTheDocument()
    const postalCode = getByLabelText('Postnummer')
    expect(postalCode).toBeInTheDocument()

    const searchStreet = getByRole('combobox')
    await fireEvent.focus(searchStreet)
    await user.type(street, 'T')
    const errorNotDisplayed = await screen.queryByText(/Skriv inn manuelt under/)
    expect(errorNotDisplayed).not.toBeInTheDocument()
    await user.type(street, 'Test')
    const errorDisplayed = await screen.findByText(/Skriv inn manuelt under/)
    expect(errorDisplayed).toBeInTheDocument()
  })

  test('Renders without JS', () => {
    const { getByLabelText } = render(Address, {
      ...props,
      loadJs: false
    })
    expect(getByLabelText('Gateadressse')).toBeInTheDocument()
    expect(getByLabelText('Postnummer')).toBeInTheDocument()
  })
  test('Renders without JS - errors', () => {
    const { getByLabelText, getByText } = render(Address, {
      ...props,
      streetError: { key: 'owner-street', message: 'Adresse er påkrevd' },
      postalCodeError: { key: 'owner-postal-code', message: 'Postnummer er påkrevd' },
      loadJs: false
    })
    expect(getByLabelText('Gateadressse')).toBeInTheDocument()
    expect(getByLabelText('Postnummer')).toBeInTheDocument()
    expect(getByText('Adresse er påkrevd')).toBeInTheDocument()
    expect(getByText('Postnummer er påkrevd')).toBeInTheDocument()
  })
})
