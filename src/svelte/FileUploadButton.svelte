<script lang="ts">
  import {onMount} from 'svelte';
  import {useMachine} from '@xstate/svelte/lib/fsm';
  import {createMachine, assign} from '@xstate/fsm';
  import type {UIError} from '../ts/types';

  export let loadJs: boolean = true;
  export let error: UIError | undefined;
  export let id: string;
  export let name: string;
  export let multiple: boolean = false;
  export let buttonText: string = 'Legg til fil';

  interface Context {
    fileNames: Array<string>;
  }

  type MountedEvent = {type: 'MOUNTED'};
  type FileSelectedEvent = {type: 'FILE_SELECTED'; fileNames: Array<string>};
  type FileUploadEvent = MountedEvent | FileSelectedEvent;

  type FileUploadButtonState =
    | {value: 'serverRendered'; context: Context}
    | {value: 'empty'; context: Context}
    | {value: 'selected'; context: Context};

  const disclosureMachine = createMachine<Context, FileUploadEvent, FileUploadButtonState>({
    id: 'fileUpload',
    initial: 'serverRendered',
    context: {
      fileNames: []
    },
    states: {
      serverRendered: {
        on: {MOUNTED: 'empty'}
      },
      empty: {
        on: {FILE_SELECTED: 'selected'}
      },
      selected: {
        entry: assign<Context, FileSelectedEvent>({
          fileNames: (context, event) => event.fileNames
        }),
        on: {FILE_SELECTED: 'selected'}
      }
    }
  });

  const {state, send} = useMachine(disclosureMachine);

  $: onServer = $state.value === 'serverRendered';
  $: selectedCount = $state.context.fileNames.length;

  if (loadJs) {
    onMount(() => send('MOUNTED'));
  }
</script>

<input
  type="file"
  {id}
  {name}
  {multiple}
  class="form-field"
  class:error
  class:inclusively-hidden={!onServer}
  aria-describedby={`${name}-hint ${name}-error`}
  aria-invalid={!!error}
  on:change={e => send({type: 'FILE_SELECTED', fileNames: [...e.target.files].map(file => file.name)})}
/>

{#if !onServer}
  <label class="button button--primary" for={id}>
    {#if selectedCount === 1}
      {$state.context.fileNames[0]}
    {:else if selectedCount > 1}
      {`${selectedCount} filer valgt`}
    {:else}
      {buttonText}
    {/if}
  </label>
{/if}
