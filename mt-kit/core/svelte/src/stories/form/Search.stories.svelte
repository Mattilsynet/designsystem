<script lang="ts" module>
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import { wrapInShadowDom } from '../storybook-utils/utils'
  import TextInputSearch from '$lib/svelte/components/form/Search.svelte'

  const { Story } = defineMeta({
    title: 'Components/Form/Search',
    args: {
      label: 'Skriv inn navnet på skjema',
      helpText: 'Her kan du søke etter artikler og veiledere',
      placeholder: 'Søk etter artikler, skjemaer, pdfer og veiledere, veivisere, rapporter og mer',
      searchButtonText: 'Søk',
      disableCss: false
    },
    argTypes: {
      label: { control: 'text' },
      helpText: { control: 'text' },
      disableCss: { control: 'boolean' }
    }
  })
</script>

<Story name="Search input">
  {#snippet children({ label, disableCss, searchButtonText, placeholder, helpText })}
    <div use:wrapInShadowDom={disableCss}>
      <article>
        <form class="mt-form form-layout">
          <TextInputSearch name="inputfield_0" {searchButtonText} />
        </form>
      </article>
      <article>
        <form class="mt-form form-layout">
          <TextInputSearch name="inputfield_1" {label} />
        </form>
      </article>
      <article>
        <form class="mt-form form-layout">
          <TextInputSearch
            name="inputfield_2"
            {label}
            {searchButtonText}
            searchString="test"
            shouldFocus />
        </form>
      </article>
      <article>
        <form class="mt-form form-layout">
          <TextInputSearch name="inputfield_3" {label} {placeholder} {searchButtonText} />
        </form>
      </article>
      <article>
        <form class="mt-form form-layout">
          <TextInputSearch name="inputfield_4" {label} {helpText} {searchButtonText} />
        </form>
      </article>
    </div>
  {/snippet}
</Story>

<style>
  article {
    margin-bottom: 2rem;
  }
</style>
