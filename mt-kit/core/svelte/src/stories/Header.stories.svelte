<script lang="ts" module>
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import Dropdown from '$lib/svelte/components/Dropdown.svelte'
  import MenuItems from '$lib/svelte/content/MenuItems.svelte'
  import Search from '$lib/svelte/components/form/Search.svelte'
  import { wrapInShadowDom } from './storybook-utils/utils'
  import { styles } from '@mattilsynet/design'

  const cosmeticIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56" width="56" height="56" fill="none"><circle cx="28" cy="28" r="28" fill="#ABE1CD" fill-opacity="1"></circle><path fill="#054449" d="M24 30V17.481a10.742 10.742 0 0 0 8 4.493V28h2c-.004-.704.039-6.487-.071-7-.29-6.11-5.944-10.57-11.929-9.989V30h-2v15h16V30H24Zm7.785-10.052c-3.757-.413-6.846-3.233-7.57-6.896 3.76.413 6.849 3.232 7.57 6.896ZM34 43H22V32h12v11Z"></path></svg>'
  const plantIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56" width="56" height="56" fill="none"><circle cx="28" cy="28" r="28" fill="#ABE1CD" fill-opacity="1"></circle><path fill="#054449" d="M39.422 14c-4.963 0-9.356 2.78-11.66 6.912.495.535.953 1.107 1.37 1.708 1.748-3.746 5.44-6.38 9.7-6.603-.596 4.57-3.862 8.28-8.105 9.535.253.613.468 1.247.642 1.898 5.739-1.667 9.688-7.272 9.631-13.436L39.423 14h-.001ZM29.985 31.654c.039-8.093-7.028-14.405-14.984-13.623-.097 7.382 5.616 13.788 12.985 13.99V42.04h2.002c-.001-3.74.004-9.295-.004-10.384h.001Zm-12.816-11.62c5.45.286 9.974 4.519 10.68 9.978-5.447-.287-9.97-4.52-10.68-9.978Z"></path></svg>'
  const drinkIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56" width="56" height="56" fill="none"><circle cx="28" cy="28" r="28" fill="#ABE1CD" fill-opacity="1"></circle><path fill="#054449" d="m37.254 18-.967 5.413c-4.808-3.937-11.793-3.955-16.573.011L18.388 16h21.254l.357-2H16l5 28h14l4.286-24h-2.032Zm-9.267 4.454c2.596 0 5.084.898 7.073 2.538-3.892 3.394-10.195 3.368-14.12.013a10.905 10.905 0 0 1 7.047-2.551ZM33.325 40H22.674l-2.306-12.912c4.548 3.268 10.739 3.286 15.264-.006L33.325 40Z"></path></svg>'
  const fishIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56" width="56" height="56" fill="none"><circle cx="28" cy="28" r="28" fill="#ABE1CD" fill-opacity="1"></circle><path fill="#054449" d="M37.5 29a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path><path fill="#054449" d="M45.238 26.323A20.362 20.362 0 0 0 31.481 21a20.21 20.21 0 0 0-10.677 3.031h.001c-1.321.839-2.346 1.668-3.709 2.636L9 21v14s11.438-8.438 12.535-9.097l-.003.003c6.841-4.468 16.649-3.687 22.55 2.073-6.194 6.188-16.951 6.653-23.765 1.225l-1.688 1.22c.476.379.823.647 1.274.963 8.447 5.916 20.187 4.363 27.096-3.428l-1.762-1.637.001.001ZM11 31.159v-6.317l4.392 3.074C13.117 29.587 11 31.159 11 31.159Z"></path></svg>'
  const animalIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56" width="56" height="56" fill="none"><circle cx="28" cy="28" r="28" fill="#ABE1CD" fill-opacity="1"></circle><path fill="#054449" d="M44.845 12c-4.791 0-8.86 3.444-9.653 8H20.81c-.83-5.008-5.672-8.464-10.81-7.99-.071 5.465 4.405 10.107 10 9.989L36 22c5.598.117 10.073-4.525 10-9.99L44.846 12Zm-32.596 2.075c3.183.443 5.789 2.791 6.506 5.849-3.181-.443-5.787-2.791-6.506-5.849Zm24.999 5.849c.717-3.059 3.322-5.406 6.505-5.849-.72 3.059-3.325 5.406-6.505 5.849ZM35 35c0 3.86-3.14 7-7 7s-7-3.14-7-7V24h-2v11c0 4.963 4.037 9 9 9s9-4.037 9-9V24h-2v11Z"></path><path fill="#054449" d="M24.5 31a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM31.5 31a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path></svg>'
  const rightIcon = `
<svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
<circle cx='12' cy='12' r='12' fill='#F9F6F1'/>
<path d='M12.9401 16.5834L12.8562 18.3479C12.8499 18.4793 12.9948 18.5629 13.1054 18.4918L14.5915 17.5369C14.6132 17.5229 14.6313 17.504 14.6442 17.4816L19.1873 9.61268L17.5048 8.64125L12.9616 16.5102C12.9487 16.5325 12.9414 16.5577 12.9401 16.5834Z' fill='#075B7A'/>
<path d='M19.5114 9.05346L17.8289 8.08203L18.7193 6.53968C18.764 6.46224 18.8631 6.43571 18.9405 6.48042L20.3426 7.28994C20.4201 7.33465 20.4466 7.43367 20.4019 7.51111L19.5114 9.05346Z' fill='#075B7A'/>
<rect x='5.52002' y='7.01953' width='9.6' height='1.8' fill='#055B7A'/>
<rect x='5.52002' y='10.1992' width='8.04' height='1.8' fill='#055B7A'/>
<rect x='5.52002' y='13.4414' width='4.08' height='1.8' fill='#055B7A'/>
</svg>
`
  let value = $state('')
  let isOpen = $state(true)
  let searchString: string | undefined = $state()

  function onSubmit(): void {
    searchString = value ?? ''
  }

  const { Story } = defineMeta({
    title: 'Components/Header',
    parameters: { layout: 'fullscreen' },
    args: {
      items: [
        { title: 'Vis siden på norsk', url: '#' },
        { title: 'Show page this page in English', url: '#' }
      ],
      language: {},
      search: {
        linkText: 'Søk'
      },
      menu: {
        title: 'Meny',
        items: [
          {
            title: 'Dyr',
            url: '#',
            iconResource: animalIcon,
            children: [
              { title: 'Dyresykdommer', url: '#' },
              { title: 'Produksjonsdyr', url: '#', isActive: true },
              { title: 'Reise med kjæledyr', url: '#' },
              { title: 'Dyresykdommer', url: '#' },
              { title: 'Produksjonsdyr', url: '#' },
              { title: 'Reise med kjæledyr', url: '#' },
              { title: 'Dyresykdommer', url: '#' },
              { title: 'Produksjonsdyr', url: '#' },
              { title: 'Reise med kjæledyr', url: '#' }
            ]
          },
          {
            title: 'Mat',
            url: 'https://www.mattilsynet.no/mat',
            iconResource: drinkIcon,
            children: [
              { title: 'Produksjon av mat', url: 'https://www.mattilsynet.no/mat_produksjon' },
              { title: 'Matservering', url: '#' },
              { title: 'Lokalmat', url: '#' }
            ]
          },
          {
            title: 'Fisk og akvakultur',
            url: '#',
            iconResource: fishIcon,
            children: [{ title: 'Fiskesykdommer', url: '#' }]
          },
          { title: 'Planter og dyrking', url: '#', iconResource: plantIcon, children: [] },
          { title: 'Drikkevannforskrift', url: '#', iconResource: drinkIcon, children: [] },
          {
            title: 'Kosmetikk og kroppspleieprodukter',
            url: '#',
            iconResource: cosmeticIcon,
            children: []
          }
        ],
        itemsRight: [
          {
            title: 'Meld fra til Mattilsynet',
            url: '#'
          },
          {
            title: 'Om mattilsynet',
            url: '#'
          },
          {
            title: 'Jobbe i Mattilsynet',
            url: '#'
          },
          {
            title: 'Kontakt oss',
            url: '#'
          }
        ],
        itemsBottom: [
          {
            title: 'Skjema',
            url: '#'
          },
          {
            title: 'Regelverk',
            url: '#'
          },
          {
            title: 'Godkjente virksomheter',
            url: '#'
          }
        ]
      },
      disableCss: false,
      disableJs: false
    },
    argTypes: {
      items: { control: 'object' },
      search: { control: 'object' },
      language: { control: 'object' },
      menu: { control: 'object' },
      disableCss: { control: 'boolean' },
      disableJs: { control: 'boolean' }
    }
  })
