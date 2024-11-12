<script lang="ts">
  import FileUploadButton from '../FileUploadButton.svelte'
  import InputError from './InputErrorMessage.svelte'
  import type { ErrorDetail } from '../../../ts/types'
  import Label from './Label.svelte'

  export let value: undefined | string | Array<string>
  export let name: string
  export let label: string
  export let buttonText: string
  export let fileInputName: string
  export let fileNameInputName: string
  export let helpText: string | undefined
  export let fileName: string | Array<string> | undefined
  export let error: ErrorDetail | undefined
  export let isRequired: boolean | undefined = undefined
  export let accept: string | undefined
  export let multiple: boolean | undefined
  export let textOptional: string | undefined
  export let hiddenErrorText: string | undefined

  let uuidInput: HTMLInputElement
  let nameInput: HTMLInputElement

  function onRemoveFile(e: CustomEvent): void {
    const fileNames: Array<string> = nameInput.value.split(',')
    uuidInput.value = ''
    value = removeValueByFileName(value, fileNames, e.detail.fileName)

    // update filename. This handles multiple files
    nameInput.value = fileNames.filter(v => v !== e.detail.fileName).join(',')
    fileName = filterFileName(fileName, e.detail.fileName)
  }

  function removeValueByFileName(
    value: undefined | string | Array<string>,
    fileNames: Array<string>,
    removeFileName: string
  ): undefined | Array<string> {
    const index = fileNames.indexOf(removeFileName)
    if (value === undefined) {
      return undefined
    } else if (typeof value === 'string') {
      return undefined
    } else {
      return value.filter((_, i) => i !== index)
    }
  }

  function filterFileName(
    fileName: string | Array<string> | undefined,
    removeFileName: string
  ): Array<string> | undefined {
    if (typeof fileName === 'string' || fileName === undefined) {
      return undefined
    } else {
      return fileName.filter(v => v !== removeFileName)
    }
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

<input
  type="hidden"
  class="mt-input"
  bind:this={uuidInput}
  {name}
  value={value || ''}
  data-testid={name} />
<input
  type="hidden"
  class="mt-input"
  bind:this={nameInput}
  name={fileNameInputName}
  value={fileName || ''}
  data-testid={fileNameInputName} />

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
