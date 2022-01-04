<script lang="ts">
  import Disclosure from '../Disclosure.svelte';

  export let text: string;
  export let symptomsHeading: string;
  export let symptoms: string;
  export let routesOfInfectionHeading: string;
  export let routesOfInfection: string;
  export let infectionToHumansHeading: string;
  export let infectionToHumans: string;
  export let disclosureHeadClass = '';
  export let loadJs: boolean;
  export let imageUrl: string | undefined;
  export let imageAltText: string | undefined;
  export let caption: string | undefined;
</script>

<slot />
<div class="intro">
  {@html text}
</div>

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
