import type {ErrorDetail} from './types'
import isAfter from 'date-fns/isAfter'
import intlFormat from 'date-fns/intlFormat'
import parseISO from 'date-fns/parseISO'

export function createInputAriaDescribedby(name: string, error: ErrorDetail | undefined): string {
  return error ? `${name}-hint ${name}-error` : `${name}-hint`
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
  return intlFormat(date, {day: '2-digit', month: '2-digit', year: 'numeric'}, {locale: lang})
}

export function compareDates({
  lang,
  publishFrom,
  publishedFromLabel,
  professionallyUpdated,
  professionallyUpdatedLabel
}: CompareDates): {date: string; iso?: string; label?: string} | null {
  const publishFromDate = publishFrom ? parseISO(publishFrom) : null
  const professionallyUpdatedDate = professionallyUpdated ? parseISO(professionallyUpdated) : null
  if (!!publishFromDate && !!professionallyUpdatedDate) {
    return isAfter(publishFromDate, professionallyUpdatedDate)
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
