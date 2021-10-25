<script lang="ts">
  export let publishFrom;
  export let professionallyUpdated;
  export let lang = 'nb-NO';
  export let publishedText: string = 'Publisert';
  export let lastPublishedText: string = 'Sist oppdatert';

  $: publishFromLocalized = displayDataTime(lang, publishFrom);
  $: lastUpdatedLocalized = displayDataTime(lang, professionallyUpdated);

  function displayDataTime(lang: string, isoDate?: string): string {
    if (!isoDate) return '';
    return new Intl.DateTimeFormat(lang).format(new Date(isoDate));
  }
</script>

<dl class="meta">
  <dd>{publishedText}</dd>
  <dt><time datetime={publishFrom}>{publishFromLocalized}</time></dt>
  <dd>{lastPublishedText}</dd>
  <dt>
    <time datetime={professionallyUpdated}>{lastUpdatedLocalized}</time>
  </dt>
</dl>
