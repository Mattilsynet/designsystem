<script lang="ts">
  import {Meta, Story} from '@storybook/addon-svelte-csf'
  import {wrapInShadowDom} from '../storybook-utils/utils'
  import Fieldset from '../../../src/svelte/components/form/Fieldset.svelte'
  import CheckboxWithSubSets from '../../../src/svelte/components/form/CheckboxWithSubSets.svelte'
  import Disclosure from '../../../src/svelte/components/Disclosure.svelte'
  import {interpolate, toKebabCase} from '../../../src/ts/utils'
  import FormErrorSummary from '../../../src/svelte/components/form/FormErrorSummary.svelte'
</script>

<Meta
  title="Components/Form/Fieldset"
  args={{
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
    },
    hiddenErrorText: 'Fyll inn tekst',
    disableJs: false,
    disableCss: false
  }}
  argTypes={{
    legend: {control: 'text'},
    disableJs: {control: 'boolean'},
    disableCss: {control: 'boolean'}
  }} />

<Story name="Normal" let:args>
  <div use:wrapInShadowDom={args.disableCss}>
    <div class="container layout-grid layout-grid--column-12">
      <section class="article-page col-1-span-12">
        <h1>Fieldset</h1>
        <h2>Normal</h2>

        <FormErrorSummary
          errors={args.errorsNormal}
          heading={args.errorSummaryHeading}
          hiddenErrorText={args.hiddenErrorText}
          legendClass="h2" />
        <form class="col-3-span-8 form-layout">
          <Fieldset
            legend={args.legend}
            error={args.errorsNormal.find(error => error.key === args.fieldsetId)}>
            <Disclosure
              id={args.fieldsetId}
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
          </Fieldset>
        </form>
      </section>
    </div>
  </div>
</Story>

<Story name="With form validation errors" let:args>
  <div use:wrapInShadowDom={args.disableCss}>
    <div class="container layout-grid layout-grid--column-12">
      <section class="article-page col-1-span-12">
        <div class="col-3-span-8 text">
          <h1>Fieldset</h1>
          <h2>With form validation errors</h2>
          <p>
            To get validation for a fieldset, populate the `error: ErrorDetail` parameter with
            errors.
          </p>
          <FormErrorSummary
            errors={args.errors}
            heading={args.errorSummaryHeading}
            hiddenErrorText={args.hiddenErrorText} />
        </div>
        <form class="col-3-span-8 form-layout">
          <Fieldset
            legend={args.legend}
            error={args.errors.find(error => error.key === args.fieldsetId)}
            legendClass="h2">
            <Disclosure
              id={args.fieldsetId}
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
          </Fieldset>
        </form>
      </section>
    </div>
  </div>
</Story>
