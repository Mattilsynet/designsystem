<script lang="ts" module>
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import { wrapInShadowDom } from '../storybook-utils/utils'
  import colors from '@mattilsynet/designsystem-css/src/utilities/colors'

  const { Story } = defineMeta({
    title: 'Visual Style/Colors',
    args: {
      disableCss: false
    },
    argTypes: {
      title: { control: 'text' },
      disableCss: { control: 'boolean' }
    }
  })
</script>

<Story name="All">
  {#snippet children({ primary, disableCss })}
    <div
      use:wrapInShadowDom={disableCss}
      class="layout-grid layout-grid--column-3"
      style="--wrap: wrap">
      {#each colors as color}
        <div class="layout-flex-col">
          <div class="colors" style={`background-color: var(--color-${color.name})`}></div>
          <span class="text-small">Navn: {color.name}</span>
          {#if color.alias}
            <span class="text-small">Alias: {color.alias}</span>
          {/if}
          <span class="text-small">Farge: {color.color}</span>
        </div>
      {/each}
    </div>
  {/snippet}
</Story>

<style lang="scss">
  .layout-grid {
    background-color: #fff;
  }

  .layout-flex-col {
    --gap: var(--spacer-x-small);

    padding: var(--spacer-xx-small);
  }

  .colors {
    height: 5rem;
  }
</style>
