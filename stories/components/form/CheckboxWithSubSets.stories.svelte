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
    legend: 'Tema',
    variation: 'primary',
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
    ],
    optionsWithoutDocCount: [
      {
        key: 'dyr2',
        displayName: 'Dyr',
        children: [
          {
            key: 'produksjonsdyr2',
            displayName: 'Produksjonsdyr',
            children: []
          },
          {
            key: 'dyresykdommer2',
            displayName: 'Dyresykdommer',
            children: []
          },
          {
            key: 'kjaeledyr2',
            displayName: 'Kjæledyr',
            children: []
          }
        ]
      },
      {
        key: 'fisk-og-akvakultur2',
        displayName: 'Fisk og akvakultur',
        children: [
          {
            key: 'fiskesykdommer2',
            displayName: 'Fiskesykdommer',
            children: []
          }
        ]
      }
    ]
  }}
  argTypes={{
    disableCss: {control: 'boolean'},
    variation: {
      options: ['primary', 'secondary'],
      control: 'radio'
    }
  }} />

<Story name="Normal" let:legend let:options let:disableCss let:variation let:optionsWithoutDocCount>
  <div use:wrapInShadowDom={disableCss}>
    <form>
      <CheckboxWithSubSets {legend} {options} {variation} subCategoryLegend={`${legend} i `} />
    </form>
  </div>
  <div use:wrapInShadowDom={disableCss}>
    <form>
      <CheckboxWithSubSets
        legend="Tema uten antall"
        options={optionsWithoutDocCount}
        {variation}
        subCategoryLegend={`${legend} i `} />
    </form>
  </div>
</Story>

<style lang="scss">
  #theme {
    margin-top: var(--spacer-medium);
    margin-bottom: var(--spacer-xx-small);
  }
</style>
