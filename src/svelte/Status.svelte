<script lang="ts">
  export let text: string
  export let actionsTakenByMattilsynet: string
  export let statusType: 'important' | 'none'
  export let linkUrl: string
  export let linkText: string
  export let linkIsExternal: boolean
  let className: string
  export {className as class}
</script>

<div class="status">
  <span class={statusType} data-testid="status-type" />
  <slot name="heading" />

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
