<script lang="ts">
  export let labels: Array<string> = []
  export let completed = 0
  export let ariaValueText = `${labels[completed]}: Steg ${completed + 1} av ${labels.length}`
  export let progressBarLabel = 'Fremdriftslinje for skjema'
</script>

<div
  role="progressbar"
  aria-label={progressBarLabel}
  aria-valuemin="1"
  aria-valuemax={labels.length}
  aria-valuenow={completed + 1}
  aria-valuetext={ariaValueText}>
  <ol class="mt-ol m-t-xxs steps" aria-hidden="true">
    {#each labels as label, index (label)}
      <li class="mt-li"
          class:steps__complete={index < completed}
          class:steps__current={index === completed}>
        <span class="responsive-hide">{label}</span>
      </li>
    {/each}
  </ol>
</div>
