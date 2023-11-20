<script lang="ts">
  import type { ErrorDetail } from '../../../ts/types'

  export let value
  export let name: string
  export let error: ErrorDetail | undefined
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
