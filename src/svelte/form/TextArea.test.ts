/**
 * @jest-environment jsdom
 */
import {render} from '@testing-library/svelte';
import TextArea from './TextArea.svelte';

describe('TextArea', () => {
  const value = 'this is the value';
  const error = undefined;
  const name = 'name';
  const label = 'Navn';
  const helpText = 'This is the helptext';
  const field = {
    rows: 5,
    cols: 3
  };
  const inputmode = 'text';
  const autocomplete = 'name';
  const placeholder = 'Eg. Test Testsen';
  const validationRequired = {
    errorMessage: 'Error'
  };
  const maxlength = 100;
  test('Renders', () => {
    const {getByLabelText, getByDisplayValue, getByPlaceholderText, getByText} = render(TextArea, {
      value,
      error,
      name,
      label,
      helpText,
      autocomplete,
      inputmode,
      isRequired: !!validationRequired,
      placeholder,
      cols: field.cols,
      rows: field.rows,
      maxlength
    });
    expect(getByText(helpText)).toBeInTheDocument();
    const byLabelText: Partial<HTMLTextAreaElement> = getByLabelText(label);
    expect(byLabelText).toBeInTheDocument();
    expect(byLabelText.value).toEqual(value);
    const input = getByDisplayValue(value);
    expect(input).toBeInTheDocument();
    expect(input.getAttribute('autocomplete')).toEqual(autocomplete);
    expect(input.getAttribute('inputmode')).toEqual(inputmode);
    expect(input.getAttribute('aria-required')).toEqual('true');
    expect(input.getAttribute('cols')).toEqual(`${field.cols}`);
    expect(input.getAttribute('rows')).toEqual(`${field.rows}`);
    expect(input.getAttribute('maxlength')).toEqual(`${maxlength}`);
    expect(getByPlaceholderText(placeholder)).toBeInTheDocument();
  });

  test('Does not render properties when not defined', () => {
    const {getByDisplayValue, queryByPlaceholderText, getByText} = render(TextArea, {
      value,
      error,
      name,
      label,
      helpText
    });
    const input = getByDisplayValue(value);
    expect(input).toBeInTheDocument();
    expect(input.getAttribute('autocomplete')).toEqual(null);
    expect(input.getAttribute('inputmode')).toEqual(null);
    expect(input.getAttribute('aria-required')).toEqual(null);
    expect(input.getAttribute('cols')).toEqual(null);
    expect(input.getAttribute('maxlength')).toEqual(null);
    expect(queryByPlaceholderText(placeholder)).not.toBeInTheDocument();
    expect(getByText(/valgfritt felt/)).toBeInTheDocument();
  });
});
