import { render, type RenderResult } from '@testing-library/svelte'
import Alert from './Alert.test.svelte'

describe('Alert', () => {
  test('Renders - info', () => {
    const res = render(Alert, {
      'data-color': 'info',
      children: `<p>This is an alert</p>`
    })
    expectTextAndSeverity(res, 'This is an alert', 'info')
  })

  test('Renders - warning', () => {
    const res = render(Alert, {
      'data-color': 'warning',
      children: `<p>This is an alert</p>`
    })
    expectTextAndSeverity(res, 'This is an alert', 'warning')
  })

  test('Renders - success', () => {
    const res = render(Alert, {
      'data-color': 'success',
      children: `<p>This is an alert</p>`
    })
    expectTextAndSeverity(res, 'This is an alert', 'success')
  })

  test('Renders - danger', () => {
    const res = render(Alert, {
      'data-color': 'danger',
      children: `<p>This is an alert</p>`
    })
    expectTextAndSeverity(res, 'This is an alert', 'danger')
  })

  test('Renders with close button', () => {
    const res = render(Alert, {
      'data-color': 'info',
      children: `<p>This is an alert</p><button type="button" aria-label="Lukk"></button>`
    })
    expect(res.getByLabelText('Lukk')).toBeInTheDocument()
  })
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function expectTextAndSeverity(res: RenderResult<any>, text: string, color: string) {
  const child = res.getByText(text)
  expect(child.parentElement?.getAttribute('data-color')).toEqual(color)
}
