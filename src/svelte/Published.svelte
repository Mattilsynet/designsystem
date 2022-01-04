<script lang="ts">
  import {displayDataTime} from '../ts/utils';

  export let publishFrom: string | undefined;
  export let professionallyUpdated: string | undefined;
  export let lang = 'nb-NO';
  export let publishedText = 'Publisert';
  export let lastPublishedText = 'Sist oppdatert';

  $: publishFromLocalized = publishFrom ? displayDataTime(lang, publishFrom) : '';
  $: lastUpdatedLocalized = professionallyUpdated ? displayDataTime(lang, professionallyUpdated) : '';
</script>

<dl class="meta">
  {#if publishFrom}
    <dd>{publishedText}</dd>
    <dt><time datetime={publishFrom}>{publishFromLocalized}</time></dt>
  {/if}
  {#if professionallyUpdated}
    <dd>{lastPublishedText}</dd>
    <dt>
      <time datetime={professionallyUpdated}>{lastUpdatedLocalized}</time>
    </dt>
  {/if}
</dl>
