<script lang="ts">
  import {Meta, Story} from '@storybook/addon-svelte-csf'
  import DialogBox from '../../src/svelte/DialogBox.svelte'
  import ButtonSpinner from '../../src/svelte/ButtonSpinner.svelte'

  let dialogBoxClosed = false
  let closeBtnLabel = 'Lukk dialogboks'
  let dialogBoxTitle = 'Dette er en dialogboks tittel!'
</script>

<Meta
  title="Components/Dialogboks"
  args={{
    content: `<h2>Du bør varsle</h2>
               <p>At noen setter opp nye piggtrådgjerder</p>
               <p>Eldre piggtrådgjerder som utgjør en risiko for at dyr blir skadet</p>`
  }}
  argTypes={{}} />

<Story name="Normal" let:content let:contentQuestion>
  <h2>Default</h2>
  <div class="tags-wrapper">
    <DialogBox {dialogBoxTitle} {dialogBoxClosed} {closeBtnLabel}>Dialogboks innhold</DialogBox>
  </div>

  <hr />
  <h2>Enkel</h2>
  <div class="tags-wrapper">
    <DialogBox {dialogBoxClosed} {closeBtnLabel}>
      {#if content}
        {@html content}
      {/if}
    </DialogBox>
  </div>
  <hr />
  <h2>Avansert</h2>
  <div class="tags-wrapper">
    <DialogBox dialogBoxTitle="Fant du det du lette etter?" {dialogBoxClosed} {closeBtnLabel}>
      <div class="layout-flex" style="margin-top: 20px;">
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
    max-width: 420px;
  }
</style>
