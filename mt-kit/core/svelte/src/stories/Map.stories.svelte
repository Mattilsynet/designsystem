<script lang="ts">
  import { Meta, Story } from '@storybook/addon-svelte-csf'
  import Map from '../lib/svelte/components/map/Map.svelte'
  import { markers as svg } from '../lib/ts/markers'
  import {
    CLICK_POPUP_ID,
    CLICK_POPUP_OVERLAY,
    DEFAULT_CLUSTER_DISTANCE,
    DEFAULT_CLUSTER_MIN_DISTANCE,
    DEFAULT_MARKER_SCALE,
    HOVER_POPUP_ID,
    HOVER_POPUP_OVERLAY
  } from '../lib/ts/mapUtils'
  import { createHoverMarkerContent } from '../lib/svelte/components/map/overlay'
  import { createClickMarkerContent } from '../lib/svelte/components/map/overlay.js'
  import { type PopupOptions } from '../lib/svelte/components/map/utils'

  let map
  let markers = [
    {
      municipality: 'Asker',
      location: 'Vollen - Selvikbukta',
      status: 'success',
      src: `data:image/svg+xml;utf8,${encodeURIComponent(svg['success'])}`,
      lat: 59.806328,
      long: 10.497057
    },
    {
      municipality: 'Fredrikstad',
      location: 'Engelsviken',
      status: 'success',
      src: `data:image/svg+xml;utf8,${encodeURIComponent(svg['success'])}`,
      lat: 59.24973,
      long: 10.73148
    },
    {
      municipality: 'Hvaler',
      location: 'Utgårdskilen',
      status: 'success',
      src: `data:image/svg+xml;utf8,${encodeURIComponent(svg['success'])}`,
      lat: 59.07705,
      long: 10.86951
    },
    {
      municipality: 'Kragerø',
      location: 'Saltneven',
      status: 'danger',
      src: `data:image/svg+xml;utf8,${encodeURIComponent(svg['danger'])}`,
      lat: 58.857348,
      long: 9.436104
    },
    {
      municipality: 'Larvik',
      location: 'Ødegårdsbukta, Viksfjord',
      status: 'success',
      src: `data:image/svg+xml;utf8,${encodeURIComponent(svg['success'])}`,
      lat: 59.0232,
      long: 10.09578
    },
    {
      municipality: 'Tønsberg',
      location: 'Vallø',
      status: 'danger',
      src: `data:image/svg+xml;utf8,${encodeURIComponent(svg['danger'])}`,
      lat: 59.256572,
      long: 10.49964
    },
    {
      municipality: 'Arendal',
      location: 'Flødevigen',
      status: 'success',
      src: `data:image/svg+xml;utf8,${encodeURIComponent(svg['success'])}`,
      lat: 58.424515,
      long: 8.756882
    },
    {
      municipality: 'Kristiansand',
      location: 'Flekkerøy',
      status: 'success',
      src: `data:image/svg+xml;utf8,${encodeURIComponent(svg['success'])}`,
      lat: 58.080294,
      long: 7.98647
    },
    {
      municipality: 'Risør',
      location: 'Finnøysundet',
      status: 'success',
      src: `data:image/svg+xml;utf8,${encodeURIComponent(svg['success'])}`,
      lat: 58.730467,
      long: 9.216733
    },
    {
      municipality: 'Bømlo',
      location: 'Rogøysund',
      status: 'success',
      src: `data:image/svg+xml;utf8,${encodeURIComponent(svg['success'])}`,
      lat: 59.808094,
      long: 5.093005
    },
    {
      municipality: 'Egersund',
      location: 'Nordre Sundet',
      status: 'success',
      src: `data:image/svg+xml;utf8,${encodeURIComponent(svg['success'])}`,
      lat: 58.460742,
      long: 5.915552
    },
    {
      municipality: 'Fjaler',
      location: 'Bortheim',
      status: 'success',
      src: `data:image/svg+xml;utf8,${encodeURIComponent(svg['success'])}`,
      lat: 61.351497,
      long: 5.349191
    },
    {
      municipality: 'Fjaler',
      location: 'Gjelet',
      status: 'success',
      src: `data:image/svg+xml;utf8,${encodeURIComponent(svg['success'])}`,
      lat: 61.374888,
      long: 5.417636
    },
    {
      municipality: 'Kvitsøy',
      location: 'Buøyflæet',
      status: 'success',
      src: `data:image/svg+xml;utf8,${encodeURIComponent(svg['success'])}`,
      lat: 59.044917,
      long: 5.40655
    },
    {
      municipality: 'Molde',
      location: 'Cap Clara',
      status: 'warning',
      src: `data:image/svg+xml;utf8,${encodeURIComponent(svg['warning'])}`,
      lat: 62.73349,
      long: 7.09873
    },
    {
      municipality: 'Stavanger',
      location: 'Talgje',
      status: 'success',
      src: `data:image/svg+xml;utf8,${encodeURIComponent(svg['success'])}`,
      lat: 59.104499,
      long: 5.859001
    },
    {
      municipality: 'Øygarden',
      location: 'Ulvsundet',
      status: 'success',
      src: `data:image/svg+xml;utf8,${encodeURIComponent(svg['success'])}`,
      lat: 60.517717,
      long: 4.890717
    },
    {
      municipality: 'Ålesund',
      location: 'Mørkesetsundet',
      status: 'warning',
      src: `data:image/svg+xml;utf8,${encodeURIComponent(svg['warning'])}`,
      lat: 62.50362,
      long: 6.47496
    },
    {
      municipality: 'Inderøy',
      location: 'Rundhaugen',
      status: 'success',
      src: `data:image/svg+xml;utf8,${encodeURIComponent(svg['success'])}`,
      lat: 63.891067,
      long: 10.908767
    },
    {
      municipality: 'Namsos',
      location: 'Breivika',
      status: 'success',
      src: `data:image/svg+xml;utf8,${encodeURIComponent(svg['success'])}`,
      lat: 64.475,
      long: 11.1887
    },
    {
      municipality: 'Hitra',
      location: 'Fillan (Vikan)',
      status: 'success',
      src: `data:image/svg+xml;utf8,${encodeURIComponent(svg['success'])}`,
      lat: 63.6012,
      long: 8.98972
    },
    {
      municipality: 'Ørland',
      location: 'Valsholmen',
      status: 'success',
      src: `data:image/svg+xml;utf8,${encodeURIComponent(svg['success'])}`,
      lat: 63.8092,
      long: 9.61
    },
    {
      municipality: 'Åfjord',
      location: 'Askerholmen (NS)',
      status: 'success',
      src: `data:image/svg+xml;utf8,${encodeURIComponent(svg['success'])}`,
      lat: 63.942353,
      long: 10.183832
    },
    {
      municipality: 'Bindal',
      location: 'Aarsand',
      status: 'danger',
      src: `data:image/svg+xml;utf8,${encodeURIComponent(svg['danger'])}`,
      lat: 65.04674,
      long: 12.15426
    },
    {
      municipality: 'Bindal',
      location: 'Isnaustet',
      status: 'warning',
      src: `data:image/svg+xml;utf8,${encodeURIComponent(svg['warning'])}`,
      lat: 65.03405,
      long: 12.18591
    },
    {
      municipality: 'Bindal',
      location: 'Hagasandvika',
      status: 'success',
      src: `data:image/svg+xml;utf8,${encodeURIComponent(svg['success'])}`,
      lat: 65.04724,
      long: 12.1405
    },
    {
      municipality: 'Bodø',
      location: 'Kobbvika i Festvåg',
      status: 'success',
      src: `data:image/svg+xml;utf8,${encodeURIComponent(svg['success'])}`,
      lat: 67.4382,
      long: 14.78265
    },
    {
      municipality: 'Leirfjord',
      location: 'Skogvika',
      status: 'danger',
      src: `data:image/svg+xml;utf8,${encodeURIComponent(svg['danger'])}`,
      lat: 66.05055,
      long: 12.95525
    },
    {
      municipality: 'Nordreisa',
      location: 'Kjempebakken',
      status: 'success',
      src: `data:image/svg+xml;utf8,${encodeURIComponent(svg['success'])}`,
      lat: 69.791747,
      long: 20.600536
    },
    {
      municipality: 'Tromsø',
      location: 'Larseng',
      status: 'warning',
      src: `data:image/svg+xml;utf8,${encodeURIComponent(svg['warning'])}`,
      lat: 69.569195,
      long: 18.771539
    },
    {
      municipality: 'Vestvågøy',
      location: 'Buksnesfjord/Gravdal',
      status: 'success',
      src: `data:image/svg+xml;utf8,${encodeURIComponent(svg['success'])}`,
      lat: 68.1283,
      long: 13.555
    },
    {
      municipality: 'Vestvågøy',
      location: 'Nappstraumen',
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
  let popupOptions: Array<PopupOptions> = [
    {
      id: CLICK_POPUP_OVERLAY,
      elementId: CLICK_POPUP_ID,
      positioning: 'center-left',
      markerContent: createClickMarkerContent
    },
    {
      id: HOVER_POPUP_OVERLAY,
      elementId: HOVER_POPUP_ID,
      positioning: 'center-left',
      markerContent: createHoverMarkerContent
    }
  ]
  function handleMapClicked(e) {
    console.log('clicked marker', e.detail.marker)
  }

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
  <Map
    on:mapClick={handleMapClicked}
    bind:this={map}
    {markers}
    class="mt-map-wrapper"
    {markerOptions}
    popUpOptions={popupOptions}
    {clusterOptions}>
  </Map>
  <!--  <div-->
  <!--    class="layout-flex layout-flex&#45;&#45;center-vertical p-xxxs background-mt-bg-danger layout-flex&#45;&#45;inline"-->
  <!--    style="&#45;&#45;gap: var(&#45;&#45;spacer-xx-small)">-->
  <!--    <a href="" class="mt-link">Hønefoss</a>-->
  <!--    <button-->
  <!--      id="popup-closer"-->
  <!--      class="mt-button mt-button&#45;&#45;search-clear icon&#45;&#45;x-before"-->
  <!--      aria-label="Close me">-->
  <!--    </button>-->
  <!--  </div>-->
  <!--  <button type="button" class="mt-button m-t-xxs" on:click={handleReset}>Reset zoom</button>-->
  <ul class="mt-ul list-unstyled no-space-between">
    <li class="mt-li text-small p-xxxs border-radius background-mt-bg-success">Oslo</li>
    <li class="mt-li text-small p-xxxs border-radius background-mt-bg-danger">Hønefoss</li>
  </ul>
</Story>

<style lang="scss">
</style>
