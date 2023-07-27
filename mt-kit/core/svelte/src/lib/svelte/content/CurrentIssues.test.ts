import { render } from '@testing-library/svelte'
import CurrentIssues from './CurrentIssues.svelte'

describe('Current issues', () => {
  test('Renders', () => {
    const componentOptions = {
      title: 'currentTitle',
      issues: [
        {
          title: 'Current issue 1',
          text: 'issueText1',
          href: 'url1'
        },
        {
          title: 'Current issue 2',
          text: 'issueText2',
          href: 'url2'
        }
      ]
    }

    const { getByText, getByTestId } = render(CurrentIssues, componentOptions)
    const ariaLabel = getByTestId('current-issues')
    expect(ariaLabel.classList.contains('current-issues')).toBeTruthy()

    const sectionTitle = getByText('currentTitle')
    expect(sectionTitle).toBeInTheDocument()

    const title1 = getByText('Current issue 1')
    expect(title1).toBeInTheDocument()
    const title2 = getByText('Current issue 2')
    expect(title2).toBeInTheDocument()
    const text1 = getByText('issueText1')
    expect(text1).toBeInTheDocument()
    const text2 = getByText('issueText2')
    expect(text2).toBeInTheDocument()

    const span1 = getByTestId('current-issue-span-0')
    expect(span1.classList.contains('col-1-span-5')).toBeTruthy()
    const span2 = getByTestId('current-issue-span-1')
    expect(span2.classList.contains('col-7-span-5')).toBeTruthy()

    const href1 = getByTestId('current-issue-a-0')
    expect(href1).toBeInTheDocument()
    expect(href1.getAttribute('href')).toEqual('url1')
    const href2 = getByTestId('current-issue-a-1')
    expect(href2).toBeInTheDocument()
    expect(href2.getAttribute('href')).toEqual('url2')
  })

  test('Uses full width when only one issue', () => {
    const componentOptions = {
      issues: [
        {
          title: 'Current issue 1',
          text: 'issueText1',
          href: 'url1'
        }
      ]
    }

    const { getByTestId } = render(CurrentIssues, componentOptions)
    const span1 = getByTestId('current-issue-span-0')
    expect(span1.classList.contains('col-1-span-12')).toBeTruthy()
  })
})
