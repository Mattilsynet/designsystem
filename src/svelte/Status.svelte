<script lang="ts">
  import {displayDataTime} from '../ts/utils'

  export let text: string
  export let updatedDate: string
  export let actionsTakenByMattilsynet: string
  export let statusType: 'important' | 'none'
  export let linkUrl: string
  export let linkText: string
  export let linkIsExternal: boolean
  let className: string
  export {className as class}
  export let lang = 'nb-NO'

  $: updatedDateLocalized = updatedDate ? displayDataTime(lang, updatedDate) : null
</script>

<div class="status {className}">
  <span class={statusType} data-testid="status-type" />
  <slot name="heading" />

  {#if updatedDate && statusType === 'important'}
    <time datetime={updatedDate} data-testid="updated-date">{updatedDateLocalized}</time>
  {/if}
  <div class="text">
    {@html text}
  </div>
  {#if actionsTakenByMattilsynet}
    <div class="action">
      {@html actionsTakenByMattilsynet}
    </div>
  {/if}
  {#if linkUrl}
    <a href={linkUrl} rel={linkIsExternal ? 'external' : undefined}>{linkText}</a>
  {/if}
</div>
