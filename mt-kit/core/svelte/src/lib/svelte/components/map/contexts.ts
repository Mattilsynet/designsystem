import { writable, type Writable } from 'svelte/store'
import { getContext, setContext } from 'svelte'
import { type Map } from 'ol'

export const MAP_CONTEXT = 'Map'

export type MapContext = Writable<Map | undefined>

export function setMap(map?: Map): void {
  const mapWritable = writable<Map | undefined>(map)
  setContext(MAP_CONTEXT, mapWritable)
}

export function getMap(): MapContext {
  return getContext<MapContext>(MAP_CONTEXT)
}
