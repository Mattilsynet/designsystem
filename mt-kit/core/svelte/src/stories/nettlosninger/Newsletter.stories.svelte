<script lang="ts" module>
  import { defineMeta } from '@storybook/addon-svelte-csf'

  const { Story } = defineMeta({
    title: 'Innhold/Nyhetsbrev',
    argTypes: {
      disableCss: { control: 'boolean' },
      disabled: { control: 'boolean' }
    }
  })
</script>

<Story name="Nyhetsbrev">
  {#snippet children({ disableCss, disabled })}
    <h1 class="mt-h1 m-b-m">Nyhetsbrev</h1>
    <h2 class="mt-h2 m-b-s">Lenke til påmelding</h2>
    <a
      href="#"
      class="mt-link mt-button mt-button--secondary icon--newsletter-bell-before"
      {disabled}>Abonner på nyhetsbrev</a>
  {/snippet}
</Story>
