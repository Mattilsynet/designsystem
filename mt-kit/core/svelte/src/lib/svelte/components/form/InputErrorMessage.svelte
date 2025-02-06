<script lang="ts">
  import { styles } from '@mattilsynet/design'

  interface Props {
    key: string
    message: string
    hiddenErrorText?: string
    class?: string
  }

  let { key, message, hiddenErrorText = 'Feilmelding', class: className = '' }: Props = $props()
</script>

<span id={`${key}-error`} class="{styles.validation} {className}">
  <span class="inclusively-hidden">{hiddenErrorText}:</span>
  {message}
</span>
