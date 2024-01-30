import type Map from 'ol/Map'
import TileLayer from 'ol/layer/Tile'
import { fromLonLat, get as getProjection } from 'ol/proj'
import WMTS from 'ol/source/WMTS'
import WMTSTileGrid from 'ol/tilegrid/WMTS'
import { boundingExtent, getTopLeft, getWidth } from 'ol/extent'
import Feature from 'ol/Feature'
import type { MTAnimationOptions, MTCoordinates, MTPopupOptions } from '$lib/ts/types'
import { type MapBrowserEvent } from 'ol'
import { type Coordinate } from 'ol/coordinate'
import {
  CLICK_POPUP_OVERLAY,
  DEFAULT_ANIMATION_SPEED,
  DEFAULT_CLUSTER_FIT_PADDING,
  DEFAULT_START_COORDINATES,
  PROJECTION,
  ZOOM_NORWAY
} from '../../../ts/mapUtils'
import { type Layer } from 'ol/layer'
import { LAYER_ID, VECTOR_LAYER_ID } from './layer-utils'
import { prefersReducedMotion } from '../../../ts/utils'
import { CLICK_POPUP_CLOSE_ID, setOverlayContent, setOverlayPosition } from './overlay'
import { MARKER } from './marker'

interface CustomTileGrid {
  resolutions: Array<number>
  matrixIds: Array<string>
}

export function toOLCoordinates(coordinate: MTCoordinates): Coordinate {
  return [coordinate.long, coordinate.lat]
}

export function addListeners(map: Map, popupOptions: Array<MTPopupOptions>): void {
  map.on('click', e => {
    const clickPopupOptions = popupOptions.find(pop => pop.id === CLICK_POPUP_OVERLAY)
    if (clickPopupOptions) {
      handleSingleMarkerClick(e, clickPopupOptions)
    }
    handleMarkerClusterClick(e)
  })
}

export function zoomAndClosePopup(
  map: Map,
  options: MTAnimationOptions,
  popUpOptions: Array<MTPopupOptions> = []
): void {
  popUpOptions.forEach(option => {
    setOverlayPosition(map, option.id, undefined)
  })
  const { zoom, lat, long, duration, ...rest } = options
  const isReduced = prefersReducedMotion()
  const newCenter =
    lat && long
      ? fromLonLat(toOLCoordinates({ lat, long }))
      : fromLonLat(toOLCoordinates(DEFAULT_START_COORDINATES))
  const newZoom = zoom ?? ZOOM_NORWAY
  if (isReduced) {
    map?.getView().setCenter(newCenter)
    map?.getView().setZoom(newZoom)
  } else {
    map?.getView().animate({
      center: newCenter,
      zoom: newZoom,
      duration: duration ?? DEFAULT_ANIMATION_SPEED,
      ...rest
    })
  }
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
        const features = clickedFeatures[0].get('features')
        if (features.length > 1) {
          const extent = boundingExtent(features.map(r => r.getGeometry().getCoordinates()))
          const fitPadding = DEFAULT_CLUSTER_FIT_PADDING
          event.map.getView().fit(extent, {
            duration: DEFAULT_ANIMATION_SPEED,
            padding: [fitPadding, fitPadding, fitPadding, fitPadding]
          })
        }
      }
    })
  }
}

function handleSingleMarkerClick(
  event: MapBrowserEvent<UIEvent>,
  clickPopupOptions: MTPopupOptions
): void {
  const feature = getFeature(event.map, event)
  if (feature && feature.getGeometry()?.getType() === 'Point') {
    const selectedFeatures = feature.get('features')
    if (selectedFeatures.length === 1) {
      const marker = selectedFeatures[0].get(MARKER)

      setOverlayPosition(event.map, clickPopupOptions.id, fromLonLat(toOLCoordinates(marker)))
      setOverlayContent(
        event.map,
        clickPopupOptions.id,
        clickPopupOptions.markerContent(selectedFeatures[0])
      )
      addCloseButtonListener(event, clickPopupOptions)
    }
  } else {
    setOverlayPosition(event.map, clickPopupOptions.id, undefined)
  }
}

function addCloseButtonListener(
  event: MapBrowserEvent<UIEvent>,
  clickPopupOptions: MTPopupOptions
): void {
  const closeButton = event.map
    .getOverlayById(CLICK_POPUP_OVERLAY)
    .getElement()
    ?.querySelector(`#${CLICK_POPUP_CLOSE_ID}`)
  if (closeButton) {
    closeButton.addEventListener('click', () => {
      setOverlayPosition(event.map, clickPopupOptions.id, undefined)
    })
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
