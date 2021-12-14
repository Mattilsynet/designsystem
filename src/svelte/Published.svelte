<script lang="ts">
  import {displayDataTime} from '../ts/utils';

  export let publishFrom;
  export let professionallyUpdated;
  export let lang = 'nb-NO';
  export let publishedText = 'Publisert';
  export let lastPublishedText = 'Sist oppdatert';

  $: publishFromLocalized = displayDataTime(lang, publishFrom);
  $: lastUpdatedLocalized = displayDataTime(lang, professionallyUpdated);
</script>

<dl class="meta">
  <dd>{publishedText}</dd>
  <dt><time datetime={publishFrom}>{publishFromLocalized}</time></dt>
  <dd>{lastPublishedText}</dd>
  <dt>
    <time datetime={professionallyUpdated}>{lastUpdatedLocalized}</time>
  </dt>
</dl>
