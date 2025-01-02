<script lang="ts">
  import { createInputAriaDescribedby, type ErrorDetail } from '$lib/ts'
  import { InputErrorMessage, Label } from '$lib/index'

  interface Props {
    loadJs?: boolean
    name: string
    error: ErrorDetail | undefined
    multiple?: boolean
    accept: string | undefined
    buttonText?: string
    isRequired?: boolean | undefined
    value: undefined | string | Array<string>
    onChange?: (files: FileList, target: HTMLInputElement) => void
    label: string
    fileInputName: string
    fileNameInputName: string
    helpText: string | undefined
    fileName: string | Array<string> | undefined
    textOptional: string | undefined
    hiddenErrorText: string | undefined
    isLoading?: boolean
    uploadInProgressAriaLabel?: string
  }

  let {
    loadJs = false,
    name,
    error,
    multiple = false,
    accept,
    buttonText = 'Legg til fil',
    isRequired = undefined,
    value = $bindable(),
    onChange = _ => {},
    label,
    fileInputName,
    fileNameInputName,
    helpText,
    fileName = $bindable(),
    textOptional,
    hiddenErrorText,
    isLoading = false,
    uploadInProgressAriaLabel = 'Laster opp filer'
  }: Props = $props()

  let uuidInput: HTMLInputElement | undefined = $state()
  let nameInput: HTMLInputElement | undefined = $state()

  function removeFile(fileToRemove: string): void {
    const fileNames: Array<string> = nameInput.value.split(',')
    uuidInput.value = ''
    value = removeValueByFileName(value, fileNames, fileToRemove)

    // update filename. This handles multiple files
    nameInput.value = fileNames.filter(v => v !== fileToRemove).join(',')
    fileName = filterFileName(fileName, fileToRemove)
  }

  function handleChange(e: InputEvent): void {
    const target = e.target as HTMLInputElement
    onChange(target.files as FileList, target)
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
  <InputErrorMessage message={error.message} key={fileInputName} {hiddenErrorText} />
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

<input
  type="file"
  id={name}
  name={fileInputName}
  {multiple}
  {accept}
  class="mt-input form-field"
  onchange={e => handleChange(e)}
  class:error
  class:inclusively-hidden-initial={loadJs}
  disabled={isLoading}
  aria-describedby={createInputAriaDescribedby(name, error)}
  aria-invalid={!!error}
  data-testid={fileInputName}
  aria-required={isRequired || undefined} />

{#if loadJs}
  <label class="mt-label mt-button mt-button--secondary" for={name}>
    {buttonText}
    <span
      role="status"
      aria-live="polite"
      class:spinner={isLoading}
      aria-label={isLoading ? uploadInProgressAriaLabel : ''}></span>
  </label>

  <ol class="mt-ol m-t-xxs list-unstyled file-button__file-list" aria-label="Vedlegg">
    {#each Array.from(fileName ?? []) as file}
      <li>
        <span class="file-button__file-name">{file}</span>
        <button
          type="button"
          class="mt-button mt-button--search-clear file-button__file-remove"
          onclick={() => removeFile(file)}
          data-testid={`remove-${file}`}>
          <span class="inclusively-hidden">Slett vedlegget: "{file}"</span>
          <svg
            aria-hidden="true"
            width="20"
            height="20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10 0C4.47 0 0 4.47 0 10s4.47 10 10 10 10-4.47 10-10S15.53 0 10 0Zm5 13.59L13.59 15 10 11.41 6.41 15 5 13.59 8.59 10 5 6.41 6.41 5 10 8.59 13.59 5 15 6.41 11.41 10 15 13.59Z"
              fill="#464545" />
          </svg>
        </button>
      </li>
    {/each}
  </ol>
{/if}
