<script lang="ts">
  import {Meta, Story} from '@storybook/addon-svelte-csf'
  import {wrapInShadowDom} from '../storybook-utils/utils'
  import colors from '@mattilsynet/designsystem-css/src/utilities/colors'
</script>

<Meta
  title="Visual Style/Colors"
  args={{
    disableCss: false
  }}
  argTypes={{
    title: {control: 'text'},
    disableCss: {control: 'boolean'}
  }} />
<Story name="All" let:primary let:disableCss>
  <div
    use:wrapInShadowDom={disableCss}
    class="layout-grid layout-grid--column-3"
    style="--wrap: wrap">
    {#each colors as color}
      <div class="layout-flex-col">
        <div class="colors" style={`background-color: var(--color-${color.name})`} />
        <span class="text-small">Navn: {color.name}</span>
        {#if color.alias}
          <span class="text-small">Alias: {color.alias}</span>
        {/if}
        <span class="text-small">Farge: {color.color}</span>
      </div>
    {/each}
  </div>
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
