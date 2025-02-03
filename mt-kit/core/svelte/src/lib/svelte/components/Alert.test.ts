import { render, type RenderResult } from '@testing-library/svelte'
import Alert from './Alert.test.svelte'

describe('Alert', () => {
  test('Renders - info', () => {
    const res = render(Alert, {
      severity: 'info',
      children: `<p>This is an alert</p>`
    })
    expectTextAndSeverity(res, 'This is an alert', 'info')
  })

  test('Renders - warning', () => {
    const res = render(Alert, {
      severity: 'warning',
      children: `<p>This is an alert</p>`
    })
    expectTextAndSeverity(res, 'This is an alert', 'warning')
  })

  test('Renders - success', () => {
    const res = render(Alert, {
      severity: 'success',
      children: `<p>This is an alert</p>`
    })
    expectTextAndSeverity(res, 'This is an alert', 'success')
  })

  test('Renders - danger', () => {
    const res = render(Alert, {
      severity: 'danger',
      children: `<p>This is an alert</p>`
    })
    expectTextAndSeverity(res, 'This is an alert', 'danger')
  })

  test('Renders with close button', () => {
    const res = render(Alert, {
      severity: 'info',
      children: `<p>This is an alert</p><button type="button" aria-label="Lukk"></button>`
    })
    expect(res.getByLabelText('Lukk')).toBeInTheDocument()
  })
})

function expectTextAndSeverity(res: RenderResult<any>, text: string, severity: string) {
  const child = res.getByText(text)
  expect(child.parentElement.getAttribute('data-color')).toEqual(severity)
}
