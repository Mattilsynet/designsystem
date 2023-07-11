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
