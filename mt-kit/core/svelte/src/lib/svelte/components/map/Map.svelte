<script lang="ts">
  import 'ol/ol.css'
  import { Map, Overlay, View } from 'ol'
  import { fromLonLat } from 'ol/proj'
  import type { Options } from 'ol/style/Icon'
  import { defaults as controlDefaults } from 'ol/control'
  import { createClusterLayer, createMarkerLayer } from './layer-utils'
  import { isMobileOrTablet } from '../../../ts/utils'
  import type {
    MTAnimationOptions,
    MTClusterOptions,
    MTMarker,
    MTPopupOptions,
    MTGeolocationOptions,
    MTActivateMapOptions
  } from '$lib/ts'
  import { addListeners, createTileLayer, toOLCoordinates, zoomPopup } from './utils'
  import {
    DEFAULT_OVERLAY_OFFSET,
    DEFAULT_START_COORDINATES,
    EUROPA_FORENKLET,
    MIN_ZOOM_DEFAULT,
    NORGES_GRUNNKART,
    PROJECTION,
    ZOOM_NORWAY
  } from '../../../ts/mapUtils'
  import { createGeolocationControl } from './geolocation-control'
  import { createActivateMapControl } from './activate-map-control'

  let className = ''
  export { className as class }
  export let mapId = 'map'
  export let markers: Array<MTMarker> = []
  export let kartverketLayerNames = [EUROPA_FORENKLET, NORGES_GRUNNKART]
  export let startCoordinates = DEFAULT_START_COORDINATES
  export let startZoom = ZOOM_NORWAY
  export let goToMapSkipLinkText = 'Gå til kart'
  export let clusterOptions: MTClusterOptions | undefined
  export let markerOptions: Options | undefined
  export let popUpOptions: Array<MTPopupOptions> = []
  export let geolocationOptions: MTGeolocationOptions | undefined = undefined
  export let activateMapOptions: MTActivateMapOptions = {
    label: 'Aktiver kart',
    labelActive: 'Lukk kart',
    labelId: 'activate-map-label',
    className: 'activate-map',
    fullscreenClassName: 'fullscreen'
  }

  let map: Map | undefined

  export function resetZoom(): void {
    zoom({})
  }

  export function zoom(options: MTAnimationOptions): void {
    if (map) {
      zoomPopup(map, options)
    }
  }

  function createMap(): Map {
    const view = new View({
      center: fromLonLat(toOLCoordinates(startCoordinates)),
      zoom: startZoom,
      minZoom: MIN_ZOOM_DEFAULT,
      projection: PROJECTION
    })
    const layers = kartverketLayerNames.map(name => {
      return createTileLayer(name)
    })
    map = new Map({
      controls: [],
      target: mapId,
      layers,
      view: view
    })
    const is = isMobileOrTablet()
    if (is) {
      map.addControl(createActivateMapControl(map, activateMapOptions))
    }
    if (geolocationOptions) {
      map.addControl(createGeolocationControl(map, geolocationOptions))
    }
    // to have the correct DOM order for the controls
    controlDefaults().forEach(control => {
      map?.addControl(control)
    })

    if (clusterOptions) {
      map.addLayer(createClusterLayer(markers, clusterOptions, markerOptions))
    } else {
      map.addLayer(createMarkerLayer(markers, markerOptions))
    }

    popUpOptions.forEach(opt => {
      map!.addOverlay(
        new Overlay({
          offset: DEFAULT_OVERLAY_OFFSET,
          positioning: opt.positioning,
          element: document.getElementById(opt.elementId) ?? undefined,
          id: opt.id
        })
      )
    })
    addListeners(map, popUpOptions)

    return map
  }
</script>

<div class={className}>
  <a class="mt-link map-skiplink" href="#{mapId}">{goToMapSkipLinkText}</a>
  <div id={mapId} class="mt-map" tabindex="0" use:createMap />
  {#each popUpOptions as option}
    <div id={option.elementId} class="ol-popup mt-map--popup">
      <div id="popup-content-{option.elementId}"></div>
    </div>
  {/each}
</div>
