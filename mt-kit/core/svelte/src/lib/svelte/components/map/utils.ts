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
  HOVER_POPUP_OVERLAY,
  PROJECTION,
  ZOOM_MUNICIPALITY,
  ZOOM_NORWAY
} from '../../../ts/mapUtils'
import { type Layer } from 'ol/layer'
import { LAYER_ID, VECTOR_LAYER_ID } from './layer-utils'
import { prefersReducedMotion } from '../../../ts/utils'
import { CLICK_POPUP_CLOSE_ID, setOverlayContent, setOverlayPosition } from './overlay'
import { MARKER } from './marker'
import { flyToAnimation } from '../../components/map/animations'

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
    closeHoverOverlay(e, popupOptions)
  })

  map.on('pointermove', event => {
    handleMarkerHover(event, popupOptions)
  })
}

export function zoomAndClosePopup(
  map: Map,
  options: MTAnimationOptions,
  popUpOptions: Array<MTPopupOptions> = []
): void {
  const {
    zoom = ZOOM_NORWAY,
    lat,
    long,
    duration = DEFAULT_ANIMATION_SPEED,
    instantZoom,
    flightAnimation = false,
    ...rest
  } = options
  popUpOptions.forEach(option => {
    setOverlayPosition(map, option.id, undefined)
  })
  const isReduced = instantZoom ?? prefersReducedMotion()
  const newCenter =
    lat && long
      ? fromLonLat(toOLCoordinates({ lat, long }))
      : fromLonLat(toOLCoordinates(DEFAULT_START_COORDINATES))

  map.getView().cancelAnimations()
  if (isReduced) {
    map.getView().setCenter(newCenter)
    map.getView().setZoom(zoom)
  } else if (flightAnimation) {
    flyToAnimation(map, {
      center: newCenter,
      zoom,
      duration,
      ...rest
    })
  } else {
    map.getView().animate({
      center: newCenter,
      zoom,
      duration,
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
function closeHoverOverlay(e: MapBrowserEvent<UIEvent>, popupOptions: Array<MTPopupOptions>): void {
  const hoverPopupOptions = popupOptions.find(pop => pop.id === HOVER_POPUP_OVERLAY)
  if (hoverPopupOptions) {
    setOverlayPosition(e.map, hoverPopupOptions.id, undefined)
  }
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
  popupOptions: Array<MTPopupOptions>
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
      if (event.map.getView().getZoom() < ZOOM_MUNICIPALITY) {
        zoomAndClosePopup(event.map, {
          long: marker.long,
          lat: marker.lat,
          zoom: ZOOM_MUNICIPALITY
        })
      }

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
