<script lang="ts">
  import { Map, View } from 'ol'
  import { fromLonLat } from 'ol/proj'
  import 'ol/ol.css'
  import { addListeners, createTileLayer, toOLCoordinates, animate } from "./utils'
  import { createMarkerLayer, createClusterLayer } from './layer-utils";
  import type { MapClickEvent, MarkerCoordinate, ClusterOptions } from '$lib/ts'
  import { createEventDispatcher } from 'svelte'
  import { DEFAULT_START_COORDINATES, EUROPA_FORENKLET, NORGES_GRUNNKART, PROJECTION, ZOOM_NORWAY } from '../../../ts/mapUtils'

  let className = ''
  export { className as class }
  export let mapId = 'map'
  export let markers: Array<MarkerCoordinate> = []
  export let kartverketLayerNames = [EUROPA_FORENKLET, NORGES_GRUNNKART]
  export let startCoordinates = DEFAULT_START_COORDINATES
  export let startZoom = ZOOM_NORWAY
  export let goToMapSkipLinkText = 'Gå til kart'
  export let clusterOptions: ClusterOptions | undefined

  let map: Map | null = null
  const dispatch = createEventDispatcher<CustomEvent<MapClickEvent>>()

  export function resetZoom(): void {
    zoom({})
  }

  export function zoom(options?: MTAnimationOptions): void {
    if(map) {
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
      map.addLayer(createClusterLayer(markers, clusterOptions))
    } else {
      map.addLayer(createMarkerLayer(markers))
    }

    addListeners(map, dispatch)

    return map
  }
</script>

<div class={className}>
  <a class="mt-link map-skiplink" href="#{mapId}">{goToMapSkipLinkText}</a>
  <div id={mapId} class="map" tabindex="0" use:createMap />
</div>
