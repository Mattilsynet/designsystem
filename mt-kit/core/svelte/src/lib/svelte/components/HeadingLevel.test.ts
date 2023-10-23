import { render } from '@testing-library/svelte'
import HeadingLevel from './HeadingLevel.svelte'

describe('Heading level', () => {
  test('Renders h1 default', () => {
    const componentOptions = {
      id: 'thisIsTheId',
      class: 'class-name'
    }
    render(HeadingLevel, componentOptions)
    const h1 = document.querySelector('h1')
    expect(h1).toBeDefined()
    expect(h1.getAttribute('id')).toEqual('thisIsTheId')
    expect(h1.getAttribute('class')).toEqual('mt-h1 class-name')
  })

  test('Does not render attr when undefined', () => {
    render(HeadingLevel)
    const h1 = document.querySelector('h1')
    expect(h1).toBeDefined()
    expect(h1.getAttribute('id')).toEqual(null)
    expect(h1.getAttribute('class')).toEqual('mt-h1 ')
  })

  test('Renders passed heading level', () => {
    const componentOptions = {
      id: 'thisIsTheId',
      class: 'class-name',
      headingLevel: 3
    }
    render(HeadingLevel, componentOptions)
    const h3 = document.querySelector('h3')
    expect(h3).toBeDefined()
    expect(h3.getAttribute('id')).toEqual('thisIsTheId')
    expect(h3.getAttribute('class')).toEqual('mt-h3 class-name')
  })
})
