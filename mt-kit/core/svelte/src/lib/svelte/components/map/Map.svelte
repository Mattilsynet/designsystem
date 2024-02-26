<script lang="ts">
  import 'ol/ol.css'
  import { Map, View } from 'ol'
  import { fromLonLat } from 'ol/proj'
  import { onDestroy, onMount } from 'svelte'
  import type { MTAnimationOptions } from '$lib/ts'
  import { toOLCoordinates, zoomPopup } from './utils'
  import {
    DEFAULT_START_COORDINATES,
    MIN_ZOOM_DEFAULT,
    NORWAY_EXTENT,
    PROJECTION,
    ZOOM_NORWAY
  } from '../../../ts/mapUtils'
  import { setMap } from './contexts'

  let className = ''
  export { className as class }
  export let mapId = 'map'
  export let startCoordinates = DEFAULT_START_COORDINATES
  export let startZoom = ZOOM_NORWAY
  export let goToMapSkipLinkText = 'Gå til kart'
  export let enableRotation = false
  export let extent = NORWAY_EXTENT

  let map: Map | undefined
  let mapElement

  export function resetZoom(): void {
    zoom({})
  }

  export function zoom(options: MTAnimationOptions): void {
    if (map) {
      zoomPopup(map, options)
    }
  }

  onMount(() => {
    const view = new View({
      center: fromLonLat(toOLCoordinates(startCoordinates)),
      zoom: startZoom,
      minZoom: MIN_ZOOM_DEFAULT,
      projection: PROJECTION,
      enableRotation,
      extent
    })
    map = new Map({
      controls: [],
      target: mapId,
      view: view
    })
  })

  $: if (map) {
    setMap(map)
  }

  onDestroy(() => {
    if (map) {
      map = undefined
    }
  })
</script>

<div class={className}>
  <a class="mt-link map-skiplink" href="#{mapId}">{goToMapSkipLinkText}</a>
  <div id={mapId} class="mt-map" tabindex="0" bind:this={mapElement} data-testid={mapId}>
    {#if map}
      <slot />
    {/if}
  </div>
  {#if map}
    <slot name="extra" />
  {/if}
</div>
