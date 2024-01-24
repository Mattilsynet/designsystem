import type Map from 'ol/Map'
import TileLayer from 'ol/layer/Tile'
import { fromLonLat, get as getProjection } from 'ol/proj'
import WMTS from 'ol/source/WMTS'
import WMTSTileGrid from 'ol/tilegrid/WMTS'
import { boundingExtent, getTopLeft, getWidth } from 'ol/extent'
import Feature from 'ol/Feature'
import type { MapClickEvent, MTCoordinates } from '$lib/ts/types'
import { type MapBrowserEvent } from 'ol'
import { type Coordinate } from 'ol/coordinate'
import type { EventDispatcher } from 'svelte'
import { PROJECTION, ZOOM_MUNICIPALITY } from '../../../ts/mapUtils'
import { type Layer } from 'ol/layer'
import { LAYER_ID, VECTOR_LAYER_ID } from './layer-utils'

interface CustomTileGrid {
  resolutions: Array<number>
  matrixIds: Array<string>
}

export function toOLCoordinates(coordinate: MTCoordinates): Coordinate {
  return [coordinate.long, coordinate.lat]
}

export function addListeners(map: Map, dispatch: EventDispatcher): void {
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

function getLayerByLayerId(map: Map, layerId: string): Layer | undefined {
  const layers = map.getAllLayers().find(layer => {
    const value = layer.values_[LAYER_ID]
    return value === layerId
  })
  return layers
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
}
function getFeature(map: Map, event: MapBrowserEvent<any>) {
  return map.forEachFeatureAtPixel(event.pixel, featureLike => {
    if (featureLike instanceof Feature) {
      return featureLike
    }
    return undefined
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
