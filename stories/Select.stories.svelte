<script lang="ts">
  import {Meta, Story} from '@storybook/addon-svelte-csf';
</script>

<Meta
  title="Components/Form/Select"
  args={{
    label: 'Velg dyr',
    helpText: 'Velg den typen dyr som denne saken gjelder',
    errorMessage: 'Fyll inn dette feltet.'
  }}
  argTypes={{
    title: {control: 'text'},
    disableCss: {control: 'boolean'}
  }}
/>

<Story name="Normal" let:label let:helpText>
  <form>
    <label class="form-label" for="selectfield">
      {label}
    </label>

    {#if helpText}
      <div class="hint">
        {@html helpText}
      </div>
    {/if}

    <select id="selectfield" name="animal" class="form-field" aria-describedby="inputfield-hint inputfield-error">
      <option>Dog</option>
      <option>Hamster</option>
    </select>
  </form>
</Story>
