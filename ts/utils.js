export function createInputAriaDescribedby(name, error, maxlength) {
    let describedBy = '';
    if (name) {
        describedBy = `${name}-hint`;
    }
    if (error) {
        describedBy = `${describedBy} ${name}-error`;
    }
    if (maxlength) {
        describedBy = `${name}-maxlength ${describedBy}`;
    }
    return describedBy !== '' ? describedBy : undefined;
}
export function toKebabCase(text) {
    return text
        .replace(/[^a-zA-Z0-9 ]/g, '')
        .replace(/ /g, '-')
        .toLowerCase();
}
export function displayDataTime(lang, isoDate) {
    if (!isoDate) {
        return '';
    }
    return new Intl.DateTimeFormat(lang, {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    }).format(new Date(isoDate));
}
function format(date, lang) {
    return new Intl.DateTimeFormat(lang, {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    }).format(date);
}
function isAfter(date, dateToCompare) {
    return date.getTime() >= dateToCompare.getTime();
}
function isEqual(date, dateToCompare) {
    return date.getTime() === dateToCompare.getTime();
}
export function compareDates({ lang, publishFrom, publishedFromLabel, professionallyUpdated, professionallyUpdatedLabel }) {
    const publishFromDate = publishFrom ? new Date(publishFrom) : null;
    const professionallyUpdatedDate = professionallyUpdated ? new Date(professionallyUpdated) : null;
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
            };
    }
    else if (!!publishFromDate && !professionallyUpdatedDate) {
        return {
            date: format(publishFromDate, lang),
            iso: publishFrom,
            label: publishedFromLabel
        };
    }
    else if (!publishFromDate && !!professionallyUpdatedDate) {
        return {
            date: format(professionallyUpdatedDate, lang),
            iso: professionallyUpdated,
            label: professionallyUpdatedLabel
        };
    }
    return null;
}
export function getFileExtension(fileName) {
    if (!fileName) {
        return null;
    }
    const lastDotIndex = fileName.lastIndexOf('.');
    return lastDotIndex !== -1 ? fileName.substring(lastDotIndex + 1).toUpperCase() : null;
}
export function mapRelExternal(url) {
    return url?.startsWith('http') ? 'external' : undefined;
}
/*
 * Params:
 * string: eg. '{0}, {1} of {2}'
 * replacer: eg. ['Test, '2', '4']
 */
export function interpolate(string, replacers) {
    return replacers.reduce((acc, curr, index) => {
        return acc.replace(`{${index}}`, curr);
    }, string);
}
