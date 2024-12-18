import type Map from 'ol/Map'
import {
  DEFAULT_ANIMATION_SPEED,
  DEFAULT_START_COORDINATES,
  MAX_FLY_TO_ANIMATION_SPEED,
  ZOOM_HALF_NORWAY,
  ZOOM_NORWAY
} from '$lib/ts/mapUtils'
import { fromLonLat } from 'ol/proj'
import { toOLCoordinates } from './utils'
import { distance } from 'ol/coordinate'
import type { MTFlightAnimationOptions } from '$lib/ts/types'

export function flyToAnimation(map: Map, options: MTFlightAnimationOptions): void {
  const {
    duration = DEFAULT_ANIMATION_SPEED,
    center = fromLonLat(toOLCoordinates(DEFAULT_START_COORDINATES)),
    zoom = ZOOM_NORWAY,
    maxFlightZoom = ZOOM_HALF_NORWAY,
    maxDuration = MAX_FLY_TO_ANIMATION_SPEED
  } = options
  const oldCenter = map.getView().getCenter() ?? center

  const dist = distance(oldCenter, center) / 100000
  const flightZoom = Math.max(zoom - dist, maxFlightZoom)
  const adjustedDuration = Math.min(Math.max(duration, (duration * dist) / 10 + 1000), maxDuration)

  const oldZoom = map.getView()?.getZoom()
  if (!oldZoom || flightZoom > oldZoom) {
    // default animation if already zoomed out more than flightZoom
    map?.getView().animate(options)
    return
  }

  let animationParts = 2
  let done = false
  function callback(): void {
    --animationParts
    if (done) {
      return
    }
    if (animationParts === 0) {
      done = true
    }
  }
  map?.getView().animate(
    {
      center,
      duration: adjustedDuration
    },
    callback
  )
  map?.getView().animate(
    {
      zoom: flightZoom,
      duration: adjustedDuration / 2
    },
    {
      zoom: zoom,
      duration: adjustedDuration / 2
    },
    callback
  )
}
