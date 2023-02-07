<script lang="ts">
  import {Meta, Story} from '@storybook/addon-svelte-csf'
  import Tags from '../../src/svelte/components/Tags.svelte'
  import {wrapInShadowDom} from '../utils'

  let closableTags = [
    {text: 'Sverige', ariaLabel: 'Fjern Sverige fra listen'},
    {text: 'Norge', ariaLabel: 'Fjern Norge fra listen'},
    {text: 'Finland', ariaLabel: 'Fjern Finland fra listen'}
  ]

  function reset() {
    closableTags = [
      {text: 'Sverige', ariaLabel: 'Fjern Sverige fra listen'},
      {text: 'Norge', ariaLabel: 'Fjern Norge fra listen'},
      {text: 'Finland', ariaLabel: 'Fjern Finland fra listen'}
    ]
  }
</script>

<Meta
  title="Components/Tags"
  args={{
    tags: [{text: 'Hund'}, {text: 'Katt'}, {text: 'Ilder'}],
    isClosable: true,
    disableCss: false
  }}
  argTypes={{
    tags: {control: 'array'},
    isClosable: {control: 'boolean'},
    disableCss: {control: 'boolean'}
  }} />

<Story name="Normal" let:args>
  <div use:wrapInShadowDom={args.disableCss} />
  <h1>Tags</h1>
  <div class="tags-wrapper">
    <h2>Tags</h2>
    <Tags tags={args.tags} />
    <hr />

    <h2>Lukkbare tags</h2>
    <Tags bind:tags={closableTags} isClosable={args.isClosable} />
    <button class="button button--link" on:click={reset}>Gjenopprett tags</button>
  </div>
</Story>

<style lang="scss">
  .tags-wrapper,
  h2,
  button {
    margin-top: 2rem;
  }
</style>
