<script lang="ts">
  import { Meta, Story } from '@storybook/addon-svelte-csf'
  import Dropdown from '../lib/svelte/components/Dropdown.svelte'
  import MenuItems from '../lib/svelte/content/MenuItems.svelte'
  import Search from '../lib/svelte/components/form/Search.svelte'
  import { wrapInShadowDom } from './storybook-utils/utils'

  const drinkIcon =
    '<svg width="34" height="28" viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M26.647 2.238a.661.661 0 0 1 .652.773l-3.803 22.198a.66.66 0 0 1-.651.55H10.722a.662.662 0 0 1-.652-.55L6.225 3.014a.664.664 0 0 1 .652-.775h19.77Zm-10.125 9.125c3.849 1.925 6.675.709 8.03-.156l1.31-7.646h-18.2L8.83 10.3c1.516-.311 4.45-.558 7.692 1.062Zm-7.193.56 2.075 12.452h10.723l2.075-11.068c-2.767 1.037-4.842 1.037-8.301-.692-3.225-1.612-5.175-1.076-6.447-.726l-.125.034Z" fill="#F9F6F1"/></svg>'
  const fishIcon =
    '<svg width="34" height="28" viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M32.011 15.188c.279.34.305.814.025 1.153-1.869 2.27-9.647 9.996-23.395 1.489l-5.86 1.973c-.835.28-1.599-.576-1.224-1.373l2.077-4.422-2.091-5.025c-.345-.828.49-1.656 1.315-1.305l5.782 2.466c13.865-9.878 21.716-.91 23.408 1.397a.91.91 0 0 1 .017 1.032l-.957 1.514.903 1.101Zm-2.381-1.101 1.31-2.038S22.686.89 8.925 11.497L3.229 9.32l1.695 4.573-1.853 4.614 5.56-2.315c13.998 9.896 22.31-.433 22.31-.433l-1.311-1.672Zm-3.415-1.557a1.42 1.42 0 1 0-1.423 1.418c.786 0 1.423-.641 1.423-1.418Z" fill="#F9F6F1"/></svg>'
  const animalIcon =
    '<svg width="34" height="28" viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.815 22.816a3.922 3.922 0 0 1-3.923-3.911 3.922 3.922 0 0 1 3.923-3.912 3.922 3.922 0 0 1 3.923 3.912 3.922 3.922 0 0 1-3.923 3.911Zm0-6.378a2.473 2.473 0 0 0-2.474 2.466c0 1.36 1.11 2.466 2.474 2.466a2.473 2.473 0 0 0 2.473-2.466c0-1.36-1.109-2.466-2.473-2.466Zm1.087 1.679a.724.724 0 1 0 .725.723c0-.4-.324-.723-.725-.723Zm-2.174 0a.724.724 0 1 0 .725.723c0-.4-.325-.723-.725-.723Zm12.22-16.673c-.773-.47-1.945-.425-3.134.122-1.204.552-2.278 1.53-3.027 2.752-.122.2-.236.404-.345.61a10.785 10.785 0 0 0-4.627-1.04h-.006a10.797 10.797 0 0 0-4.626 1.04c-.11-.206-.223-.41-.345-.61-.749-1.222-1.823-2.2-3.027-2.752-1.19-.547-2.362-.592-3.134-.122-1.35.822-1.376 3.198-.053 5.8l1.477 2.675a10.707 10.707 0 0 0-1.117 4.77c0 4.382 2.6 8.263 6.644 9.953a4.995 4.995 0 0 0 4.182 2.239h.006a4.996 4.996 0 0 0 4.182-2.239c4.044-1.69 6.644-5.571 6.644-9.954 0-1.71-.403-3.33-1.116-4.769l1.476-2.676c1.322-2.601 1.295-4.977-.054-5.799ZM6.905 6.568c-1.045-2.054-.943-3.604-.473-3.89.286-.173.945-.18 1.772.2.945.435 1.796 1.214 2.395 2.194.114.185.219.374.319.564A10.907 10.907 0 0 0 7.96 8.48L6.905 6.568Zm13.338 16.82a.72.72 0 0 0-.357.301 3.56 3.56 0 0 1-3.074 1.747 3.562 3.562 0 0 1-3.074-1.747.722.722 0 0 0-.357-.301c-3.613-1.42-5.948-4.835-5.948-8.7 0-5.157 4.207-9.353 9.379-9.355 5.172.002 9.38 4.198 9.38 9.356 0 3.864-2.336 7.279-5.95 8.699Zm6.476-16.82L25.664 8.48a10.896 10.896 0 0 0-2.958-2.844c.1-.19.205-.38.318-.564.6-.98 1.451-1.76 2.396-2.193.827-.38 1.486-.374 1.772-.2.47.285.572 1.835-.473 3.89Zm-12.98 5.16a.758.758 0 1 1-1.514 0 .758.758 0 0 1 1.515 0Zm6.82.758a.758.758 0 1 0 0-1.516.758.758 0 0 0 0 1.516Z" fill="#F9F6F1"/></svg>'
  const animalIconSmall =
    '<svg width="24" height="24" viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="12" fill="#F9F6F1"/><path d="m12.94 16.583-.084 1.765a.162.162 0 0 0 .25.144l1.486-.955a.162.162 0 0 0 .052-.055l4.543-7.87-1.682-.97-4.543 7.868a.163.163 0 0 0-.022.073ZM19.511 9.053l-1.682-.971.89-1.542a.162.162 0 0 1 .221-.06l1.403.81a.162.162 0 0 1 .059.221l-.89 1.542Z" fill="#075B7A"/><path fill="#055B7A" d="M5.52 7.02h9.6v1.8h-9.6zM5.52 10.199h8.04v1.8H5.52zM5.52 13.441H9.6v1.8H5.52z"/></svg>'
  const rightIcon = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="12" fill="#F9F6F1"/>
