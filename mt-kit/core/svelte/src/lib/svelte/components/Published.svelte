<script lang="ts">
  import { compareDates } from '../../ts/utils'

  export let publishFrom: string | undefined
  export let professionallyUpdated: string | undefined
  export let lang = 'NO-nb'
  export let publishedText = 'Publisert'
  export let lastPublishedText = 'Faglig oppdatert'
  export let dtIcon = ''
  let className = ''
  export { className as class }
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
    <dt class={`${dtIcon} ${className}`}>{dateObject.label}</dt>
    <dd class={className}>
      <time datetime={dateObject.iso} data-testid="published-date">{dateObject.date}</time>
    </dd>
  {/if}
</dl>
