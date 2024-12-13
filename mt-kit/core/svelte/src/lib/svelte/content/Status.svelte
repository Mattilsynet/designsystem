<script lang="ts">
  import { mapRelExternal } from '$lib/ts'
  import Published from '../components/Published.svelte'

  interface Props {
    text: string
    updatedDate: string
    publishedText?: string
    actionsTakenByMattilsynet?: string
    statusType: 'important' | 'none'
    linkUrl: string
    linkText: string
    class?: string
    lang?: string
    heading?: import('svelte').Snippet
  }

  let {
    text,
    updatedDate,
    publishedText = 'Oppdatert',
    actionsTakenByMattilsynet,
    statusType,
    linkUrl,
    linkText,
    class: className = '',
    lang = 'nb',
    heading
  }: Props = $props()
</script>

<div class="status {className}">
  <span class="{statusType} mt-h2" data-testid="status-type"></span>

  {@render heading?.()}

  <div class="text">
    {@html text}
  </div>
  {#if actionsTakenByMattilsynet}
    <div class="text action">
      {@html actionsTakenByMattilsynet}
    </div>
  {/if}
  {#if linkUrl}
    <a href={linkUrl} rel={mapRelExternal(linkUrl)} class="fit-content">{linkText}</a>
  {/if}
  {#if updatedDate && statusType === 'important'}
    <Published publishFrom={updatedDate} {publishedText} professionallyUpdated={undefined} {lang} />
  {/if}
</div>
