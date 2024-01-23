import type Map from 'ol/Map'
import TileLayer from 'ol/layer/Tile'
import { fromLonLat, get as getProjection, toLonLat } from 'ol/proj'
import WMTS from 'ol/source/WMTS'
import WMTSTileGrid from 'ol/tilegrid/WMTS'
import { boundingExtent, getTopLeft, getWidth } from 'ol/extent'
import { Circle, Fill, Icon, Style, Text } from 'ol/style'
import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'
import Feature, { type FeatureLike } from 'ol/Feature'
import { Point } from 'ol/geom'
import type { ClusterOptions, MapClickEvent, MarkerCoordinate, MTCoordinates } from '$lib/ts/types'
import { type MapBrowserEvent } from 'ol'
import { type Coordinate, toStringHDMS } from 'ol/coordinate'
import type { EventDispatcher } from 'svelte'
import type { Options } from 'ol/style/Icon'
import { markers as svg } from '../../../ts/markers'
import {
  DEFAULT_MARKER_OPACITY,
  DEFAULT_MARKER_SCALE,
  PROJECTION,
  ZOOM_MUNICIPALITY
} from '../../../ts/mapUtils'
import { Cluster } from 'ol/source'

interface CustomTileGrid {
  resolutions: Array<number>
  matrixIds: Array<string>
}

const LAYER_ID = 'layerId'
const VECTOR_LAYER_ID = 'vectorLayer'
export const POPUP_OVERLAY = 'PopupOverlay'

export function toOLCoordinates(coordinate: MTCoordinates): Coordinate {
  return [coordinate.long, coordinate.lat]
}

export function createClusterLayer(
  markers: Array<MarkerCoordinate>,
  options: ClusterOptions
): VectorLayer<VectorSource> {
  const source = new VectorSource()

  markers.forEach(marker => {
    const feature = new Feature({
      geometry: new Point(fromLonLat(toOLCoordinates(marker))),
      marker: marker
    })
    if (marker.src) {
      feature.setStyle(createMarkerStyle(marker))
    } else {
      feature.setStyle(
        createMarkerStyle({
          src: `data:image/svg+xml;utf8,${encodeURIComponent(svg.default)}`,
          opacity: DEFAULT_MARKER_OPACITY,
          scale: DEFAULT_MARKER_SCALE
        })
      )
    }
    source.addFeature(feature)
  })

  const cluster = createCluster(options.distance, options.minDistance, source)

  const vectorLayer = new VectorLayer({
    source: cluster,
    visible: true,
    style: createClusterStyle
  })

  vectorLayer.set(LAYER_ID, VECTOR_LAYER_ID)
  return vectorLayer
}

export function getMarker(markers: Array<MarkerCoordinate>): VectorLayer<VectorSource> {
  const source = new VectorSource()

  markers.forEach(marker => {
    const feature = new Feature({
      geometry: new Point(fromLonLat(toOLCoordinates(marker))),
      marker: marker
    })
    if (marker.src) {
      feature.setStyle(createMarkerStyle(marker))
    } else {
      feature.setStyle(
        createMarkerStyle({
          src: `data:image/svg+xml;utf8,${encodeURIComponent(svg.default)}`,
          opacity: DEFAULT_MARKER_OPACITY,
          scale: DEFAULT_MARKER_SCALE
        })
      )
    }
    source.addFeature(feature)
  })

  return new VectorLayer({
    source,
    visible: true,
    style: createClusterStyle
  })
}

function createClusterStyle(feature: FeatureLike): Style {
  const styleCache = {}
  const features = feature.get('features')

  const size = features.length
  let style = styleCache[size]
  if (size === 1) {
    style = features[0].style_
  } else if (size > 1) {
    if (!style) {
      style = [
        createMarkerStyle({
          src: `data:image/svg+xml;utf8,${encodeURIComponent(svg.default)}`,
          opacity: DEFAULT_MARKER_OPACITY,
          scale: DEFAULT_MARKER_SCALE
        }),
        createClusterSizeStyle(size)
      ]

      styleCache[size] = style
    }
  }

  return style
}

