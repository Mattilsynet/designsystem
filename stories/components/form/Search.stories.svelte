<script lang="ts">
  import {Meta, Story} from '@storybook/addon-svelte-csf'
  import {wrapInShadowDom} from '../../utils'
  import TextInputSearch from '../../../src/svelte/components/form/Search.svelte'
</script>

<Meta
  title="Components/Form/Search"
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
  <div use:wrapInShadowDom={disableCss}>
    <article>
      <form class="form-layout">
        <TextInputSearch name="inputfield_1" {label} {searchButtonText} />
      </form>
    </article>
    <article>
      <form class="form-layout">
        <TextInputSearch
          {legend}
          name="inputfield_2"
          {label}
          {searchButtonText}
          labelClass="small" />
      </form>
    </article>
    <article>
      <form class="form-layout">
        <TextInputSearch
          {legend}
          name="inputfield"
          {label}
          {placeholder}
          {searchButtonText}
          labelClass="small" />
      </form>
    </article>
    <article>
      <form class="form-layout">
        <TextInputSearch
          {legend}
          name="inputfield_3"
          {label}
          {helpText}
          {searchButtonText}
          labelClass="small" />
      </form>
    </article>
  </div></Story>

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
