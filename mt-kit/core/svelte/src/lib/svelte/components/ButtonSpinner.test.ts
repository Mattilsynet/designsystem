import ButtonSpinner from './ButtonSpinner.svelte'
import { render, screen, fireEvent, waitFor } from '@testing-library/svelte'

describe('ButtonSpinner', () => {
  const componentOptions = {
    formInProgressAriaLabel: 'In progress',
    spinnerPlacement: 'end',
    btnClassNames: '',
    inProgress: false
  }

  test('Renders', async () => {
    render(ButtonSpinner, { props: componentOptions })
    const spinner = screen.getByTestId('spinner')
    expect(spinner).toBeInTheDocument()
    expect(spinner.classList.contains('mt-button--spinner--end')).toEqual(true)
    fireEvent.click(screen.getByTestId('spinner'))
    expect(await screen.findByLabelText('In progress')).toBeInTheDocument()
  })

  test('Stop spinner', async () => {
    const { rerender } = await render(ButtonSpinner, {
      props: { ...componentOptions, inProgress: true }
    })
    expect(await screen.getByLabelText('In progress')).toBeInTheDocument()
    await rerender({ inProgress: false })
    await waitFor(() => {
      expect(screen.queryByLabelText('In progress')).not.toBeInTheDocument()
    })
  })
})
