<script lang="ts">
  import {onMount} from 'svelte';
  import {useMachine} from '@xstate/svelte/lib/fsm';
  import {createMachine, assign} from '@xstate/fsm';
  import type {UIError} from '../ts/types';

  export let loadJs: boolean = true;
  export let title: string;
  export let error: UIError | undefined;
  export let name: string;
  export let label: string;

  interface Context {
    fileName?: string;
    size: number;
  }

  type FileSelectedEvent = {type: 'FILE_SELECTED'; data: {files: Array<{name: string}>}};
  type FileUploadEvent = {type: 'MOUNTED'} | FileSelectedEvent;

  type FileUploadButtonState =
    | {value: 'serverRendered'; context: Context}
    | {value: 'empty'; context: Context}
    | {value: 'singleFile'; context: Context}
    | {value: 'multipleFiles'; context: Context};

  function isSingleFileSelected(context: Context, event: FileSelectedEvent): boolean {
    return event.data.files.length === 1;
  }

  const disclosureMachine = createMachine<Context, FileUploadEvent, FileUploadButtonState>({
    id: 'fileUpload',
    initial: 'serverRendered',
    context: {
      fileName: undefined,
      size: 0
    },
    states: {
      serverRendered: {
        on: {MOUNTED: 'empty'}
      },
      empty: {
        on: {
          FILE_SELECTED: [
            {
              target: 'singleFile',
              cond: isSingleFileSelected
            },
            {target: 'multipleFiles'}
          ]
        }
      },
      singleFile: {
        entry: assign<Context, FileSelectedEvent>({
          fileName: (context, event) => event.data.files[0].name,
          size: 1
        }),
        on: {
          FILE_SELECTED: [
            {
              target: 'singleFile',
              cond: isSingleFileSelected
            },
            {target: 'multipleFiles'}
          ]
        }
      },
      multipleFiles: {
        entry: assign<Context, FileSelectedEvent>({
          fileName: undefined,
          size: (context, event) => event.data.files.length
        }),
        on: {
          FILE_SELECTED: [
            {
              target: 'singleFile',
              cond: isSingleFileSelected
            },
            {target: 'multipleFiles'}
          ]
        }
      }
    }
  });

  const {state, send} = useMachine(disclosureMachine);

  $: onServer = $state.value === 'serverRendered';

  if (loadJs) {
    onMount(() => send('MOUNTED'));
  }
</script>

{#if onServer}
  <label class="form-label" for={name}>
    {label}
  </label>
{/if}

<slot />

<input
  id={name}
  type="file"
  {name}
  class="form-field"
  multiple
  class:error
  class:inclusively-hidden={!onServer}
  aria-describedby={`${name}-hint ${name}-error`}
  aria-invalid={!!error}
  on:change={e => send({type: 'FILE_SELECTED', data: {files: e.target.files}})}
/>

{#if !onServer}
  <label class="button button--primary" for={name}>
    {#if $state.value === 'singleFile'}
      {$state.context.fileName}
    {:else if $state.value === 'multipleFiles'}
      {`${$state.context.size} filer valgt`}
    {:else}
      {label}
    {/if}
  </label>
{/if}
