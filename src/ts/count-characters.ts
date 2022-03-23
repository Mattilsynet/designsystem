import type {Action} from './types'

export const countCharacters: Action<HTMLInputElement | HTMLTextAreaElement> = (
  node,
  params: {countCharactersLeftLabel: string; id: string} = {
    countCharactersLeftLabel: 'tegn igjen',
    id: ''
  }
) => {
  const charactersLeft = params.countCharactersLeftLabel ?? 'tegn igjen'
  const counterEl = document.createElement('div')
  counterEl.classList.add('self-end')
  counterEl.classList.add('text-small')
  if (params.id) {
    counterEl.setAttribute('id', `${params.id}-maxlength`)
  }

  function updateCounter() {
    const countCharactersLeft = node.maxLength - node.value.length
    counterEl.innerText = `${countCharactersLeft} ${charactersLeft}`
    if (countCharactersLeft <= 0) {
      counterEl.setAttribute('aria-live', 'assertive')
    } else {
      counterEl.setAttribute('aria-live', 'off')
    }
  }

  if (node.hasAttribute('maxlength')) {
    updateCounter()
    node.after(counterEl)
    node.addEventListener('input', updateCounter)
    return {
      destroy() {
        node.removeEventListener('input', updateCounter)
      }
    }
  }

  return
}
