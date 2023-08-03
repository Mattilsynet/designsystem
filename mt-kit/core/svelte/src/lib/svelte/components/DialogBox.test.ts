import { render } from '@testing-library/svelte'
import DialogBox from './DialogBox.svelte'

describe('DialogBox', () => {
  test('Renders when dialogBoxClosed is false', () => {
    const componentOptions = {
      isOpen: false
    }
    const { queryByTestId } = render(DialogBox, componentOptions)
    const dialogBox = queryByTestId('dialog-box')
    expect(dialogBox).not.toBeInTheDocument()
  })
  test('Is hidden when dialogBoxClosed is true', () => {
    const componentOptions = {
      isOpen: true
    }
    const { getByTestId } = render(DialogBox, componentOptions)
    const dialogBox = getByTestId('dialog-box')
    expect(dialogBox.classList[0]).toEqual('dialog-box')
  })
  test('Close button should have aria-label set', () => {
    const componentOptions = {
      closeBtnAriaLabel: 'Lukk dialogboks'
    }
    const { getByLabelText } = render(DialogBox, componentOptions)
    const labelForInput = getByLabelText('Lukk dialogboks')
    expect(labelForInput).toBeInTheDocument()
    expect(labelForInput.getAttribute('aria-label')).toEqual('Lukk dialogboks')
  })
  test('Render dialog box with selected title "Dette er en dialogboks"', () => {
    const componentOptions = {
      title: 'Dette er en dialogboks'
    }
    const { getByText } = render(DialogBox, componentOptions)
    const titleForDialogBox = getByText('Dette er en dialogboks')
    expect(titleForDialogBox).toBeInTheDocument()
  })
  test('Close button should have aria-label set even when value is not set', () => {
    const { getByLabelText } = render(DialogBox, {})
    const labelForInput = getByLabelText('Lukk')
    expect(labelForInput).toBeInTheDocument()
    expect(labelForInput.getAttribute('aria-label')).toEqual('Lukk')
  })
})
