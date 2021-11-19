<script lang="ts">
  export let key: string;
  export let message: string;
  export let hiddenErrorText: string = 'Feilmelding';
</script>

<span id={`${key}-error`} class="form-error">
  <span class="inclusively-hidden">{hiddenErrorText}:</span>
  {message}
</span>
