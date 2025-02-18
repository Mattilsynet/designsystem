<script lang="ts" module>
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import Tag from '$lib/svelte/components/Tag.svelte'
  import { wrapInShadowDom } from './storybook-utils/utils'
  import { styles } from '@mattilsynet/design'

  const { Story } = defineMeta({
    title: 'Components/Tag',
    args: {
      disableCss: false,
      tags: [
        { text: 'PDF', color: 'info' },
        { text: 'Altinn', color: 'success' },
        { text: 'Altinn', color: 'warning' },
        { text: 'Altinn', color: 'danger' },
        { text: 'Mattilsynets skjematjenester', color: 'neutral' }
      ]
    },
    argTypes: {
      disableCss: { control: 'boolean' },
      tags: { control: 'object' }
    }
  })
</script>

<Story name="Normal">
  {#snippet children(args)}
    <div use:wrapInShadowDom={args.disableCss}></div>
    <h1 class="mt-h1">Tags</h1>
    <div class={styles.grid}>
      <h2>Tags med forskjellige farger:</h2>
      <div class={styles.flex}>
        {#each args.tags as tag}
          <Tag data-color={tag.color}>{tag.text}</Tag>
        {/each}
      </div>
      <h2>Tags uten ikon:</h2>
      <div class={styles.flex}>
        {#each args.tags as tag}
          <Tag data-icon={false} data-color={tag.color}>{tag.text}</Tag>
        {/each}
      </div>
    </div>
  {/snippet}
</Story>
