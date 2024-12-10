<script lang="ts">
  interface Props {
    key: string;
    message: string;
    hiddenErrorText?: string;
    class?: string;
  }

  let {
    key,
    message,
    hiddenErrorText = 'Feilmelding',
    class: className = ''
  }: Props = $props();
  
</script>

<span id={`${key}-error`} class="form-error {className}">
  <span class="inclusively-hidden">{hiddenErrorText}:</span>
  {message}
</span>
