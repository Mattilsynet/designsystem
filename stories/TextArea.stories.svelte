<script lang="ts">
  import {Meta, Story} from '@storybook/addon-svelte-csf';
</script>

<Meta
  title="Components/Form/TextArea"
  args={{
    label: 'Hva gjelder bekymringen?',
    helpText:
      'Beskriv kort og konkret hva du har observert og hvor alvorlig hendelsen er. Vær oppmerksom på den ansvarlige ofte får se meldingen.',
    errorMessage: 'Fyll inn dette feltet.'
  }}
  argTypes={{
    title: {control: 'text'},
    disableCss: {control: 'boolean'}
  }}
/>

<Story name="TextArea" let:label let:helpText>
  <form class="form-layout">
    <label class="form-label" for="inputfield">
      {label}
    </label>

    {#if helpText}
      <div class="hint">
        {@html helpText}
      </div>
    {/if}

    <textarea id="inputfield" name="email" class="form-field" aria-describedby="inputfield-hint inputfield-error" />
  </form>
</Story>

<Story name="TextArea with error" let:label let:helpText let:errorMessage>
  <form class="form-layout">
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
  </form>
</Story>

<style lang="scss" global>
  @import '../src/scss/app';
</style>
