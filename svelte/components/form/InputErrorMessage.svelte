<script>export let key;
export let message;
export let hiddenErrorText = "Feilmelding";
let className = "";
export { className as class };
</script>

<span id={`${key}-error`} class="form-error {className}">
  <span class="inclusively-hidden">{hiddenErrorText}:</span>
  {message}
</span>
