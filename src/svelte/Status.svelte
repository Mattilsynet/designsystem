<script lang="ts">
  import {displayDataTime} from '../ts/utils'
  import Published from './Published.svelte'

  export let text: string
  export let updatedDate: string
  export let publishedText = 'Oppdatert'
  export let actionsTakenByMattilsynet: string
  export let statusType: 'important' | 'none'
  export let linkUrl: string
  export let linkText: string
  export let linkIsExternal: boolean
  let className: string
  export {className as class}
  export let lang = 'NO-nb'

  $: updatedDateLocalized = updatedDate ? displayDataTime(lang, updatedDate) : null
</script>

<div class="status {className}">
  <span class={statusType} data-testid="status-type" />
  <slot name="heading" />

  <div class="text">
    {@html text}
  </div>
  {#if actionsTakenByMattilsynet}
    <div class="text action">
      {@html actionsTakenByMattilsynet}
    </div>
  {/if}
  {#if updatedDate && statusType === 'important'}
    <Published publishFrom={updatedDate} {publishedText} />
  {/if}
  {#if linkUrl}
    <a href={linkUrl} rel={linkIsExternal ? 'external' : undefined}>{linkText}</a>
  {/if}
</div>
