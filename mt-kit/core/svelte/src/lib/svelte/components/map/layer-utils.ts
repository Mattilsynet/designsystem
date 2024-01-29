import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'
import type Feature from 'ol/Feature'
import { type FeatureLike } from 'ol/Feature'
import { Circle, Fill, Style, Text } from 'ol/style'
import { Cluster } from 'ol/source'
import type { Options } from 'ol/style/Icon'
import {
  DEFAULT_CLUSTER_DISPLACEMENT,
  DEFAULT_CLUSTER_OFFSET_X,
  DEFAULT_CLUSTER_OFFSET_Y,
  DEFAULT_CLUSTER_RADIUS,
  DEFAULT_CLUSTER_SIZE_SCALE
} from '../../../ts/mapUtils'
import { addMarkersToSource, createMarkerStyle } from './marker'
import {
  DEFAULT_MARKER_OPACITY,
  DEFAULT_MARKER_SCALE,
  markers as svg,
  type MTClusterOptions,
  type MTMarker
} from '../../../ts/index'

export const LAYER_ID = 'layerId'
export const VECTOR_LAYER_ID = 'clusterLayer'

export function createClusterLayer(
  markers: Array<MTMarker>,
  options: MTClusterOptions,
  markerOptions?: Options
): VectorLayer<VectorSource> {
  const source = addMarkersToSource(new VectorSource(), markers, markerOptions)

  const cluster = createCluster(options.distance, options.minDistance, source)

  const vectorLayer = new VectorLayer({
    source: cluster,
    visible: true,
    style: createClusterStyle
  })

  vectorLayer.set(LAYER_ID, VECTOR_LAYER_ID)
  return vectorLayer
}

export function createMarkerLayer(
  markers: Array<MTMarker>,
  markerOptions?: Options
): VectorLayer<VectorSource> {
  const source = addMarkersToSource(new VectorSource(), markers, markerOptions)

  return new VectorLayer({
    source,
    visible: true
  })
}

function createClusterStyle(feature: FeatureLike): Style | Array<Style> | void {
  const features = feature.get('features')
  const size = features.length

  if (size <= 1) {
    return features?.[0]?.style_
  } else if (hasSameStyle(features)) {
    return [features[0].style_, createClusterSizeStyle(size)]
  } else {
    return [
      createMarkerStyle({
        src: `data:image/svg+xml;utf8,${encodeURIComponent(svg.cluster)}`,
        opacity: DEFAULT_MARKER_OPACITY,
        scale: DEFAULT_MARKER_SCALE
      }),
      createClusterSizeStyle(size)
    ]
  }
}

function hasSameStyle(features: Array<Feature>): boolean {
  let prevIcon: string | undefined
  for (const feature of features) {
    // @ts-ignore
    const currIcon = feature.style_?.image_?.iconImage_?.src_
    if (prevIcon && prevIcon !== currIcon) {
      return false
    }
    prevIcon = currIcon
  }
  return true
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

function createCluster(distance: number, minDistance: number, source: VectorSource): Cluster {
  return new Cluster({
    distance,
    minDistance,
    source: source
  })
}
