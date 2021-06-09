export function createElementWithContent(type: string, content: string): Element {
  const el = document.createElement(type);
  el.innerHTML = content;
  return el;
}

export function replaceInnerHTMLWith(el: Element, child: Element) {
  el.innerHTML = '';
  el.appendChild(child);
}

export function toggleClass(cls: string, shouldApplyClass: boolean, el: Element) {
  el.classList[shouldApplyClass ? 'add' : 'remove'](cls);
}

export function isExpanded(el: Element): boolean {
  return el.getAttribute('aria-expanded') === 'true';
}

export function toggleAriaExpanded(show: boolean, el: Element) {
  el.setAttribute('aria-expanded', show.toString());
}

export function toggleHidden(isHidden: boolean, el: Element) {
  if (isHidden) {
    el.setAttribute('hidden', '');
  } else {
    el.removeAttribute('hidden');
  }
}

export function toggleAttribute(attr: string, show: boolean, el: Element) {
  el.setAttribute(attr, show.toString());
}

export function toggleTabIndex(el: Element, hasTabIndex: boolean) {
  if (hasTabIndex) {
    el.setAttribute('tabindex', '0');
  } else {
    el.removeAttribute('tabindex');
  }
}

export function onAriaExpandedChange(buttonEl: Element, callback: (isExpanded: boolean) => void) {
  const observer = new MutationObserver(mutations => {
    mutations.forEach(function (mutation) {
      if (mutation.attributeName === 'aria-expanded') {
        requestAnimationFrame(() => {
          const isExpanded = buttonEl.getAttribute('aria-expanded') === 'true';
          callback(isExpanded);
        });
      }
    });
  });

  observer.observe(buttonEl, {
    attributes: true
  });
}
