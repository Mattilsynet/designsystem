import { writable, type Writable } from 'svelte/store'
import { getContext, setContext } from 'svelte'
import { type Map } from 'ol'
export const MARKERS_CONTEXT = 'Markers'
export const MAP_CONTEXT = 'Map'
export const LAYERS_CONTEXT = 'Layers'
export const ACTIVATE_MAP_CONTEXT = 'ActivateMap'
export const POPUP_CONTEXT = 'Popup'
export const GEOLOCATION_CONTEXT = 'Geolocation'
export const DEFAULT_CONTROLS = 'DefaultControls'

type MapContext = Writable<Map | undefined>

export function setMap(map?: Map): void {
  const mapWritable = writable<Map>(map)
  setContext(MAP_CONTEXT, mapWritable)
}

export function getMap(): MapContext {
  return getContext<MapContext>(MAP_CONTEXT)
}
