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
  title="Components/Form/Checkbox"
  args={{
    label: 'Kan vi kontakte deg?',
    helpText:
      'Beskriv kort og konkret hva du har observert og hvor alvorlig hendelsen er. Vær oppmerksom på den ansvarlige ofte får se meldingen.',
    errorMessage: 'Fyll inn dette feltet.',
    disableCss: false
  }}
  argTypes={{
    label: {control: 'text'},
    helpText: {control: 'text'},
    errorMessage: {control: 'text'},
    disableCss: {control: 'boolean'}
  }}
/>

<Story name="Normal" let:label let:helpText let:disableCss>
  <form>
    <fieldset id={name} aria-describedby={`${name}-hint ${name}-error`} class="form-fieldset">
      <legend class="form-legend">{label}</legend>

      {#if helpText}
        <div class="hint">
          {@html helpText}
        </div>
      {/if}

      {#each options as radio (radio.value)}
        <div class="form-control checkbox">
          <input type="checkbox" class="input__control" id={radio.value} {name} value={radio.value} />
          <label for={radio.value}>
            {radio.text}
          </label>
        </div>
      {/each}
    </fieldset>
  </form>
</Story>

<Story name="Checkbox with error" let:label let:helpText let:disableCss let:errorMessage>
  <form>
    <fieldset id={name} aria-describedby={`${name}-hint ${name}-error`} class="form-fieldset error">
      <legend class="form-legend">{label}</legend>

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
        {errorMessage}
      </span>

      {#each options as radio (radio.value)}
        <div class="form-control checkbox">
          <input type="checkbox" class="input__control error" id={radio.value} {name} value={radio.value} />
          <label for={radio.value}>
            {radio.text}
          </label>
        </div>
      {/each}
    </fieldset>
  </form>
</Story>

<style lang="scss" global>
  @import '../src/scss/app';
</style>
