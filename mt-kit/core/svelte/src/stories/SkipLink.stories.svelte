<script lang="ts" module>
  import { defineMeta } from '@storybook/addon-svelte-csf'

  const { Story } = defineMeta({
    title: 'Components/Skip Link',
    args: {
      label: 'Hopp til hovedinnholdet'
    }
  })
</script>

<Story name="Hidden focusable link">
  {#snippet children({ label })}
    <a href="" class="mt-link visually-hidden-focusable skip-link">{label}</a>
    <h2 class="mt-h2">Hidden focusable link</h2>
    <p>Press tab to focus the link, and make it visible.</p>
  {/snippet}
</Story>
