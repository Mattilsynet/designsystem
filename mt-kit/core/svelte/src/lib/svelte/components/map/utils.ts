import type Map from 'ol/Map'
import TileLayer from 'ol/layer/Tile'
import { fromLonLat, get as getProjection } from 'ol/proj'
import WMTS from 'ol/source/WMTS'
import WMTSTileGrid from 'ol/tilegrid/WMTS'
import { getTopLeft, getWidth } from 'ol/extent'
import { Icon, Style } from 'ol/style'
import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'
import Feature from 'ol/Feature'
import { Point } from 'ol/geom'
import type { MapClickEvent, MarkerCoordinate, MTCoordinates } from '$lib/ts/types'
import { type MapBrowserEvent } from 'ol'
import type { Coordinate } from 'ol/coordinate'
import type { EventDispatcher } from 'svelte'
import type { Options } from 'ol/style/Icon'
import { markers as svg } from '../../../ts/markers'
import {
  DEFAULT_MARKER_OPACITY,
  DEFAULT_MARKER_SCALE,
  PROJECTION,
  ZOOM_MUNICIPALITY
} from '../../../ts/mapUtils'

interface CustomTileGrid {
  resolutions: Array<number>
  matrixIds: Array<string>
}

export function toOLCoordinates(coordinate: MTCoordinates): Coordinate {
  return [coordinate.long, coordinate.lat]
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
    visible: true
  })
}

export function addListeners(map: Map, dispatch: EventDispatcher) {
  map.on('click', e => {
    const feature = getFeature(map, e)

    if (feature && feature.getGeometry()?.getType() === 'Point') {
      const marker = feature.get('marker')
      dispatch<CustomEvent<MapClickEvent>>('mapClick', {
        marker
      })

      e.map.getView().setCenter(fromLonLat([marker.long, marker.lat]))
      e.map.getView().setZoom(ZOOM_MUNICIPALITY)
    }
  })

  map.on('pointermove', e => {
    const feature = getFeature(map, e)
    if (feature && feature.getGeometry()?.getType() === 'Point') {
      // console.log('pointermove', feature)
    }
  })
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
