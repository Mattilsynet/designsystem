import { render } from '@testing-library/svelte'
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
          { title: 'Child item 1.1', url: '/menu/child1_1', hasChildren: false, children: [] },
          {
            title: 'Child item 1.2',
            url: '/menu/child1_2',
            isActive: true,
            hasChildren: false,
            children: []
          },
          { title: 'Child item 1.3', url: '/menu/child3', hasChildren: false, children: [] },
          { title: 'Child item 1.4', url: '/menu/child4', hasChildren: false, children: [] }
        ]
      },
      {
        title: 'Menu item 2',
        url: '/menu2',
        hasChildren: true,
        children: [
          { title: 'Child item 2.1', url: '/menu2/child2_1', hasChildren: false, children: [] },
          { title: 'Child item 2.2', url: '/menu2/child2_2', hasChildren: false, children: [] }
        ]
      },
      {
        title: 'Menu item 3',
        url: 'https://www.mattilsynet.no',
        hasChildren: true,
        children: [
          { title: 'Child item 3.1', url: '/menu2/child3_1', hasChildren: false, children: [] },
          {
            title: 'Child item 3.2 - external',
            url: 'https://www.mattilsynet.no/om_mattilsynet',
            hasChildren: false,
            children: []
          },
          { title: 'Child item 3.3', url: '/menu2/child3_3', hasChildren: false, children: [] }
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
    const { getAllByText, getByText } = render(MenuItems, componentOptions)
    const allByText = getAllByText('Menu item 1')
    expect(allByText.length).toEqual(3)
    expect(allByText[0].parentElement.tagName).toEqual('BUTTON')
    expect(allByText[1].parentElement.classList.contains('display-none-important')).toEqual(true)
    expect(allByText[2].tagName).toEqual('A')
    componentOptions.itemsLeft[0].children.forEach(child => {
      expect(getByText(child.title)).toBeInTheDocument()
    })

    const allByText1 = getAllByText('Menu item 2')
    expect(allByText1[0].parentElement.tagName).toEqual('BUTTON')
    expect(allByText1[1].parentElement.classList.contains('display-none-important')).toEqual(true)
    expect(allByText1[2].tagName).toEqual('A')
    expect(allByText1.length).toEqual(3)
    componentOptions.itemsLeft[1].children.forEach(child => {
      expect(getByText(child.title)).toBeInTheDocument()
    })

    const menu3 = getAllByText('Menu item 3')
    expect(menu3[0].parentElement.tagName).toEqual('BUTTON')
    expect(menu3[1].parentElement.classList.contains('display-none-important')).toEqual(true)
    expect(menu3[2].tagName).toEqual('A')
    expect(menu3.length).toEqual(3)
    componentOptions.itemsLeft[2].children.forEach(child => {
      expect(getByText(child.title)).toBeInTheDocument()
    })
  })

  test('Link is active', () => {
    const { rerender, getByText, getAllByText } = render(MenuItems, componentOptions)
    const notActiveItem = getByText('Child item 1.1')
    expect(notActiveItem).toBeInTheDocument()
    expect(notActiveItem.getAttribute('aria-current')).toEqual('false')

    const activeItem = getByText('Child item 1.2')
    expect(activeItem).toBeInTheDocument()
    expect(activeItem.getAttribute('aria-current')).toEqual('page')

    componentOptions.itemsLeft[0].isActive = true
    componentOptions.itemsLeft[0].children[1].isActive = false

    rerender(componentOptions)

    const notActiveAnymore = getByText('Child item 1.2')
    expect(notActiveAnymore).toBeInTheDocument()
    expect(notActiveAnymore.getAttribute('aria-current')).toEqual('false')

    const activeMenu1 = getAllByText('Menu item 1')
    expect(activeMenu1[2].getAttribute('aria-current')).toEqual('page')

    componentOptions.itemsLeft[0].isActive = false
    componentOptions.itemsRight[1].isActive = true

    rerender(componentOptions)

    const notActiveMenu1 = getAllByText('Menu item 1')
    expect(notActiveMenu1[2].getAttribute('aria-current')).toEqual('false')

    const activeMenuRight2 = getByText('Right Menu item 2')
    expect(activeMenuRight2.getAttribute('aria-current')).toEqual('page')

    componentOptions.itemsRight[1].isActive = false
    componentOptions.itemsBottom[0].isActive = true

    rerender(componentOptions)

    const notActiveMenuRight2 = getByText('Right Menu item 2')
    expect(notActiveMenuRight2.getAttribute('aria-current')).toEqual('false')

    const activeMenuBotom1 = getByText('Bottom Menu item 1')
    expect(activeMenuBotom1.getAttribute('aria-current')).toEqual('page')
  })

  test('Adds rel="external" if url is external', () => {
    const { getAllByText, getByText } = render(MenuItems, componentOptions)
    const menu3 = getAllByText('Menu item 3')
    expect(menu3[2].getAttribute('rel')).toEqual('external')

    const menu2 = getAllByText('Menu item 2')
    expect(menu2[2].getAttribute('rel')).toEqual(null)

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
