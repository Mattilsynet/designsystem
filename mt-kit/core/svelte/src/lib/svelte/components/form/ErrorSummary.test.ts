import { render, screen } from '@testing-library/svelte'
import ErrorSummary from './ErrorSummary.svelte'

describe('ErrorSummary', () => {
  const props = {
    errors: [
      { key: 'field1', message: 'Error message 1' },
      { key: 'field2', message: 'Error message 2' }
    ],
    heading: 'Error Summary',
    linkToFields: true
  }

  test('Renders with errors', async () => {
    render(ErrorSummary, { props })
    expect(screen.getByRole('alert')).toBeInTheDocument()
    expect(screen.getByText('Error Summary')).toBeInTheDocument()
    expect(screen.getByText('Error message 1')).toBeInTheDocument()
    expect(screen.getByText('Error message 2')).toBeInTheDocument()
  })

  test('Renders without errors', async () => {
    render(ErrorSummary, { props: { ...props, errors: [] } })
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })

  test('Renders without linking to fields', async () => {
    render(ErrorSummary, { props: { ...props, linkToFields: false } })
    expect(screen.getByText('Error message 1')).toBeInTheDocument()
    expect(screen.getByText('Error message 2')).toBeInTheDocument()
    expect(screen.queryByRole('link')).not.toBeInTheDocument()
  })
})
