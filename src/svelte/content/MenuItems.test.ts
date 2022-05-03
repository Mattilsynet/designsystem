/**
 * @jest-environment jsdom
 */
import {render} from '@testing-library/svelte'
import MenuItems from './MenuItems.svelte'

describe('Related links list', () => {
  const componentOptions = {
    title: 'Main heading',
    itemsLeft: [
      {
        title: 'Menu item 1',
        url: '/menu',
        hasChildren: true,
        children: [
          {title: 'Child item 1.1', url: '/menu/child1', hasChildren: false, children: []},
          {title: 'Child item 1.2', url: '/menu/child2', hasChildren: false, children: []}
        ]
      },
      {
        title: 'Menu item 2',
        url: '/menu2',
        hasChildren: true,
        children: [
          {title: 'Child item 2.1', url: '/menu2/child1', hasChildren: false, children: []},
          {title: 'Child item 2.2', url: '/menu2/child2', hasChildren: false, children: []}
        ]
      },
      {
        title: 'Menu item 3',
        url: '/menu'
      }
    ]
  }

  test('Renders', () => {
    const {getAllByText, getByText} = render(MenuItems, componentOptions)
    const allByText = getAllByText('Menu item 1')
    expect(allByText.length).toEqual(2)
    expect(allByText[0].tagName).toEqual('BUTTON')
    expect(allByText[1].tagName).toEqual('A')

    const allByText1 = getAllByText('Menu item 2')
    expect(allByText1[0].tagName).toEqual('BUTTON')
    expect(allByText1[1].tagName).toEqual('A')
    expect(allByText1.length).toEqual(2)

    const menu3 = getByText('Menu item 3')
    expect(menu3).toBeInTheDocument()
  })
})
