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
          {title: 'Child item 1.1', url: '/menu/child1_1', hasChildren: false, children: []},
          {title: 'Child item 1.2', url: '/menu/child1_2', hasChildren: false, children: []},
          {title: 'Child item 1.3', url: '/menu/child3', hasChildren: false, children: []},
          {title: 'Child item 1.4', url: '/menu/child4', hasChildren: false, children: []}
        ]
      },
      {
        title: 'Menu item 2',
        url: '/menu2',
        hasChildren: true,
        children: [
          {title: 'Child item 2.1', url: '/menu2/child2_1', hasChildren: false, children: []},
          {title: 'Child item 2.2', url: '/menu2/child2_2', hasChildren: false, children: []}
        ]
      },
      {
        title: 'Menu item 3',
        url: 'https://www.mattilsynet.no',
        hasChildren: true,
        children: [
          {title: 'Child item 3.1', url: '/menu2/child3_1', hasChildren: false, children: []},
          {
            title: 'Child item 3.2 - external',
            url: 'https://www.mattilsynet.no/om_mattilsynet',
            hasChildren: false,
            children: []
          },
          {title: 'Child item 3.3', url: '/menu2/child3_3', hasChildren: false, children: []}
        ]
      },
      {
        title: 'Menu item 4',
        url: '/menu'
      }
    ],
    itemsRight: [
      {
        title: 'Right Menu item 1',
        url: 'https://www.mattilsynet.no/om_mattilsynet',
        hasChildren: true,
        children: []
      },
      {
        title: 'Right Menu item 2',
        url: '/varsle',
        hasChildren: true,
        children: []
      }
    ],
    itemsBottom: [
      {
        title: 'Bottom Menu item 1',
        url: '/varsle',
        hasChildren: true,
        children: []
      },
      {
        title: 'Bottom Menu item 2',
        url: 'https://www.mattilsynet.no/om_mattilsynet',
        hasChildren: true,
        children: []
      }
    ]
  }

  test('Renders', () => {
    const {getAllByText, getByText} = render(MenuItems, componentOptions)
    const allByText = getAllByText('Menu item 1')
    expect(allByText.length).toEqual(2)
    expect(allByText[0].tagName).toEqual('BUTTON')
    expect(allByText[1].tagName).toEqual('A')
    componentOptions.itemsLeft[0].children.forEach(child => {
      expect(getByText(child.title)).toBeInTheDocument()
    })

    const allByText1 = getAllByText('Menu item 2')
    expect(allByText1[0].tagName).toEqual('BUTTON')
    expect(allByText1[1].tagName).toEqual('A')
    expect(allByText1.length).toEqual(2)
    componentOptions.itemsLeft[1].children.forEach(child => {
      expect(getByText(child.title)).toBeInTheDocument()
    })

    const menu3 = getAllByText('Menu item 3')
    expect(menu3[0].tagName).toEqual('BUTTON')
    expect(menu3[1].tagName).toEqual('A')
    expect(menu3.length).toEqual(2)
    componentOptions.itemsLeft[2].children.forEach(child => {
      expect(getByText(child.title)).toBeInTheDocument()
    })
  })

  test('Adds rel="external" if url is external', () => {
    const {getAllByText, getByText} = render(MenuItems, componentOptions)
    const menu3 = getAllByText('Menu item 3')
    expect(menu3[1].getAttribute('rel')).toEqual('external')

    const menu2 = getAllByText('Menu item 2')
    expect(menu2[1].getAttribute('rel')).toEqual(null)

    const menu3_1 = getByText('Child item 3.1')
    expect(menu3_1.getAttribute('rel')).toEqual(null)

    const menu3_2 = getByText('Child item 3.2 - external')
    expect(menu3_2.getAttribute('rel')).toEqual('external')

    const menu3_3 = getByText('Child item 3.3')
    expect(menu3_3.getAttribute('rel')).toEqual(null)

    const menuR1 = getByText('Right Menu item 1')
    expect(menuR1.getAttribute('rel')).toEqual('external')

    const menuR2 = getByText('Right Menu item 2')
    expect(menuR2.getAttribute('rel')).toEqual(null)

    const menuB1 = getByText('Bottom Menu item 1')
    expect(menuB1.getAttribute('rel')).toEqual(null)

    const menuB2 = getByText('Bottom Menu item 2')
    expect(menuB2.getAttribute('rel')).toEqual('external')
  })
})
