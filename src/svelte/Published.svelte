<script lang="ts">
  import {displayDataTime} from '../ts/utils'

  export let publishFrom: string | undefined
  export let professionallyUpdated: string | undefined
  export let lang = 'nb-NO'
  export let publishedText = 'Publisert'
  export let lastPublishedText = 'Sist oppdatert'

  $: publishFromLocalized = publishFrom ? displayDataTime(lang, publishFrom) : ''
  $: lastUpdatedLocalized = professionallyUpdated
    ? displayDataTime(lang, professionallyUpdated)
    : ''
</script>

<dl class="meta">
  {#if publishFrom}
    <dt>{publishedText}</dt>
    <dd><time datetime={publishFrom} data-testid="published-date">{publishFromLocalized}</time></dd>
  {/if}
  {#if professionallyUpdated}
    <dt>{lastPublishedText}</dt>
    <dd>
      <time datetime={professionallyUpdated} data-testid="updated-date"
        >{lastUpdatedLocalized}</time>
    </dd>
  {/if}
</dl>
