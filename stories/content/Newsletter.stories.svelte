<script lang="ts">
  import {Story, Meta} from '@storybook/addon-svelte-csf'
</script>

<Meta
  title="Innhold/Nyhetsbrev",
  argTypes={{
    disableCss: {control: 'boolean'},
    disabled: {control: 'boolean'}
  }}
/>

<Story name="Nyhetsbrev"  let:disableCss let:disabled>
  <h1 class="m-b-m">Nyhetsbrev</h1>
  <h2 class="m-b-s">Lenke til påmelding</h2>
  <a href="#" class="button button--secondary icon--newsletter-bell-before" {disabled}>Abonner på nyhetsbrev</a>
</Story>
