import { Geolocation, type Map, type View } from 'ol'
import CircleStyle from 'ol/style/Circle'
import { Fill, Stroke, Style } from 'ol/style'
import Feature from 'ol/Feature'
import { type Geometry, Point } from 'ol/geom'
import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'
import { LAYER_ID } from './layer-utils'
import { zoomPopup } from './utils'
import { ZOOM_NORWAY } from '../../../ts/index'

export const GEOLOCATION_LAYER_ID = 'geolocationLayer'

export function setUpGeolocation(map: Map): {
  layer: VectorLayer<VectorSource<Feature<Geometry>>>
  geolocation: Geolocation
} {
  const view = map.getView()
  const geolocation = getGeoLocation(view)
  geolocation.setTracking(false)
  const feature = addMyLocationFeature()
  const coordinates = geolocation.getPosition()
  feature.setGeometry(coordinates ? new Point(coordinates) : undefined)
  addGeolocationListeners(geolocation, feature, map)

  const layer = new VectorLayer({
    source: new VectorSource({
      features: [feature]
    }),
    visible: true
  })
  layer.set(LAYER_ID, GEOLOCATION_LAYER_ID)
  return {
    geolocation,
    layer
  }
}
export function getGeoLocation(view: View): Geolocation {
  return new Geolocation({
    trackingOptions: {
      enableHighAccuracy: true
    },
    projection: view.getProjection()
  })
}

export function addGeolocationListeners(
  geolocation: Geolocation,
  positionFeature: Feature,
  map: Map
): void {
  geolocation.on('change', function () {
    const coordinates = geolocation.getPosition()
    positionFeature.setGeometry(coordinates ? new Point(coordinates) : undefined)
  })
  geolocation.on('change:position', function () {
    const coordinates = geolocation.getPosition()
    positionFeature.setGeometry(coordinates ? new Point(coordinates) : undefined)
    if (geolocation.getTracking()) {
      zoomPopup(map, { zoom: map.getView().getZoom(), center: coordinates })
    }
  })
  geolocation.on('error', function (error) {
    console.warn('Geolocation error', error)
  })
}

export function addMyLocationFeature(): Feature {
  const positionFeature = new Feature()
  positionFeature.setStyle(
    new Style({
      image: new CircleStyle({
        radius: 8,
        fill: new Fill({
          color: '#3399CC'
        }),
        stroke: new Stroke({
          color: '#fff',
          width: 2
        })
      })
    })
  )
  return positionFeature
}
