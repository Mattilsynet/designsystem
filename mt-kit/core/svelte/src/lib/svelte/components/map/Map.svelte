<script lang="ts">
  import { Map, View } from 'ol'
  import { fromLonLat } from 'ol/proj'
  import 'ol/ol.css'
  import { getMarker, addListeners, createTileLayer, toOLCoordinates } from './utils'
  import type { MapClickEvent, MarkerCoordinate } from '$lib/ts'
  import { createEventDispatcher } from 'svelte'
  import { EUROPA_FORENKLET, NORGES_GRUNNKART, PROJECTION, ZOOM_NORWAY } from '../../../ts/mapUtils'

  let className = ''
  export { className as class }
  export let mapId = 'map'
  export let markers: Array<MarkerCoordinate> = []
  export let kartverketLayerNames = [EUROPA_FORENKLET, NORGES_GRUNNKART]
  export let startCoordinates = { lat: 65, long: 10 }
  export let startZoom = ZOOM_NORWAY
  export let goToMapSkipLinkText = 'Gå til kart'

  let map: Map | null = null
  const dispatch = createEventDispatcher<CustomEvent<MapClickEvent>>()

  function createMap(mapId: string, markers: Array<MarkerCoordinate>): Map {
    const view = new View({
      center: fromLonLat(toOLCoordinates(startCoordinates)),
      zoom: startZoom,
      projection: PROJECTION
    })
    const layers = kartverketLayerNames.map(name => {
      return createTileLayer(name)
    })
    const map = new Map({
      target: mapId,
      layers,
      view: view
    })
    map.addLayer(getMarker(markers))
    addListeners(map, dispatch)

    return map
  }
</script>

<div class={className}>
  <a class="mt-link map-skiplink" href="#{mapId}">{goToMapSkipLinkText}</a>
  <div id={mapId} class="map" tabindex="0" use:createMap={(mapId, markers)} />
</div>
