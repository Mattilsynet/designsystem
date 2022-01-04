/**
 * @jest-environment jsdom
 */

import {render} from '@testing-library/svelte';
import Published from './Published.svelte';

describe('Highlighted content', () => {
  test('Renders', () => {
    let componentOptions = {
      publishFrom: '2021-06-24T11:40:02.889Z',
      professionallyUpdated: '2021-06-25T11:32:22Z'
    };
    const {getByText} = render(Published, componentOptions);
    expect(getByText('Publisert')).toBeInTheDocument();
    expect(getByText('Sist oppdatert')).toBeInTheDocument();
    expect(getByText('24.6.2021')).toBeInTheDocument();
    expect(getByText('25.6.2021')).toBeInTheDocument();
  });
  test('Renders without props', () => {
    const {queryByText} = render(Published, {});
    expect(queryByText('Publisert')).not.toBeInTheDocument();
    expect(queryByText('Sist oppdatert')).not.toBeInTheDocument();
  });
});
