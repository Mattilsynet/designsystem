import type Feature from 'ol/Feature'
import type Map from 'ol/Map'
import type { Coordinate } from 'ol/coordinate'
import { MARKER } from './marker'
import type { MusselMarker } from '$lib/ts/types'

export const CLICK_POPUP_CLOSE_ID = 'popup-closer'

export function createClickMarkerContent(closeBtnLabel: string): (feature: Feature) => string {
  return (feature: Feature) => {
    const marker: MusselMarker = feature.get(MARKER)
    return `<div class="layout-flex layout-flex--center-vertical layout-flex--inline p-l-xxxs p-r-0 background-mt-bg-${marker.status}" style="--gap: 0">
<a href="${marker.href}" class="mt-link text-small">${marker.location}</a>
<button id="${CLICK_POPUP_CLOSE_ID}"
      type="button"
      class="mt-button mt-button--search-clear icon--x-before"
      aria-label="${closeBtnLabel}">
</button>
      </div>`
  }
}

export function setOverlayPosition(map: Map, overlayId: string, coordinate?: Coordinate): void {
  map.getOverlayById(overlayId).setPosition(coordinate)
}

export function setOverlayContent(map: Map, id: string, content: string): void {
  map.getOverlayById(id).getElement().firstChild.innerHTML = content
}
