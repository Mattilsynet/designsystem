import { getByText, render } from '@testing-library/svelte'
import FormSteps from './FormSteps.svelte'

describe('FormSteps', () => {
  const componentOptions = {
    completed: 0,
    steps: [
      { index: 0, show: true, label: 'Om bekymringen' },
      { index: 1, show: true, label: 'Info om deg' },
      { index: 2, show: true, label: 'Om dyrene' },
      { index: 2, show: false, label: 'Storfe' },
      { index: 2, show: false, label: 'Småfe' },
      { index: 2, show: false, label: 'Hund' },
      { index: 2, show: false, label: 'Katt' },
      { index: 7, show: true, label: 'Test' },
      { index: 8, show: true, label: 'Dokumentasjon' },
      { index: 8, show: false, label: 'Test 2' },
      { index: 10, show: true, label: 'Oppsummering' },
      { index: 11, show: true, label: 'Bekreftelse' }
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
    expect(
      bar.getAttribute('aria-valuetext').includes(`${pageTitle}, Steg: ${now} av ${max}`)
    ).toEqual(true)
  }
  test('Renders Om bekymringen', (): void => {
    const { getByText, getByLabelText } = render(FormSteps, componentOptions)
    expectCurrentAndCompleted(getByText('Om bekymringen'), true, false)

    expectAriaValues(getByLabelText('Fremdriftslinje for skjema'), '1', '7', '1', 'Om bekymringen')
  })
  test('Renders Info om deg', () => {
    const { getByText, getByLabelText } = render(FormSteps, { ...componentOptions, completed: 1 })
    expectCurrentAndCompleted(getByText('Om bekymringen'), false, true)
    expectCurrentAndCompleted(getByText('Info om deg'), true, false)

    expectAriaValues(getByLabelText('Fremdriftslinje for skjema'), '1', '7', '2', 'Info om deg')
  })

  test('Renders Om dyrene', () => {
    const { getByText, getByLabelText } = render(FormSteps, { ...componentOptions, completed: 2 })
    expectCurrentAndCompleted(getByText('Om bekymringen'), false, true)
    expectCurrentAndCompleted(getByText('Info om deg'), false, true)
    expectCurrentAndCompleted(getByText('Om dyrene'), true, false)

    expectAriaValues(getByLabelText('Fremdriftslinje for skjema'), '1', '7', '3', 'Om dyrene')
  })
  test('Renders Storfe', () => {
    const { getByText, getByLabelText } = render(FormSteps, { ...componentOptions, completed: 3 })
    expectCurrentAndCompleted(getByText('Om bekymringen'), false, true)
    expectCurrentAndCompleted(getByText('Info om deg'), false, true)
    expectCurrentAndCompleted(getByText('Om dyrene'), true, false)

    expectAriaValues(getByLabelText('Fremdriftslinje for skjema'), '1', '7', '3', 'Om dyrene')
  })
  test('Renders Småfe', () => {
    const { getByText, getByLabelText } = render(FormSteps, { ...componentOptions, completed: 4 })
    expectCurrentAndCompleted(getByText('Om bekymringen'), false, true)
    expectCurrentAndCompleted(getByText('Info om deg'), false, true)
    expectCurrentAndCompleted(getByText('Om dyrene'), true, false)

    expectAriaValues(getByLabelText('Fremdriftslinje for skjema'), '1', '7', '3', 'Om dyrene')
  })
  test('Renders Hund', () => {
    const { getByText, getByLabelText } = render(FormSteps, { ...componentOptions, completed: 5 })
    expectCurrentAndCompleted(getByText('Om bekymringen'), false, true)
    expectCurrentAndCompleted(getByText('Info om deg'), false, true)
    expectCurrentAndCompleted(getByText('Om dyrene'), true, false)

    expectAriaValues(getByLabelText('Fremdriftslinje for skjema'), '1', '7', '3', 'Om dyrene')
  })
  test('Renders Katt', () => {
    const { getByText, getByLabelText } = render(FormSteps, { ...componentOptions, completed: 6 })
    expectCurrentAndCompleted(getByText('Om bekymringen'), false, true)
    expectCurrentAndCompleted(getByText('Info om deg'), false, true)
    expectCurrentAndCompleted(getByText('Om dyrene'), true, false)

    expectAriaValues(getByLabelText('Fremdriftslinje for skjema'), '1', '7', '3', 'Om dyrene')
  })

  test('Renders Test ', () => {
    const { getByText, getByLabelText } = render(FormSteps, { ...componentOptions, completed: 7 })
    expectCurrentAndCompleted(getByText('Om bekymringen'), false, true)
    expectCurrentAndCompleted(getByText('Info om deg'), false, true)
    expectCurrentAndCompleted(getByText('Om dyrene'), false, true)
    expectCurrentAndCompleted(getByText('Test'), true, false)

    expectAriaValues(getByLabelText('Fremdriftslinje for skjema'), '1', '7', '4', 'Test')
  })

  test('Renders Dokumentasjon ', () => {
    const { getByText, getByLabelText } = render(FormSteps, { ...componentOptions, completed: 8 })
    expectCurrentAndCompleted(getByText('Om bekymringen'), false, true)
    expectCurrentAndCompleted(getByText('Info om deg'), false, true)
    expectCurrentAndCompleted(getByText('Om dyrene'), false, true)
    expectCurrentAndCompleted(getByText('Test'), false, true)
    expectCurrentAndCompleted(getByText('Dokumentasjon'), true, false)

    expectAriaValues(getByLabelText('Fremdriftslinje for skjema'), '1', '7', '5', 'Dokumentasjon')
  })
  test('Renders Test 2 ', () => {
    const { getByText, getByLabelText } = render(FormSteps, { ...componentOptions, completed: 9 })
    expectCurrentAndCompleted(getByText('Om bekymringen'), false, true)
    expectCurrentAndCompleted(getByText('Info om deg'), false, true)
    expectCurrentAndCompleted(getByText('Om dyrene'), false, true)
    expectCurrentAndCompleted(getByText('Test'), false, true)
    expectCurrentAndCompleted(getByText('Dokumentasjon'), true, false)

    expectAriaValues(getByLabelText('Fremdriftslinje for skjema'), '1', '7', '5', 'Dokumentasjon')
  })

  test('Renders Oppsummering ', () => {
    const { getByText, getByLabelText } = render(FormSteps, { ...componentOptions, completed: 10 })
    expectCurrentAndCompleted(getByText('Om bekymringen'), false, true)
    expectCurrentAndCompleted(getByText('Info om deg'), false, true)
    expectCurrentAndCompleted(getByText('Om dyrene'), false, true)
    expectCurrentAndCompleted(getByText('Test'), false, true)
    expectCurrentAndCompleted(getByText('Dokumentasjon'), false, true)
    expectCurrentAndCompleted(getByText('Oppsummering'), true, false)

    expectAriaValues(getByLabelText('Fremdriftslinje for skjema'), '1', '7', '6', 'Oppsummering')
  })

  test('Renders Bekreftelse ', () => {
    const { getByText, getByLabelText } = render(FormSteps, { ...componentOptions, completed: 11 })
    expectCurrentAndCompleted(getByText('Om bekymringen'), false, true)
    expectCurrentAndCompleted(getByText('Info om deg'), false, true)
    expectCurrentAndCompleted(getByText('Om dyrene'), false, true)
    expectCurrentAndCompleted(getByText('Test'), false, true)
    expectCurrentAndCompleted(getByText('Dokumentasjon'), false, true)
    expectCurrentAndCompleted(getByText('Oppsummering'), false, true)
    expectCurrentAndCompleted(getByText('Bekreftelse'), true, false)

    expectAriaValues(getByLabelText('Fremdriftslinje for skjema'), '1', '7', '7', 'Bekreftelse')
  })
})
