import { Control } from 'ol/control'
import { type Geolocation, type Map } from 'ol'
import type { MTGeolocationOptions } from '$lib/ts'
import { markers } from '$lib/ts'
import { GEOLOCATION_LAYER_ID, setUpGeolocation } from './geolocation'
import { LAYER_ID } from './layer-utils'

export function createGeolocationControl(
  map: Map,
  geolocationOptions: MTGeolocationOptions
): Control {
  const { layer, geolocation } = setUpGeolocation(map)
  map.addLayer(layer)

  const { input, label } = createTrackerToggle(map, geolocation, geolocationOptions)
  const element = createTrackerToggleWrapper()
  element.appendChild(input)
  element.appendChild(label)

  const control = new Control({ element })
  control.setMap(map)

  return control
}

function handleTracking(map: Map, geolocation: Geolocation): (e: Event) => void {
  return (event: Event): void => {
    const layer = map
      .getLayers()
      .getArray()
      .find(layer => layer.get(LAYER_ID) === GEOLOCATION_LAYER_ID)
    if (event.target && layer) {
      geolocation.setTracking(event.target.checked)
      layer.setVisible(event.target.checked)
    }
  }
}

function createTrackerToggle(
  map: Map,
  geolocation: Geolocation,
  geolocationOptions: MTGeolocationOptions
): { input: HTMLInputElement; label: HTMLLabelElement } {
  const locationTrackerId = 'locationTracker'
  const label = document.createElement('label')
  label.innerHTML = markers.icon.geolocation
  label.htmlFor = locationTrackerId
  label.className = 'mt-label map-toggle-label'
  label.title = geolocationOptions.label

  const input = document.createElement('input')
  input.id = locationTrackerId
  input.type = 'checkbox'
  input.className = 'mt-input map-toggle-input'
  input.addEventListener('change', handleTracking(map, geolocation))

  return {
    input,
    label
  }
}

function createTrackerToggleWrapper(): HTMLDivElement {
  const element = document.createElement('div')
  element.id = 'geolocationTracker'
  element.className = 'geolocation-button ol-unselectable ol-control'
  return element
}
