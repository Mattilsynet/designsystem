<script lang="ts">
  import { Meta, Story } from '@storybook/addon-svelte-csf'
  import Map from '../lib/svelte/components/map/Map.svelte'
  import { markers as svg } from '../lib/ts/markers'
  let scale = 0.5

  let markers = [
    {
      src: `data:image/svg+xml;utf8,${encodeURIComponent(svg['success'])}`,
      scale,
      long: 10.872409561252239,
      lat: 59.07990318113192
    },
    {
      src: `data:image/svg+xml;utf8,${encodeURIComponent(svg['success'])}`,
      scale,
      long: 10.738901477126458,
      lat: 59.25379203768271
    },
    {
      src: `data:image/svg+xml;utf8,${encodeURIComponent(svg['warning'])}`,
      scale,
      long: 10.494057280496966,
      lat: 59.80611161423998
    },
    {
      src: `data:image/svg+xml;utf8,${encodeURIComponent(svg['success'])}`,
      scale,
      long: 10.495702933112202,
      lat: 59.26212144374083
    },
    {
      src: `data:image/svg+xml;utf8,${encodeURIComponent(svg['danger'])}`,
      scale,
      lat: 63.77931830612623,
      long: 9.370601302223381
    },
    {
      src: `data:image/svg+xml;utf8,${encodeURIComponent(svg['neutral'])}`,
      scale,
      lat: 69.67226116453416,
      long: 18.97204095671376
    },
    {
      src: `data:image/svg+xml;utf8,${encodeURIComponent(svg['info'])}`,
      scale,
      lat: 59.108273862594345,
      long: 5.847734262668244
    },
    {
      src: `data:image/svg+xml;utf8,${encodeURIComponent(svg['success'])}`,
      scale,
      lat: 62.73345995685433,
      long: 7.094750343097747
    },
    {
      src: `data:image/svg+xml;utf8,${encodeURIComponent(svg['success'])}`,
      scale,
      lat: 58.03508806160256,
      long: 7.203928479020596
    },
    {
      src: `data:image/svg+xml;utf8,${encodeURIComponent(svg['success'])}`,
      scale,
      lat: 58.0692532492435,
      long: 7.994257638340072
    }
  ]
  function handleMapClicked(e) {
    console.log('clicked marker', e.detail.marker)
  }
</script>

<Meta
  title="Components/Map"
  args={{
    disableCss: false
  }}
  argTypes={{
    disableCss: { control: 'boolean' }
  }} />

<Story name="Normal" let:disableCss>
  <h1>Map</h1>
  <Map on:mapClick={handleMapClicked} {markers} class="map-wrapper" />
</Story>
