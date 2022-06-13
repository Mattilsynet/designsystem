<script lang="ts">
  import {Meta, Story} from '@storybook/addon-svelte-csf'
  import DialogBox from '../../src/svelte/DialogBox.svelte'
  import ButtonSpinner from '../../src/svelte/ButtonSpinner.svelte'
</script>

<Meta
  title="Components/DialogBox"
  args={{
    closeable: true,
    content: `<h2>Du bør varsle</h2>
               <p>At noen setter opp nye piggtrådgjerder</p>
               <p>Eldre piggtrådgjerder som utgjør en risiko for at dyr blir skadet</p>`,
    contentQuestion: `<p><b>Fant du det du lette etter?</b></p>`
  }}
  argTypes={{
    closeable: {control: 'boolean'}
  }} />

<Story name="Normal" let:closeable let:content let:contentQuestion>
  <h2>Default</h2>
  <div class="tags-wrapper">
    <DialogBox {closeable}>Dette er en dialogboks!</DialogBox>
  </div>
  <hr />
  <h2>Enkel</h2>
  <div class="tags-wrapper">
    <DialogBox {closeable}>
      {#if content}
        {@html content}
      {/if}
    </DialogBox>
  </div>
  <hr />
  <h2>Avansert</h2>
  <div class="tags-wrapper">
    <DialogBox>
      {#if contentQuestion}
        {@html contentQuestion}
      {/if}
      <div style="margin-top:20px;">
        <ButtonSpinner
          formInProgressAriaLabel="Sender inn skjema, venter på svar."
          btnClassNames="button--secondary"
          spinnerPlacement="start">
          Ja
        </ButtonSpinner>
        <ButtonSpinner
          formInProgressAriaLabel="Sender inn skjema, venter på svar."
          btnClassNames="button--secondary"
          spinnerPlacement="end">
          Nei
        </ButtonSpinner>
      </div>
    </DialogBox>
  </div>
</Story>

<style lang="scss">
  .tags-wrapper,
  h2,
  button {
    margin: 2rem;
  }
</style>
