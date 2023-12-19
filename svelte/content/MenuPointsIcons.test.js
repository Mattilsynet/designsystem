import { render } from '@testing-library/svelte';
import MenuPoints from './MenuPointsIcons.svelte';
describe('Menu points with icons', () => {
    test('Renders', () => {
        const componentOptions = {
            menuPoints: [
                {
                    text: 'Dyr',
                    url: 'http',
                    keywords: 'Stikkord for dyr',
                    iconResource: '<svg>hello from svg</svg>'
                }
            ]
        };
        const { getByTestId, getByText, queryByText } = render(MenuPoints, componentOptions);
        expect(getByText('Dyr')).toBeInTheDocument();
        expect(getByText('hello from svg')).toBeInTheDocument();
        expect(queryByText('This is the title')).not.toBeInTheDocument();
        const link = getByTestId('menupoints-link');
        expect(link.getAttribute('rel')).toEqual('external');
        const headerElement = getByText('Dyr');
        expect(headerElement.tagName).toEqual('A');
    });
    test('Renders with icon', () => {
        const componentOptions = {
            menuPoints: [
                {
                    iconResource: undefined,
                    icon: 'icon src',
                    keywords: ''
                }
            ]
        };
        const { getByTestId } = render(MenuPoints, componentOptions);
        const link = getByTestId('img-icon');
        expect(link.getAttribute('src')).toEqual('icon src');
    });
    test('Renders without props', () => {
        const { getByTestId } = render(MenuPoints, {});
        expect(getByTestId('menu-points')).toBeInTheDocument();
    });
});
