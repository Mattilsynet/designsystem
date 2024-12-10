<script lang="ts" module>
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import MenuPointsIcons from '$lib/svelte/content/MenuPointsIcons.svelte'
  import imageFile from '../assets/testbilde.jpg'
  import { wrapInShadowDom } from '../storybook-utils/utils'

  const animalSvg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 56 56' width='56' height='56' fill='none'><circle cx='28' cy='28' r='28' fill='#ABE1CD' fill-opacity='1'></circle><path fill='#054449' d='M44.845 12c-4.791 0-8.86 3.444-9.653 8H20.81c-.83-5.008-5.672-8.464-10.81-7.99-.071 5.465 4.405 10.107 10 9.989L36 22c5.598.117 10.073-4.525 10-9.99L44.846 12Zm-32.596 2.075c3.183.443 5.789 2.791 6.506 5.849-3.181-.443-5.787-2.791-6.506-5.849Zm24.999 5.849c.717-3.059 3.322-5.406 6.505-5.849-.72 3.059-3.325 5.406-6.505 5.849ZM35 35c0 3.86-3.14 7-7 7s-7-3.14-7-7V24h-2v11c0 4.963 4.037 9 9 9s9-4.037 9-9V24h-2v11Z'></path><path fill='#054449' d='M24.5 31a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM31.5 31a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z'></path></svg>`
  const foodSvg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 56 56' width='56' height='56' fill='none'><circle cx='28' cy='28' r='28' fill='#ABE1CD' fill-opacity='1'></circle><path fill='#054449' d='M28 37c-7.146 0-13.058-5.382-13.897-12.305C22.913 30.929 35.986 30.34 44 23a23.91 23.91 0 0 0-16.021-6C22.02 16.933 16.382 19.171 12 23c0 8.822 7.178 16 16 16 7.853 0 14.402-5.687 15.747-13.158a23.944 23.944 0 0 1-2.491 1.665c-1.88 5.515-7.112 9.494-13.256 9.494V37Zm-.019-18c4.739 0 9.259 1.413 12.763 3.985-6.84 5.333-18.59 5.292-25.487.025C18.715 20.421 23.214 19 27.981 19Z'></path></svg>`
  const plantSvg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 56 56' width='56' height='56' fill='none'><circle cx='28' cy='28' r='28' fill='#ABE1CD' fill-opacity='1'></circle><path fill='#054449' d='M39.422 14c-4.963 0-9.356 2.78-11.66 6.912.495.535.953 1.107 1.37 1.708 1.748-3.746 5.44-6.38 9.7-6.603-.596 4.57-3.862 8.28-8.105 9.535.253.613.468 1.247.642 1.898 5.739-1.667 9.688-7.272 9.631-13.436L39.423 14h-.001ZM29.985 31.654c.039-8.093-7.028-14.405-14.984-13.623-.097 7.382 5.616 13.788 12.985 13.99V42.04h2.002c-.001-3.74.004-9.295-.004-10.384h.001Zm-12.816-11.62c5.45.286 9.974 4.519 10.68 9.978-5.447-.287-9.97-4.52-10.68-9.978Z'></path></svg>`
  const waterSvg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 56 56' width='56' height='56' fill='none'><circle cx='28' cy='28' r='28' fill='#ABE1CD' fill-opacity='1'></circle><path fill='#054449' d='m37.254 18-.967 5.413c-4.808-3.937-11.793-3.955-16.573.011L18.388 16h21.254l.357-2H16l5 28h14l4.286-24h-2.032Zm-9.267 4.454c2.596 0 5.084.898 7.073 2.538-3.892 3.394-10.195 3.368-14.12.013a10.905 10.905 0 0 1 7.047-2.551ZM33.325 40H22.674l-2.306-12.912c4.548 3.268 10.739 3.286 15.264-.006L33.325 40Z'></path></svg>`
  const cosmeticSvg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 56 56' width='56' height='56' fill='none'><circle cx='28' cy='28' r='28' fill='#ABE1CD' fill-opacity='1'></circle><path fill='#054449' d='M24 30V17.481a10.742 10.742 0 0 0 8 4.493V28h2c-.004-.704.039-6.487-.071-7-.29-6.11-5.944-10.57-11.929-9.989V30h-2v15h16V30H24Zm7.785-10.052c-3.757-.413-6.846-3.233-7.57-6.896 3.76.413 6.849 3.232 7.57 6.896ZM34 43H22V32h12v11Z'></path></svg>`

  const { Story } = defineMeta({
    title: 'Innhold/Menypunkter',
    args: {
      title: `Tittel for menypunktene`,
      menuPoints: [
        {
          text: 'Dyr',
          url: '#',
          keywords: 'Kjæledyr, produksjonsdyr, dyr som lider og dyresykdommer',
          iconResource: animalSvg
        },
        {
          text: 'Fisk og akvakultur',
          url: '#',
          keywords: 'Oppdrettsanlegg, arter, fiske og -skjellsykdommer, animaliebiprodukter ',
          icon: imageFile,
          iconResource: undefined
        },
        {
          text: 'Mat',
          url: '',
          keywords: null,
          iconResource: foodSvg
        },
        {
          text: 'Planter og dyrking',
          url: '#',
          keywords: 'Produksjon og salg, import og eksport, genmodifisering',
          iconResource: plantSvg
        },
        {
          text: 'Produksjon av fisk og sjømat',
          url: '#',
          keywords: 'Beredskap, tilsyn, nasjonale mål, registrering og plangodkjenning',
          iconResource: waterSvg
        },
        {
          text: 'Kosmetikk',
          url: '#',
          keywords: 'Stoffer i kosmetikk, bivirkninger, dyretesting, tatovering',
          iconResource: cosmeticSvg
        }
      ],
      disableJs: false,
      disableCss: false
    },
    argTypes: {
      title: { control: 'string' },
      menuPoints: { control: 'array' },
      disableJs: { control: 'boolean' },
      disableCss: { control: 'boolean' }
    }
  })
</script>

<Story name="Normal">
  {#snippet children({ menuPoints, disableCss })}
    <main use:wrapInShadowDom={disableCss} class="mt-main container layout-flex-col">
      <h1 class="mt-h1 m-b-m">Menypunkter</h1>
      <MenuPointsIcons {menuPoints} />
    </main>
  {/snippet}
</Story>
