<script lang="ts" module>
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import Tags from '$lib/svelte/components/Tags.svelte'
  import { wrapInShadowDom } from './storybook-utils/utils'

  let closableTags = $state([
    { text: 'Sverige', ariaLabel: 'Fjern Sverige fra listen' },
    { text: 'Norge', ariaLabel: 'Fjern Norge fra listen' },
    { text: 'Finland', ariaLabel: 'Fjern Finland fra listen' }
  ])

  function reset() {
    closableTags = [
      { text: 'Sverige', ariaLabel: 'Fjern Sverige fra listen' },
      { text: 'Norge', ariaLabel: 'Fjern Norge fra listen' },
      { text: 'Finland', ariaLabel: 'Fjern Finland fra listen' }
    ]
  }

  const { Story } = defineMeta({
    title: 'Components/Tags',
    args: {
      tags: [
        { text: 'Hund', color: 'no-color' },
        { text: 'Katt', color: 'no-color' },
        { text: 'Ilder', color: 'no-color' }
      ],
      tagsWithColor: [
        { text: 'PDF', color: 'info' },
        { text: 'Altinn', color: 'success' },
        { text: 'Altinn', color: 'warning' },
        { text: 'Altinn', color: 'error' },
        { text: 'Mattilsynets skjematjenester', color: 'neutral' }
      ],
      isClosable: true,
      disableCss: false
    },
    argTypes: {
      tags: { control: 'array' },
      isClosable: { control: 'boolean' },
      disableCss: { control: 'boolean' }
    }
  })
</script>

<Story name="Normal">
  {#snippet children(args)}
    <div use:wrapInShadowDom={args.disableCss}></div>
    <h1 class="mt-h1">Tags</h1>
    <div class="tags-wrapper">
      <article>
        <h2 class="mt-h2">Tags</h2>
        <Tags tags={args.tags} />
      </article>
      <article>
        <h2 class="mt-h2">Lukkbare tags</h2>
        <Tags bind:tags={closableTags} isClosable={args.isClosable} />
        <button class="mt-button mt-button--link" onclick={reset}>Gjenopprett tags</button>
      </article>
      <article>
        <h2 class="mt-h2">Tags med forskjellige farger</h2>
        <Tags tags={args.tagsWithColor} />
      </article>
    </div>
  {/snippet}
</Story>

<style lang="scss">
  .tags-wrapper,
  h2,
  button {
    margin-top: 2rem;
  }
</style>
