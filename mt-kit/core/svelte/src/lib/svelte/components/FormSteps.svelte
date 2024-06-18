<script lang="ts">
  import { interpolate } from '../../ts/index'
  import type { FormStep } from '$lib/ts/types'

  export let steps: Array<FormStep> = []
  export let currentPath = ''
  export let ariaValueText = '{0}, Steg: {1} av {2}'
  export let progressBarLabel = 'Fremdriftslinje for skjema'

  let stepsDisplayed = steps.filter(s => s.show)
  let currentStep = steps.find(s => s.subPageUrl === currentPath)
  let displayedStepIndex =
    stepsDisplayed.findIndex(s => {
      return s.index === currentStep.index
    }) ?? 0
  let displayedStep = stepsDisplayed.find(s => {
    return s.index === currentStep.index
  })
  let pageTitle = currentStep?.label ?? ''
</script>

<div
  role="progressbar"
  aria-label={progressBarLabel}
  aria-valuemin="1"
  aria-valuemax={stepsDisplayed.length}
  aria-valuenow={displayedStepIndex + 1}
  aria-valuetext={interpolate(ariaValueText, [
    pageTitle,
    displayedStepIndex + 1,
    stepsDisplayed.length
  ])}>
  <ol class="mt-ol m-t-xxs steps" aria-hidden="true">
    {#each steps as step}
      {#if step.show}
        <li
          class="mt-li"
          class:steps__complete={step.index <= displayedStep.index &&
            !(displayedStep.subPageUrl === step.subPageUrl)}
          class:steps__current={displayedStep.subPageUrl === step.subPageUrl}>
          <span class="responsive-hide">{step.label}</span>
        </li>
      {/if}
    {/each}
  </ol>
</div>
