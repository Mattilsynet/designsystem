<script lang="ts">
  export let labels: Array<string> = [];
  export let completed: number = 0;
  export let completedText = 'Ferdig';
  export let currentText = 'Nåværende';
  export let ariaValueText = `Steg ${completed + 1} av ${labels.length}`;
</script>

<ol
  class="steps"
  role="progressbar"
  aria-valuemin="1"
  aria-valuemax={labels.length}
  aria-valuenow={completed + 1}
  aria-valuetext={ariaValueText}
>
  {#each labels as label, index (label)}
    <li class:steps__complete={index <= completed}>
      {#if index < completed}
        <span class="inclusively-hidden">{completedText}: </span>
      {/if}
      {#if index === completed}
        <span class="inclusively-hidden">{currentText}: </span>
      {/if}
      {label}
    </li>
  {/each}
</ol>
