<script lang="ts">
  import { interpolate } from '../../ts/index'
  import type { FormStep } from '$lib/ts/types'

  export let steps: Array<FormStep> = []
  export let completed = 0
  export let ariaValueText = '{0}, Steg: {1} av {2}'
  export let progressBarLabel = 'Fremdriftslinje for skjema'

  let stepsDisplayed = steps.filter(s => s.show)
  let stepIndex = 0
  let pageTitle = ''

  function setStepIndex(index: number, stepsDisplayed): number {
    const displayedIndex = stepsDisplayed.findIndex(s => s.index === index)
    const displayed = stepsDisplayed.find(s => s.index === index)
    pageTitle = displayed.label
    stepIndex = displayedIndex
    return stepIndex
  }
</script>

<div
  role="progressbar"
  aria-label={progressBarLabel}
  aria-valuemin="1"
  aria-valuemax={stepsDisplayed.length}
  aria-valuenow={stepIndex + 1}
  aria-valuetext={interpolate(ariaValueText, [pageTitle, stepIndex + 1, stepsDisplayed.length])}>
  <ol class="mt-ol m-t-xxs steps" aria-hidden="true">
    {#each steps as step}
      {#if step.show}
        {@const stepIndex =
          steps[completed].index === step.index
            ? setStepIndex(step.index, stepsDisplayed)
            : step.index}
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
