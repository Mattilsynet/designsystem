<script lang="ts">
  import { displayDataTime, mapRelExternal } from '../../ts/utils'
  import Published from '../components/Published.svelte'

  export let text: string
  export let updatedDate: string
  export let publishedText = 'Oppdatert'
  export let actionsTakenByMattilsynet: string
  export let statusType: 'important' | 'none'
  export let linkUrl: string
  export let linkText: string
  let className: string
  export { className as class }
  export let lang = 'NO-nb'

  $: updatedDateLocalized = updatedDate ? displayDataTime(lang, updatedDate) : null
</script>

<div class="status {className}">
  <span class="{statusType} h2" data-testid="status-type"/>

  <slot name="heading"/>

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
    <Published publishFrom={updatedDate} {publishedText}/>
  {/if}
</div>
