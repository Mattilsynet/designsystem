<script context="module">let counter = 0;
</script>

<script>import { createEventDispatcher, onMount } from "svelte";
import { slide } from "svelte/transition";
import { useMachine } from "@xstate/svelte";
import HeadingLevel from "./HeadingLevel.svelte";
import { createToggleMachine } from "../../ts/toggle-machine";
export let id = void 0;
export let loadJs = true;
export let title;
export let headerTag = "h3";
export let theme = "bordered";
export let icon = void 0;
export let headerClass = "";
export let panelClass = "";
export let startOpen = false;
export let chapter = void 0;
let disclosureClass = "";
export { disclosureClass as class };
const bodyId = `ui-disclosure-${counter++}`;
const disclosureMachine = createToggleMachine("disclosure");
const { state, send } = useMachine(disclosureMachine);
$:
  isOpen = $state.context.isOpen;
$:
  onServer = $state.value === "serverRendered";
if (loadJs) {
  onMount(() => send("MOUNTED"));
  if (startOpen) {
    onMount(() => send("TOGGLE"));
  }
}
const dispatch = createEventDispatcher();
function dispatchOpen(isOpen2) {
  isOpen2 ? dispatch("open") : dispatch("close");
}
</script>

<div class="disclosure disclosure-{theme} {disclosureClass}">
  {#if onServer}
    <HeadingLevel {id} class="disclosure-header {headerClass}" headingLevel={+headerTag.charAt(1)}>
      {#if chapter}
        <span class="chapter-number responsive-hide">
          {chapter}
        </span>
      {/if}

      {#if icon}
        {@html icon}
      {/if}
      <span class="title">
        {#if chapter}
          <span class="responsive-show-inline">
            {chapter}
          </span>
        {/if}
        {@html title}
      </span>
    </HeadingLevel>
  {:else}
    <button
      {id}
      type="button"
      class="mt-button--unstyled disclosure-header mt-{headerTag} {headerClass}"
      aria-expanded={isOpen}
      aria-controls={bodyId}
      on:click={() => {
        dispatchOpen(!isOpen)
        send('TOGGLE')
      }}>
      {#if chapter}
        <span class="chapter-number responsive-hide">
          {chapter}
        </span>
      {/if}

      {#if icon}
        {@html icon}
      {/if}
      <span class="title">
        {#if chapter}
          <span class="responsive-show-inline">
            {chapter}
          </span>
        {/if}
        {@html title}
      </span>
    </button>
  {/if}

  <div
    id={bodyId}
    class="disclosure-panel {panelClass} {onServer ? 'on-server' : ''}"
    class:display-none-important={!isOpen}
    transition:slide|local={{ duration: $state.context.isFirstRenderFinished ? 300 : 0 }}>
    {#if !onServer}
      <HeadingLevel class="inclusively-hidden" headingLevel={+headerTag.charAt(1)}>
        {@html title}
      </HeadingLevel>
    {/if}
    <slot />
  </div>
</div>
