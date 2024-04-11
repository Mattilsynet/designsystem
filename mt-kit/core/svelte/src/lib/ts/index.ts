export {
  type ErrorDetail,
  type Breadcrumbs as BreadcrumbsType,
  type Link,
  type Chapter,
  type AutocompleteType,
  type ChapterChangeDetails,
  type Page,
  type Action,
  type Status,
  type MusselMarker,
  type MTCoordinates,
  type MTMarker,
  type MTAnimationOptions,
  type MTActivateMapOptions,
  type MTPopupOptions,
  type MTClusterOptions,
  type MTGeolocationOptions,
  type CountCharsParams,
  type CloseDialogEvent,
  type InputModeType,
  type InputProps,
  type MultiSelectOption,
  type CheckboxWithSubSectionsOptions,
  type SearchResult
} from './types.d.ts'

export { clickOutside } from './click-outside'
export { focusOutside } from './focus-outside'
export { countCharacters, errorOnTooManyCharacters } from './count-characters'
export { createToggleMachine } from './toggle-machine'
export {
  displayDataTime,
  addDays,
  longMonthDate,
  toKebabCase,
  compareDates,
  createInputAriaDescribedby,
  getFileExtension,
  interpolate,
  mapRelExternal,
  prefersReducedMotion,
  isMobileOrTablet
} from './utils'
export { markers } from '../ts/markers'
export {
  DEFAULT_MARKER_OPACITY,
  DEFAULT_MARKER_SCALE,
  ZOOM_NORWAY,
  ZOOM_MUNICIPALITY,
  DEFAULT_START_COORDINATES,
  DEFAULT_CLUSTER_DISTANCE,
  DEFAULT_CLUSTER_MIN_DISTANCE,
  EUROPA_FORENKLET,
  NORGES_GRUNNKART
} from '../ts/mapUtils'
export { createClickMarkerContent } from '../svelte/components/map/overlay'
