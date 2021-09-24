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
    errors: [
      {fieldName: 'name', message: 'Fyll inn navn'},
      {fieldName: 'phone', message: 'Fyll inn telefonnummer'},
      {fieldName: 'email', message: 'Fyll inn epost'}
    ],
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
        <li class="error-summary__list--link">
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

<Story name="Text only" let:errors let:label let:helpText let:heading let:disableCss let:errorMessage>
  <div class="error-summary" role="alert" tabindex="-1" aria-labelledby="error-summary-heading-2">
    <h2 id="error-summary-heading-2">
      {heading}
    </h2>
    <ul role="list">
      {#each errors as error}
        <li>
          {error.message}
        </li>
      {/each}
    </ul>
  </div>
</Story>

<style lang="scss" global>
  @import '../src/scss/app';
</style>
