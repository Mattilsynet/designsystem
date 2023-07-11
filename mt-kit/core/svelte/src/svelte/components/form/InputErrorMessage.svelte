<script lang="ts">
  export let key: string
  export let message: string
  export let hiddenErrorText = 'Feilmelding'
  let className = ''
  export {className as class}
</script>

<span id={`${key}-error`} class="form-error {className}">
  <span class="inclusively-hidden">{hiddenErrorText}:</span>
  {message}
</span>
