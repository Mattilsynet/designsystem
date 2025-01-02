import { fireEvent, render } from '@testing-library/svelte'
import MenuItems from './MenuItems.svelte'

describe('Related links list', () => {
  const componentOptions = {
    title: 'Main heading',
    loadJs: true,
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

  test('Renders', async () => {
    const { getByText, queryByText } = render(MenuItems, componentOptions)
    const menuItem1 = getByText('Menu item 1')
    expect(menuItem1).toBeInTheDocument()
    expect(menuItem1.parentElement.getAttribute('aria-expanded')).toEqual('false')
    expect(menuItem1.parentElement.tagName).toEqual('BUTTON')
    componentOptions.itemsLeft[0].children.forEach(child => {
      expect(queryByText(child.title)).not.toBeInTheDocument()
    })
    await fireEvent.click(menuItem1)
    componentOptions.itemsLeft[0].children.forEach(child => {
      expect(getByText(child.title)).toBeInTheDocument()
    })

    const menuItem2 = getByText('Menu item 2')
    expect(menuItem2.parentElement.getAttribute('aria-expanded')).toEqual('false')
    expect(menuItem2.parentElement.tagName).toEqual('BUTTON')
    componentOptions.itemsLeft[1].children.forEach(child => {
      expect(queryByText(child.title)).not.toBeInTheDocument()
    })
    await fireEvent.click(menuItem2)
    componentOptions.itemsLeft[1].children.forEach(child => {
      expect(getByText(child.title)).toBeInTheDocument()
    })

    const menuItem3 = getByText('Menu item 3')
    expect(menuItem3.parentElement.getAttribute('aria-expanded')).toEqual('false')
    expect(menuItem3.parentElement.tagName).toEqual('BUTTON')
    componentOptions.itemsLeft[2].children.forEach(child => {
      expect(queryByText(child.title)).not.toBeInTheDocument()
    })
    await fireEvent.click(menuItem3)
    componentOptions.itemsLeft[2].children.forEach(child => {
      expect(getByText(child.title)).toBeInTheDocument()
    })
  })

  test('Link is active', async () => {
    const { rerender, getByText, getAllByText, queryByText } = render(MenuItems, componentOptions)
    const menuButtonOne = getByText('Menu item 1')
    await fireEvent.click(menuButtonOne)
    const notActiveItem = getByText('Child item 1.1')
    expect(notActiveItem).toBeInTheDocument()
    expect(notActiveItem.getAttribute('aria-current')).toEqual('false')

    const activeItem = getByText('Child item 1.2')
    expect(activeItem).toBeInTheDocument()
    expect(activeItem.getAttribute('aria-current')).toEqual('page')

    componentOptions.itemsLeft[0].isActive = true
    componentOptions.itemsLeft[0].children[1].isActive = false

    await rerender(componentOptions)

    const menuItem1 = getAllByText('Menu item 1').find(i => i.tagName === 'SPAN')
    expect(menuItem1).toBeInTheDocument()
    await fireEvent.click(menuItem1)
    const notActiveAnymore = queryByText('Child item 1.2')
    expect(notActiveAnymore).not.toBeInTheDocument()

    componentOptions.itemsLeft[0].isActive = false
    componentOptions.itemsRight[1].isActive = true

    await rerender(componentOptions)

    const notActiveMenu1 = getAllByText('Menu item 1').find(i => i.tagName === 'SPAN')
    expect(notActiveMenu1).toBeInTheDocument()
    await fireEvent.click(notActiveMenu1)
    const menuOneLinks = getAllByText('Menu item 1')
    expect(menuOneLinks[2].getAttribute('aria-current')).toEqual('false')

    const activeMenuRight2 = getByText('Right Menu item 2')
    expect(activeMenuRight2.getAttribute('aria-current')).toEqual('page')

    componentOptions.itemsRight[1].isActive = false
    componentOptions.itemsBottom[0].isActive = true

    await rerender(componentOptions)

    const notActiveMenuRight2 = getByText('Right Menu item 2')
    expect(notActiveMenuRight2.getAttribute('aria-current')).toEqual('false')

    const activeMenuBottom1 = getByText('Bottom Menu item 1')
    expect(activeMenuBottom1.getAttribute('aria-current')).toEqual('page')
  })

  test('Adds rel="external" if url is external', async () => {
    const { getAllByText, getByText } = render(MenuItems, componentOptions)
    const menu3 = getByText('Menu item 3')
    await fireEvent.click(menu3)
    const menu3Links = getAllByText('Menu item 3')
    expect(menu3Links[2].getAttribute('rel')).toEqual('external')

    const menu2 = getByText('Menu item 2')
    await fireEvent.click(menu2)
    const menu2Links = getAllByText('Menu item 2')
    expect(menu2Links[2].getAttribute('rel')).toEqual(null)

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
