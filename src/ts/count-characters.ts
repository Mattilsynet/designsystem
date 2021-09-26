import type {Action} from './types';

export const countCharacters: Action<HTMLInputElement | HTMLTextAreaElement> = node => {
  const counterEl = document.createElement('div');
  counterEl.classList.add('self-end');

  function updateCounter() {
    counterEl.innerText = `${node.maxLength - node.value.length} tegn igjen`;
  }

  if (node.hasAttribute('maxlength')) {
    updateCounter();
    node.after(counterEl);
    node.addEventListener('input', updateCounter);

    return {
      destroy() {
        node.removeEventListener('input', updateCounter);
      }
    };
  }

  return;
};
