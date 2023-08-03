import { render } from '@testing-library/svelte'
import AnimalDisease from './AnimalDisease.svelte'

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
  }

  test('Renders', () => {
    const { getByText, getAllByText } = render(AnimalDisease, componentOptions)
    expect(getAllByText('Symptomer').length).toEqual(2)
    expect(
      getAllByText('Symptomer')[1].parentElement.classList.contains('display-none-important')
    ).toEqual(true)
    expect(getByText('This is some text about the disease')).toBeInTheDocument()
    expect(getAllByText('Hvordan smitter sykdommen?').length).toEqual(2)
    expect(getAllByText('Kan sykdommen smitte til mennesker?').length).toEqual(2)
    expect(getByText('Describing the symptoms')).toBeInTheDocument()
    expect(getByText('Describing the routes of the infaction')).toBeInTheDocument()
    expect(getByText('Mattilsynet')).toBeInTheDocument()
  })

  test('Does not render accordion when body not defined', () => {
    const { getAllByText, queryByText } = render(AnimalDisease, {
      ...componentOptions,
      text: null,
      routesOfInfection: null,
      infectionToHumans: null
    })
    expect(getAllByText('Symptomer').length).toEqual(2)
    expect(queryByText('This is some text about the disease')).not.toBeInTheDocument()
    expect(queryByText('Hvordan smitter sykdommen?')).not.toBeInTheDocument()
    expect(queryByText('Kan sykdommen smitte til mennesker?')).not.toBeInTheDocument()
  })

  test('Render properties when not defined', () => {
    const { queryByText } = render(AnimalDisease, {})
    expect(queryByText('Symptomer')).not.toBeInTheDocument()
    expect(queryByText('Hvordan smitter sykdommen?')).not.toBeInTheDocument()
    expect(queryByText('Kan sykdommen smitte mennesker?')).not.toBeInTheDocument()
  })
})