function createClusterSizeStyle(size: number): Style {
  return new Style({
    image: new Circle({
      radius: 6,
      fill: new Fill({
        color: 'white'
      }),
      displacement: [10, 10]
    }),
    text: new Text({
      text: size.toString(),
      fill: new Fill({
        color: '#032C30'
      }),
      offsetX: 10,
      offsetY: -10
    })
  })
}
function getLayerByLayerId(map: Map, layerId: string) {
  // const layers = map.getLayers()
  const layers = map.getAllLayers().find(layer => {
    const value = layer.values_[LAYER_ID]
    return value === layerId
  })
  return layers
}
export function addListeners(map: Map, dispatch: EventDispatcher) {
  map.on('click', e => {
    handleSingleMarkerClick(e, dispatch)
    handleMarkerClusterClick(e)
  })

  map.on('pointermove', e => {
    const feature = getFeature(map, e)
    if (feature && feature.getGeometry()?.getType() === 'Point') {
      // console.log('pointermove', feature)
    }
  })
}
function handleMarkerClusterClick(event: MapBrowserEvent<UIEvent>): void {
  const clusters = getLayerByLayerId(event.map, VECTOR_LAYER_ID)
  if (clusters) {
    clusters.getFeatures(event.pixel).then(clickedFeatures => {
      if (clickedFeatures.length) {
        // Get clustered Coordinates
        const features = clickedFeatures[0].get('features')
        if (features.length > 1) {
          const extent = boundingExtent(features.map(r => r.getGeometry().getCoordinates()))
          event.map.getView().fit(extent, { duration: 1000, padding: [50, 50, 50, 50] })
        }
      }
    })
  }
}
function handleSingleMarkerClick(event: MapBrowserEvent<UIEvent>, dispatch: EventDispatcher) {
  const feature = getFeature(event.map, event)
  if (feature && feature.getGeometry()?.getType() === 'Point') {
    const selectedFeatures = feature.get('features')
    if (selectedFeatures.length === 1) {
      const marker = selectedFeatures[0].get('marker')
      dispatch<CustomEvent<MapClickEvent>>('mapClick', {
        marker
      })
      event.map.getView().setCenter(fromLonLat([marker.long, marker.lat]))
      event.map.getView().setZoom(ZOOM_MUNICIPALITY)
    }
  }

  const coordinate = event.coordinate
  const hdms = toStringHDMS(toLonLat(coordinate))
  event.map.getOverlayById(POPUP_OVERLAY).setPosition(coordinate)
}
function getFeature(map: Map, event: MapBrowserEvent<any>) {
  return map.forEachFeatureAtPixel(event.pixel, featureLike => {
    if (featureLike instanceof Feature) {
      return featureLike
    }
    return undefined
  })
}

function createMarkerStyle(
  options: Options = {
    opacity: DEFAULT_MARKER_OPACITY,
    scale: DEFAULT_MARKER_SCALE
  }
): Style {
  return new Style({
    image: new Icon(options)
  })
}
function createTileGrid(projectionExtent: Array<number>): CustomTileGrid {
  const size = getWidth(projectionExtent) / 256
  const resolutions = new Array(19)
  const matrixIds = new Array(19)
  for (let z = 0; z < 19; ++z) {
    resolutions[z] = size / Math.pow(2, z)
    matrixIds[z] = z
  }
  return { resolutions, matrixIds }
}

export function createTileLayer(layer: string): TileLayer<WMTS> {
  const projection = getProjection(PROJECTION)

  if (!projection) throw new Error('Projection not found')

  const projectionExtent = projection.getExtent()
  const { resolutions, matrixIds } = createTileGrid(projectionExtent)

  return new TileLayer({
    opacity: 1,
    source: new WMTS({
      attributions: '© Kartverket',
      url: `https://cache.kartverket.no/${layer}/v1/wmts/1.0.0/`,
      layer,
      matrixSet: 'googlemaps',
      format: 'image/png',
      tileGrid: new WMTSTileGrid({
        origin: getTopLeft(projectionExtent),
        resolutions: resolutions,
        matrixIds: matrixIds
      }),
      style: 'default',
      wrapX: true
    })
  })
}

function createCluster(distance: number, minDistance: number, source: VectorSource) {
  const clusterSource = new Cluster({
    distance,
    minDistance,
    source: source
  })
  return clusterSource
}
