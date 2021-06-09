import {createElementWithContent, replaceInnerHTMLWith, toggleAriaExpanded} from './dom-utils';

interface ActionResponse {
  destroy?: () => void;
  update?: () => void;
}

export function collapsible(el: Element, {id, abort}: {id: boolean; abort: boolean}): ActionResponse | void {
  if (abort) {
    return;
  }
  const panelId = `collapsible-panel-${id}`;
  const headerEl = el.querySelector('.collapsible-header');
  const panelEl: HTMLElement | null = el.querySelector('.collapsible-panel');

  if (headerEl && panelEl) {
    const buttonEl = getButtonEl(headerEl);
    replaceInnerHTMLWith(headerEl, buttonEl);
    moveHeaderClassToButton(headerEl, buttonEl);
    updatePanelMarkup(panelEl, panelId);
    updateButtonMarkup(buttonEl, panelId);

    const handleClick = () => toggleCollapsible(buttonEl, panelEl);
    buttonEl.addEventListener('click', handleClick);

    return {
      destroy() {
        buttonEl.removeEventListener('click', handleClick);
      }
    };
  }
}

function getButtonEl(headerEl: Element): Element {
  const buttonEl = headerEl.querySelector('button');

  return buttonEl || createElementWithContent('button', headerEl.innerHTML);
}

function moveHeaderClassToButton(headerEl: Element, buttonEl: Element) {
  headerEl.classList.remove('collapsible-header');
  buttonEl.classList.add('collapsible-header');
}

function updateButtonMarkup(buttonEl: Element, panelId: string) {
  buttonEl.setAttribute('aria-expanded', 'false');
  buttonEl.setAttribute('aria-controls', panelId);
}

function updatePanelMarkup(el: HTMLElement, panelId: string) {
  el.id = panelId;
  initCollapsedElement(el);
}

export function toggleCollapsible(buttonEl: Element, panelEl: HTMLElement) {
  const show = buttonEl.getAttribute('aria-expanded') === 'false'; // ensure that aria-expanded="" is good

  toggleAriaExpanded(show, buttonEl);

  if (show) {
    expandSection(panelEl);
  } else {
    collapseSection(panelEl);
  }
}

export function initCollapsedElement(el: HTMLElement) {
  el.style.height = '0';
  el.classList.add('hidden');
}

export function collapseSection(element: HTMLElement) {
  const sectionHeight = element.scrollHeight;

  // temporarily disable all css transitions
  const elementTransition = element.style.transition;
  element.style.transition = '';

  function setHidden() {
    element.removeEventListener('transitionend', setHidden);
    // to prevent tabbing into block when closed
    element.classList.add('hidden');
  }

  requestAnimationFrame(function () {
    element.style.height = `${sectionHeight}px`;
    element.style.transition = elementTransition;
    element.addEventListener('transitionend', setHidden);

    requestAnimationFrame(function () {
      element.style.height = '0';
    });
  });

  element.setAttribute('aria-hidden', 'true');
}

export function expandSection(element: HTMLElement) {
  element.classList.remove('hidden');
  element.style.height = `${element.scrollHeight}px`;

  function removeHeightFromStyle() {
    element.removeEventListener('transitionend', removeHeightFromStyle);
    element.style.height = (null as unknown) as string;
  }

  element.addEventListener('transitionend', removeHeightFromStyle);
  element.setAttribute('aria-hidden', 'false');
}
