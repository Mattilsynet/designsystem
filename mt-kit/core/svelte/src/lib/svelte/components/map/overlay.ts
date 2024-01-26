import type Feature from 'ol/Feature'
import type Map from 'ol/Map'
import type { Coordinate } from 'ol/coordinate'
import { MARKER } from './marker'

export function createHoverMarkerContent(feature: Feature): string {
  const features = feature.get('features')
  const items = features.reduce((acc, curr, index) => {
    const marker = curr.get(MARKER)
    return `${acc}<li class="mt-li text-small p-xxxs border-radius ${index > 0 ? 'm-t-xxxs' : ''} background-mt-bg-${marker.status}">
${marker.municipality}: ${marker.location}
</li>`
  }, '')

  return `<ul class="mt-ul list-unstyled ">${items}</ul>`
}

export function createClickMarkerContent(feature: Feature): string {
  const marker = feature.get(MARKER)
  return `<div class="layout-flex layout-flex--center-vertical layout-flex--inline p-lr-xxs background-mt-bg-${marker.status}" style="--gap: var(--spacer-xx-small)">
<a href="${marker.href}" class="mt-link text-small">${marker.location}</a>
<button id="popup-closer"
      class="mt-button mt-button--search-clear icon--x-before"
      aria-label="Close me">
</button>
      </div>`
}

export function setOverlayPosition(map: Map, overlayId: string, coordinate?: Coordinate): void {
  map.getOverlayById(overlayId).setPosition(coordinate)
}

export function setOverlayContent(map: Map, id: string, content: string): void {
  map.getOverlayById(id).getElement().firstChild.innerHTML = content
}