</script>

<Story name="Normal">
  {#snippet children(args)}
    <header class="mt-header" use:wrapInShadowDom={args.disableCss}>
      <div class="container mt-header-wrapper mt-header-wrapper--regular">
        <a href="https://mattilsynet.no/" class={styles.logo} aria-label="Gå til forside"></a>
        <Dropdown
          title="Språk/language"
          loadJs={!args.disableJs}
          class="m-r-xxs mt-button__small-text full-menu responsive-hide"
          icon="icon--caret-down-after">
          {#snippet children({ titleId })}
            <ol
              class="mt-ol alt-language m-t-0 layout-grid layout-grid--column-12 container"
              aria-labelledby={titleId}>
              {#each args.items as item}
                <li class="col-4-span-6">
                  <a href={item.url} class="mt-link forward-arrow">{item.title}</a>
                </li>
              {/each}
            </ol>
          {/snippet}
        </Dropdown>
        <Dropdown
          title={args.search.linkText}
          loadJs={!args.disableJs}
          class="m-r-xxs mt-button__small-text full-menu"
          icon="icon--search-after"
          bind:isOpen>
          {#snippet children({ titleId })}
            <form
              role="search"
              method="GET"
              class="mt-form form-layout layout-grid layout-grid--column-12 container"
              aria-labelledby={titleId}
              onsubmit={e => {
                e.preventDefault()
                onSubmit()
                isOpen = false
              }}>
              <Search
                shouldFocus={isOpen}
                class="col-4-span-6"
                bind:searchString
                name="search"
                searchButtonText={args.search.linkText}
                ariaControls="search-status" />
            </form>
          {/snippet}
        </Dropdown>
        <Dropdown
          title={args.menu.title}
          class="mt-button__small-text full-menu"
          loadJs={!args.disableJs}
          icon="icon--hamburger-menu-on-light-after">
          {#snippet children({ titleId })}
            <nav class="layout-grid layout-grid--column-12 container">
              <MenuItems
                itemsLeft={args.menu.items}
                itemsRight={args.menu.itemsRight}
                itemsBottom={args.menu.itemsBottom}
                loadJs={!args.disableJs}
                {titleId} />
              <ol
                class="mt-ol alt-language col-1-span-8 m-t-m responsive-show"
                aria-labelledby={titleId}>
                {#each args.items as item}
                  <li>
                    <a href={item.url} class="mt-link forward-arrow">{item.title}</a>
                  </li>
                {/each}
              </ol>
            </nav>
          {/snippet}
        </Dropdown>
      </div>
    </header>
    <div class="container-full-width content shadow-overlay">
      <h1>Lorem tittel</h1>
      <p>Lorem ipsum dolor sit amet</p>
      <a href="/" class="mt-link">Gå til startsiden</a>
    </div>
  {/snippet}
</Story>
