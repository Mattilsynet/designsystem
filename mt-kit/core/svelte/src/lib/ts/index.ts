export {
  type ErrorDetail,
  type Breadcrumbs as BreadcrumbsType,
  type Link,
  type Chapter,
  type AutocompleteType,
  type ChapterChangeDetails,
  type FormStep,
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
  type CustomCheckedEvent,
  type InputModeType,
  type InputProps,
  type MultiSelectOption,
  type CheckboxOption,
  type CheckboxWithSubSectionsOptions,
  type SearchResult,
  type MenuPoint
} from './types.d.ts'

export { clickOutside } from './click-outside'
export { focusOutside } from './focus-outside'
export { countCharacters, errorOnTooManyCharacters } from './count-characters'
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
export { markers } from '$lib/ts/markers'
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
} from '$lib/ts/mapUtils'
export { createClickMarkerContent } from '../svelte/components/map/overlay'
