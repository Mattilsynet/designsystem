import type { ErrorDetail } from './types'

export function createInputAriaDescribedby(
  name: string | undefined,
  error: ErrorDetail | undefined,
  maxlength: number | undefined
): string | undefined {
  let describedBy = ''
  if (name) {
    describedBy = `${name}-hint`
  }
  if (error) {
    describedBy = `${describedBy} ${name}-error`
  }
  if (maxlength) {
    describedBy = `${name}-maxlength ${describedBy}`
  }
  return describedBy !== '' ? describedBy : undefined
}

export function toKebabCase(text: string): string {
  return text
    .replace(/[^a-zA-Z0-9 ]/g, '')
    .replace(/ /g, '-')
    .toLowerCase()
}

export function displayDataTime(lang: string, isoDate?: string): string {
  if (!isoDate) {
    return ''
  }

  return new Intl.DateTimeFormat(lang, {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  }).format(new Date(isoDate))
}

interface CompareDates {
  lang: string
  publishFrom?: string
  publishedFromLabel: string
  professionallyUpdated?: string
  professionallyUpdatedLabel: string
}

function format(date: Date, lang: string) {
  return new Intl.DateTimeFormat(lang, {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  }).format(date)
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
}: CompareDates): { date: string; iso?: string; label?: string } | null {
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
export function addDays(date: Date, days: number): Date {
  const newDate = new Date(date)
  newDate.setDate(newDate.getDate() + days)
  return newDate
}
export function longMonthDate(format: DateTimeFormat, date: Date): string {
  return new Intl.DateTimeFormat(format, {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(date)
}
export function getFileExtension(fileName?: string): string | null {
  if (!fileName) {
    return null
  }
  const lastDotIndex = fileName.lastIndexOf('.')
  return lastDotIndex !== -1 ? fileName.substring(lastDotIndex + 1).toUpperCase() : null
}

export function mapRelExternal(url?: string): 'external' | undefined {
  return url?.startsWith('http') ? 'external' : undefined
}

export function isExternalLink(href: string): boolean {
  const HOST = 'mattilsynet.no'
  if (href.startsWith('http') && new URL(href) instanceof URL) {
    return !href.split('//')[1].includes(HOST)
  }
  return false
}

/*
 * Params:
 * string: eg. '{0}, {1} of {2}'
 * replacer: eg. ['Test, '2', '4']
 */
export function interpolate(string: string, replacers: string[]): string {
  return replacers.reduce((acc, curr, index) => {
    return acc.replace(`{${index}}`, curr)
  }, string)
}

export function prefersReducedMotion(): boolean {
  return (
    window &&
    (window.matchMedia(`(prefers-reduced-motion: reduce)`) === true ||
      window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true)
  )
}

export function isMobileOrTablet(): boolean {
  const agent = navigator.userAgent || navigator.vendor || window.opera
  const b = detectMobileOrTablet(agent)
  return b || isIOs()
}

function isIOs(): boolean {
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent)
  const isAppleDevice = navigator.userAgent.includes('Macintosh')
  const isTouchScreen = navigator.maxTouchPoints >= 1

  return isIOS || (isAppleDevice && isTouchScreen)
}

export function detectMobileOrTablet(agent: string): boolean {
  const regexMobileTablet =
    /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
      agent
    ) ||
    /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
      agent.substr(0, 4)
    )
  if (regexMobileTablet) {
    return true
  }
  return false
}
