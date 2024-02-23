<script lang="ts">
  import { Meta, Story } from '@storybook/addon-svelte-csf'
  import Map from '../lib/svelte/components/map/Map.svelte'
  import Layers from '$lib/svelte/components/map/KartverketLayers.svelte'
  import Markers from '../lib/svelte/components/map/Marker.svelte'
  import DefaultControls from '../lib/svelte/components/map/DefaultControls.svelte'
  import ActivateMap from '../lib/svelte/components/map/ActivateMap.svelte'
  import Geolocation from '../lib/svelte/components/map/Geolocation.svelte'
  import Popup from '../lib/svelte/components/map/Popup.svelte'
  import { markers as svg } from '../lib/ts/markers'
  import {
    DEFAULT_CLUSTER_DISTANCE,
    DEFAULT_CLUSTER_MIN_DISTANCE,
    DEFAULT_MARKER_SCALE,
    EUROPA_FORENKLET,
    NORGES_GRUNNKART
  } from '../lib/ts/mapUtils'
  import { createClickMarkerContent } from '../lib/svelte/components/map/overlay'
  import { type MTPopupOptions } from '../lib/svelte/components/map/utils'
  import type { MusselMarker } from '$lib/ts/types'

  let map
  let markers: Array<MusselMarker> = [
    {
      municipality: 'Asker',
      location: 'Vollen - Selvikbukta',
      href: '',
      status: 'success',
      src: `data:image/svg+xml;utf8,${encodeURIComponent(svg['success'])}`,
      lat: 59.806328,
      long: 10.497057
    },
    {
      municipality: 'Fredrikstad',
      location: 'Engelsviken',
      href: '',
      status: 'success',
      src: `data:image/svg+xml;utf8,${encodeURIComponent(svg['success'])}`,
      lat: 59.24973,
      long: 10.73148
    },
    {
      municipality: 'Hvaler',
      location: 'Utgårdskilen',
      href: '',
      status: 'success',
      src: `data:image/svg+xml;utf8,${encodeURIComponent(svg['success'])}`,
      lat: 59.07705,
      long: 10.86951
    },
    {
      municipality: 'Kragerø',
      location: 'Saltneven',
      href: '',
      status: 'danger',
      src: `data:image/svg+xml;utf8,${encodeURIComponent(svg['danger'])}`,
      lat: 58.857348,
      long: 9.436104
    },
    {
      municipality: 'Larvik',
      location: 'Ødegårdsbukta, Viksfjord',
      href: '',
      status: 'success',
      src: `data:image/svg+xml;utf8,${encodeURIComponent(svg['success'])}`,
      lat: 59.0232,
      long: 10.09578
    },
    {
      municipality: 'Tønsberg',
      location: 'Vallø',
      href: '',
      status: 'danger',
      src: `data:image/svg+xml;utf8,${encodeURIComponent(svg['danger'])}`,
      lat: 59.256572,
      long: 10.49964
    },
    {
      municipality: 'Arendal',
      location: 'Flødevigen',
      href: '',
      status: 'success',
      src: `data:image/svg+xml;utf8,${encodeURIComponent(svg['success'])}`,
      lat: 58.424515,
      long: 8.756882
    },
    {
      municipality: 'Kristiansand',
      location: 'Flekkerøy',
      href: '',
      status: 'success',
      src: `data:image/svg+xml;utf8,${encodeURIComponent(svg['success'])}`,
      lat: 58.080294,
      long: 7.98647
    },
    {
      municipality: 'Risør',
      location: 'Finnøysundet',
      href: '',
      status: 'success',
      src: `data:image/svg+xml;utf8,${encodeURIComponent(svg['success'])}`,
      lat: 58.730467,
      long: 9.216733
    },
    {
      municipality: 'Bømlo',
      location: 'Rogøysund',
      href: '',
      status: 'success',
      src: `data:image/svg+xml;utf8,${encodeURIComponent(svg['success'])}`,
      lat: 59.808094,
      long: 5.093005
    },
    {
      municipality: 'Egersund',
      location: 'Nordre Sundet',
      href: '',
      status: 'success',
      src: `data:image/svg+xml;utf8,${encodeURIComponent(svg['success'])}`,
      lat: 58.460742,
      long: 5.915552
    },
    {
      municipality: 'Fjaler',
      location: 'Bortheim',
      href: '',
      status: 'success',
      src: `data:image/svg+xml;utf8,${encodeURIComponent(svg['success'])}`,
      lat: 61.351497,
      long: 5.349191
    },
    {
      municipality: 'Fjaler',
      location: 'Gjelet',
      href: '',
      status: 'success',
      src: `data:image/svg+xml;utf8,${encodeURIComponent(svg['success'])}`,
      lat: 61.374888,
      long: 5.417636
    },
    {
      municipality: 'Kvitsøy',
      location: 'Buøyflæet',
      href: '',
      status: 'success',
      src: `data:image/svg+xml;utf8,${encodeURIComponent(svg['success'])}`,
      lat: 59.044917,
      long: 5.40655
    },
    {
      municipality: 'Molde',
      location: 'Cap Clara',
      href: '',
      status: 'warning',
      src: `data:image/svg+xml;utf8,${encodeURIComponent(svg['warning'])}`,
      lat: 62.73349,
      long: 7.09873
    },
    {
      municipality: 'Stavanger',
      location: 'Talgje',
      href: '',
      status: 'success',
      src: `data:image/svg+xml;utf8,${encodeURIComponent(svg['success'])}`,
      lat: 59.104499,
      long: 5.859001
    },
    {
      municipality: 'Øygarden',
      location: 'Ulvsundet',
      href: '',
      status: 'success',
      src: `data:image/svg+xml;utf8,${encodeURIComponent(svg['success'])}`,
      lat: 60.517717,
      long: 4.890717
    },
    {
      municipality: 'Ålesund',
      location: 'Mørkesetsundet',
      href: '',
      status: 'warning',
      src: `data:image/svg+xml;utf8,${encodeURIComponent(svg['warning'])}`,
      lat: 62.50362,
      long: 6.47496
    },
    {
      municipality: 'Inderøy',
      location: 'Rundhaugen',
      href: '',
      status: 'success',
      src: `data:image/svg+xml;utf8,${encodeURIComponent(svg['success'])}`,
      lat: 63.891067,
      long: 10.908767
    },
    {
      municipality: 'Namsos',
      location: 'Breivika',
      href: '',
      status: 'success',
      src: `data:image/svg+xml;utf8,${encodeURIComponent(svg['success'])}`,
      lat: 64.475,
      long: 11.1887
    },
    {
      municipality: 'Hitra',
      location: 'Fillan (Vikan)',
      href: '',
      status: 'success',
      src: `data:image/svg+xml;utf8,${encodeURIComponent(svg['success'])}`,
      lat: 63.6012,
      long: 8.98972
    },
    {
      municipality: 'Ørland',
      location: 'Valsholmen',
      href: '',
      status: 'success',
      src: `data:image/svg+xml;utf8,${encodeURIComponent(svg['success'])}`,
      lat: 63.8092,
      long: 9.61
    },
    {
      municipality: 'Åfjord',
      location: 'Askerholmen (NS)',
      href: '',
      status: 'success',
      src: `data:image/svg+xml;utf8,${encodeURIComponent(svg['success'])}`,
      lat: 63.942353,
      long: 10.183832
    },
    {
      municipality: 'Bindal',
      location: 'Aarsand',
      href: '',
      status: 'danger',
      src: `data:image/svg+xml;utf8,${encodeURIComponent(svg['danger'])}`,
      lat: 65.04674,
      long: 12.15426
    },
    {
      municipality: 'Bindal',
      location: 'Isnaustet',
      href: '',
      status: 'warning',
      src: `data:image/svg+xml;utf8,${encodeURIComponent(svg['warning'])}`,
      lat: 65.03405,
      long: 12.18591
    },
    {
      municipality: 'Bindal',
      location: 'Hagasandvika',
      href: '',
      status: 'success',
      src: `data:image/svg+xml;utf8,${encodeURIComponent(svg['success'])}`,
      lat: 65.04724,
      long: 12.1405
    },
    {
      municipality: 'Bodø',
      location: 'Kobbvika i Festvåg',
      href: '',
      status: 'success',
      src: `data:image/svg+xml;utf8,${encodeURIComponent(svg['success'])}`,
      lat: 67.4382,
      long: 14.78265
    },
    {
      municipality: 'Leirfjord',
      location: 'Skogvika',
      href: '',
      status: 'danger',
      src: `data:image/svg+xml;utf8,${encodeURIComponent(svg['danger'])}`,
      lat: 66.05055,
      long: 12.95525
    },
    {
      municipality: 'Nordreisa',
      location: 'Kjempebakken',
      href: '',
      status: 'success',
      src: `data:image/svg+xml;utf8,${encodeURIComponent(svg['success'])}`,
      lat: 69.791747,
      long: 20.600536
    },
    {
      municipality: 'Tromsø',
      location: 'Larseng',
      href: '',
      status: 'warning',
      src: `data:image/svg+xml;utf8,${encodeURIComponent(svg['warning'])}`,
      lat: 69.569195,
      long: 18.771539
    },
    {
      municipality: 'Vestvågøy',
      location: 'Buksnesfjord/Gravdal',
      href: '',
      status: 'success',
      src: `data:image/svg+xml;utf8,${encodeURIComponent(svg['success'])}`,
      lat: 68.1283,
      long: 13.555
    },
    {
      municipality: 'Vestvågøy',
      location: 'Nappstraumen',
      href: '',
      status: 'danger',
      src: `data:image/svg+xml;utf8,${encodeURIComponent(svg['danger'])}`,
      lat: 68.1436167,
      long: 13.5302833
    }
  ]
  const markerOptions = {
    scale: DEFAULT_MARKER_SCALE
  }

  let clusterOptions = {
    distance: DEFAULT_CLUSTER_DISTANCE,
    minDistance: DEFAULT_CLUSTER_MIN_DISTANCE
  }

  let popUpOptions: Array<MTPopupOptions> = [
    {
      id: 'ClickPopupOverlay',
      elementId: 'click-popup',
      positioning: 'center-left',
      markerContent: createClickMarkerContent('Lukk')
    }
  ]
  const geolocationOptions = { label: 'Vis min lokasjon' }

  function handleReset() {
    if (map) {
      map.resetZoom()
    }
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
  <Map class="mt-map-wrapper" bind:this={map}>
    <Layers kartverketLayerNames={[EUROPA_FORENKLET, NORGES_GRUNNKART]}></Layers>
    <Markers {markers} {markerOptions} {clusterOptions}></Markers>
    <ActivateMap></ActivateMap>
    <Geolocation {geolocationOptions}></Geolocation>
    <DefaultControls></DefaultControls>
    <Popup slot="extra" {popUpOptions}></Popup>
  </Map>
  <button type="button" class="mt-button m-t-xxs" on:click={handleReset}>Reset zoom</button>
</Story>

<style lang="scss">
</style>
