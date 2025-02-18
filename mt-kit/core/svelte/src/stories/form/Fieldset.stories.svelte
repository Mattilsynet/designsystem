<script lang="ts" module>
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import { wrapInShadowDom } from '../storybook-utils/utils'
  import Fieldset from '$lib/svelte/components/form/Fieldset.svelte'
  import CheckboxWithSubSets from '$lib/svelte/components/form/CheckboxWithSubSets.svelte'
  import Disclosure from '$lib/svelte/components/Disclosure.svelte'
  import { interpolate } from '$lib/ts/utils'
  import type { ErrorDetail } from '$lib/ts'
  import ErrorSummary from '$lib/svelte/components/form/ErrorSummary.svelte'

  const { Story } = defineMeta({
    title: 'Components/Form/Fieldset',
    args: {
      legend: 'Temaer for nyhetsbrev',
      errorsNormal: [],
      errors: [
        {
          key: 'fieldset-id',
          message: 'Fyll inn ett av feltene.'
        }
      ],
      errorSummaryHeading: 'Feil oppstod',
      fieldsetId: 'fieldset-id',
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
            displayName:
              'Produksjonsdyr asdf kljdfalskj sadk ffkljdsas jdfklasj fdlkasdfj lkajs flk fadslkfaj sklsalaslkdladks asdkljdkdajf',
            children: [
              {
                key: 'produksjonsdyr3/hest',
                displayName:
                  'Hest asdf kljdfalskj sadk ffkljdsas jdfklasj fdlkasdfj lkajs flk fadslkfaj sklsalaslkdladks asdkljdkdajf',
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
      },
      hiddenErrorText: 'Fyll inn tekst',
      disableJs: false,
      disableCss: false
    },
    argTypes: {
      legend: { control: 'text' },
      disableJs: { control: 'boolean' },
      disableCss: { control: 'boolean' }
    }
  })
</script>

<Story name="Normal">
  {#snippet children(args)}
    <div use:wrapInShadowDom={args.disableCss}>
      <div class="container layout-grid layout-grid--column-12">
        <section class="article-page col-1-span-12">
          <h1 class="mt-h1">Fieldset</h1>
          <h2 class="mt-h2">Normal</h2>

          <ErrorSummary errors={args.errorsNormal} heading={args.errorSummaryHeading} />
          <form class="mt-form col-3-span-8 form-layout">
            <Fieldset
              class="validation m-t-m"
              legend={args.legend}
              error={args.errorsNormal.find((error: ErrorDetail) => error.key === args.fieldsetId)}>
              <Disclosure
                id={args.fieldsetId}
                title={args.disclosure.title}
                loadJs={!args.disableJs}
                class="disclosure-no-border--align-left"
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
            </Fieldset>
          </form>
        </section>
      </div>
    </div>
  {/snippet}
</Story>

<Story name="With form validation errors">
  {#snippet children(args)}
    <div use:wrapInShadowDom={args.disableCss}>
      <div class="container layout-grid layout-grid--column-12">
        <section class="article-page col-1-span-12">
          <div class="col-3-span-8 text">
            <h1 class="mt-h1">Fieldset</h1>
            <h2 class="mt-h2">With form validation errors</h2>
            <p>
              To get validation for a fieldset, populate the `error: ErrorDetail` parameter with
              errors.
            </p>
            <ErrorSummary errors={args.errors} heading={args.errorSummaryHeading} />
          </div>
          <form class="mt-form col-3-span-8 form-layout">
            <Fieldset
              class="validation m-t-m"
              legend={args.legend}
              error={args.errors.find((error: ErrorDetail) => error.key === args.fieldsetId)}
              legendClass="mt-h2">
              <Disclosure
                id={args.fieldsetId}
                title={args.disclosure.title}
                loadJs={!args.disableJs}
                class="disclosure-no-border--align-left"
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
            </Fieldset>
          </form>
        </section>
      </div>
    </div>
  {/snippet}
</Story>
