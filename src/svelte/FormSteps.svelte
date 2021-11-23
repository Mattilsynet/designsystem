<script lang="ts">
  export let labels: Array<string> = [];
  export let completed = 0;
  export let ariaValueText = `${labels[completed]}: Steg ${completed + 1} av ${labels.length}`;
</script>

<div
  role="progressbar"
  aria-valuemin="1"
  aria-valuemax={labels.length}
  aria-valuenow={completed + 1}
  aria-valuetext={ariaValueText}
>
  <ol class="steps" aria-hidden="true">
    {#each labels as label, index (label)}
      <li class:steps__complete={index <= completed}>
        <span class="responsive-hide">{label}</span>
      </li>
    {/each}
  </ol>
</div>
