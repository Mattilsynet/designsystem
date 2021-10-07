<script lang="ts">
  export let publishFrom;
  export let professionallyUpdated;
  export let lang = 'nb-NO';

  $: publishFromLocalized = displayDataTime(lang, publishFrom);
  $: lastUpdatedLocalized = displayDataTime(lang, professionallyUpdated);

  function displayDataTime(lang: string, isoDate?: string): string {
    if (!isoDate) return '';
    return new Intl.DateTimeFormat(lang).format(new Date(isoDate));
  }
</script>

<dl class="meta">
  <dd>Publisert</dd>
  <dt><time datetime={publishFrom}>{publishFromLocalized}</time></dt>
  <dd>Sist oppdatert</dd>
  <dt>
    <time datetime={professionallyUpdated}>{lastUpdatedLocalized}</time>
  </dt>
</dl>
