import { Control } from 'ol/control'
import { type Map } from 'ol'
import type { MTActivateMapOptions } from '../../../ts'

const FULLSCREEN_OPTIONS = 'fullscreen-options'
export const locationTrackerId = 'activateMap'

type ControlType = Control & { options?: MTActivateMapOptions }

export function createActivateMapControl(map: Map, options: MTActivateMapOptions): Control {
  const element = createActivateMapWrapper(createActivateMap(map, options))

  const control = new Control({ element })
  control.set(FULLSCREEN_OPTIONS, options)
  control.setMap(map)

  return control
}

function handleToggleFullscreen(map: Map): (e: Event) => void {
  return (event: Event): void => {
    toggleFullscreen(map, event.target.checked)
  }
}

export function toggleFullscreen(map: Map, isFullscreen: boolean): void {
  const control: ControlType = map
    .getControls()
    .getArray()
    .find((control: ControlType) => control.get(FULLSCREEN_OPTIONS))
  const options = control.get(FULLSCREEN_OPTIONS)
  const mapElement = map.getTargetElement()
  const label = document.getElementById(options.labelId)
  const input = document.getElementById(locationTrackerId) as HTMLInputElement
  label.innerHTML = isFullscreen ? options.labelActive : options.label
  setInteractions(map, isFullscreen)

  if (isFullscreen) {
    mapElement.classList.add(options.fullscreenClassName)
    label.classList.add('icon--collapse-before')
    label.classList.remove('icon-expand-before')
  } else {
    mapElement.classList.remove(options.fullscreenClassName)
    label.classList.remove('icon--collapse-before')
    label.classList.add('icon--expand-before')
    input.checked = isFullscreen
  }
}

export function setInteractions(map: Map, active: boolean): void {
  const interactions = map.getInteractions()
  interactions.forEach(i => {
    i.setActive(active)
  })
}

function createActivateMap(
  map: Map,
  options: MTActivateMapOptions
): { input: HTMLInputElement; labelElement: HTMLLabelElement } {
  const labelElement = document.createElement('label')
  labelElement.innerHTML = options.label
  labelElement.htmlFor = locationTrackerId
  labelElement.id = options.labelId
  labelElement.className = 'mt-label map-toggle-label icon--expand-before'

  const input = document.createElement('input')
  input.id = locationTrackerId
  input.type = 'checkbox'
  input.className = 'mt-input map-toggle-input'
  setInteractions(map, false)
  input.addEventListener('change', handleToggleFullscreen(map))

  return {
    input,
    labelElement
  }
}

function createActivateMapWrapper({ input, labelElement }): HTMLDivElement {
  const element = document.createElement('div')
  element.className = 'map-activate-wrapper ol-unselectable ol-control'
  element.appendChild(input)
  element.appendChild(labelElement)
  return element
}
