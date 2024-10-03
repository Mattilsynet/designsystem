<script lang="ts">
  import Combobox from './Combobox.svelte'

  export let options: Record<string, any>
</script>

<Combobox {...options}>
  <svelte:fragment slot="options">
    <u-option>en</u-option>
    <u-option>to</u-option>
    <u-option>tre</u-option>
    <u-option>fire</u-option>
    <u-option>fem</u-option>
  </svelte:fragment>
</Combobox>
