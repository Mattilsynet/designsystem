<script lang="ts">
  import {Meta, Story} from '@storybook/addon-svelte-csf'
</script>

<Meta
  title="Components/Banner Image"
  args={{
    bannerImage: 'testbilde.jpg',
    disabled: false,
    disableJs: false,
    disableCss: false
  }}
  argTypes={{
    disabled: {control: 'boolean'},
    disableJs: {control: 'boolean'},
    disableCss: {control: 'boolean'}
  }} />

<Story name="Normal" let:bannerImage let:disableCss let:disabled let:secondary>
  <h1>Toppbilde</h1>
  <div class="banner-image" style={`--banner-image-url: url(${bannerImage})`}>
    <div class="layout-grid layout-grid--column-3 container banner-image--layout">
      <div class="bg-light-light-blue p-xxs">
        Innhold innenfor bilde. Skjuler bilde for mobilvisning.
      </div>
    </div>
  </div>
</Story>
