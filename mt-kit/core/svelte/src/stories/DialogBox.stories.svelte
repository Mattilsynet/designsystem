<script lang="ts" module>
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import { action } from '@storybook/addon-actions'
  import DialogBox from '$lib/svelte/components/DialogBox.svelte'
  import ButtonSpinner from '$lib/svelte/components/ButtonSpinner.svelte'

  let isOpen = true
  let showDialog = $state(false)
  let closeBtnAriaLabel = 'Lukk dialogboks'
  let title = 'Dette er en dialogboks tittel!'
  let ariaTitle = 'Dette er en skult dialogboks tittel!'

  function handleClick() {
    showDialog = !showDialog
  }

  const closeDialogAction = action('closeDialog')
  function onClosingDialog(shouldReappear: boolean) {
    closeDialogAction(shouldReappear)
  }

  const { Story } = defineMeta({
    title: 'Components/Dialogboks',
    args: {
      content: `<h2 class='mt-h2'>Du bør varsle</h2>
      <p>At noen setter opp nye piggtrådgjerder</p>
      <p>Eldre piggtrådgjerder som utgjør en risiko for at dyr blir skadet</p>`
    },
    argTypes: {}
  })
</script>

<script lang="ts">
  let dialogRef: HTMLDivElement | undefined = $state()
  $effect(() => {
    // Test to see that the dialog reference prop works as expected
    if (dialogRef && showDialog) {
      dialogRef?.scrollIntoView()
    }
  })
</script>

<Story name="Normal">
  {#snippet children({ content })}
    <h2 class="mt-h2">Default</h2>
    <div class="tags-wrapper">
      <DialogBox {title} {isOpen} {closeBtnAriaLabel}>
        <p>Dialogboks innhold</p>
      </DialogBox>
    </div>
    <h2 class="mt-h2">Ingen tittel</h2>
    <div class="tags-wrapper">
      <DialogBox title="" {isOpen} {ariaTitle} {closeBtnAriaLabel}>
        <p>Dialogboks innhold</p>
      </DialogBox>
    </div>

    <hr />
    <h2 class="mt-h2">Enkel</h2>
    <div class="tags-wrapper">
      <DialogBox {isOpen} {ariaTitle} {closeBtnAriaLabel}>
        {#if content}
          {@html content}
        {/if}
      </DialogBox>
    </div>
    <hr />
    <h2 class="mt-h2">Avansert</h2>
    <div class="tags-wrapper">
      <DialogBox title="Fant du det du lette etter?" {isOpen} {closeBtnAriaLabel}>
        <div class="layout-flex" style="margin-top: 20px;">
          <ButtonSpinner
            formInProgressAriaLabel="Sender inn skjema, venter på svar."
            btnClassNames="mt-button--secondary"
            spinnerPlacement="start">
            Ja
          </ButtonSpinner>
          <ButtonSpinner
            formInProgressAriaLabel="Sender inn skjema, venter på svar."
            btnClassNames="mt-button--secondary"
            spinnerPlacement="end">
            Nei
          </ButtonSpinner>
        </div>
      </DialogBox>
    </div>
    <hr />
    <h2 class="mt-h2">Vises ved endring</h2>
    <div class="tags-wrapper">
      <button class="mt-button toggle-button" onclick={handleClick}>Toggle dialog</button>
      <DialogBox {title} isOpen={showDialog} {closeBtnAriaLabel} {onClosingDialog} bind:dialogRef>
        <p>Dialogboks innhold</p>
      </DialogBox>
    </div>
  {/snippet}
</Story>

<style lang="scss">
  .tags-wrapper,
  h2,
  button {
    margin: 2rem;
    max-width: 420px;
  }

  .toggle-button {
    margin-top: 0;
    margin-left: 0;
  }
</style>
