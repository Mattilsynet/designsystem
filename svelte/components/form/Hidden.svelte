<script>export let value;
export let name;
export let error;
</script>

<input
  type="hidden"
  id={name}
  {name}
  bind:value
  class="mt-input"
  class:error
  aria-describedby={`${name}-hint ${name}-error`}
  aria-invalid={!!error}
/>
