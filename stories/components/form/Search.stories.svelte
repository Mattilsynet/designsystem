<script lang="ts">
  import {Meta, Story} from '@storybook/addon-svelte-csf'
  import {wrapInShadowDom} from '../../utils'
  import TextInputSearch from '../../../src/svelte/components/form/Search.svelte'
</script>

<Meta
  title="Components/Form/Search"
  args={{
    label: 'Skriv inn navnet på skjema',
    helpText: 'Her kan du søke etter artikler og veiledere',
    placeholder: 'Søk etter artikler, skjemaer, pdfer og veiledere, veivisere, rapporter og mer',
    searchButtonText: 'Søk',
    disableCss: false,
    loadJs: true
  }}
  argTypes={{
    label: {control: 'text'},
    helpText: {control: 'text'},
    disableCss: {control: 'boolean'},
    loadJs: {control: 'boolean'}
  }} />

<Story
  name="Search input"
  let:args
  let:label
  let:disableCss
  let:searchButtonText
  let:placeholder
  let:primaryButton
  let:helpText>
  <div use:wrapInShadowDom={disableCss}>
    <article>
      <form class="form-layout">
        <TextInputSearch name="inputfield_3" {searchButtonText} loadJs={args.loadJs} />
      </form>
    </article>
    <article>
      <form class="form-layout">
        <TextInputSearch name="inputfield_1" {label} loadJs={args.loadJs} />
      </form>
    </article>
    <article>
      <form class="form-layout">
        <TextInputSearch name="inputfield_2" {label} {searchButtonText} loadJs={args.loadJs} />
      </form>
    </article>
    <article>
      <form class="form-layout">
        <TextInputSearch
          name="inputfield_3"
          {label}
          {placeholder}
          {searchButtonText}
          loadJs={args.loadJs} />
      </form>
    </article>
    <article>
      <form class="form-layout">
        <TextInputSearch
          name="inputfield_4"
          {label}
          {helpText}
          {searchButtonText}
          loadJs={args.loadJs} />
      </form>
    </article>
  </div></Story>

<style>
  article {
    margin-bottom: 2rem;
  }
</style>
