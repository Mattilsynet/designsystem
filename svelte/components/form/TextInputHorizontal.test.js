import TextInputHorizontal from './TextInputHorizontal.svelte';
import { render } from '@testing-library/svelte';
describe('TextInput', () => {
    const props = {
        error: undefined,
        name: 'hund',
        label: 'Hund',
        helpText: 'This is the helptext',
        inputmode: 'text',
        validationRequired: {
            errorMessage: 'Error'
        }
    };
    test('Renders', () => {
        const { getByLabelText, getByText } = render(TextInputHorizontal, {
            ...props,
            isRequired: !!props.validationRequired
        });
        expect(getByText(props.helpText)).toBeInTheDocument();
        const inputByLabel = getByLabelText(/Hund/);
        expect(inputByLabel).toBeInTheDocument();
        expect(inputByLabel.value).toEqual('');
    });
    test('Renders with value', () => {
        const { getByLabelText, getByText } = render(TextInputHorizontal, {
            ...props,
            value: 2,
            isRequired: !!props.validationRequired
        });
        expect(getByText(props.helpText)).toBeInTheDocument();
        const inputByLabel = getByLabelText(/Hund/);
        expect(inputByLabel).toBeInTheDocument();
        expect(inputByLabel.value).toEqual('2');
    });
});
