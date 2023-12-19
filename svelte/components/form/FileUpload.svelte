<script>import FileUploadButton from "../FileUploadButton.svelte";
import InputError from "./InputErrorMessage.svelte";
import Label from "./Label.svelte";
export let value;
export let name;
export let label;
export let buttonText;
export let fileInputName;
export let fileNameInputName;
export let helpText;
export let fileName;
export let error;
export let isRequired = void 0;
export let accept;
export let multiple;
export let textOptional;
export let hiddenErrorText;
let uuidInput;
let nameInput;
function onRemoveFile(e) {
  uuidInput.value = "";
  value = void 0;
  const values = nameInput.value.split(",");
  nameInput.value = values.filter((v) => v !== e.detail.fileName).join(",");
  fileName = filterFileName(fileName, e.detail.fileName);
}
function filterFileName(fileName2, removeFileName) {
  if (typeof fileName2 === "string" || fileName2 === void 0) {
    return void 0;
  } else {
    return fileName2.filter((v) => v !== removeFileName);
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

<input type="hidden" class="mt-input" bind:this={uuidInput} {name} value={value || ''} data-testid={name} />
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
