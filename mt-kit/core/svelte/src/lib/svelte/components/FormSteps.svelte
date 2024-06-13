<script lang="ts">
  export let steps: Array<{ index: number; show: boolean; label: string }> = []
  export let completed = 0
  export let ariaValueText = `${steps[completed]}: Steg ${completed + 1} av ${steps.length}`
  export let progressBarLabel = 'Fremdriftslinje for skjema'
</script>

<div
  role="progressbar"
  aria-label={progressBarLabel}
  aria-valuemin="1"
  aria-valuemax={steps.length}
  aria-valuenow={completed + 1}
  aria-valuetext={ariaValueText}>
  <ol class="mt-ol m-t-xxs steps" aria-hidden="true">
    {#each steps as step, i}
      {#if step.show}
        <li
          class="mt-li"
          class:steps__complete={step.index < completed && !(steps[completed].index === step.index)}
          class:steps__current={steps[completed].index === step.index}>
          <span class="responsive-hide">{step.label}</span>
        </li>
      {/if}
    {/each}
  </ol>
</div>