<path d="M12.9401 16.5834L12.8562 18.3479C12.8499 18.4793 12.9948 18.5629 13.1054 18.4918L14.5915 17.5369C14.6132 17.5229 14.6313 17.504 14.6442 17.4816L19.1873 9.61268L17.5048 8.64125L12.9616 16.5102C12.9487 16.5325 12.9414 16.5577 12.9401 16.5834Z" fill="#075B7A"/>
<path d="M19.5114 9.05346L17.8289 8.08203L18.7193 6.53968C18.764 6.46224 18.8631 6.43571 18.9405 6.48042L20.3426 7.28994C20.4201 7.33465 20.4466 7.43367 20.4019 7.51111L19.5114 9.05346Z" fill="#075B7A"/>
<rect x="5.52002" y="7.01953" width="9.6" height="1.8" fill="#055B7A"/>
<rect x="5.52002" y="10.1992" width="8.04" height="1.8" fill="#055B7A"/>
<rect x="5.52002" y="13.4414" width="4.08" height="1.8" fill="#055B7A"/>
</svg>
`
  let value: string = ''
  let searchString: string = null
  function onSubmit(): void {
    searchString = value ?? ''
  }
</script>

<Meta
  title="Components/Header"
  parameters={{ layout: 'fullscreen' }}
  args={{
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
        { title: 'Planter og dyrking', url: '#', iconResource: animalIcon, children: [] },
        { title: 'Drikkevannforskrift', url: '#', iconResource: drinkIcon, children: [] },
        { title: 'Kosmetikk', url: '#', iconResource: drinkIcon, children: [] }
      ],
      itemsRight: [
        {
          title: 'Om mattilsynet med lang tekst a brekker',
          url: '#'
        },
        {
          title: 'Skjemaer',
          url: '#',
          iconResource: animalIcon
        }
      ],
      itemsBottom: [
        {
          title: 'Skjemaer',
          url: '#',
          iconResource: rightIcon
        },
        {
          title: 'Varsle oss/bekymringsmelding',
          url: '#',
          iconResource: rightIcon
        },
        {
          title: 'Rapporter',
          url: '#'
        },
        {
          title: 'Veiledere',
          url: '#'
        },
        {
          title: 'Varsle oss/bekymringsmelding',
          url: '#'
        },
        {
          title: 'Rapporter',
          url: '#'
        },
        {
          title: 'Veiledere',
          url: '#'
        }
      ]
    },
    disableCss: false,
    disableJs: false
  }}
  argTypes={{
    items: { control: 'array' },
    search: { control: 'object' },
    language: { control: 'object' },
    menu: { control: 'object' },
    disableCss: { control: 'boolean' },
    disableJs: { control: 'boolean' }
  }} />

<Story name="Normal" let:title let:disableCss let:args let:disableJs>
  <header class="mt-header" use:wrapInShadowDom={disableCss}>
    <div class="container mt-header-wrapper mt-header-wrapper--regular">
      <a href="https://mattilsynet.no/" class="mt-link fit-content">
        <svg
          id="mt-logo"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 252 45"
          width="252"
          height="45"
          fill="none"
          ><path
            fill="#054449"
            d="M233.702 30.469c-.823 1.566-2.261 2.364-4.29 2.364-2.747 0-4.914-2.02-5.073-4.716h13.845s.118-.32.118-1.524c0-6.093-3.584-9.866-9.356-9.866-2.392 0-4.752 1-6.472 2.742-1.836 1.855-2.845 4.427-2.845 7.242 0 3.037 1.02 5.632 2.946 7.497 1.781 1.727 4.211 2.679 6.835 2.679 3.95 0 6.488-1.934 7.823-4.175.386-.689.698-1.44.935-2.24h-4.47.004v-.003Zm-4.717-9.808c2.019 0 4.413 1.046 4.57 3.982h-9.095c.256-2.586 2.509-3.982 4.525-3.982ZM145.323 13.827c1.72 0 3.069-1.314 3.069-2.993 0-1.679-1.378-3.032-3.069-3.032a3.023 3.023 0 0 0-3.032 3.032c0 1.672 1.359 2.993 3.032 2.993ZM147.423 17.323h-4.687v19.043h4.687V17.323ZM157.433 8.174h-4.687v28.192h4.687V8.174ZM170.557 24.957l-2.881-.58c-1.146-.226-1.83-.929-1.83-1.875 0-1.16 1.155-2.07 2.628-2.07 2.868 0 3.34 2.281 3.409 2.74l.015.105 3.999-1.134-.014-.084a6.206 6.206 0 0 0-1.817-3.373c-1.355-1.298-3.239-1.958-5.592-1.958-3.893 0-7.061 2.762-7.061 6.159 0 2.78 1.933 4.868 5.17 5.575l2.805.619c1.402.285 2.142.974 2.142 1.992s-.85 2.069-2.747 2.069c-2.564 0-3.626-1.681-3.76-3.12l-.01-.114-4.118 1.134.006.08c.143 1.299.879 2.68 1.97 3.696 1.454 1.35 3.51 2.069 5.946 2.069 4.764 0 7.254-3.079 7.254-6.122 0-3.043-2.012-5.053-5.524-5.81h.009l.001.002ZM209.47 16.802c-2.321 0-4.353 1.047-5.51 2.813v-2.273h-4.585v19.021h4.702v-10.96c0-2.643 1.506-4.35 3.836-4.35 3.303 0 3.796 2.557 3.796 4.08v11.232h4.703V24.36c0-4.662-2.66-7.557-6.942-7.557V16.8v.001ZM123.953 32.265c-.163.032-.9.152-1.538.152-1.623 0-2.316-.676-2.316-2.26V21.14h3.927v-3.79h-3.927v-5.755h-4.271v3c0 1.805-1.029 2.842-2.822 2.842h-1.067v3.704h3.5v9.752c0 3.514 2.21 5.697 5.771 5.697 1.55 0 2.419-.272 2.797-.433l.058-.025v-3.887l-.114.022h.002v-.002ZM138.456 32.265a9.56 9.56 0 0 1-1.537.152c-1.623 0-2.314-.676-2.314-2.26V21.14h3.927v-3.79h-3.927v-5.755h-4.271v3c0 1.805-1.029 2.842-2.822 2.842h-1.067v3.704h3.5v9.752c0 3.514 2.21 5.697 5.772 5.697 1.549 0 2.417-.272 2.796-.433l.059-.025v-3.887l-.115.022v-.002h-.001ZM251.889 32.265a9.664 9.664 0 0 1-1.539.152c-1.625 0-2.318-.676-2.318-2.26V21.14h3.93v-3.79h-3.93v-5.755h-4.27v3c0 1.805-1.031 2.842-2.822 2.842h-1.067v3.704h3.498v9.752c0 3.514 2.214 5.697 5.773 5.697 1.607 0 2.494-.301 2.798-.433l.057-.025v-3.887l-.114.022h.004v-.002ZM180.206 43.656h5.036l12.049-26.333h-5.002l-5.044 11.747-5.365-11.69-.026-.057h-5.319l8.153 16.65-4.482 9.681v.002ZM82.06 8.77l-8.782 20.764-8.872-20.709-.025-.056h-6.39v27.597h4.745v-19.73l8.321 19.604h4.286l8.399-19.682v19.808h4.824V8.77h-6.507.002ZM109.536 36.193h-.006c-.01-.047-.23-1.171-.23-2.994v-9.346c0-2.142-.791-7.125-8.123-7.125-5 0-7.65 3.142-8.03 6.105l4.298.97c.247-1.984 1.68-3.216 3.769-3.216 2.089 0 3.475 1.034 3.475 2.764 0 .462-.136 1.092-1.314 1.257l-4.847.735c-3.62.521-5.782 2.678-5.782 5.772 0 1.527.621 2.957 1.745 4.023 1.21 1.145 2.849 1.75 4.749 1.75 3.31 0 5.023-1.762 5.727-2.76.021 1.317.156 1.997.198 2.113l.022.067h4.372l-.022-.115h-.001Zm-4.848-7.784c0 3.944-2.501 4.771-4.598 4.771-1.827 0-2.66-1.212-2.66-2.339 0-1.785 1.53-2.303 2.44-2.454l4.817-.72h.003v.742h-.002ZM22.31 0C11.745 0 2.9 7.34.595 17.197A24.822 24.822 0 0 1 13.36 20.62c1.036-4.977 5.182-7.415 8.943-7.415 4.037 0 8.476 2.843 9.073 8.29a24.816 24.816 0 0 1 13.005-2.39C42.838 8.304 33.544 0 22.31 0ZM44.608 22.284l-.001-.188c-13.078-1.525-24.756 9.236-24.28 22.386 12.95 1.21 24.35-9.188 24.281-22.198ZM17.335 43.887a24.73 24.73 0 0 1 2.96-11.771C16.581 24.689 8.434 19.826.111 20.163c-1.138 11.215 6.603 21.513 17.225 23.849v-.125Z" /></svg>
      </a>
      <Dropdown
        title="Språk/language"
        loadJs={!args.disableJs}
        class="mt-button__small-text full-menu responsive-hide"
        icon="icon--caret-down-after"
        let:titleId>
        <ol
          class="mt-ol alt-language m-t-0 layout-grid layout-grid--column-12 container"
          aria-labelledby={titleId}>
          {#each args.items as item}
            <li class="col-4-span-6">
              <a href={item.url} class="mt-link forward-arrow-small">{item.title}</a>
            </li>
          {/each}
        </ol>
      </Dropdown>
      <Dropdown
        let:isOpen
        let:send
        title={args.search.linkText}
        loadJs={!args.disableJs}
        class="mt-button__small-text full-menu"
        icon="icon--search-after">
        <form
          role="search"
          method="GET"
          class="mt-form form-layout layout-grid layout-grid--column-12 container"
          on:submit|preventDefault={() => {
            onSubmit()
            send('TOGGLE')
          }}>
          <Search
            shouldFocus={isOpen}
            class="col-4-span-6"
            bind:value
            name="search"
            searchButtonText={args.search.linkText}
            ariaControls="search-status" />
        </form>
      </Dropdown>
      <Dropdown
        title={args.menu.title}
        class="mt-button__small-text full-menu"
        loadJs={!args.disableJs}
        icon="icon--hamburger-menu-on-light-after"
        let:titleId>
        <nav class="layout-grid layout-grid--column-12 container">
          <MenuItems
            itemsLeft={args.menu.items}
            itemsRight={args.menu.itemsRight}
            itemsBottom={args.menu.itemsBottom}
            itemsLanguage={args.items}
            loadJs={!args.disableJs}
            {titleId} />
          <ol
            class="mt-ol alt-language col-1-span-8 m-t-m responsive-show"
            aria-labelledby={titleId}>
            {#each args.items as item}
              <li>
                <a href={item.url} class="mt-link forward-arrow-small">{item.title}</a>
              </li>
            {/each}
          </ol>
        </nav>
      </Dropdown>
    </div>
  </header>
  <div class="container-full-width content shadow-overlay">
    <h1>Lorem tittel</h1>
    <p>Lorem ipsum dolor sit amet</p>
    <a href="/" class="mt-link">Gå til startsiden</a>
  </div>
</Story>
