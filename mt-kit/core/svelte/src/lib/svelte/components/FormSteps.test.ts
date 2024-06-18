import { getByText, render } from '@testing-library/svelte'
import FormSteps from './FormSteps.svelte'

describe('FormSteps', () => {
  const componentOptions = {
    currentPath: '/om-bekymringen',
    steps: [
      { index: 0, show: true, label: 'Om bekymringen', subPageUrl: '/om-bekymringen' },
      { index: 1, show: true, label: 'Info om deg', subPageUrl: '/info-om-deg' },
      { index: 2, show: true, label: 'Om dyrene', subPageUrl: '/om-dyrene' },
      { index: 2, show: false, label: 'Storfe', subPageUrl: '/storfe' },
      { index: 2, show: false, label: 'Småfe', subPageUrl: '/smaafe' },
      { index: 2, show: false, label: 'Hund', subPageUrl: '/hund' },
      { index: 2, show: false, label: 'Katt', subPageUrl: '/katt' },
      { index: 7, show: true, label: 'Test', subPageUrl: '/test' },
      { index: 8, show: true, label: 'Dokumentasjon', subPageUrl: '/dokumentasjon' },
      { index: 8, show: false, label: 'Test 2', subPageUrl: '/test-2' },
      { index: 10, show: true, label: 'Oppsummering', subPageUrl: '/oppsummering' },
      { index: 11, show: true, label: 'Bekreftelse', subPageUrl: '/bekreftelse' }
    ]
  }

  function expectCurrentAndCompleted(el: HTMLElement, current: boolean, complete: boolean): void {
    expect(el.parentElement.classList.contains('steps__current')).toEqual(current)
    expect(el.parentElement.classList.contains('steps__complete')).toEqual(complete)
  }

  function expectAriaValues(
    bar: HTMLElement,
    min: string,
    max: string,
    now: string,
    pageTitle: string
  ) {
    expect(bar.getAttribute('aria-valuemax')).toEqual(max)
    expect(bar.getAttribute('aria-valuemin')).toEqual(min)
    expect(bar.getAttribute('aria-valuenow')).toEqual(now)
    const attribute = bar.getAttribute('aria-valuetext')

    const searchString = `${pageTitle}, Steg: ${now} av ${max}`
    expect(attribute.includes(searchString)).toEqual(true)
  }
  test('Renders Om bekymringen', (): void => {
    const { getByText, getByLabelText } = render(FormSteps, componentOptions)
    expectCurrentAndCompleted(getByText('Om bekymringen'), true, false)

    expectAriaValues(getByLabelText('Fremdriftslinje for skjema'), '1', '7', '1', 'Om bekymringen')
  })
  test('Renders Info om deg', () => {
    const { getByText, getByLabelText } = render(FormSteps, {
      ...componentOptions,
      currentPath: '/info-om-deg'
    })
    expectCurrentAndCompleted(getByText('Om bekymringen'), false, true)
    expectCurrentAndCompleted(getByText('Info om deg'), true, false)

    expectAriaValues(getByLabelText('Fremdriftslinje for skjema'), '1', '7', '2', 'Info om deg')
  })

  test('Renders Om dyrene', () => {
    const { getByText, getByLabelText } = render(FormSteps, {
      ...componentOptions,
      currentPath: '/om-dyrene'
    })
    expectCurrentAndCompleted(getByText('Om bekymringen'), false, true)
    expectCurrentAndCompleted(getByText('Info om deg'), false, true)
    expectCurrentAndCompleted(getByText('Om dyrene'), true, false)

    expectAriaValues(getByLabelText('Fremdriftslinje for skjema'), '1', '7', '3', 'Om dyrene')
  })
  test('Renders Storfe', () => {
    const { getByText, getByLabelText } = render(FormSteps, {
      ...componentOptions,
      currentPath: '/storfe'
    })
    expectCurrentAndCompleted(getByText('Om bekymringen'), false, true)
    expectCurrentAndCompleted(getByText('Info om deg'), false, true)
    expectCurrentAndCompleted(getByText('Om dyrene'), true, false)

    expectAriaValues(getByLabelText('Fremdriftslinje for skjema'), '1', '7', '3', 'Storfe')
  })
  test('Renders Småfe', () => {
    const { getByText, getByLabelText } = render(FormSteps, {
      ...componentOptions,

      currentPath: '/smaafe'
    })
    expectCurrentAndCompleted(getByText('Om bekymringen'), false, true)
    expectCurrentAndCompleted(getByText('Info om deg'), false, true)
    expectCurrentAndCompleted(getByText('Om dyrene'), true, false)

    expectAriaValues(getByLabelText('Fremdriftslinje for skjema'), '1', '7', '3', 'Småfe')
  })
  test('Renders Hund', () => {
    const { getByText, getByLabelText } = render(FormSteps, {
      ...componentOptions,
      currentPath: '/hund'
    })
    expectCurrentAndCompleted(getByText('Om bekymringen'), false, true)
    expectCurrentAndCompleted(getByText('Info om deg'), false, true)
    expectCurrentAndCompleted(getByText('Om dyrene'), true, false)

    expectAriaValues(getByLabelText('Fremdriftslinje for skjema'), '1', '7', '3', 'Hund')
  })
  test('Renders Katt', () => {
    const { getByText, getByLabelText } = render(FormSteps, {
      ...componentOptions,
      currentPath: '/katt'
    })
    expectCurrentAndCompleted(getByText('Om bekymringen'), false, true)
    expectCurrentAndCompleted(getByText('Info om deg'), false, true)
    expectCurrentAndCompleted(getByText('Om dyrene'), true, false)

    expectAriaValues(getByLabelText('Fremdriftslinje for skjema'), '1', '7', '3', 'Katt')
  })

  test('Renders Test ', () => {
    const { getByText, getByLabelText } = render(FormSteps, {
      ...componentOptions,
      currentPath: '/test'
    })
    expectCurrentAndCompleted(getByText('Om bekymringen'), false, true)
    expectCurrentAndCompleted(getByText('Info om deg'), false, true)
    expectCurrentAndCompleted(getByText('Om dyrene'), false, true)
    expectCurrentAndCompleted(getByText('Test'), true, false)

    expectAriaValues(getByLabelText('Fremdriftslinje for skjema'), '1', '7', '4', 'Test')
  })

  test('Renders Dokumentasjon ', () => {
    const { getByText, getByLabelText } = render(FormSteps, {
      ...componentOptions,
      currentPath: '/dokumentasjon'
    })
    expectCurrentAndCompleted(getByText('Om bekymringen'), false, true)
    expectCurrentAndCompleted(getByText('Info om deg'), false, true)
    expectCurrentAndCompleted(getByText('Om dyrene'), false, true)
    expectCurrentAndCompleted(getByText('Test'), false, true)
    expectCurrentAndCompleted(getByText('Dokumentasjon'), true, false)

    expectAriaValues(getByLabelText('Fremdriftslinje for skjema'), '1', '7', '5', 'Dokumentasjon')
  })
  test('Renders Test 2 ', () => {
    const { getByText, getByLabelText } = render(FormSteps, {
      ...componentOptions,
      currentPath: '/test-2'
    })
    expectCurrentAndCompleted(getByText('Om bekymringen'), false, true)
    expectCurrentAndCompleted(getByText('Info om deg'), false, true)
    expectCurrentAndCompleted(getByText('Om dyrene'), false, true)
    expectCurrentAndCompleted(getByText('Test'), false, true)
    expectCurrentAndCompleted(getByText('Dokumentasjon'), true, false)

    expectAriaValues(getByLabelText('Fremdriftslinje for skjema'), '1', '7', '5', 'Test 2')
  })

  test('Renders Oppsummering ', () => {
    const { getByText, getByLabelText } = render(FormSteps, {
      ...componentOptions,
      currentPath: '/oppsummering'
    })
    expectCurrentAndCompleted(getByText('Om bekymringen'), false, true)
    expectCurrentAndCompleted(getByText('Info om deg'), false, true)
    expectCurrentAndCompleted(getByText('Om dyrene'), false, true)
    expectCurrentAndCompleted(getByText('Test'), false, true)
    expectCurrentAndCompleted(getByText('Dokumentasjon'), false, true)
    expectCurrentAndCompleted(getByText('Oppsummering'), true, false)

    expectAriaValues(getByLabelText('Fremdriftslinje for skjema'), '1', '7', '6', 'Oppsummering')
  })

  test('Renders Bekreftelse ', () => {
    const { getByText, getByLabelText } = render(FormSteps, {
      ...componentOptions,
      currentPath: '/bekreftelse'
    })
    expectCurrentAndCompleted(getByText('Om bekymringen'), false, true)
    expectCurrentAndCompleted(getByText('Info om deg'), false, true)
    expectCurrentAndCompleted(getByText('Om dyrene'), false, true)
    expectCurrentAndCompleted(getByText('Test'), false, true)
    expectCurrentAndCompleted(getByText('Dokumentasjon'), false, true)
    expectCurrentAndCompleted(getByText('Oppsummering'), false, true)
    expectCurrentAndCompleted(getByText('Bekreftelse'), true, false)

    expectAriaValues(getByLabelText('Fremdriftslinje for skjema'), '1', '7', '7', 'Bekreftelse')
  })

  test('Does not break without  ', () => {
    const { getByLabelText } = render(FormSteps, {})
    expect(getByLabelText('Fremdriftslinje for skjema')).toBeInTheDocument()
  })
})
