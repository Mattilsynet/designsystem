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
  } from '$lib/ts/mapUtils'
  import { setMap } from './contexts'
  import type { Snippet } from 'svelte'

  interface Props {
    class?: string
    mapId?: string
    startCoordinates?: { lat: number; long: number }
    startZoom?: number
    goToMapSkipLinkText?: string
    enableRotation?: boolean
    extent?: number[]
    children?: Snippet
    extra?: Snippet
  }

  let {
    class: className = '',
    mapId = 'map',
    startCoordinates = DEFAULT_START_COORDINATES,
    startZoom = ZOOM_NORWAY,
    goToMapSkipLinkText = 'Gå til kart',
    enableRotation = false,
    extent = NORWAY_EXTENT,
    children,
    extra
  }: Props = $props()

  let map: Map | undefined = $state()
  let mapElement = $state()

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

  $effect(() => {
    if (map) {
      setMap(map)
    }
  })

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
      {@render children?.()}
    {/if}
  </div>
  {#if map}
    {@render extra?.()}
  {/if}
</div>
