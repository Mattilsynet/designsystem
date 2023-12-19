<script>let htmlFor;
export { htmlFor as for };
let className = "";
export { className as class };
export let textOptional = "(valgfritt felt)";
export let isRequired = void 0;
export let showOptionalText = true;
</script>

<label class="mt-label {className}" for={htmlFor}>
  <slot />
  {#if !isRequired && showOptionalText}
    <span class="text-small">{textOptional}</span>
  {/if}
</label>
