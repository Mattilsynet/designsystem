<script>import { onMount, createEventDispatcher } from "svelte";
import { useMachine } from "@xstate/svelte";
import { createMachine, assign } from "xstate";
import { createInputAriaDescribedby } from "../../ts/utils";
export let loadJs = true;
export let id;
export let name;
export let error;
export let multiple = false;
export let accept;
export let buttonText = "Legg til fil";
export let fileName;
export let isRequired;
const dispatch = createEventDispatcher();
const disclosureMachine = createMachine({
  predictableActionArguments: true,
  id: "fileUpload",
  initial: "serverRendered",
  context: {
    fileNames: []
  },
  states: {
    serverRendered: {
      on: { MOUNTED: "empty" }
    },
    empty: {
      on: { FILE_SELECTED: "selected" }
    },
    selected: {
      entry: assign({
        fileNames: (context, event) => event.type === "FILE_SELECTED" ? event.fileNames : context.fileNames
      }),
      exit: assign({
        fileNames: (context, event) => {
          if (event.type === "FILE_REMOVE") {
            return context.fileNames.filter((fileName2) => fileName2 !== event.fileName);
          } else {
            return context.fileNames;
          }
        }
      }),
      on: {
        FILE_SELECTED: "selected",
        FILE_REMOVE: [
          {
            target: "empty",
            cond: (context, event) => {
              return context.fileNames.length === 1 && context.fileNames[0] === event.fileName;
            },
            actions: (context, event) => {
              removeFileFromFileList(event.fileName);
              fileInputElement.focus();
              dispatch("removeFile", { fileName: event.fileName });
            }
          },
          {
            target: "selected",
            actions: (context, event) => {
              removeFileFromFileList(event.fileName);
              fileInputElement.focus();
              dispatch("removeFile", { fileName: event.fileName });
            }
          }
        ]
      }
    }
  }
});
function removeFileFromFileList(fileName2) {
  const dataTransfer = new DataTransfer();
  [...fileInputElement.files].filter((file) => file.name !== fileName2).forEach((file) => dataTransfer.items.add(file));
  fileInputElement.files = dataTransfer.files;
}
function getFileNames(el) {
  return [...el.files].map((file) => file.name);
}
const { state, send } = useMachine(disclosureMachine);
$:
  onServer = $state.value === "serverRendered";
let fileInputElement;
if (loadJs) {
  onMount(() => {
    send("MOUNTED");
    if (fileName) {
      send({
        type: "FILE_SELECTED",
        fileNames: Array.isArray(fileName) ? fileName : [fileName]
      });
    }
  });
}
</script>

<input
  type="file"
  {id}
  {name}
  {multiple}
  {accept}
  bind:this={fileInputElement}
  class="mt-input form-field"
  class:error
  class:inclusively-hidden-initial={!onServer}
  aria-describedby={createInputAriaDescribedby(name, error)}
  aria-invalid={!!error}
  data-testid={name}
  on:change={e => send({ type: 'FILE_SELECTED', fileNames: getFileNames(e.target) })}
  aria-required={isRequired || undefined} />

{#if !onServer}
  <label class="mt-label mt-button mt-button--secondary" for={id}>
    {buttonText}
  </label>

  {#if $state.value === 'selected'}
    <ol class="mt-ol m-t-xxs list-unstyled file-button__file-list" aria-label="Vedlegg">
      {#each $state.context.fileNames as fileName}
        <li>
          <span class="file-button__file-name">{fileName}</span>
          <button
            type="button"
            class="mt-button mt-button--search-clear file-button__file-remove"
            on:click={() => send({ type: 'FILE_REMOVE', fileName })}
            data-testid={`remove-${fileName}`}>
            <span class="inclusively-hidden">Slett vedlegget: "{fileName}"</span>
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
{/if}
