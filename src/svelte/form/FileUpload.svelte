<script lang="ts">
  import FileUploadButton from '../FileUploadButton.svelte';
  import InputError from './InputErrorMessage.svelte';
  import {ErrorDetail} from '../../ts/types';
  import Label from './Label.svelte';

  export let value;
  export let fileName: string | undefined;
  export let error: ErrorDetail | undefined;
  export let name: string;
  export let label: string;
  export let helpText: string | undefined;
  export let isRequired: boolean;
  export let accept: string | undefined;
  export let multiple: boolean;
  export let textOptional: string | undefined;
  export let fileInputName: string;
  export let fileNameInputName: string;

  let uuidInput: HTMLInputElement;
  let nameInput: HTMLInputElement;

  function onRemoveFile() {
    uuidInput.value = '';
    nameInput.value = '';
  }
</script>

<Label htmlFor={name} {isRequired} {textOptional}>{label}</Label>

{#if helpText}
  <div id={`${fileInputName}-hint`} class="hint">
    {@html helpText}
  </div>
{/if}

{#if error}
  <InputError message={error.message} key={fileInputName} />
{/if}

<input type="hidden" bind:this={uuidInput} {name} value={value || ''} />
<input type="hidden" bind:this={nameInput} name={fileNameInputName} value={fileName || ''} />

<FileUploadButton
  {error}
  id={name}
  name={fileInputName}
  {multiple}
  {accept}
  {fileName}
  {isRequired}
  on:removeFile={onRemoveFile}
/>
