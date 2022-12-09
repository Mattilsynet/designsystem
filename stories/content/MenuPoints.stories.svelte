<script lang="ts">
  import {Meta, Story} from '@storybook/addon-svelte-csf'
  import MenuPoints from '../../src/svelte/content/MenuPoints.svelte'
  import imageFile from '../../.static/testbilde.jpg'
  import {wrapInShadowDom} from '../utils'

  const animalSvg = `<svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 34 28" xml:space="preserve"><style type="text/css">\t.st0{fill-rule:evenodd;clip-rule:evenodd;fill:#F9F6F1;}</style><path class="st0" d="M16.8,22.8c-2.2,0-3.9-1.8-3.9-3.9c0-2.2,1.8-3.9,3.9-3.9c2.2,0,3.9,1.8,3.9,3.9C20.7,21.1,19,22.8,16.8,22.8z\t M16.8,16.4c-1.4,0-2.5,1.1-2.5,2.5s1.1,2.5,2.5,2.5c1.4,0,2.5-1.1,2.5-2.5C19.3,17.5,18.2,16.4,16.8,16.4z M17.9,18.1\tc-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7c0.4,0,0.7-0.3,0.7-0.7C18.6,18.4,18.3,18.1,17.9,18.1z M15.7,18.1\tc-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7s0.7-0.3,0.7-0.7C16.5,18.4,16.1,18.1,15.7,18.1z M27.9,1.4C27.2,1,26,1,24.8,1.6\tc-1.2,0.6-2.3,1.5-3,2.8c-0.1,0.2-0.2,0.4-0.3,0.6c-1.4-0.7-3-1-4.6-1h0h0c-1.7,0-3.2,0.4-4.6,1c-0.1-0.2-0.2-0.4-0.3-0.6\tc-0.7-1.2-1.8-2.2-3-2.8C7.6,1,6.4,1,5.7,1.4C4.3,2.3,4.3,4.6,5.6,7.2l1.5,2.7C6.4,11.4,6,13,6,14.7c0,4.4,2.6,8.3,6.6,10\tc0.9,1.4,2.5,2.2,4.2,2.2v0h0h0v0c1.7,0,3.2-0.8,4.2-2.2c4-1.7,6.6-5.6,6.6-10c0-1.7-0.4-3.3-1.1-4.8L28,7.2\tC29.3,4.6,29.3,2.3,27.9,1.4z M6.9,6.6C5.9,4.5,6,3,6.4,2.7c0.3-0.2,0.9-0.2,1.8,0.2c0.9,0.4,1.8,1.2,2.4,2.2\tc0.1,0.2,0.2,0.4,0.3,0.6C9.8,6.4,8.8,7.4,8,8.5L6.9,6.6z M20.2,23.4c-0.1,0.1-0.3,0.2-0.4,0.3c-0.7,1.1-1.8,1.7-3.1,1.7\tc-1.3,0-2.4-0.7-3.1-1.7c-0.1-0.1-0.2-0.2-0.4-0.3c-3.6-1.4-5.9-4.8-5.9-8.7c0-5.2,4.2-9.4,9.4-9.4c5.2,0,9.4,4.2,9.4,9.4\tC26.2,18.6,23.9,22,20.2,23.4z M26.7,6.6l-1.1,1.9c-0.8-1.1-1.8-2.1-3-2.8c0.1-0.2,0.2-0.4,0.3-0.6c0.6-1,1.5-1.8,2.4-2.2\tc0.8-0.4,1.5-0.4,1.8-0.2C27.7,3,27.8,4.5,26.7,6.6z M13.7,11.7c0,0.4-0.3,0.8-0.8,0.8c-0.4,0-0.8-0.3-0.8-0.8\tc0-0.4,0.3-0.8,0.8-0.8C13.4,11,13.7,11.3,13.7,11.7z M20.6,12.5c0.4,0,0.8-0.3,0.8-0.8c0-0.4-0.3-0.8-0.8-0.8s-0.8,0.3-0.8,0.8\tC19.8,12.1,20.1,12.5,20.6,12.5z"></path></svg>`
  const foodSvg = `<svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 34 28" xml:space="preserve"><style type="text/css">\t.st0{fill-rule:evenodd;clip-rule:evenodd;fill:#F9F6F1;}\t.st1{fill:#F9F6F1;}</style><path class="st0" d="M18.6,2.2c3.7,0.5,6.8,2.4,8.6,3.9l0.3,0.3L16.8,25.5L6,6.4l0.3-0.3C10.5,2.4,14.8,1.6,18.6,2.2z M7.4,6.6\tl9.4,16.6l9.4-16.6c-1.7-1.4-4.4-2.9-7.7-3.4C15.1,2.8,11.2,3.4,7.4,6.6z"></path><path class="st1" d="M15.6,7.6c0,0.9-0.8,1.7-1.7,1.7c-0.9,0-1.7-0.8-1.7-1.7c0-0.9,0.8-1.7,1.7-1.7C14.9,5.9,15.6,6.7,15.6,7.6z"></path><path class="st1" d="M17.9,15.4c0,0.9-0.8,1.7-1.7,1.7c-0.9,0-1.7-0.8-1.7-1.7c0-0.9,0.8-1.7,1.7-1.7C17.1,13.7,17.9,14.5,17.9,15.4\tz"></path></svg>`
  const plantSvg = `<svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 34 28" xml:space="preserve"><style type="text/css">\t.st0{fill:#F9F6F1;}</style><path class="st0" d="M27.9,3.5l0-0.4L27.5,3c-0.6-0.2-1.3-0.2-1.9-0.2c-1.8,0-3.5,0.6-4.9,1.8c-1.8,1.5-2.8,3.8-2.7,6.2\tc-0.1,0.2-0.3,0.4-0.4,0.5c0-2.1-0.7-4.2-2-6c-1.9-2.6-5.1-4.2-8.4-4.1l-0.4,0L6.7,1.5c-1,3.1-0.5,6.6,1.4,9.2\tc1.7,2.3,4.3,3.8,7.2,4.1c0,0.5,0,1-0.2,1.6c-0.1,0.4-0.2,0.8-0.3,1.2c0,0,0,0.1,0,0.1c0,0.1,0,0.1,0,0.2c0,0.2-0.1,0.4-0.1,0.7\tc-0.4-0.6-1-1.2-1.7-1.5c-0.7-0.3-1.4-0.5-2.1-0.5c-0.8,0-1.5,0.2-2.2,0.5l-0.4,0.2l0.1,0.4c0.2,1.5,1.2,2.8,2.5,3.5\tc0.7,0.3,1.4,0.5,2.1,0.5h0c0.5,0,1.1-0.1,1.6-0.3c0.1,2.8,0.7,4.8,0.7,4.9c0,0.1,0.1,0.1,0.1,0.2c0,0,0,0,0,0h0\tc0.1,0.1,0.3,0.2,0.5,0.2c0.1,0,0.1,0,0.2,0c0.3-0.1,0.5-0.4,0.4-0.8c0,0,0-0.1,0-0.1c0,0,0,0,0,0c0-0.1,0-0.1-0.1-0.2\tc0,0,0,0,0-0.1c0,0,0,0,0-0.1c0,0,0-0.1,0-0.1c0,0,0,0,0-0.1c0,0,0-0.1,0-0.1c0,0,0,0,0,0c-0.3-1.2-0.7-3.5-0.3-6.2c0,0,0-0.1,0-0.1\tc0-0.1,0-0.2,0-0.3c0,0,0-0.1,0-0.1c0-0.1,0-0.2,0.1-0.4c0,0,0,0,0,0c0.1-0.4,0.2-0.9,0.3-1.3c0,0,0-0.1,0-0.1\tc0.2-0.6,0.4-1.2,0.6-1.8l0,0l0.1-0.4c0,0,0,0,0,0c0.5-1,1-2,1.7-2.9c0.5,0.1,1,0.2,1.6,0.2c1.8,0,3.5-0.6,4.9-1.8\tC27.1,8.4,28.1,6,27.9,3.5z M8.7,9c-1.5-2-1.5-5.7-1-6.8c1.5-0.1,5.1,1.3,6.6,3.1c1.4,1.9,2.5,4.6,1.8,7.6c-0.5-1.1-1.6-2.4-2.6-3.8\tc-0.5-0.7-1.1-1.4-1.7-2.2c-0.2-0.3-0.6-0.3-0.8-0.1c-0.3,0.2-0.3,0.6-0.1,0.8c0.6,0.8,1.2,1.6,1.7,2.3c0.9,1.2,1.5,2.2,2.3,3.6\tC11.7,13.2,10.2,11.3,8.7,9z M11.2,20.1c-0.9-0.5-1.6-1.7-1.7-2.2c0.5-0.2,1.5-0.5,2.7,0.2c1.2,0.7,1.4,1.5,1.4,1.9\tC13.1,20.4,12.2,20.7,11.2,20.1z M25,8.6c-0.9,0.8-3.6,2.4-5.2,1.9c0.8-0.7,2.2-1.9,3.7-3c0.3-0.3,0.4-0.5,0.2-0.8\tc-0.2-0.3-0.5-0.4-0.8-0.2c-0.9,0.6-2.4,1.8-3.5,2.8c0.1-1.7,1.6-3.5,2.8-4.3c1.4-0.8,3.6-1.1,4.7-0.9C26.9,5.2,26.3,7.4,25,8.6z"></path></svg>`
  const waterSvg = `<svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 34 28" xml:space="preserve"><style type="text/css">\t.st0{fill-rule:evenodd;clip-rule:evenodd;fill:#F9F6F1;}</style><path class="st0" d="M26.6,2.2c0.2,0,0.4,0.1,0.5,0.2c0.1,0.1,0.2,0.3,0.1,0.5l-3.8,22.2c-0.1,0.3-0.3,0.5-0.7,0.5H10.7\tc-0.3,0-0.6-0.2-0.7-0.5L6.2,3c0-0.2,0-0.4,0.1-0.5c0.1-0.1,0.3-0.2,0.5-0.2H26.6z M16.5,11.4c3.8,1.9,6.7,0.7,8-0.2l1.3-7.6H7.7\tl1.2,6.7C10.3,10,13.3,9.7,16.5,11.4z M9.3,11.9l2.1,12.5h10.7l2.1-11.1c-2.8,1-4.8,1-8.3-0.7c-3.2-1.6-5.2-1.1-6.4-0.7\tC9.4,11.9,9.4,11.9,9.3,11.9z"></path></svg>`
  const cosmeticSvg = `<svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 34 28" xml:space="preserve"><style type="text/css">\t.st0{fill:#F9F6F1;}</style><path class="st0" d="M20.3,27.4c-1.6,0-2.9-1.2-2.9-2.8V16l0.3,0v-2.5l5,0l0,2.5l0.3,0l0,8.7C23.1,26.2,21.9,27.4,20.3,27.4z\t M18.5,17.4v7.2c0,1,0.8,1.7,1.7,1.7c0.9,0,1.7-0.8,1.7-1.7v-7.2H18.5z M21.7,16.3v-1.7h-2.8v1.7H21.7z M21.8,12.4l0-4.4l-3,1l0,3.5\tL21.8,12.4z M13.1,27.3c-1.5,0-2.7-1.5-2.7-3.3l0-9.6l2.2,0l0-13.2c0,0,0.1-0.6,0.6-0.6c0.5,0,0.5,0.6,0.5,0.6l0,13.1l2.2,0v9.6\tC15.8,25.8,14.6,27.3,13.1,27.3z M11.5,15.4v8.7c0,1.2,0.7,2.1,1.6,2.1c0.9,0,1.6-1,1.6-2.1v-8.7H11.5z"></path><path class="st0" d="M14.3,1.3h-2.5v0.4h2.5V1.3z"></path><path class="st0" d="M14.3,1.8h-2.5v0.4h2.5V1.8z"></path><path class="st0" d="M14.3,2.3h-2.5v0.4h2.5V2.3z"></path><path class="st0" d="M14.3,2.8h-2.5v0.4h2.5V2.8z"></path><path class="st0" d="M14.3,3.2h-2.5v0.4h2.5V3.2z"></path><path class="st0" d="M14.3,3.7h-2.5v0.4h2.5V3.7z"></path><path class="st0" d="M14.3,4.2h-2.5v0.4h2.5V4.2z"></path><path class="st0" d="M14.3,4.7h-2.5v0.4h2.5V4.7z"></path><path class="st0" d="M14.3,5.3h-2.5v0.4h2.5V5.3z"></path><path class="st0" d="M14.3,5.9h-2.5v0.4h2.5V5.9z"></path><path class="st0" d="M14.3,6.5h-2.5v0.4h2.5V6.5z"></path></svg>`
