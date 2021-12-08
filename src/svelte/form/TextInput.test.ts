/**
 * @jest-environment jsdom
 */
import TextInput from './TextInput.svelte';
import {render} from '@testing-library/svelte';

describe('TextInput', () => {
  const value = 'this is the value';
  const error = undefined;
  const name = 'name';
  const label = 'Navn';
  const helpText = 'This is the helptext';
  const inputmode = 'text';
  const autocomplete = 'name';
  const placeholder = 'Eg. Test Testsen';
  const validationRequired = {
    errorMessage: 'Error'
  };
  test('Renders', () => {
    const {getByLabelText, getByDisplayValue, getByPlaceholderText, getByText} = render(TextInput, {
      value,
      error,
      name,
      label,
      helpText,
      autocomplete: autocomplete,
      inputmode: inputmode,
      isRequired: !!validationRequired,
      placeholder: placeholder
    });
    expect(getByText(helpText)).toBeInTheDocument();
    const inputByLabel: Partial<HTMLInputElement> = getByLabelText(/Navn/);
    expect(inputByLabel).toBeInTheDocument();
    expect(inputByLabel.value).toEqual(value);
    const input = getByDisplayValue(value);
    expect(input).toBeInTheDocument();
    expect(input.getAttribute('autocomplete')).toEqual(autocomplete);
    expect(input.getAttribute('inputmode')).toEqual(inputmode);
    expect(input.getAttribute('aria-required')).toEqual('true');
    expect(getByPlaceholderText(placeholder)).toBeInTheDocument();
  });

  test('Does not render properties when not defined', () => {
    const {getByDisplayValue, queryByPlaceholderText} = render(TextInput, {
      value,
      error,
      name,
      label,
      helpText,
      properties: {}
    });
    const input = getByDisplayValue(value);
    expect(input).toBeInTheDocument();
    expect(input.getAttribute('autocomplete')).toEqual(null);
    expect(input.getAttribute('inputmode')).toEqual(null);
    expect(queryByPlaceholderText(placeholder)).not.toBeInTheDocument();
  });

  test('Does not render properties when not defined', () => {
    const err = {fieldName: name, message: 'This is the errormessage'};
    const {getByText} = render(TextInput, {
      value,
      error: err,
      name,
      label,
      helpText
    });
    expect(getByText(err.message)).toBeInTheDocument();
  });

  test('Renders optional in label if not required', () => {
    const err = {fieldName: name, message: 'This is the errormessage'};
    const {getByText} = render(TextInput, {
      value,
      error: err,
      name,
      label,
      helpText
    });
    expect(getByText(/valgfritt felt/)).toBeInTheDocument();
  });
});
