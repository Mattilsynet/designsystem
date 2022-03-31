<script lang="ts">
  import Disclosure from '../Disclosure.svelte'

  export let text: string | undefined
  export let symptomsHeading: string | undefined
  export let symptoms: string | undefined
  export let routesOfInfectionHeading: string | undefined
  export let routesOfInfection: string | undefined
  export let infectionToHumansHeading: string | undefined
  export let infectionToHumans: string | undefined
  export let disclosureHeadClass = ''
  export let loadJs: boolean
  export let imageUrl: string | undefined
  export let imageAltText: string | undefined
  export let caption: string | undefined
</script>

<slot />

{#if text}
  <div class="text">
    {@html text}
  </div>
{/if}

{#if symptomsHeading && symptoms}
  <Disclosure title={symptomsHeading} {loadJs} headerClass={disclosureHeadClass}>
    {@html symptoms}
    {#if imageUrl}
      <figure>
        <img src={imageUrl} alt={imageAltText ? imageAltText : undefined} />
        {#if caption}
          <figcaption>{caption}</figcaption>
        {/if}
      </figure>
    {/if}
  </Disclosure>
{/if}
{#if routesOfInfectionHeading && routesOfInfection}
  <Disclosure title={routesOfInfectionHeading} {loadJs} headerClass={disclosureHeadClass}>
    {@html routesOfInfection}
  </Disclosure>
{/if}
{#if infectionToHumansHeading && infectionToHumans}
  <Disclosure title={infectionToHumansHeading} {loadJs} headerClass={disclosureHeadClass}>
    {@html infectionToHumans}
  </Disclosure>
{/if}
