import { type Options } from 'ol/style/Icon'
import type { AnimationOptions } from 'ol/View'

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
  subChapters: Array<Chapter>
}

export interface ChapterChangeDetails {
  index: number
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

export interface CloseDialogEvent {
  shouldReappear: boolean
}
export interface MapClickEvent {
  marker: MarkerCoordinate
}

export type Status = 'info' | 'neutral' | 'success' | 'warning' | 'danger'

export interface MTCoordinates {
  lat: number
  long: number
}
export interface MarkerCoordinate extends MTCoordinates, Options {
  data: Record<string, string>
}
export type MTAnimationOptions = Omit<AnimationOptions, 'center'> & MTCoordinates

export interface ClusterOptions {
  distance: number
  minDistance: number
}
