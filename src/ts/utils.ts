import type {ErrorDetail} from './types'

export function createInputAriaDescribedby(
  name: string,
  error: ErrorDetail | undefined,
  maxlength: number | undefined
): string {
  let describedBy = `${name}-hint`
  if (error) {
    describedBy = `${describedBy} ${name}-error`
  }
  if (maxlength) {
    describedBy = `${describedBy} ${name}-maxlength`
  }
  return describedBy
}

export function toKebabCase(text: string): string {
  return text
    .replace(/[^a-zA-Z0-9 ]/g, '')
    .replace(/ /g, '-')
    .toLowerCase()
}

export function displayDataTime(lang: string, isoDate: string): string {
  return new Intl.DateTimeFormat(lang, {day: '2-digit', month: '2-digit', year: '2-digit'}).format(
    new Date(isoDate)
  )
}

interface CompareDates {
  lang: string
  publishFrom?: string
  publishedFromLabel: string
  professionallyUpdated?: string
  professionallyUpdatedLabel: string
}

function format(date: Date, lang: string) {
  return new Intl.DateTimeFormat(lang, {day: '2-digit', month: '2-digit', year: 'numeric'}).format(
    date
  )
}

function isAfter(date: Date, dateToCompare: Date): boolean {
  return date.getTime() >= dateToCompare.getTime()
}

function isEqual(date: Date, dateToCompare: Date): boolean {
  return date.getTime() === dateToCompare.getTime()
}

export function compareDates({
  lang,
  publishFrom,
  publishedFromLabel,
  professionallyUpdated,
  professionallyUpdatedLabel
}: CompareDates): {date: string; iso?: string; label?: string} | null {
  const publishFromDate = publishFrom ? new Date(publishFrom) : null
  const professionallyUpdatedDate = professionallyUpdated ? new Date(professionallyUpdated) : null
  if (!!publishFromDate && !!professionallyUpdatedDate) {
    return isAfter(publishFromDate, professionallyUpdatedDate) ||
      isEqual(publishFromDate, professionallyUpdatedDate)
      ? {
          date: format(publishFromDate, lang),
          iso: publishFrom,
          label: publishedFromLabel
        }
      : {
          date: format(professionallyUpdatedDate, lang),
          iso: professionallyUpdated,
          label: professionallyUpdatedLabel
        }
  } else if (!!publishFromDate && !professionallyUpdatedDate) {
    return {
      date: format(publishFromDate, lang),
      iso: publishFrom,
      label: publishedFromLabel
    }
  } else if (!publishFromDate && !!professionallyUpdatedDate) {
    return {
      date: format(professionallyUpdatedDate, lang),
      iso: professionallyUpdated,
      label: professionallyUpdatedLabel
    }
  }
  return null
}
