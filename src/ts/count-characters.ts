import type {Action} from './types'

export const countCharacters: Action<HTMLInputElement | HTMLTextAreaElement> = (
  node,
  params: {countCharactersLeftLabel: string} = {countCharactersLeftLabel: 'tegn igjen'}
) => {
  const counterEl = document.createElement('div')
  counterEl.classList.add('self-end')
  counterEl.classList.add('text-small')

  function updateCounter() {
    counterEl.innerText = `${node.maxLength - node.value.length} ${params.countCharactersLeftLabel}`
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
