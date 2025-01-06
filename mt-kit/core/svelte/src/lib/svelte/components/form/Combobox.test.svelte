<script lang="ts">
  import Combobox from './Combobox.svelte'

  interface Props {
    options: Record<string, any>
  }

  let { options }: Props = $props()
</script>

<Combobox {...options}>
  {#snippet options()}
    <u-option>en</u-option>
    <u-option>to</u-option>
    <u-option>tre</u-option>
    <u-option>fire</u-option>
    <u-option>fem</u-option>
  {/snippet}
</Combobox>
