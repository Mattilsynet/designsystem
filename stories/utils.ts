import {UIError} from '../src/ts/types';

export function wrapInShadowDom(el: HTMLElement, hideCss: false) {
  if (hideCss) {
    const shadow = el.attachShadow({
      mode: 'open'
    });

    Array.from(el.children).forEach(node => shadow.appendChild(node));
  }
}

export function splitIntoParagraphs(str: string) {
  return str
    .split('\n')
    .map(str => `<p>${str}</p>`)
    .join('');
}

export function createInputAriaDescribedby(name: string, error: UIError | undefined): string {
  return error ? `${name}-hint ${name}-error` : `${name}-hint`;
}
