<script lang="ts">
  import { compareDates } from '../../ts/utils'

  export let publishFrom: string | undefined
  export let professionallyUpdated: string | undefined
  export let lang = 'nb'
  export let publishedText = 'Publisert'
  export let lastPublishedText = 'Faglig oppdatert'
  export let dtClass = ''
  export let ddClass = ''
  $: dateObject = compareDates({
    lang,
    publishFrom,
    professionallyUpdated,
    publishedFromLabel: publishedText,
    professionallyUpdatedLabel: lastPublishedText
  })
</script>

<dl class="mt-dl meta">
  {#if dateObject}
    <dt class={dtClass}>{dateObject.label}</dt>
    <dd class={ddClass}>
      <time datetime={dateObject.iso} data-testid="published-date">{dateObject.date}</time>
    </dd>
  {/if}
</dl>
