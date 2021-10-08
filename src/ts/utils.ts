import {UIError} from './types';

export function createInputAriaDescribedby(name: string, error: UIError | undefined): string {
  return error ? `${name}-hint ${name}-error` : `${name}-hint`;
}
