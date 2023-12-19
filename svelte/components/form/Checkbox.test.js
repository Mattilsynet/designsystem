import { render } from '@testing-library/svelte';
import Checkbox from './Checkbox.svelte';
describe('Checkbox', () => {
    const value = [];
    const name = 'name';
    const label = 'Velg noe';
    const error = undefined;
    const helpText = 'This is the helptext';
    const options = [
        { text: 'Ja', value: 'yes' },
        { text: 'Nei', value: 'no' }
    ];
    const properties = {
        validationRequired: {
            errorMessage: 'Error'
        }
    };
    test('Renders', () => {
        const { getByLabelText, getByText, getByRole } = render(Checkbox, {
            value,
            error,
            name,
            label,
            helpText,
            options,
            isRequired: !!properties.validationRequired
        });
        expect(getByText(helpText)).toBeInTheDocument();
        expect(getByLabelText(options[0].text)).toBeInTheDocument();
        expect(getByLabelText(options[1].text)).toBeInTheDocument();
        const fieldSet = getByRole('checkbox', { name: 'Ja' });
        expect(fieldSet?.getAttribute('aria-required')).toEqual('true');
        expect(fieldSet?.getAttribute('aria-describedby')).toEqual('name-hint');
    });
    test('Renders optional in label if not required', () => {
        const err = { fieldName: name, message: 'This is the errormessage' };
        const { getByText } = render(Checkbox, {
            value,
            error: err,
            name,
            label,
            helpText,
            options
        });
        expect(getByText(/valgfitt felt/)).toBeInTheDocument();
    });
    test('Renders error', () => {
        const err = { fieldName: name, message: 'This is the errormessage' };
        const { getByText, getByRole } = render(Checkbox, {
            value,
            error: err,
            name,
            label,
            helpText,
            options
        });
        expect(getByText(/This is the errormessage/)).toBeInTheDocument();
        const fieldSet = getByRole('checkbox', { name: 'Ja' });
        expect(fieldSet.getAttribute('aria-describedby')).toEqual('name-hint name-error');
    });
    test('Renders without helptext', () => {
        const { getByRole } = render(Checkbox, {
            value,
            error: undefined,
            name,
            label,
            helpText: undefined,
            options
        });
        const fieldSet = getByRole('checkbox', { name: 'Ja' });
        expect(fieldSet.getAttribute('aria-describedby')).toBeNull();
    });
    test('Renders preselected', async () => {
        const { getByRole } = render(Checkbox, {
            value: ['yes'],
            error: undefined,
            name,
            label,
            helpText: undefined,
            options
        });
        const fieldSet = getByRole('checkbox', { name: 'Ja' });
        expect(fieldSet).toBeChecked();
    });
});
