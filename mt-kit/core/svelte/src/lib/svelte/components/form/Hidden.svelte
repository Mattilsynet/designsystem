<script lang="ts">
  import type { ErrorDetail } from '$lib/ts'

  interface Props {
    value: string
    name: string
    error?: ErrorDetail
  }

  let { value = $bindable(), name, error }: Props = $props()
</script>

<input
  type="hidden"
  id={name}
  {name}
  bind:value
  class="mt-input"
  class:error
  aria-describedby={`${name}-hint ${name}-error`}
  aria-invalid={!!error} />
