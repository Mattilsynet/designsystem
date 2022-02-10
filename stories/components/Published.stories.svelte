<script lang="ts">
  import {Meta, Story} from '@storybook/addon-svelte-csf'
  import Published from '../../src/svelte/Published.svelte'
</script>

<Meta
  title="Components/Publisert"
  args={{
    publishFrom: '2021-06-24T11:40:02.889Z',
    professionallyUpdated: '2021-06-26T11:32:22Z',
    disableCss: false
  }}
  argTypes={{
    publishFrom: {control: 'text'},
    professionallyUpdated: {control: 'text'},
    disableCss: {control: 'boolean'}
  }} />

<Story name="Normal" let:publishFrom let:professionallyUpdated>
  <div class="container layout-grid layout-grid--column-12">
    <article class="col-3-span-8">
      <h1>Publisert og faglig oppdatert er samme dato</h1>
      <div class="intro" />
      <Published {publishFrom} {professionallyUpdated} />
    </article>
  </div>
</Story>
