<script lang="ts" module>
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import imageFile from './assets/testbilde.jpg'
  import { wrapInShadowDom } from './storybook-utils/utils'

  const { Story } = defineMeta({
    title: 'Components/Banner Image',
    args: {
      bannerImage: imageFile,
      disableCss: false
    },
    argTypes: {
      bannerImage: { control: 'file' },
      disableCss: { control: 'boolean' }
    }
  })
</script>

<Story name="Normal">
  {#snippet children({ bannerImage, disableCss })}
    <div use:wrapInShadowDom={disableCss}>
      <h1 class="mt-h1">Toppbilde</h1>
      <div class="banner-image" style={`--banner-image-url: url(${bannerImage})`}>
        <div class="banner-image--layout"></div>
      </div>
    </div>
  {/snippet}
</Story>
