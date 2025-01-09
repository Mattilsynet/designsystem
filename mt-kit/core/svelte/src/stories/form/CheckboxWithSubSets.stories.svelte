<script lang="ts" module>
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import CheckboxWithSubSets from '$lib/svelte/components/form/CheckboxWithSubSets.svelte'
  import Disclosure from '$lib/svelte/components/Disclosure.svelte'
  import { wrapInShadowDom } from '../storybook-utils/utils'
  import { interpolate, toKebabCase } from '$lib/ts/utils'

  let options = $state({
    key: 'all',
    children: [
      {
        key: 'dyr',
        displayName: 'Dyr asdflaksjdf alksadfjklfdasjkfds  sdaff ads asd kaldsfjs',
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
            displayName: 'Dyresykdommer asdfasd asdfjas asd asdf afdasdfasdfdsdasdf',
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
  })

  const { Story } = defineMeta({
    title: 'Components/Form/CheckboxWithSubsets',
    args: {
      disableCss: false,
      disableJs: false,
      legend: 'Tema',
      variation: 'primary',
      options: options,
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
      border: false,
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
    },
    argTypes: {
      disableCss: { control: 'boolean' },
      disableJs: { control: 'boolean' },
      variation: {
        options: ['primary', 'secondary'],
        control: 'radio'
      }
    }
  })
</script>

<Story name="Normal">
  {#snippet children({
    disableJs,
    legend,
    disableCss,
    variation,
    optionsWithoutDocCount,
    border,
    disclosure,
    disclosureOptions
  })}
    <div class="container layout-grid layout-grid--column-12" use:wrapInShadowDom={disableCss}>
      <section class="article-page col-1-span-12">
        <h1 class="mt-h1">Nested checkbox</h1>
        <h2 class="mt-h2">Nested checkbox with doc count</h2>
        <p>Use variation="primary" (default) when checkboxes stand alone</p>
        <form class="mt-form">
          <CheckboxWithSubSets
            helpText="Velg et tema"
            bind:options
            {variation}
            level1Legend={legend}
            level2Legend={`${legend} i `}
            loadJs={!disableJs} />
        </form>
        <h2 class="mt-h2">Nested checkboxes without doc count and border</h2>
        <p>User variation="primary" (default) when checkboxes stand alone</p>
        <form class="mt-form">
          <CheckboxWithSubSets
            options={optionsWithoutDocCount}
            {variation}
            level1Legend="Tema uten antall"
            {border}
            level2Legend={`${legend} i `}
            loadJs={!disableJs} />
          <h2 class="mt-h3">Variation = secondary</h2>
          <CheckboxWithSubSets
            options={optionsWithoutDocCount}
            variation="secondary"
            level1Legend="legend 1"
            level2Legend="legend 2"
            {border}
            loadJs={!disableJs} />
        </form>
        <h2 class="mt-h2">Nestede checkboxet inside disclosure</h2>
        <p>
          Use variation="secondary" when checkboxes are used in combination with another component
          which has the title for the checkboxes, eg. Disclosure
        </p>
        <form class="mt-form">
          <Disclosure
            title={disclosure.title}
            loadJs={!disableJs}
            class="disclosure-no-border--align-left"
            id={`${toKebabCase(disclosure.title)}-title`}
            headerTag={disclosure.headerTag}>
            <CheckboxWithSubSets
              variation="secondary"
              options={disclosureOptions}
              hasCheckAll={true}
              checkAllLabel={disclosure.checkAllLabel}
              level1Legend={interpolate(disclosure.level1Legend, [disclosure.title.toLowerCase()])}
              loadJs={!disableJs} />
          </Disclosure>
        </form>
      </section>
    </div>
  {/snippet}
</Story>

<style lang="scss">
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
