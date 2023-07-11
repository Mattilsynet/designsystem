<script lang="ts">
  import {Meta, Story} from '@storybook/addon-svelte-csf'
  import CheckboxWithSubSets from '../../../src/svelte/components/form/CheckboxWithSubSets.svelte'
  import Disclosure from '../../../src/svelte/components/Disclosure.svelte'
  import {wrapInShadowDom} from '../utils'
  import {interpolate, toKebabCase} from '../../../src/ts/utils'
</script>

<Meta
  title="Components/Form/CheckboxWithSubsets"
  disableCss:
  false
  args={{
    legend: 'Tema',
    variation: 'primary',
    options: {
      key: 'all',
      children: [
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
    },
    optionsWithoutDocCount: {
      key: 'all2',
      children: [
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
    },
    disclosure: {
      title: 'Dyr',
      headerTag: 'h2',
      level1Legend: 'Velg tema innen {0}',
      level2Legend: 'Ønsker du å velge bare spesifikke tema?',
      checkAllLabel: 'Velg alle',
      checkAllValue: 'dyr3'
    },
    disclosureOptions: {
      key: 'alldyr',
      checked: false,
      children: [
        {
          key: 'produksjonsdyr3',
          displayName: 'Produksjonsdyr',
          children: [
            {
              key: 'produksjonsdyr3/hest',
              displayName: 'Hest',
              children: []
            },
            {
              key: 'produksjonsdyr3/storfe',
              displayName: 'Storfe',
              children: []
            },
            {
              key: 'produksjonsdyr3/kanin',
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
              key: 'dyresykdommer3/afrikanskHestepest',
              displayName: 'Afrikansk hestepest',
              children: []
            },
            {
              key: 'dyresykdommer3/afrikanskSvinepest',
              displayName: 'Afrikansk svinepest',
              children: []
            }
          ]
        },
        {
          key: 'dyr-som-lider',
          displayName: 'Dyr som lider',
          children: []
        }
      ]
    }
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
      <h1>Nested checkbox</h1>
      <h2>Nested checkbox with doc count</h2>
      <p>Use variation="primary" (default) when checkboxes stand alone</p>
      <form>
        <CheckboxWithSubSets
          helpText="Velg et tema"
          {options}
          {variation}
          level1Legend={legend}
          level2Legend={`${legend} i `} />
      </form>
      <h2>Nested checkboxes without doc count</h2>
      <p>User variation="primary" (default) when checkboxes stand alone</p>
      <form>
        <CheckboxWithSubSets
          options={optionsWithoutDocCount}
          {variation}
          level1Legend="Tema uten antall"
          level2Legend={`${legend} i `} />
      </form>
      <h2>Nestede checkboxet inside disclosure</h2>
      <p>
        Use variation="secondary" when checkboxes are used in combination with another component
        which has the title for the checkboxes, eg. Disclosure
      </p>
      <form>
        <Disclosure
          title={args.disclosure.title}
          loadJs={!args.disableJs}
          class="disclosure-no-border--align-left"
          headingId={`${toKebabCase(args.disclosure.title)}-title`}
          headerTag={args.disclosure.headerTag}>
          <CheckboxWithSubSets
            variation="secondary"
            options={args.disclosureOptions}
            hasCheckAll={true}
            checkAllLabel={args.disclosure.checkAllLabel}
            level1Legend={interpolate(args.disclosure.level1Legend, [
              args.disclosure.title.toLowerCase()
            ])}
            level2Legend={args.disclosure.level2Legend} />
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
