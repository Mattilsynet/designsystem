<script lang="ts">
  import { Meta, Story } from '@storybook/addon-svelte-csf'
  import imageFile from './assets/testbilde.jpg'
  import { wrapInShadowDom } from './storybook-utils/utils'
</script>

<Meta
  title="Components/Banner Image"
  args={{
    bannerImage: imageFile,
    disableCss: false
  }}
  argTypes={{
    bannerImage: { control: 'file' },
    disableCss: { control: 'boolean' }
  }} />

<Story name="Normal" let:bannerImage let:disableCss>
  <div use:wrapInShadowDom={disableCss}>
    <h1 class="mt-h1">Toppbilde</h1>
    <div class="banner-image" style={`--banner-image-url: url(${bannerImage})`}>
      <div class="banner-image--layout" />
    </div>
  </div>
</Story>
