<script lang="ts">
  export let infoType: 'important' | 'none' = 'none'
  export let iconText: string | undefined
  export let text: string
</script>

<div class="notice" class:important={infoType !== 'none'}>
  {#if iconText}
    <span class="inclusively-hidden">{iconText}</span>
  {/if}
  {@html text}
</div>
