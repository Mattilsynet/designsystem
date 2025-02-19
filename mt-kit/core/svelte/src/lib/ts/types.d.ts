import { type Options } from 'ol/style/Icon'
import type { AnimationOptions } from 'ol/View'
import type { Positioning } from 'ol/Overlay'
import type Feature from 'ol/Feature'

/**
 * This object contains more information about the error. This can either be messages from the Java-backend,
 * or in cases in the 400 error range, it can be keys that doesn't validate, and a message.
 */
export interface ErrorDetail {
  /**
   * The key of a field that has failed. Typically corresponds to the `name` of an <input>-field.
   */
  readonly key?: string
  /**
   *  A message explaining what is wrong with the field with the key
   */
  readonly message: string
}

export type Action<Node extends HTMLElement> = (
  node: Node,
  parameters: any
) => {
  update?: (parameters: any) => void
  destroy?: () => void
} | void

export type Link = { url: string; text: string }

export interface Breadcrumbs {
  items: Array<Link>
  ariaLabel?: string
  showAllAriaLabel?: string
  homeLabel?: string
}

export interface Chapter {
  heading: string
  url: string
  index: number
  subChapters?: Array<Chapter>
}
export interface Page {
  url: string
}

export interface ChapterChangeDetails {
  index: number
}

export interface FormStep {
  index: number
  show: boolean
  label: string
  subPageUrl: string
}

export interface InputProps {
  label: string
  name: string
  value?: string | number | boolean | undefined
  countCharactersLeftLabel?: string | undefined
  error?: ErrorDetail | undefined
  helpText?: string | undefined
  textOptional?: string | undefined
  hiddenErrorText?: string | undefined

  isRequired?: boolean
  maxlength?: number | undefined
  placeholder?: string | undefined
  inputmode?: InputModeType | undefined
  autocomplete?: AutocompleteType | undefined
  ariaLabel?: string | undefined
}

export type InputModeType = 'text' | 'decimal' | 'numeric' | 'tel' | 'search' | 'email' | 'url'
export type AutocompleteType =
  | 'off'
  | 'on'
  | 'name'
  | 'honorific-prefix'
  | 'given-name'
  | 'additional-name'
  | 'family-name'
  | 'honorific-suffix'
  | 'nickname'
  | 'email'
  | 'username'
  | 'organization-title'
  | 'organization'
  | 'street-address'
  | 'address-level4'
  | 'address-level3'
  | 'address-level2'
  | 'address-level1'
  | 'country'
  | 'country-name'
  | 'postal-code'
  | 'bday'
  | 'bday-day'
  | 'bday-month'
  | 'bday-year'
  | 'sex'
  | 'tel'
  | 'url'

export interface MultiSelectOption {
  value: string
  text: string
  removeAriaLabel: string
}

export interface CheckboxOption {
  value: string
  text: string
  helpText?: string
  disabled?: boolean
}

export interface CheckboxWithSubSectionsOptions {
  key: string
  displayName: string
  docCount: number

  checked?: boolean
  children?: CheckboxWithSubSectionsOptions[]
}

export interface CountCharsParams {
  countCharacters: boolean
  maxlength: number
  id: string
  countCharactersLeftLabel?: string
  countCharactersTooManyLabel?: string
}

export interface CustomCheckedEvent {
  event: Event
}

export type Status = 'info' | 'neutral' | 'success' | 'warning' | 'danger'

export interface MTCoordinates {
  lat: number
  long: number
}

export type MTMarker = MTCoordinates & Options

export interface MusselMarker extends MTMarker {
  status: Status
  location: string
  municipality: string
  href: string
}
export interface MTActivateMapOptions {
  label: string
  labelActive: string
  className?: string
  labelId?: string
  fullscreenClassName?: string
}
export type MTAnimationOptions = Omit<AnimationOptions, 'center'> &
  MTCoordinates & { instantZoom?: boolean; flightAnimation?: boolean } & MTFlightAnimationOptions

export type MTFlightAnimationOptions = AnimationOptions & {
  maxFlightZoom?: number
  maxDuration?: number
}

export interface MTClusterOptions {
  distance: number
  minDistance: number
}
export interface MTGeolocationOptions {
  label: string
}

export type MapOverLayIds = 'ClickPopupOverlay' | 'HoverPopupOverlay'

export interface MTPopupOptions {
  id: MapOverLayIds
  elementId: string
  positioning: Positioning
  markerContent: (feature: Feature) => string
}

export type SearchResult = {
  title?: string
  url?: string
  text?: string
  breadcrumbs?: Array<string>
}

export interface MenuPoint {
  iconResource?: string | undefined
  url: string
  icon: string
  text: string
  keywords?: string
}
