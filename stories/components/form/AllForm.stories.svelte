<script lang="ts">
  import {Meta, Story} from '@storybook/addon-svelte-csf';
  import {countCharacters} from '../../../src/ts/count-characters';
  const radioName = 'radiobuttons';
  const checkboxName = 'checkboxes';
  const radioOptions = [
    {
      text: 'Dere kan kontakte meg',
      value: 'yes'
    },
    {
      text: 'Jeg ønsker å være anonym',
      value: 'no'
    }
  ];
  const checkBoxOptions = [
    {
      text: 'Is',
      value: 'Is'
    },
    {
      text: 'Pizza',
      value: 'Pizza'
    }
  ];
</script>

<Meta
  title="Components/Form/All"
  args={{
    label: 'Når skjedde det?',
    radioLabel: 'Kan vi kontakte deg?',
    checkboxLabel: 'Hva liker du?',
    helpText: 'Skriv når hendelsen skjedde og om det har pågått over lengere periode.',
    errorMessage: 'Fyll inn dette feltet.'
  }}
  argTypes={{
    title: {control: 'text'},
    disableCss: {control: 'boolean'}
  }}
/>

<Story name="Normal" let:label let:helpText let:radioLabel let:checkboxLabel>
  <form class="form-layout">
    <!--    TextInput-->
    <label class="form-label" for="inputfield">
      {label}
    </label>

    {#if helpText}
      <div class="hint">
        {@html helpText}
      </div>
    {/if}

    <input id="inputfield" name="email" class="form-field" aria-describedby="inputfield-hint inputfield-error" />
    <!--TextInput end-->
    <!-- TextArea   -->
    <label class="form-label" for="inputfield">
      {label}
    </label>

    {#if helpText}
      <div class="hint">
        {@html helpText}
      </div>
    {/if}

    <textarea
      use:countCharacters
      maxlength="100"
      id="inputfield"
      name="email"
      class="form-field"
      aria-describedby="inputfield-hint inputfield-error"
    />
    <!--TextArea end-->
    <!--Radio-->
    <fieldset id={radioName} aria-describedby={`${radioName}-hint ${radioName}-error`} class="form-fieldset">
      <legend class="form-legend">{radioLabel}</legend>

      {#if helpText}
        <div id={`${radioName}-hint`} class="hint">
          {@html helpText}
        </div>
      {/if}

      {#each radioOptions as radio (radio.value)}
        <div class="form-control radio">
          <input type="radio" class="input__control" id={radio.value} name={radioName} value={radio.value} />

          <label for={radio.value}>
            {radio.text}
          </label>
        </div>
      {/each}
    </fieldset>
    <!-- Radio end -->
    <!-- Checkbox -->
    <fieldset id={checkboxName} aria-describedby={`${checkboxName}-hint ${checkboxName}-error`} class="form-fieldset">
      <legend class="form-legend">{checkboxLabel}</legend>

      {#if helpText}
        <div id={`${checkboxName}-hint`} class="hint">
          {@html helpText}
        </div>
      {/if}

      {#each checkBoxOptions as checkbox (checkbox.value)}
        <div class="form-control checkbox">
          <input
            type="checkbox"
            class="input__control"
            id={checkbox.value}
            name={checkboxName}
            value={checkbox.value}
          />
          <label for={checkbox.value}>
            {checkbox.text}
          </label>
        </div>
      {/each}
    </fieldset>
    <!-- Checkbox end-->
  </form>
</Story>

<Story name="Input with error" let:label let:helpText let:errorMessage let:radioLabel let:checkboxLabel>
  <form class="form-layout">
    <!-- TextInput-->
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
      {errorMessage}
    </span>

    <input
      id="inputfield"
      name="email"
      class="form-field error"
      aria-invalid="true"
      aria-describedby="inputfield-hint inputfield-error"
    />
    <!-- TextInput end-->
    <!-- TextArea -->
    <label class="form-label" for="textfield">
      {label}
    </label>

    {#if helpText}
      <div class="hint">
        {@html helpText}
      </div>
    {/if}

    <span id="textfield-error" class="form-error">
      <span class="inclusively-hidden">Feilmelding:</span>
      {errorMessage}
    </span>

    <textarea
      id="textfield"
      name="email"
      class="form-field error"
      aria-invalid="true"
      aria-describedby="textfield-hint textfield-error"
    />
    <!-- TextArea end-->

    <!--  Radio -->
    <fieldset id={radioName} aria-describedby={`${radioName}-hint ${radioName}-error`} class="form-fieldset">
      <legend class="form-legend">{radioLabel}</legend>

      {#if helpText}
        <div id={`${radioName}-hint`} class="hint">
          {@html helpText}
        </div>
      {/if}

      <span id="inputfield-error" class="form-error">
        <span class="inclusively-hidden">Feilmelding:</span>
        {errorMessage}
      </span>

      {#each radioOptions as radio (radio.value)}
        <div class="form-control radio">
          <input type="radio" class="input__control error" id={radio.value} name={radioName} value={radio.value} />

          <label for={radio.value}>
            {radio.text}
          </label>
        </div>
      {/each}
    </fieldset>
    <!--   Radio end-->

    <!--    Checkbox-->
    <fieldset
      id={checkboxName}
      aria-describedby={`${checkboxName}-hint ${checkboxName}-error`}
      class="form-fieldset error"
    >
      <legend class="form-legend">{checkboxLabel}</legend>

      {#if helpText}
        <div id={`${checkboxName}-hint`} class="hint">
          {@html helpText}
        </div>
      {/if}

      <span id="inputfield-error" class="form-error">
        <span class="inclusively-hidden">Feilmelding:</span>
        {errorMessage}
      </span>

      {#each checkBoxOptions as checkbox (checkbox.value)}
        <div class="form-control checkbox">
          <input
            type="checkbox"
            class="input__control error"
            id={checkbox.value}
            {checkboxName}
            value={checkbox.value}
          />
          <label for={checkbox.value}>
            {checkbox.text}
          </label>
        </div>
      {/each}
    </fieldset>
    <!--    Checkbox end-->
  </form>
</Story>

<style lang="scss" global>
  @import '../src/scss/app';
</style>
