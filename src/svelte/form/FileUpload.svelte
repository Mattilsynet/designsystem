<script lang="ts">
  import FileUploadButton from '../FileUploadButton.svelte'
  import InputError from './InputErrorMessage.svelte'
  import type {ErrorDetail} from '../../ts/types'
  import Label from './Label.svelte'

  export let value
  export let name: string
  export let label: string
  export let buttonText: string
  export let fileInputName: string
  export let fileNameInputName: string
  export let helpText: string | undefined
  export let fileName: string | undefined
  export let error: ErrorDetail | undefined
  export let isRequired: boolean | undefined = undefined
  export let accept: string | undefined
  export let multiple: boolean | undefined
  export let textOptional: string | undefined
  export let hiddenErrorText: string | undefined

  let uuidInput: HTMLInputElement
  let nameInput: HTMLInputElement

  function onRemoveFile() {
    uuidInput.value = ''
    nameInput.value = ''
    //update inputs
    value = undefined
    fileName = undefined
  }
</script>

<Label for={name} {isRequired} {textOptional}>{label}</Label>

{#if helpText}
  <div id={`${fileInputName}-hint`} class="hint">
    {@html helpText}
  </div>
{/if}

{#if error}
  <InputError message={error.message} key={fileInputName} {hiddenErrorText} />
{/if}

<input type="hidden" bind:this={uuidInput} {name} value={value || ''} />
<input type="hidden" bind:this={nameInput} name={fileNameInputName} value={fileName || ''} />

<FileUploadButton
  {error}
  id={name}
  name={fileInputName}
  {buttonText}
  {multiple}
  {accept}
  {fileName}
  {isRequired}
  on:removeFile={onRemoveFile} />
