import type Map from 'ol/Map'
import TileLayer from 'ol/layer/Tile'
import { fromLonLat, get as getProjection } from 'ol/proj'
import WMTS from 'ol/source/WMTS'
import WMTSTileGrid from 'ol/tilegrid/WMTS'
import { boundingExtent, getTopLeft, getWidth } from 'ol/extent'
import Feature from 'ol/Feature'
import type { MTAnimationOptions, MTCoordinates } from '$lib/ts/types'
import { type MapBrowserEvent } from 'ol'
import { type Coordinate } from 'ol/coordinate'
import {
  CLICK_POPUP_OVERLAY,
  DEFAULT_ANIMATION_SPEED,
  DEFAULT_START_COORDINATES,
  HOVER_POPUP_OVERLAY,
  PROJECTION,
  ZOOM_MUNICIPALITY,
  ZOOM_NORWAY
} from '../../../ts/mapUtils'
import { type Layer } from 'ol/layer'
import { LAYER_ID, VECTOR_LAYER_ID } from './layer-utils'
import { prefersReducedMotion } from '../../../ts/utils'
import { setOverlayContent, setOverlayPosition } from './overlay'
import type { Positioning } from 'ol/Overlay'
import { MARKER } from './marker'

interface CustomTileGrid {
  resolutions: Array<number>
  matrixIds: Array<string>
}

export interface PopupOptions {
  id: 'ClickPopupOverlay' | 'HoverPopupOverlay'
  elementId: string
  positioning: Positioning
  markerContent: (feature: Feature) => string
}

export function toOLCoordinates(coordinate: MTCoordinates): Coordinate {
  return [coordinate.long, coordinate.lat]
}

export function addListeners(map: Map, popupOptions: Array<PopupOptions>): void {
  map.on('click', e => {
    const clickPopupOptions = popupOptions.find(pop => {
      return pop.id === CLICK_POPUP_OVERLAY
    })
    if (clickPopupOptions) {
      handleSingleMarkerClick(e, clickPopupOptions)
    }
    handleMarkerClusterClick(e)
  })

  map.on('pointermove', event => {
    handleMarkerHover(event, popupOptions)
  })
  //kan man lytte på knappe trykk i overlay
}

export function animate(map: Map, options: MTAnimationOptions): void {
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

function handleMarkerHover(
  event: MapBrowserEvent<UIEvent>,
  popupOptions: Array<PopupOptions>
): void {
  const hoverPopupOptions = popupOptions.find(pop => {
    return pop.id === HOVER_POPUP_OVERLAY
  })
  if (hoverPopupOptions) {
    const feature = getFeature(event.map, event)
    if (feature && feature.getGeometry()?.getType() === 'Point') {
      if (event.map.getOverlayById(CLICK_POPUP_OVERLAY).getPosition() === undefined) {
        setOverlayPosition(event.map, hoverPopupOptions.id, event.coordinate)
        setOverlayContent(event.map, hoverPopupOptions.id, hoverPopupOptions.markerContent(feature))
      }
    } else {
      setOverlayPosition(event.map, hoverPopupOptions.id, undefined)
    }
  }
}

function handleMarkerClusterClick(event: MapBrowserEvent<UIEvent>): void {
  const clusters = getLayerByLayerId(event.map, VECTOR_LAYER_ID)
  if (clusters) {
    clusters.getFeatures(event.pixel).then(clickedFeatures => {
      if (clickedFeatures.length) {
        const features = clickedFeatures[0].get('features')
        if (features.length > 1) {
          const extent = boundingExtent(features.map(r => r.getGeometry().getCoordinates()))
          const fitPadding = 200
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
  clickPopupOptions: PopupOptions
): void {
  const feature = getFeature(event.map, event)
  if (feature && feature.getGeometry()?.getType() === 'Point') {
    const selectedFeatures = feature.get('features')
    if (selectedFeatures.length === 1) {
      const marker = selectedFeatures[0].get(MARKER)
      if (event.map.getView().getZoom() < ZOOM_MUNICIPALITY) {
        animate(event.map, { long: marker.long, lat: marker.lat, zoom: ZOOM_MUNICIPALITY })
      }

      setOverlayPosition(event.map, clickPopupOptions.id, fromLonLat(toOLCoordinates(marker)))
      setOverlayContent(
        event.map,
        clickPopupOptions.id,
        clickPopupOptions.markerContent(selectedFeatures[0])
      )
    }
  } else {
    setOverlayPosition(event.map, clickPopupOptions.id, undefined)
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
