export function wrapInShadowDom(el: HTMLElement, hideCss: false) {
  if (hideCss) {
    const shadow = el.attachShadow({
      mode: 'open'
    });

    Array.from(el.children).forEach(node => shadow.appendChild(node));
  }
}
