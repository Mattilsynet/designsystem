<script lang="ts">
  export let infoType: 'important' | 'none';
  export let iconText: string | undefined;
  export let text: string;
</script>

<div class="notice">
  {#if infoType !== 'none'}
    <span class={`${infoType}`} />
  {/if}
  {#if iconText}
    <span class="inclusively-hidden">{iconText}</span>
  {/if}
  <div class="text">
    {@html text}
  </div>
</div>
