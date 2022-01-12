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
    <dd>{publishedText}</dd>
    <dt><time datetime={publishFrom} data-testid="published-date">{publishFromLocalized}</time></dt>
  {/if}
  {#if professionallyUpdated}
    <dd>{lastPublishedText}</dd>
    <dt>
      <time datetime={professionallyUpdated} data-testid="updated-date"
        >{lastUpdatedLocalized}</time>
    </dt>
  {/if}
</dl>
