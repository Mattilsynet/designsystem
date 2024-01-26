<script lang="ts">
  import { Map, Overlay, View } from 'ol'
  import { fromLonLat } from 'ol/proj'
  import 'ol/ol.css'
  import { createMarkerLayer, createClusterLayer } from './layer-utils'
  import type { MarkerCoordinate, ClusterOptions, MTAnimationOptions } from '$lib/ts'
  import { addListeners, createTileLayer, toOLCoordinates, animate } from './utils'
  import { setOverlayPosition } from './overlay'
  import {
    CLICK_POPUP_OVERLAY,
    DEFAULT_OVERLAY_OFFSET,
    DEFAULT_START_COORDINATES,
    EUROPA_FORENKLET,
    NORGES_GRUNNKART,
    PROJECTION,
    ZOOM_NORWAY
  } from '../../../ts/mapUtils'
  import type { Options } from 'ol/style/Icon'

  let className = ''
  export { className as class }
  export let mapId = 'map'
  export let markers: Array<MarkerCoordinate> = []
  export let kartverketLayerNames = [EUROPA_FORENKLET, NORGES_GRUNNKART]
  export let startCoordinates = DEFAULT_START_COORDINATES
  export let startZoom = ZOOM_NORWAY
  export let goToMapSkipLinkText = 'Gå til kart'
  export let clusterOptions: ClusterOptions | undefined
  export let markerOptions: Options | undefined
  export let popUpOptions = []

  let map: Map | null = null

  export function resetZoom(): void {
    zoom({})
  }

  export function zoom(options?: MTAnimationOptions): void {
    if (map) {
      animate(map, options)
    }
  }

  function createMap(): Map {
    const view = new View({
      center: fromLonLat(toOLCoordinates(startCoordinates)),
      zoom: startZoom,
      projection: PROJECTION
    })
    const layers = kartverketLayerNames.map(name => {
      return createTileLayer(name)
    })
    map = new Map({
      target: mapId,
      layers,
      view: view
    })
    if (clusterOptions) {
      map.addLayer(createClusterLayer(markers, clusterOptions, markerOptions))
    } else {
      map.addLayer(createMarkerLayer(markers, markerOptions))
    }

    popUpOptions.forEach(opt => {
      map.addOverlay(
        new Overlay({
          offset: DEFAULT_OVERLAY_OFFSET,
          positioning: opt.positioning,
          element: document.getElementById(opt.elementId),
          id: opt.id
        })
      )
    })
    addListeners(map, popUpOptions)

    return map
  }

  function handleClosePopup() {
    console.log('close click')
    if (map) {
      setOverlayPosition(map, CLICK_POPUP_OVERLAY, undefined)
    }
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
