<script lang="ts">
  import { Meta, Story } from '@storybook/addon-svelte-csf'
</script>

<Meta
  title="Components/Skip Link"
  args={{
    label: 'Hopp til hovedinnholdet'
  }}
/>

<Story name="Hidden focusable link">
  {#snippet children({ label })}
    <a href="" class="mt-link visually-hidden-focusable skip-link">{label}</a>
    <h2 class="mt-h2">Hidden focusable link</h2>
    <p>Press tab to focus the link, and make it visible.</p>
  {/snippet}
</Story>
