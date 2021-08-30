<script lang='ts'>
  import {Meta, Story} from '@storybook/addon-svelte-csf';

  const name = 'radiobuttons';
  const options = [{
    text: "Dere kan kontakte meg",
    value: 'yes'
  },
    {
      text: "Jeg ønsker å være anonym",
      value: 'no'
    }];
</script>

<Meta
  title='Components/Form/Checkbox'
  args={{
    label: "Kan vi kontakte deg?",
    helpText: "Beskriv kort og konkret hva du har observert og hvor alvorlig hendelsen er. Vær oppmerksom på den ansvarlige ofte får se meldingen.",
    errorMessage: "Fyll inn dette feltet.",
    disableCss: false
  }}
  argTypes={{
    label: {control: 'text'},
    helpText: {control: 'text'},
    errorMessage: {control: 'text'},
    disableCss: {control: 'boolean'}
  }}
/>

<Story name='Normal' let:label let:helpText let:disableCss >
  <form>
    <fieldset id={name} aria-describedby={`${name}-hint ${name}-error`} class='form-fieldset'>
      <legend class='form-legend'>{label}</legend>

      {#if helpText}
        <div class='hint'>
          {@html helpText}
        </div>
      {/if}

      {#each options as radio (radio.value)}
        <label for={radio.value}>
          <input
            type='checkbox'
            id={radio.value}
            {name}
            value={radio.value} />
          {radio.text}
        </label>
      {/each}
    </fieldset>
  </form>
</Story>

<style lang='scss' global>
  @import "../src/scss/app";
</style>
