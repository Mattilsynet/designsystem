<script>export let infoType = "none";
export let iconText;
export let text;
</script>

<div class="notice" class:important={infoType !== 'none'}>
  {#if iconText}
    <span class="inclusively-hidden">{iconText}</span>
  {/if}
  {@html text}
</div>
