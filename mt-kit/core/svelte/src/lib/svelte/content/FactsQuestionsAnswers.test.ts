import { render, fireEvent } from '@testing-library/svelte'
import FactsQuestionsAnswers from './FactsQuestionsAnswers.svelte'

describe('Facts Questions Answers', () => {
  const componentOptions = {
    title: 'This is the title for animal disease',
    facts: `<p>This is some text about the disease</p>`,
    questionsAnswers: [
      {
        question: 'Symptomer',
        answer: '<p>Describing the symptoms</p>',
        imageUrl: 'http://localhost:3003',
        imageAltText: 'Alt text',
        caption: 'Figure caption'
      },
      {
        question: 'Hvordan smitter sykdommen?',
        answer: '<p>Describing the routes of the infaction</p>'
      },
      {
        question: 'Kan sykdommen smitte til mennesker?',
        answer: '<a href="https://www.mattilsynet.no">Mattilsynet</a>'
      }
    ]
  }

  test('Renders', async () => {
    const { getByText, getAllByText } = render(FactsQuestionsAnswers, componentOptions)
    expect(getAllByText('Symptomer').length).toEqual(1)
    expect(getByText('This is some text about the disease')).toBeInTheDocument()
    const symptomsButton = getByText('Symptomer')
    await fireEvent.click(symptomsButton)
    expect(getByText('Describing the symptoms')).toBeInTheDocument()

    const infectionButton = getByText('Hvordan smitter sykdommen?')
    await fireEvent.click(infectionButton)
    expect(getAllByText('Hvordan smitter sykdommen?').length).toEqual(2)
    expect(getByText('Describing the routes of the infaction')).toBeInTheDocument()

    const contagiousButton = getByText('Kan sykdommen smitte til mennesker?')
    await fireEvent.click(contagiousButton)
    expect(getByText('Mattilsynet')).toBeInTheDocument()
    expect(getAllByText('Kan sykdommen smitte til mennesker?').length).toEqual(2)
  })

  test('Does not render accordion when body not defined', () => {
    const { getAllByText, queryByText } = render(FactsQuestionsAnswers, {
      ...componentOptions,
      facts: undefined,
      questionsAnswers: [{ ...componentOptions.questionsAnswers[0] }]
    })
    expect(getAllByText('Symptomer').length).toEqual(1)
    expect(queryByText('This is some text about the disease')).not.toBeInTheDocument()
    expect(queryByText('Hvordan smitter sykdommen?')).not.toBeInTheDocument()
    expect(queryByText('Kan sykdommen smitte til mennesker?')).not.toBeInTheDocument()
  })

  test('Render properties when not defined', () => {
    const { queryByText } = render(FactsQuestionsAnswers, {})
    expect(queryByText('Symptomer')).not.toBeInTheDocument()
    expect(queryByText('Hvordan smitter sykdommen?')).not.toBeInTheDocument()
    expect(queryByText('Kan sykdommen smitte mennesker?')).not.toBeInTheDocument()
  })
})
