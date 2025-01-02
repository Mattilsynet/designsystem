<script lang="ts">
  import { interpolate } from '$lib/ts'
  import type { FormStep } from '$lib/ts/types'

  interface Props {
    steps?: Array<FormStep>
    currentPath?: string
    ariaValueText?: string
    progressBarLabel?: string
    class?: string
  }

  let {
    steps = [],
    currentPath = '',
    ariaValueText = '{0}, Steg: {1} av {2}',
    progressBarLabel = 'Fremdriftslinje for skjema',
    class: className = ''
  }: Props = $props()

  let stepsDisplayed = steps.filter(s => s.show)
  let currentStep = steps.find(s => s.subPageUrl === currentPath)
  let displayedStepIndex = currentStep
    ? stepsDisplayed.findIndex(s => {
        return s.index === currentStep.index
      })
    : 0
  let displayedStep = currentStep
    ? stepsDisplayed.find(s => {
        return s.index === currentStep.index
      })
    : {}
  let pageTitle = currentStep?.label ?? ''
</script>

<div
  role="progressbar"
  class={className}
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
            displayedStep.subPageUrl !== step.subPageUrl}
          class:steps__current={displayedStep.subPageUrl === step.subPageUrl}>
          <span class="responsive-hide">{step.label}</span>
        </li>
      {/if}
    {/each}
  </ol>
</div>
