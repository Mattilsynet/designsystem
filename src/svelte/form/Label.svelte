<script lang="ts">
  let htmlFor: string;
  export {htmlFor as for};
  export let textOptional: string | undefined = 'valgfitt felt';
  export let isRequired: boolean | undefined = undefined;
</script>

<label class="form-label" for={htmlFor}>
  <slot />
  {#if !isRequired}
    <span class="text-small">({textOptional})</span>
  {/if}
</label>