</script>

<Meta
  title="Innhold/Menypunkter"
  args={{
    title: `Tittel for menypunktene`,
    menuPoints: [
      {
        title: 'Dyr',
        url: '',
        keywords: 'Kjæledyr, produksjonsdyr, dyr som lider og dyresykdommer',
        iconResource: animalSvg
      },
      {
        title: 'Fisk og akvakultur',
        keywords: 'Oppdrettsanlegg, arter, fiske og -skjellsykdommer, animaliebiprodukter ',
        icon: imageFile,
        iconResource: undefined
      },
      {
        title: 'Mat',
        keywords: 'Merking, produksjon, smitte, matservering, import og eksport',
        iconResource: foodSvg
      },
      {
        title: 'Planter og dyrking',
        keywords: 'Produksjon og salg, import og eksport, genmodifisering',
        iconResource: plantSvg
      },
      {
        title: 'Drikkevannsforsyning',
        keywords: 'Beredskap, tilsyn, nasjonale mål, registrering og plangodkjenning',
        iconResource: waterSvg
      },
      {
        title: 'Kosmetikk',
        keywords: 'Stoffer i kosmetikk, bivirkninger, dyretesting, tatovering',
        iconResource: cosmeticSvg
      }
    ],
    disableJs: false,
    disableCss: false
  }}
  argTypes={{
    title: {control: 'string'},
    menuPoints: {control: 'array'},
    disableJs: {control: 'boolean'},
    disableCss: {control: 'boolean'}
  }} />

<Story name="Normal" let:title let:menuPoints let:disableCss>
  <main use:wrapInShadowDom={disableCss} class="container layout-flex-col">
    <h1>Menypunkter</h1>
    <section class="layout-flex-col">
      <MenuPoints {menuPoints} {title} />
    </section>
  </main>
</Story>
