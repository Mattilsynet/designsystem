/**
 * @jest-environment jsdom
 */
import {render} from '@testing-library/svelte';
import AnimalDisease from './AnimalDisease.svelte';

describe('Animal disease', () => {
  const componentOptions = {
    title: 'This is the title for animal disease',
    text: `<p>This is some text about the disease</p>`,
    symptomsHeading: 'Symptomer',
    symptoms: '<p>Describing the symptoms</p>',
    routesOfInfectionHeading: 'Hvordan smitter sykdommen?',
    routesOfInfection: '<p>Describing the routes of the infaction</p>',
    infectionToHumansHeading: 'Kan sykdommen smitte til mennesker?',
    infectionToHumans: '<a href="https://www.mattilsynet.no">Mattilsynet</a>',
    imageUrl: 'http://localhost:3003',
    imageAltText: 'Alt text',
    caption: 'Figure caption'
  };

  test('Renders', () => {
    const {getByText} = render(AnimalDisease, componentOptions);
    expect(getByText('Symptomer')).toBeInTheDocument();
    expect(getByText('Hvordan smitter sykdommen?')).toBeInTheDocument();
    expect(getByText('Kan sykdommen smitte til mennesker?')).toBeInTheDocument();
    expect(getByText('Describing the symptoms')).toBeInTheDocument();
    expect(getByText('Describing the routes of the infaction')).toBeInTheDocument();
    expect(getByText('Mattilsynet')).toBeInTheDocument();
  });

  test('Does not render accordion when body not defined', () => {
    const {getByText, queryByText} = render(AnimalDisease, {
      ...componentOptions,
      routesOfInfection: null,
      infectionToHumans: null
    });
    expect(getByText('Symptomer')).toBeInTheDocument();
    expect(queryByText('Hvordan smitter sykdommen?')).not.toBeInTheDocument();
    expect(queryByText('Kan sykdommen smitte til mennesker?')).not.toBeInTheDocument();
  });

  test('Render properties when not defined', () => {
    const {queryByText} = render(AnimalDisease, {});
    expect(queryByText('Symptomer')).not.toBeInTheDocument();
    expect(queryByText('Hvordan smitter sykdommen?')).not.toBeInTheDocument();
    expect(queryByText('Kan sykdommen smitte mennesker?')).not.toBeInTheDocument();
  });
});
