<script lang="ts">
  import {Meta, Story} from '@storybook/addon-svelte-csf'
  import CheckboxWithSubSets from '../../../src/svelte/components/form/CheckboxWithSubSets.svelte'
  import Disclosure from '../../../src/svelte/components/Disclosure.svelte'
  import {wrapInShadowDom} from '../../utils'
  import {interpolate, toKebabCase} from '../../../src/ts/utils'
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
    ],
    disclosure: {
      title: 'Dyr',
      headerTag: 'h2',
      categoryLegend: 'Velg tema innen {0}',
      subCategoryLegend: 'Ønsker du å velge bare spesifikke tema innen {0}'
    },
    disclosureOptions: [
      {
        key: 'produksjonsdyr3',
        displayName: 'Produksjonsdyr',
        children: [
          {
            key: 'hest',
            displayName: 'Hest',
            children: []
          },
          {
            key: 'storfe',
            displayName: 'Storbe',
            children: []
          },
          {
            key: 'kanin',
            displayName: 'Kanin',
            children: []
          }
        ]
      },
      {
        key: 'dyresykdommer3',
        displayName: 'Dyresykdommer',
        children: [
          {
            key: 'afrikanskHestepest',
            displayName: 'Afrikansk hestepest',
            children: []
          },
          {
            key: 'afrikanskSvinepest',
            displayName: 'Afrikansk svinepest',
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

<Story
  name="Normal"
  let:legend
  let:options
  let:disableCss
  let:variation
  let:optionsWithoutDocCount
  let:args>
  <div class="container layout-grid layout-grid--column-12" use:wrapInShadowDom={disableCss}>
    <section class="article-page col-1-span-12">
      <h1>Nestede checkboxet</h1>
      <h2>Nestede checkboxet med antall dokumenter</h2>
      <p>Bruk variation="primary" (default) når checkboksene skal stå alene</p>
      <form>
        <CheckboxWithSubSets
          helpText="Velg et tema"
          {legend}
          {options}
          {variation}
          subCategoryLegend={`${legend} i `} />
      </form>
      <h2>Nestede checkboxet without doc count</h2>
      <p>Bruk variation="primary" (default) når checkboksene skal stå alene</p>
      <form>
        <CheckboxWithSubSets
          legend="Tema uten antall"
          options={optionsWithoutDocCount}
          {variation}
          subCategoryLegend={`${legend} i `} />
      </form>
      <h2>Nestede checkboxet inside disclosure</h2>
      <p>
        Bruk variation="secondary" når checkboksens skal brukes i kombinasjon med annen komponent
        som har tittel til checkboksene, eks. Disclosure
      </p>
      <form>
        <Disclosure
          title={args.disclosure.title}
          loadJs={!args.disableJs}
          class="disclosure-no-border--align-left"
          headingId={`${toKebabCase(args.disclosure.title)}-title`}
          headerTag={args.disclosure.headerTag}>
          <CheckboxWithSubSets
            legend={interpolate(args.disclosure.categoryLegend, [
              args.disclosure.title.toLowerCase()
            ])}
            options={args.disclosureOptions}
            variation="secondary"
            subCategoryLegend={args.disclosure.subCategoryLegend} />
        </Disclosure>
      </form>
    </section>
  </div>
</Story>

<style lang="scss">
  #theme {
    margin-top: var(--spacer-medium);
    margin-bottom: var(--spacer-xx-small);
  }
  h2 {
    margin-top: var(--spacer-medium);
  }
  h2 + p {
    margin-bottom: var(--spacer-xx-small);
  }
  section {
    margin-bottom: var(--spacer-medium);
  }
</style>
