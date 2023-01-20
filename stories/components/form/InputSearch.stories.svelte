<script lang="ts">
  import {Meta, Story} from '@storybook/addon-svelte-csf'
  import {wrapInShadowDom} from '../../utils'
  import TextInputSearch from '../../../src/svelte/components/form/TextInputSearch.svelte'
</script>

<Meta
  title="Components/Form/Input for search"
  args={{
    legend: 'Søk etter navn',
    label: 'Skriv inn navnet på skjema',
    helpText: 'Her kan du søke etter artikler og veiledere',
    placeholder: 'Søk etter artikler, skjemaer, pdfer og veiledere, veivisere, rapporter og mer',
    searchButtonText: 'Søk',
    disableCss: false
  }}
  argTypes={{
    label: {control: 'text'},
    helpText: {control: 'text'},
    disableCss: {control: 'boolean'}
  }} />

<Story
  name="Search input"
  let:label
  let:disableCss
  let:searchButtonText
  let:legend
  let:placeholder
  let:helpText>
  <article>
    <div use:wrapInShadowDom={disableCss}>
      <form class="form-layout">
        <TextInputSearch name="inputfield" {label} {searchButtonText} />
      </form>
    </div>
  </article>
  <article>
    <div use:wrapInShadowDom={disableCss}>
      <form class="form-layout">
        <TextInputSearch {legend} name="inputfield" {label} {searchButtonText} labelClass="small" />
      </form>
    </div>
  </article>
  <article>
    <div use:wrapInShadowDom={disableCss}>
      <form class="form-layout">
        <TextInputSearch
          {legend}
          name="inputfield"
          {label}
          {placeholder}
          {searchButtonText}
          labelClass="small" />
      </form>
    </div>
  </article>
  <article>
    <div use:wrapInShadowDom={disableCss}>
      <form class="form-layout">
        <TextInputSearch
          {legend}
          name="inputfield"
          {label}
          {helpText}
          {searchButtonText}
          labelClass="small" />
      </form>
    </div>
  </article>
</Story>

<style>
  article {
    margin-bottom: 2rem;
  }
  .collapsable-input-list-grid {
    display: grid;
    row-gap: 1rem;
    width: 20rem;
  }
</style>
