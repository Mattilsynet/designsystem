<script lang="ts">
  import {Meta, Story} from '@storybook/addon-svelte-csf';

  const name = 'radiobuttons';
  const options = [
    {
      text: 'Dere kan kontakte meg',
      value: 'yes'
    },
    {
      text: 'Jeg ønsker å være anonym',
      value: 'no'
    }
  ];
</script>

<Meta
  title="Components/Error Summary"
  args={{
    label: 'E-post',
    helpText: '',
    errorMessage: 'Fyll inn dette feltet.',
    heading: 'Feil oppstod',
    errors: [{fieldName: 'email', message: 'Fyll inn epost feltet'}],
    disableCss: false
  }}
  argTypes={{
    label: {control: 'text'},
    helpText: {control: 'text'},
    errorMessage: {control: 'text'},
    disableCss: {control: 'boolean'}
  }}
/>

<Story name="Normal" let:errors let:label let:helpText let:heading let:disableCss let:errorMessage>
  <div class="error-summary" role="alert" tabindex="-1" aria-labelledby="error-summary-heading">
    <h2 id="error-summary-heading">
      {heading}
    </h2>
    <ul role="list">
      {#each errors as error}
        <li>
          <a href={`#${error.fieldName}`}>{error.message}</a>
        </li>
      {/each}
    </ul>
  </div>

  <form class="form-layout">
    <label class="form-label" for="inputfield"> Navn </label>

    {#if helpText}
      <div class="hint">
        {@html helpText}
      </div>
    {/if}

    <input id="inputfield" name="name" class="form-field" aria-describedby="inputfield-hint inputfield-error" />

    <label class="form-label" for="inputfield">
      {label}
    </label>

    {#if helpText}
      <div class="hint">
        {@html helpText}
      </div>
    {/if}

    <span id="inputfield-error" class="form-error">
      <span class="inclusively-hidden">Feilmelding:</span>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M11 15H13V17H11V15ZM11 7H13V13H11V7ZM11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z"
        />
      </svg>
      {errors[0].message}
    </span>

    <input
      id="email"
      name="email"
      class="form-field error"
      aria-invalid="true"
      aria-describedby="inputfield-hint inputfield-error"
    />
  </form>
</Story>

<style lang="scss" global>
  @import '../src/scss/app';
</style>
