<script lang="ts">
  interface Props {
    infoType?: 'important' | 'none';
    iconText: string | undefined;
    text: string;
  }

  let { infoType = 'none', iconText, text }: Props = $props();
</script>

<div class="notice" class:important={infoType !== 'none'}>
  {#if iconText}
    <span class="inclusively-hidden">{iconText}</span>
  {/if}
  {@html text}
</div>
