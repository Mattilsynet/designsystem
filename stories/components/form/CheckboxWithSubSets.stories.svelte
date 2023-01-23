<script lang="ts">
  import {Meta, Story} from '@storybook/addon-svelte-csf'
  import CheckboxWithSubSets from '../../../src/svelte/components/form/CheckboxWithSubSets.svelte'
  import {wrapInShadowDom} from '../../utils'
</script>

<Meta
  title="Components/Form/CheckboxWithSubsets"
  disableCss:
  false
  args={{
    legend: 'Checkbox with subsets',
    options: [
      {
        key: 'dyr',
        displayName: 'Dyr',
        docCount: 49,
        children: [
          {
            key: 'produksjonsdyr',
            displayName: 'Produksjonsdyr',
            docCount: 38,
            children: []
          },
          {
            key: 'dyresykdommer',
            displayName: 'Dyresykdommer',
            docCount: 2,
            children: []
          },
          {
            key: 'kjaeledyr',
            displayName: 'Kjæledyr',
            docCount: 1,
            children: []
          }
        ]
      },
      {
        key: 'fisk-og-akvakultur',
        displayName: 'Fisk og akvakultur',
        docCount: 1,
        children: [
          {
            key: 'fiskesykdommer',
            displayName: 'Fiskesykdommer',
            docCount: 1,
            children: []
          }
        ]
      },
      {
        key: 'mat',
        displayName: 'Mat',
        docCount: 3,
        children: [
          {
            key: 'import-av-mat',
            displayName: 'Import av mat',
            docCount: 1,
            children: [
              {
                key: 'kommersiell-import',
                displayName: 'Kommersiell import',
                docCount: 1,
                children: []
              }
            ]
          }
        ]
      },
      {
        key: 'kosmetikk',
        displayName: 'Kosmetikk',
        docCount: 1,
        children: []
      }
    ]
  }}
  argTypes={{
    title: {control: 'text'},
    disableCss: {control: 'boolean'}
  }} />

<Story name="Normal" let:legend let:options let:disableCss>
  <div use:wrapInShadowDom={disableCss}>
    <form>
      <CheckboxWithSubSets {legend} {options} />
    </form>
  </div>
</Story>

<style lang="scss">
  #theme {
    margin-top: var(--spacer-medium);
    margin-bottom: var(--spacer-xx-small);
  }
</style>
