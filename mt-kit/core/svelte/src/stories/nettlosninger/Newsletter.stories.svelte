<script lang="ts">
  import { Story, Meta } from '@storybook/addon-svelte-csf'
</script>

<Meta
  title="Innhold/Nyhetsbrev"
  ,
  argTypes={{
    disableCss: { control: 'boolean' },
    disabled: { control: 'boolean' }
  }}
/>

<Story name="Nyhetsbrev">
  {#snippet children({ disableCss, disabled })}
    <h1 class="mt-h1 m-b-m">Nyhetsbrev</h1>
    <h2 class="mt-h2 m-b-s">Lenke til påmelding</h2>
    <a
      href="#"
      class="mt-link mt-button mt-button--secondary icon--newsletter-bell-before"
      {disabled}>Abonner på nyhetsbrev</a
    >
  {/snippet}
</Story>
