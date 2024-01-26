import {
  type ClusterOptions,
  DEFAULT_MARKER_OPACITY,
  DEFAULT_MARKER_SCALE,
  type MarkerCoordinate,
  markers as svg
} from '../../../ts/index'
import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'
import { type FeatureLike } from 'ol/Feature'
import { Circle, Fill, Style, Text } from 'ol/style'
import { Cluster } from 'ol/source'
import {
  DEFAULT_CLUSTER_DISPLACEMENT,
  DEFAULT_CLUSTER_OFFSET_X,
  DEFAULT_CLUSTER_OFFSET_Y,
  DEFAULT_CLUSTER_RADIUS,
  DEFAULT_CLUSTER_SIZE_SCALE
} from '../../../ts/mapUtils'
import { addMarkersToSource, createMarkerStyle } from './marker'

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
          src: `data:image/svg+xml;utf8,${encodeURIComponent(svg.cluster)}`,
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
      radius: DEFAULT_CLUSTER_RADIUS,
      fill: new Fill({
        color: 'white'
      }),
      displacement: DEFAULT_CLUSTER_DISPLACEMENT
    }),
    text: new Text({
      text: size.toString(),
      fill: new Fill({
        color: '#032C30'
      }),
      scale: DEFAULT_CLUSTER_SIZE_SCALE,
      offsetX: DEFAULT_CLUSTER_OFFSET_X,
      offsetY: DEFAULT_CLUSTER_OFFSET_Y
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
