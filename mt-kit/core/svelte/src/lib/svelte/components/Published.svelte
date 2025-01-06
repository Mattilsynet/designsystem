<script lang="ts">
  import { compareDates } from '$lib/ts'

  interface Props {
    publishFrom?: string
    professionallyUpdated?: string
    lang?: string
    publishedText?: string
    lastPublishedText?: string
    dtClass?: string
    ddClass?: string
  }

  let {
    publishFrom,
    professionallyUpdated,
    lang = 'nb',
    publishedText = 'Publisert',
    lastPublishedText = 'Faglig oppdatert',
    dtClass = '',
    ddClass = ''
  }: Props = $props()
  let dateObject = $derived(
    compareDates({
      lang,
      publishFrom,
      professionallyUpdated,
      publishedFromLabel: publishedText,
      professionallyUpdatedLabel: lastPublishedText
    })
  )
</script>

<dl class="mt-dl meta">
  {#if dateObject}
    <dt class={dtClass}>{dateObject.label}</dt>
    <dd class={ddClass}>
      <time datetime={dateObject.iso} data-testid="published-date">{dateObject.date}</time>
    </dd>
  {/if}
</dl>
