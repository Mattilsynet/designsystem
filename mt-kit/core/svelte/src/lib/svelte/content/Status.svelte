<script lang="ts">
  import { displayDataTime, mapRelExternal } from '../../ts/utils'
  import Published from '../components/Published.svelte'

  interface Props {
    text: string
    updatedDate: string
    publishedText?: string
    actionsTakenByMattilsynet: string
    statusType: 'important' | 'none'
    linkUrl: string
    linkText: string
    class: string
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
    class: className,
    lang = 'NO-nb',
    heading
  }: Props = $props()

  let updatedDateLocalized = $derived(updatedDate ? displayDataTime(lang, updatedDate) : null)
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
    <Published publishFrom={updatedDate} {publishedText} />
  {/if}
</div>
