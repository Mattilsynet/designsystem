<script lang="ts">
  export let htmlFor: string;
  export let textOptional: string | undefined = 'valgfitt felt';
  export let isRequired: boolean = false;
</script>

<label class="form-label" for={htmlFor}>
  <slot />
  {#if !isRequired}
    <span class="text-small">({textOptional})</span>
  {/if}
</label>
