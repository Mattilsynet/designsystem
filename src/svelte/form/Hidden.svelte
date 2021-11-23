<script lang="ts">
  import type {ErrorDetail} from '../../ts/types';

  export let value;
  export let error: ErrorDetail | undefined;
  export let name: string;
</script>

<input
  type="hidden"
  id={name}
  {name}
  bind:value
  class:error
  aria-describedby={`${name}-hint ${name}-error`}
  aria-invalid={!!error}
/>
