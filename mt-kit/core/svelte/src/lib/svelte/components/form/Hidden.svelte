<script lang="ts">
  import type { ErrorDetail } from '../../../ts/types'

  interface Props {
    value: any;
    name: string;
    error: ErrorDetail | undefined;
  }

  let { value = $bindable(), name, error }: Props = $props();
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
