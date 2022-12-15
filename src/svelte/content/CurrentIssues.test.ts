/**
 * @jest-environment jsdom
 */
import {render} from '@testing-library/svelte'
import CurrentIssues from './CurrentIssues.svelte'

describe('Current issues', () => {
  test('Renders', () => {
    const componentOptions = {
      ariaLabel: 'currentAriaLabel',
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

    const {getByText, getByTestId} = render(CurrentIssues, componentOptions)
    const ariaLabel = getByTestId('current-issues')
    expect(ariaLabel.getAttribute('aria-label')).toEqual('currentAriaLabel')

    const title1 = getByText('Current issue 1')
    expect(title1).toBeInTheDocument()
    const title2 = getByText('Current issue 2')
    expect(title2).toBeInTheDocument()
    const text1 = getByText('issueText1')
    expect(text1).toBeInTheDocument()
    const text2 = getByText('issueText2')
    expect(text2).toBeInTheDocument()

    const span1 = getByTestId('current-issue-span-0')
    expect(span1.classList).toContain('col-2-span-4')
    const span2 = getByTestId('current-issue-span-0')
    expect(span2.classList).toContain('col-7-span-5')

    const href1 = getByTestId('current-issue-a-0')
    expect(href1).toBeInTheDocument()
    expect(href1.getAttribute('href')).toEqual('url1')
    const href2 = getByTestId('current-issue-a-1')
    expect(href2).toBeInTheDocument()
    expect(href2.getAttribute('href')).toEqual('url2')
  })

  test('Uses more space when only one issue', () => {
    const componentOptions = {
      ariaLabel: 'currentAriaLabel',
      issues: [
        {
          title: 'Current issue 1',
          text: 'issueText1',
          href: 'url1'
        }
      ]
    }

    const {getByTestId} = render(CurrentIssues, componentOptions)
    const span1 = getByTestId('current-issue-span-0')
    expect(span1.classList).toContain('col-2-span-7')
  })
})
