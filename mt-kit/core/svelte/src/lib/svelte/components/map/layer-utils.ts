import {
  type ClusterOptions,
  DEFAULT_MARKER_OPACITY,
  DEFAULT_MARKER_SCALE,
  type MarkerCoordinate,
  markers as svg
} from '../../../ts/index'
import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'
import Feature, { type FeatureLike } from 'ol/Feature'
import { Point } from 'ol/geom'
import { fromLonLat } from 'ol/proj'
import { toOLCoordinates } from './utils'
import { Circle, Fill, Icon, Style, Text } from 'ol/style'
import type { Options } from 'ol/style/Icon'
import { Cluster } from 'ol/source'

export const LAYER_ID = 'layerId'
export const VECTOR_LAYER_ID = 'clusterLayer'

export function createClusterLayer(
  markers: Array<MarkerCoordinate>,
  options: ClusterOptions
): VectorLayer<VectorSource> {
  const source = addMarkersToSource(new VectorSource(), markers)

  const cluster = createCluster(options.distance, options.minDistance, source)

  const vectorLayer = new VectorLayer({
    source: cluster,
    visible: true,
    style: createClusterStyle
  })

  vectorLayer.set(LAYER_ID, VECTOR_LAYER_ID)
  return vectorLayer
}

export function createMarkerLayer(markers: Array<MarkerCoordinate>): VectorLayer<VectorSource> {
  const source = addMarkersToSource(new VectorSource(), markers)

  return new VectorLayer({
    source,
    visible: true
  })
}

function addMarkersToSource(source: VectorSource, markers: Array<MarkerCoordinate>): VectorSource {
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

  return source
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
function createCluster(distance: number, minDistance: number, source: VectorSource) {
  const clusterSource = new Cluster({
    distance,
    minDistance,
    source: source
  })
  return clusterSource
}
