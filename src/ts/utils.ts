import type {ErrorDetail} from './types';

export function createInputAriaDescribedby(name: string, error: ErrorDetail | undefined): string {
  return error ? `${name}-hint ${name}-error` : `${name}-hint`;
}

export function toKebabCase(text: string): string {
  return text
    .replace(/[^a-zA-Z0-9 ]/g, '')
    .replace(/ /g, '-')
    .toLowerCase();
}
