<script lang="ts" module>
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import Status from '$lib/svelte/content/Status.svelte'
  import { wrapInShadowDom } from '../storybook-utils/utils'

  const { Story } = defineMeta({
    title: 'Innhold/Status',
    args: {
      title: 'Dette er viktig',
      text: '<p>Dette er en melding om at det har skjedd noe</p><h3 class="mt-h3">Overkrift</h3><p>Mer tekst kommer her</p>',
      actionsTakenByMattilsynet:
        '<p>Dette er gjør Mattilsynet</p><h3 class="mt-h3">Overkrift</h3><p>Mer tekst kommer her</p>',
      statusType1: 'important',
      statusType2: 'none',
      linkUrl: 'https://www.mattilsynet.no',
      linkText: 'Mattilsynet',
      linkIsExternal: true,
      updatedDate: '2021-06-26T11:32:22Z',
      disableCss: false
    },
    argTypes: {
      title: { control: 'text' },
      text: { control: 'text' },
      actionsTakenByMattilsynet: { control: 'text' },
      statusType1: { control: 'radio', options: ['important', 'none'] },
      statusType2: { control: 'radio', options: ['important', 'none'] },
      linkUrl: { control: 'text' },
      linkText: { control: 'text' },
      linkIsExternal: { control: 'boolean' },
      disableCss: { control: 'boolean' }
    }
  })
</script>

<Story name="Normal">
  {#snippet children({
    title,
    text,
    actionsTakenByMattilsynet,
    linkUrl,
    linkText,
    disableCss,
    statusType1,
    statusType2,
    updatedDate
  })}
    <div class="container layout-grid layout-grid--column-12" use:wrapInShadowDom={disableCss}>
      <article class="col-3-span-8">
        <h1 class="mt-h1">Status med tekst, "hva gjør Mattilsynet" og link</h1>
        <Status
          {text}
          {actionsTakenByMattilsynet}
          {linkUrl}
          {linkText}
          {updatedDate}
          statusType={statusType1}>
          {#snippet heading()}
            <h2 class="mt-h2">{title}</h2>
          {/snippet}
        </Status>

        <h1 class="mt-h1 margin-top">Status med tekst og link</h1>
        <Status {text} {linkUrl} {linkText} statusType={statusType2}>
          {#snippet heading()}
            <h2 class="mt-h2">{title}</h2>
          {/snippet}
        </Status>
      </article>
    </div>
  {/snippet}
</Story>

<style lang="scss">
  .margin-top {
    margin-top: var(--spacer-medium);
  }
</style>
