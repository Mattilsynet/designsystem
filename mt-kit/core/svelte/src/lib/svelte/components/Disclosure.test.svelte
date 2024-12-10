<script lang="ts">
  import Disclosure from './Disclosure.svelte'
  interface Props {
    [key: string]: any
  }

  let { ...props }: Props = $props();
</script>

<Disclosure {...props}>
  <p>This is the disclosure panel text</p>
</Disclosure>
