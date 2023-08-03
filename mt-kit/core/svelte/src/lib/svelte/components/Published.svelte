<script lang="ts">
  import { compareDates } from '../../ts/utils'

  export let publishFrom: string | undefined
  export let professionallyUpdated: string | undefined
  export let lang = 'NO-nb'
  export let publishedText = 'Publisert'
  export let lastPublishedText = 'Faglig oppdatert'
  $: dateObject = compareDates({
    lang,
    publishFrom,
    professionallyUpdated,
    publishedFromLabel: publishedText,
    professionallyUpdatedLabel: lastPublishedText
  })
</script>

<dl class="meta">
  {#if dateObject}
    <dt>{dateObject.label}</dt>
    <dd><time datetime={dateObject.iso} data-testid="published-date">{dateObject.date}</time></dd>
  {/if}
</dl>
