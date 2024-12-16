import { render, screen, fireEvent, waitFor, within } from '@testing-library/svelte'
import type { Link } from '../../ts/types'
import BreadcrumbsComponent from './Breadcrumbs.svelte'

describe('Breadcrumbs', () => {
  const items: Array<Link> = [
    { text: 'home', url: 'mt.no' },
    { text: 'dyr', url: 'mt.no/dyr' },
    { text: 'landdyr', url: 'mt.no/dyr/landdyr' },
    { text: 'gris', url: 'mt.no/dyr/landdyr/gris' },
    { text: 'purke', url: 'mt.no/dyr/landdyr/gris/purke' }
  ]
  const componentOptions = {
    breadcrumbs: {
      items: items
    }
  }

  test('Render component without js', () => {
    render(BreadcrumbsComponent, componentOptions)

    // Assert: full list of breadcrumbs visible and no ellipsis
    expect(screen.getByRole('navigation', { name: 'brødsmulesti' })).toBeInTheDocument()
    expect(screen.getByRole('list')).toBeInTheDocument()
    expect(screen.getByRole('list')).toHaveClass('expanded')
    expect(screen.getAllByRole('listitem').length).toBe(5)
    expect(screen.queryByRole('button', { name: 'vis mer' })).not.toBeInTheDocument()
  })

  test('Render component with long list of breadcrumbs', async () => {
    render(BreadcrumbsComponent, { ...componentOptions, loadJs: true })

    // Assert: list of breadcrumbs is partial with ellipsis
    expect(screen.getByRole('navigation', { name: 'brødsmulesti' })).toBeInTheDocument()
    expect(screen.getByRole('list')).toBeInTheDocument()
    expect(screen.getByRole('list')).not.toHaveClass('expanded')
    expect(screen.getAllByRole('listitem').length).toBe(4)

    const ellipsis = screen.getByRole('button', { name: 'vis mer' })
    expect(ellipsis).toBeInTheDocument()

    // Act: expand breadcrumbs
    fireEvent.click(ellipsis)

    // Assert: full list of breadcrumbs visible and no more ellipsis
    await waitFor(() => {
      expect(screen.getAllByRole('listitem').length).toBe(5)
    })
    expect(screen.queryByRole('button', { name: 'vis mer' })).not.toBeInTheDocument()
  })

  test('Render component with short list of breadcrumbs', () => {
    render(BreadcrumbsComponent, { breadcrumbs: { items: items.slice(0, 3) }, loadJs: true })

    // Assert: full list of breadcrumbs visible and no ellipsis
    expect(screen.getByRole('navigation', { name: 'brødsmulesti' })).toBeInTheDocument()
    expect(screen.getByRole('list')).toBeInTheDocument()
    expect(screen.getByRole('list')).toHaveClass('expanded')
    expect(screen.getAllByRole('listitem').length).toBe(3)
    expect(screen.queryByRole('button', { name: 'vis mer' })).not.toBeInTheDocument()
  })

  test('Render breadcrumb items correct', async () => {
    render(BreadcrumbsComponent, {
      breadcrumbs: {
        items: items,
        homeLabel: 'Home',
        ariaLabel: 'Breadcrumbs',
        showAllAriaLabel: 'Show all'
      },
      loadJs: true
    })

    expect(screen.getByRole('navigation', { name: 'Breadcrumbs' })).toBeInTheDocument()

    const crumbs = screen.getAllByRole('listitem')
    expect(crumbs.length).toBe(4)

    // Assert: first item has correct home label
    expect(crumbs[0]).not.toHaveClass('ellipsis')
    expect(within(crumbs[0]).getByRole('link', { name: 'Home' })).toBeInTheDocument()

    // Assert: second item is an ellipsis button with correct label
    expect(crumbs[1]).not.toHaveClass('ellipsis')
    expect(within(crumbs[1]).getByRole('button', { name: 'Show all' })).toBeInTheDocument()

    // Assert: third item is a shortened link with ellipsis
    expect(crumbs[2]).toHaveClass('ellipsis')
    expect(within(crumbs[2]).getByRole('link', { name: 'gris' })).toBeInTheDocument()

    // Assert: fourth item is the last breadcrumb that's the current page (no link)
    expect(within(crumbs[3]).getByText('purke')).toBeInTheDocument()
    expect(within(crumbs[3]).getByText('purke')).toHaveClass('last-breadcrumb')
  })
})
