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
