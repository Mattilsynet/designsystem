<script lang="ts">
  import {Meta, Story} from '@storybook/addon-svelte-csf'
  import MenuPoints from '../../src/svelte/MenuPoints.svelte'
</script>

<Meta
  title="Components/Menypunkter"
  args={{
    title: `Kort tittel for temasiden`,
    menuPoints: [
      {
        type: 'no.mattilsynet.app:theme-page',
        _id: 'a87415eb-5845-414a-9cdf-f1cb9e4453f9',
        _path: '/mattilsynet/cypress-test/radioaktivitet',
        url: '/cypress-test/radioaktivitet',
        displayName: 'Radioaktivitet',
        language: 'nb',
        noindex: false,
        title: 'Radioaktivitet og atomberedskap',
        shortTitle: 'Radioaktivitet',
        intro: 'undefined',
        topic: undefined,
        publishFrom: '2022-09-08T11:32:03.116Z',
        professionallyUpdated: undefined,
        keywords:
          'nukes, radio, putin, hiroshima, trump, avfall, verdens undergang, nødrasjoner og bunkers',
        icon: 'http://localhost:8080/api/_/image/8be9c413-6ab2-4e11-a612-8e4bd3c28e1e:dd99b6f0c1c05e5a3573880844830b5b9a7464c9/block-30-30/grisen2.png'
      }
    ],
    disableJs: false,
    disableCss: false
  }}
  argTypes={{
    title: {control: 'string'},
    menuPoints: {control: 'list'},
    disableJs: {control: 'boolean'},
    disableCss: {control: 'boolean'}
  }} />

<Story name="Normal" let:title let:menuPoints let:disableCss let:date>
  <main class="container layout-flex-col">
    <h1>Menypunkter</h1>
    <section class="layout-flex-col">
      <MenuPoints {menuPoints} {title} />
    </section>
  </main>
</Story>
