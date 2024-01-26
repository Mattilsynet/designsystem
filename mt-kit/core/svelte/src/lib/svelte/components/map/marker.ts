import type VectorSource from 'ol/source/Vector'
import Feature from 'ol/Feature'
import { Point } from 'ol/geom'
import { fromLonLat } from 'ol/proj'
import type { Options } from 'ol/style/Icon'
import { Icon, Style } from 'ol/style'
import { DEFAULT_MARKER_OPACITY, DEFAULT_MARKER_SCALE, markers as svg } from '../../../ts/index'
import { toOLCoordinates } from './utils'
import type { MTMarker } from '../../../ts/types'

export const MARKER = 'marker'

export function addMarkersToSource(
  source: VectorSource,
  markers: Array<MTMarker>,
  markerOptions?: Options
): VectorSource {
  markers.forEach(marker => {
    const feature = new Feature({
      geometry: new Point(fromLonLat(toOLCoordinates(marker))),
      [MARKER]: marker
    })
    if (marker.src) {
      feature.setStyle(createMarkerStyle({ ...marker, ...markerOptions }))
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

export function createMarkerStyle(options: Options): Style {
  return new Style({
    image: new Icon({
      ...options,
      scale: options.scale ?? DEFAULT_MARKER_SCALE,
      opacity: options.opacity ?? DEFAULT_MARKER_OPACITY
    })
  })
}
